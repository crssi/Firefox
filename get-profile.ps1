# Invoke-Expression ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/crssi/Firefox/master/get-profile.ps1'))

[System.Reflection.Assembly]::LoadWithPartialName("System.Windows.Forms") | Out-Null
if ($PSVersionTable.PSVersion.Major -le 4) { [Windows.Forms.MessageBox]::Show("ERROR:`nPowershell version 4 or greater is needed!", "GITHUB/CRSSI/FIREFOX/PROFILE", [Windows.Forms.MessageBoxButtons]::OK, [Windows.Forms.MessageBoxIcon]::Information) | Out-Null;Exit }

do { Start-Sleep -Milliseconds 1000 } while ((Get-Process -Name 'firefox' -ErrorAction SilentlyContinue | Stop-Process) -ne $null)
do { Start-Sleep -Milliseconds 1000 } while ((Get-Process -Name 'proxsign' -ErrorAction SilentlyContinue | Stop-Process) -ne $null)

try { Compress-Archive -Path "$($env:APPDATA)\Mozilla\Firefox" -DestinationPath "$($env:APPDATA)\Mozilla\Firefox_Profile_Backup-$((Get-Date).ToString('yyyy.MM.dd_HH.mm.ss')).zip" -CompressionLevel Fastest } catch { [Windows.Forms.MessageBox]::Show("ERROR:`nNo active Firefox profile found!", "GITHUB/CRSSI/FIREFOX/PROFILE", [Windows.Forms.MessageBoxButtons]::OK, [Windows.Forms.MessageBoxIcon]::Information) | Out-Null; Exit }

$tmpFolder = "$($env:USERPROFILE)\CRSSI"
Remove-Item -Path $tmpFolder -Recurse -Force -Confirm:$false -ErrorAction SilentlyContinue
New-Item -ItemType Directory -Force -Path $tmpFolder | Out-Null

