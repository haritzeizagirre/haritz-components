$targetDir = "C:\VSCode\haritz-components"
$artifactsDir = "C:\Users\indeg\.gemini\antigravity-cli\brain\5f517cb9-e800-4395-afa4-011cd509fcff"

# 1. Rename contents in Angular project
$files = Get-ChildItem -Path $targetDir -Recurse -File -Include *.ts, *.html, *.scss, *.json | Where-Object { $_.FullName -notmatch "node_modules|\.git|dist|\.angular" }

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    if ($content -cmatch "lucid" -or $content -cmatch "Lucid" -or $content -cmatch "LUCID") {
        $content = $content -creplace "lucid", "htz"
        $content = $content -creplace "Lucid", "Htz"
        $content = $content -creplace "LUCID", "HTZ"
        Set-Content -Path $file.FullName -Value $content -NoNewline
    }
}

# 2. Rename files in Angular project
# Need to do it in multiple passes or just get files first because renaming affects path.
$renameFiles = Get-ChildItem -Path $targetDir -Recurse -File | Where-Object { $_.FullName -notmatch "node_modules|\.git|dist|\.angular" -and ($_.Name -cmatch "lucid" -or $_.Name -cmatch "Lucid") }

foreach ($file in $renameFiles) {
    $newName = $file.Name -creplace "lucid", "htz"
    $newName = $newName -creplace "Lucid", "Htz"
    Rename-Item -Path $file.FullName -NewName $newName
}

# 3. Rename directory
if (Test-Path "$targetDir\projects\lucid") {
    Rename-Item -Path "$targetDir\projects\lucid" -NewName "htz"
}

# 4. Rename contents in artifacts
$artifacts = Get-ChildItem -Path $artifactsDir -File -Include *.md
foreach ($file in $artifacts) {
    $content = Get-Content $file.FullName -Raw
    if ($content -cmatch "lucid" -or $content -cmatch "Lucid" -or $content -cmatch "LUCID") {
        $content = $content -creplace "lucid", "htz"
        $content = $content -creplace "Lucid", "Htz"
        $content = $content -creplace "LUCID", "HTZ"
        Set-Content -Path $file.FullName -Value $content -NoNewline
    }
}

# Rename lucid-documentation.md to htz-documentation.md
if (Test-Path "$artifactsDir\lucid-documentation.md") {
    Rename-Item -Path "$artifactsDir\lucid-documentation.md" -NewName "htz-documentation.md"
}

Write-Output "Refactoring completed."
