# =============================================
# AgroGestion Ganadera - Servidor HTTP Local
# Puerto: 8080  |  http://localhost:8080
# Detener: Ctrl + C
# =============================================

$puerto   = 8080
$raiz     = $PSScriptRoot
$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add("http://localhost:$puerto/")
$listener.Start()

$mime = @{
  ".html" = "text/html; charset=utf-8"
  ".htm"  = "text/html; charset=utf-8"
  ".css"  = "text/css; charset=utf-8"
  ".js"   = "application/javascript; charset=utf-8"
  ".json" = "application/json; charset=utf-8"
  ".png"  = "image/png"
  ".jpg"  = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".gif"  = "image/gif"
  ".svg"  = "image/svg+xml"
  ".ico"  = "image/x-icon"
  ".pdf"  = "application/pdf"
  ".woff" = "font/woff"
  ".woff2"= "font/woff2"
  ".ttf"  = "font/ttf"
  ".txt"  = "text/plain; charset=utf-8"
}

Write-Host ""
Write-Host "  ==================================================" -ForegroundColor Cyan
Write-Host "   AgroGestion Ganadera - Servidor Local Iniciado" -ForegroundColor Cyan
Write-Host "  ==================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "  URL: " -NoNewline -ForegroundColor Yellow
Write-Host "http://localhost:$puerto/" -ForegroundColor Green
Write-Host "  Directorio: $raiz" -ForegroundColor Gray
Write-Host ""
Write-Host "  Presiona Ctrl+C para detener el servidor." -ForegroundColor DarkGray
Write-Host ""

# Abrir el navegador automáticamente
Start-Sleep -Milliseconds 400
Start-Process "http://localhost:$puerto/"

while ($listener.IsListening) {
  try {
    $ctx  = $listener.GetContext()
    $req  = $ctx.Request
    $resp = $ctx.Response

    # Ruta relativa solicitada
    $urlPath = $req.Url.LocalPath

    # Redirigir "/" a index.html
    if ($urlPath -eq "/" -or $urlPath -eq "") {
      $urlPath = "/index.html"
    }

    # Construir ruta física en disco
    $filePath = Join-Path $raiz ($urlPath.TrimStart('/').Replace('/', '\'))

    if (Test-Path $filePath -PathType Leaf) {
      $ext  = [System.IO.Path]::GetExtension($filePath).ToLower()
      $ct   = if ($mime.ContainsKey($ext)) { $mime[$ext] } else { "application/octet-stream" }
      $data = [System.IO.File]::ReadAllBytes($filePath)

      $resp.ContentType   = $ct
      $resp.ContentLength64 = $data.Length
      $resp.StatusCode    = 200
      $resp.OutputStream.Write($data, 0, $data.Length)

      Write-Host "  200 $urlPath" -ForegroundColor Green
    } else {
      # 404
      $body = [System.Text.Encoding]::UTF8.GetBytes("<h1>404 - Archivo no encontrado</h1><p>$urlPath</p>")
      $resp.ContentType   = "text/html; charset=utf-8"
      $resp.StatusCode    = 404
      $resp.ContentLength64 = $body.Length
      $resp.OutputStream.Write($body, 0, $body.Length)

      Write-Host "  404 $urlPath" -ForegroundColor Red
    }

    $resp.OutputStream.Close()
  } catch {
    # Si el listener se detiene (Ctrl+C), salir limpiamente
    break
  }
}

$listener.Stop()
Write-Host ""
Write-Host "  Servidor detenido." -ForegroundColor DarkGray
