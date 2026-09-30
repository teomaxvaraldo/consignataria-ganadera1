Add-Type -AssemblyName System.Drawing

$srcPath = 'C:\Users\teoma\.gemini\antigravity-ide\brain\6db8e978-c682-46c3-840e-9ba48667707a\.user_uploaded\media_1790562153291.png'
$destLogo = 'c:\Users\teoma\.gemini\antigravity\scratch\consignataria-ganadera\logo.png'
$destIcon = 'c:\Users\teoma\.gemini\antigravity\scratch\consignataria-ganadera\logo-icon.png'
$destFavicon = 'c:\Users\teoma\.gemini\antigravity\scratch\consignataria-ganadera\favicon.png'

# 1. Copiar imagen completa como logo.png oficial
[System.IO.File]::Copy($srcPath, $destLogo, $true)

$srcImg = [System.Drawing.Image]::FromFile($srcPath)

# 2. Generar logo-icon.png (300x300) con fondo #1F3527 exacto y emblema centrado sin letras
# Emblema: X de 230 a 432 (ancho 202), Y de 63 a 265 (alto 202)
$cropX = 226
$cropY = 59
$cropW = 210
$cropH = 210

$iconBmp = New-Object System.Drawing.Bitmap(300, 300)
$g = [System.Drawing.Graphics]::FromImage($iconBmp)
$bgColor = [System.Drawing.Color]::FromArgb(31, 53, 39) # #1F3527
$g.Clear($bgColor)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

$srcCropRect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)
# Centrar el recorte de 210x210 en el canvas de 300x300 (dejando margen de 45px)
$destRect = New-Object System.Drawing.Rectangle(35, 35, 230, 230)
$g.DrawImage($srcImg, $destRect, $srcCropRect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()

$iconBmp.Save($destIcon, [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "logo-icon.png generado con exito (emblema limpio y centrado)"

# 3. Generar favicon.png (64x64)
$favBmp = New-Object System.Drawing.Bitmap(64, 64)
$gFav = [System.Drawing.Graphics]::FromImage($favBmp)
$gFav.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gFav.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$gFav.DrawImage($iconBmp, 0, 0, 64, 64)
$gFav.Dispose()
$favBmp.Save($destFavicon, [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "favicon.png generado con exito (64x64)"

$srcImg.Dispose()
$iconBmp.Dispose()
$favBmp.Dispose()
