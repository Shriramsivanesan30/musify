$lines = [System.IO.File]::ReadAllLines('c:\Users\SriRam\Desktop\bgm hub\index.html')
$line = $lines[83]
Write-Host "Line 84: $line"
$bytes = [System.Text.Encoding]::UTF8.GetBytes($line)
Write-Host "Length: $($bytes.Length)"
Write-Host "Bytes: $($bytes -join ',')"