Import-Module -Name BitsTransfer
try { Start-BitsTransfer -Source https://github.com/crssi/Firefox/raw/master/Profile.zip -Destination $tmpFolder -ErrorAction Stop } catch { Remove-Item -Path $tmpFolder -Recurse -Force -Confirm:$false; [Windows.Forms.MessageBox]::Show("ERROR:`nCheck your Internet connectivity and try again.", "GITHUB/CRSSI/FIREFOX/PROFILE", [Windows.Forms.MessageBoxButtons]::OK, [Windows.Forms.MessageBoxIcon]::Information) | Out-Null; Exit }
Expand-Archive -Path "$tmpFolder\profile.zip" -DestinationPath $tmpFolder
Remove-Item -Path "$tmpFolder\profile.zip" -Force

Get-Content -Path "$tmpFolder\installs.ini" | ForEach-Object { if ($_.StartsWith('Default=Profiles/')) { $tmpProfilePath = "$($env:APPDATA)\Mozilla\Firefox\Profiles\$($_.Replace('Default=Profiles/', ''))" } }
$tmpProfilePath = "$tmpFolder\Profiles\$($tmpProfilePath.split('\')[-1])"
Get-Content -Path "$($env:APPDATA)\Mozilla\Firefox\installs.ini" | ForEach-Object { if ($_.StartsWith('Default=Profiles/')) { $oldProfilePath = "$($env:APPDATA)\Mozilla\Firefox\Profiles\$($_.Replace('Default=Profiles/', ''))" } }

$oldProfileFirefoxVersion = [Int]((Get-Content $oldProfilePath\prefs.js | where { $_ -like "*distribution.iniFile.exists.appversion*" }).Split('"')[3].Split(".")[0])
$newProfileFirefoxVersion = [Int]((Get-Content $tmpProfilePath\prefs.js | where { $_ -like "*distribution.iniFile.exists.appversion*" }).Split('"')[3].Split(".")[0])
if ($newProfileFirefoxVersion -gt $oldProfileFirefoxVersion) { Remove-Item -Path "$tmpFolder" -Recurse -Force -Confirm:$false; [Windows.Forms.MessageBox]::Show("ERROR:`nUpgrade Firefox to latest version and try again!`n`nStart Firefox > ☰ menu > Help > About.", "GITHUB/CRSSI/FIREFOX/PROFILE", [Windows.Forms.MessageBoxButtons]::OK, [Windows.Forms.MessageBoxIcon]::Information) | Out-Null; Exit }

Get-Content $oldProfilePath\prefs.js | where { $_ -like "*browser.urlbar.placeholderName*" } | Out-File -FilePath $tmpProfilePath\prefs.js -Append -Encoding utf8
Get-Content $oldProfilePath\prefs.js | where { $_ -like "*network.automatic-ntlm-auth.trusted-uris*" } | Out-File -FilePath $tmpProfilePath\prefs.js -Append -Encoding utf8
Get-Content $oldProfilePath\prefs.js | where { $_ -like "*network.negotiate-auth.trusted-uris*" } | Out-File -FilePath $tmpProfilePath\prefs.js -Append -Encoding utf8
Get-Content $oldProfilePath\prefs.js | where { $_ -like "*network.trr.mode*" } | Out-File -FilePath $tmpProfilePath\prefs.js -Append -Encoding utf8
Get-Content $oldProfilePath\prefs.js | where { $_ -like "*network.trr.uri*" } | Out-File -FilePath $tmpProfilePath\prefs.js -Append -Encoding utf8
Get-Content $oldProfilePath\prefs.js | where { $_ -like "*privacy.resistFingerprinting.letterboxing" } | Out-File -FilePath $tmpProfilePath\prefs.js -Append -Encoding utf8
Get-Content $oldProfilePath\prefs.js | where { $_ -like "*services.sync.username*" } | Out-File -FilePath $tmpProfilePath\prefs.js -Append -Encoding utf8

 @('cert9.db','content-prefs.sqlite','favicons.sqlite','handlers.json','key4.db','logins.json','permissions.sqlite','persdict.dat','pkcs11.txt','places.sqlite') | ForEach-Object { Copy-Item -Path "$oldProfilePath\$_" -Destination "$tmpProfilePath\$_" -Force -ErrorAction SilentlyContinue }

forEach ($file in @('extensions.json','compatibility.ini','addonStartup.json')) {
    $content = Get-Content -Encoding UTF8 -Path $tmpProfilePath\$file
    $content = $content.Replace('%appdata%/',"$($env:APPDATA.Replace('\','/').Replace(' ','%20'))/")
    $content = $content.Replace('%appdata%\\',"$($env:APPDATA.Replace('\','\\'))\\")
    $content = $content.Replace('%programfiles%/',"$($env:ProgramFiles.Replace('\','/').Replace(' ','%20'))/")
    $content = $content.Replace('%programfiles%\\',"$($env:ProgramFiles.Replace('\','\\'))\\")
    $content = $content.Replace('%programfiles%\',"$($env:ProgramFiles)\")
    [System.IO.File]::WriteAllLines("$tmpProfilePath\$file", $content, $(New-Object System.Text.UTF8Encoding $False))
}

& "$tmpProfilePath\jsonlz4.exe" @("$tmpProfilePath\addonStartup.json","$tmpProfilePath\addonStartup.json.lz4")
Start-Sleep -Milliseconds 1000
#Remove-Item -Path "$tmpProfilePath\addonStartup.json" -Force
#Remove-Item -Path "$tmpProfilePath\jsonlz4.exe" -Force

Remove-Item -Path "$($env:APPDATA)\Mozilla\Firefox" -Recurse -Force -Confirm:$false
Move-Item -Path "$tmpFolder" -Destination "$($env:APPDATA)\Mozilla\Firefox" -Force
Remove-Item -Path $tmpFolder -Recurse -Force -Confirm:$false -ErrorAction SilentlyContinue

Start-Process -FilePath 'firefox.exe'

Exit
