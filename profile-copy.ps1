# Invoke-Expression ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/crssi/Firefox/master/profile-copy.ps1'))

if ($PSVersionTable.PSVersion.Major -le 4) { Exit }

do { Start-Sleep -Milliseconds 500 } while ((Get-Process -Name 'firefox' -ErrorAction SilentlyContinue | Stop-Process) -ne $null)

Remove-Item -Path ($tmpFile = New-TemporaryFile)
$tmpFolder = New-Item -Path $tmpFile.DirectoryName -Name $tmpFile.Name -ItemType 'directory'
Remove-Variable -Name tmpFile

Import-Module -Name BitsTransfer
try { Start-BitsTransfer -Source https://github.com/crssi/Firefox/raw/master/profile.zip -Destination $tmpFolder } catch { Exit }

$timestamp = (Get-Date).ToString('yyyy.MM.dd_HH.mm.ss')
try { Compress-Archive -Path "$($env:APPDATA)\Mozilla\Firefox\*" -DestinationPath "$($env:APPDATA)\Mozilla\Firefox_Profile_Backup-$timestamp.zip" -CompressionLevel Fastest } catch { Remove-Item -Path $tmpFolder -Recurse -Force; Exit }

Expand-Archive -Path "$tmpFolder\profile.zip" -DestinationPath $tmpFolder
Remove-Item -Path "$tmpFolder\profile.zip" -Force

Get-Content -Path "$tmpFolder\installs.ini" | ForEach-Object { if ($_.StartsWith('Default=Profiles/')) { $newProfilePath = "$($env:APPDATA)\Mozilla\Firefox\Profiles\$($_.Replace('Default=Profiles/', ''))" } }
Get-Content -Path "$($env:APPDATA)\Mozilla\Firefox\installs.ini" | ForEach-Object { if ($_.StartsWith('Default=Profiles/')) { $oldProfilePath = "$($env:APPDATA)\Mozilla\Firefox\Profiles\$($_.Replace('Default=Profiles/', ''))" } }
$tmpProfilePath = "$tmpFolder\Profiles\$($newProfilePath.split('\')[-1])"

$userProfileFiles = @('cert9.db','content-prefs.sqlite','favicons.sqlite','handlers.json','key4.db','logins.json','permissions.sqlite','persdict.dat','pkcs11.txt','places.sqlite')
$userProfileFiles | ForEach-Object { Copy-Item -Path "$oldProfilePath\$_" -Destination "$tmpProfilePath\$_" -Force -ErrorAction SilentlyContinue }

Remove-Item -Path "$($env:APPDATA)\Mozilla\Firefox" -Recurse -Force
Move-Item -Path "$tmpFolder" -Destination "$($env:APPDATA)\Mozilla\Firefox" -Force

$Utf8NoBomEncoding = New-Object System.Text.UTF8Encoding $False
$files = @('extensions.json','pkcs11.txt','compatibility.ini','pluginreg.dat')
forEach ($file in $files) {
    $data = Get-Content -Encoding UTF8 -Path $newProfilePath\$file
    $data = $data.Replace('%appdata%/',"$($env:APPDATA.Replace('\','/').Replace(' ','%20'))/")
    $data = $data.Replace('%appdata%\\',"$($env:APPDATA.Replace('\','\\'))\\")
    $data = $data.Replace('%programfiles%/',"$($env:ProgramFiles.Replace('\','/').Replace(' ','%20'))/")
    $data = $data.Replace('%programfiles%\\',"$($env:ProgramFiles.Replace('\','\\'))\\")
    $data = $data.Replace('%programfiles%\',"$($env:ProgramFiles)\")
    [System.IO.File]::WriteAllLines("$newProfilePath\$file", $data, $Utf8NoBomEncoding)
}

Remove-Variable -Name tmpFolder,oldProfilePath,newProfilePath,tmpProfilePath,Utf8NoBomEncoding,files,file,data

Start-Process -FilePath 'firefox.exe'
$firefoxApp = New-Object -ComObject wscript.shell
do { Start-Sleep -Milliseconds 500 } while ($firefoxApp.AppActivate('Firefox') -eq $false)
Start-Sleep -Milliseconds 2000
do { Start-Sleep -Milliseconds 500 } while ((Get-Process -Name 'Firefox' -ErrorAction SilentlyContinue | Stop-Process) -ne $null)
Start-Sleep -Milliseconds 2000
Start-Process -FilePath 'firefox.exe'
