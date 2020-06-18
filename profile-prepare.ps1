Get-Content -Path "$($env:APPDATA)\Mozilla\Firefox\installs.ini" | ForEach-Object { if ($_.StartsWith('Default=Profiles/')) { $profilePath = "$($env:APPDATA)\Mozilla\Firefox\Profiles\$($_.Replace('Default=Profiles/', ''))" } }
$Utf8NoBomEncoding = New-Object System.Text.UTF8Encoding $False

$files = @('extensions.json','pkcs11.txt','compatibility.ini','pluginreg.dat')
forEach ($file in $files) {
    $data = Get-Content -Encoding UTF8 -Path $profilePath\$file
    $data = $data.Replace($env:APPDATA.Replace('\','/').Replace(' ','%20'),'%appdata%')
    $data = $data.Replace($env:APPDATA.Replace('\','\\'),'%appdata%')
    $data = $data.Replace($env:ProgramFiles.Replace('\','/').Replace(' ','%20'),'%programfiles%')
    $data = $data.Replace($env:ProgramFiles.Replace('\','\\'),'%programfiles%')
    $data = $data.Replace($env:ProgramFiles,'%programfiles%')
    [System.IO.File]::WriteAllLines("$profilePath\$file", $data, $Utf8NoBomEncoding)
}

Get-ChildItem $profilePath\storage\default | where { $_.name -notmatch '\^userContextId' } | Remove-Item -Force
Get-ChildItem $profilePath\addonStartup.json.lz4 | Remove-Item -Force

Compress-Archive -Path "$($env:APPDATA)\Mozilla\Firefox\*" -DestinationPath "$env:UserProfile\Documents\GitHub\Firefox\profile.zip" -CompressionLevel Optimal -Force
