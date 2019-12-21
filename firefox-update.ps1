Get-Process -Name 'firefox' -ErrorAction SilentlyContinue | ? { $_.CloseMainWindow() | Out-Null }
do { Start-Sleep -Milliseconds 500 } while ((Get-Process -Name 'firefox' -ErrorAction SilentlyContinue) -ne $null)

$tmpFile = New-TemporaryFile
Remove-Item -Path $tmpFile
$tmpFolder = New-Item -Path $tmpFile.DirectoryName -Name $tmpFile.Name -ItemType 'directory'
Remove-Variable -Name tmpFile

Import-Module -Name BitsTransfer
Start-BitsTransfer -Source https://github.com/crssi/Firefox/raw/master/Profile.zip -Destination $tmpFolder

Expand-Archive -Path "$tmpFolder\Profile.zip" -DestinationPath $tmpFolder

Get-Content -Path "$tmpFolder\Firefox\installs.ini" | ForEach-Object { if ($_.StartsWith('Default=Profiles/')) { $newProfilePath = "$($env:APPDATA)\Mozilla\Firefox\Profiles\$($_.Replace('Default=Profiles/', ''))" } }
Get-Content -Path "$($env:APPDATA)\Mozilla\Firefox\installs.ini" | ForEach-Object { if ($_.StartsWith('Default=Profiles/')) { $oldProfilePath = "$($env:APPDATA)\Mozilla\Firefox\Profiles\$($_.Replace('Default=Profiles/', ''))" } }
$tmpProfilePath = "$tmpFolder\Firefox\Profiles\$($newProfilePath.split('\')[-1])"

$userProfileFiles = @('cert9.db','content-prefs.sqlite','favicons.sqlite','handlers.json','key4.db','logins.json','permissions.sqlite','persdict.dat','pkcs11.txt','places.sqlite')
$userProfileFiles | ForEach-Object { Copy-Item -Path "$oldProfilePath\$_" -Destination "$tmpProfilePath\$_" -Force -ErrorAction SilentlyContinue }

Compress-Archive -Path "$($env:APPDATA)\Mozilla\Firefox\*" -DestinationPath "$($env:APPDATA)\Mozilla\Firefox_Profile_Backup-$((Get-Date).ToString('yyyy.MM.dd_HH.mm.ss')).zip" -CompressionLevel Fastest
Write-Verbose -Message "Backup: $($env:APPDATA)\Mozilla\Firefox_Profile_Backup-$((Get-Date).ToString('yyyy.MM.dd_HH.mm.ss')).zip"

Remove-Item -Path "$($env:APPDATA)\Mozilla\Firefox" -Recurse -Force

Move-Item -Path "$tmpFolder\Firefox" -Destination "$($env:APPDATA)\Mozilla\Firefox" -Force

Remove-Item -Path $tmpFolder -Recurse -Force
Remove-Variable -Name tmpFolder,oldProfilePath,newProfilePath,tmpProfilePath

Start-Process -FilePath 'firefox.exe' -ArgumentList '-safe-mode'

do { Start-Sleep -Milliseconds 500 } while ((Get-Process -Name 'firefox' -ErrorAction SilentlyContinue) -eq $null)
$firefoxSafeModeApp = New-Object -ComObject wscript.shell
$firefoxSafeModeApp.AppActivate('Firefox Safe Mode') | Out-Null
Start-Sleep -Milliseconds 1000
$firefoxSafeModeApp.SendKeys('~')
Remove-Variable -Name firefoxSafeModeApp

Start-Sleep -Milliseconds 1000
Get-Process -Name 'firefox' -ErrorAction SilentlyContinue | ? { $_.CloseMainWindow() | Out-Null }

do { Start-Sleep -Milliseconds 500 } while ((Get-Process -Name 'firefox' -ErrorAction SilentlyContinue) -ne $null)
Start-Process -FilePath 'firefox.exe'
