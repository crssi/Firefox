# https://github.com/avih/dejsonlz4
Get-Content -Path "$($env:APPDATA)\Mozilla\Firefox\installs.ini" | ForEach-Object { if ($_.StartsWith('Default=Profiles/')) { $profilePath = "$($env:APPDATA)\Mozilla\Firefox\Profiles\$($_.Replace('Default=Profiles/', ''))" } }

& "$env:UserProfile\Documents\GitHub\Firefox\.Tools\dejsonlz4.exe" @("$profilePath\addonStartup.json.lz4","$profilePath\addonStartup.json")
Copy-Item "$([Environment]::GetFolderPath("MyDocuments"))\GitHub\Firefox\.Tools\jsonlz4.exe" $profilePath -Force

forEach ($file in @('cert9.db','content-prefs.sqlite','favicons.sqlite','handlers.json','key4.db','logins.json','permissions.sqlite','persdict.dat','pkcs11.txt','places.sqlite')) { if (Test-Path -Path $profilePath\$file) { Remove-Item -Path $profilePath\$file -Force -ErrorAction SilentlyContinue } }

forEach ($file in @('extensions.json','compatibility.ini','addonStartup.json')) {
  $content = Get-Content -Encoding UTF8 -Path $profilePath\$file
  $content = $content.Replace($env:APPDATA.Replace('\','/').Replace(' ','%20'),'%appdata%')
  $content = $content.Replace($env:APPDATA.Replace('\','\\'),'%appdata%')
  $content = $content.Replace($env:ProgramFiles.Replace('\','/').Replace(' ','%20'),'%programfiles%')
  $content = $content.Replace($env:ProgramFiles.Replace('\','\\'),'%programfiles%')
  $content = $content.Replace($env:ProgramFiles,'%programfiles%')
  [System.IO.File]::WriteAllLines("$profilePath\$file", $content, $(New-Object System.Text.UTF8Encoding $False))
}

Get-ChildItem $profilePath\storage\default | where { $_.name -notmatch '\^userContextId' } | Remove-Item -Recurse -Force -Confirm:$false
if (Test-Path -Path $profilePath\addonStartup.json.lz4) { Remove-Item -Path $profilePath\addonStartup.json.lz4 -Force }
if (Test-Path -Path $profilePath\pkcs11.txt) { Remove-Item -Path $profilePath\pkcs11.txt -Force }

Compress-Archive -Path "$($env:APPDATA)\Mozilla\Firefox\*" -DestinationPath "$env:UserProfile\Documents\GitHub\Firefox\Profile.zip" -CompressionLevel Optimal -Force
