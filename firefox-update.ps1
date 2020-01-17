if ($PSVersionTable.PSVersion.Major -le 4) { Exit }

do { Start-Sleep -Milliseconds 500 } while ((Get-Process -Name 'firefox' -ErrorAction SilentlyContinue | Stop-Process) -ne $null)

Remove-Item -Path ($tmpFile = New-TemporaryFile)
$tmpFolder = New-Item -Path $tmpFile.DirectoryName -Name $tmpFile.Name -ItemType 'directory'
Remove-Variable -Name tmpFile

Import-Module -Name BitsTransfer
try { Start-BitsTransfer -Source https://github.com/crssi/Firefox/raw/master/Profile.zip -Destination $tmpFolder } catch { Exit }

$timestamp = (Get-Date).ToString('yyyy.MM.dd_HH.mm.ss')
try { Compress-Archive -Path "$($env:APPDATA)\Mozilla\Firefox\*" -DestinationPath "$($env:APPDATA)\Mozilla\Firefox_Profile_Backup-$timestamp.zip" -CompressionLevel Fastest } catch { Remove-Item -Path $tmpFolder -Recurse -Force; Exit }

Expand-Archive -Path "$tmpFolder\Profile.zip" -DestinationPath $tmpFolder

Get-Content -Path "$tmpFolder\Firefox\installs.ini" | ForEach-Object { if ($_.StartsWith('Default=Profiles/')) { $newProfilePath = "$($env:APPDATA)\Mozilla\Firefox\Profiles\$($_.Replace('Default=Profiles/', ''))" } }
Get-Content -Path "$($env:APPDATA)\Mozilla\Firefox\installs.ini" | ForEach-Object { if ($_.StartsWith('Default=Profiles/')) { $oldProfilePath = "$($env:APPDATA)\Mozilla\Firefox\Profiles\$($_.Replace('Default=Profiles/', ''))" } }
$tmpProfilePath = "$tmpFolder\Firefox\Profiles\$($newProfilePath.split('\')[-1])"

$userProfileFiles = @('cert9.db','content-prefs.sqlite','favicons.sqlite','handlers.json','key4.db','logins.json','permissions.sqlite','persdict.dat','pkcs11.txt','places.sqlite')
$userProfileFiles | ForEach-Object { Copy-Item -Path "$oldProfilePath\$_" -Destination "$tmpProfilePath\$_" -Force -ErrorAction SilentlyContinue }

Remove-Item -Path "$($env:APPDATA)\Mozilla\Firefox" -Recurse -Force
Move-Item -Path "$tmpFolder\Firefox" -Destination "$($env:APPDATA)\Mozilla\Firefox" -Force
Remove-Item -Path $tmpFolder -Recurse -Force
Remove-Variable -Name tmpFolder,oldProfilePath,newProfilePath,tmpProfilePath

Start-Process -FilePath 'firefox.exe' -ArgumentList '-safe-mode'
$firefoxApp = New-Object -ComObject wscript.shell
do { Start-Sleep -Milliseconds 500 } while ($firefoxApp.AppActivate('Firefox Safe Mode') -eq $false)
$firefoxApp.SendKeys('~')
Remove-Variable -Name firefoxApp

Start-Sleep -Milliseconds 3000

do { Start-Sleep -Milliseconds 500 } while ((Get-Process -Name 'firefox' -ErrorAction SilentlyContinue | Stop-Process) -ne $null)
Start-Process -FilePath 'firefox.exe'
