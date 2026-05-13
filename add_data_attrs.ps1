$path = 'pages\collection.html'
$text = Get-Content $path -Raw
$text = [regex]::Replace($text, '<img class="([^"]*)"', '<img class="$1" data-me="true" data-mom="true"')
Set-Content $path -Value $text -Encoding UTF8
