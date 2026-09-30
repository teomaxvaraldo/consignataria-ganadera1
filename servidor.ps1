# ==================================================
# AgroGestion Ganadera - Servidor HTTP Local Inteligente
# ==================================================

$raiz = $PSScriptRoot
$puertos = @(8080, 8081, 8082, 3000, 5000)
$listener = $null
$puertoActivo = $null

foreach ($p in $puertos) {
  try {
    $tempListener = [System.Net.HttpListener]::new()
    $tempListener.Prefixes.Add("http://localhost:$p/")
    $tempListener.Start()
    $listener = $tempListener
    $puertoActivo = $p
    break
  } catch {
    # Si el puerto está ocupado, verificar si ya está respondiendo el servidor anterior
    try {
      $testResp = Invoke-WebRequest -Uri "http://localhost:$p/index.html" -TimeoutSec 1 -UseBasicParsing -ErrorAction Stop
      if ($testResp.StatusCode -eq 200) {
        Write-Host ""
        Write-Host "  ==================================================" -ForegroundColor Cyan
        Write-Host "   El servidor ya está activo en segundo plano." -ForegroundColor Green
        Write-Host "  ==================================================" -ForegroundColor Cyan
        Write-Host "  URL: http://localhost:$p/" -ForegroundColor Yellow
        Start-Process "http://localhost:$p/"
        Write-Host "  Se abrió el sistema en tu navegador predeterminado." -ForegroundColor White
        Write-Host "  Podés cerrar esta ventana cuando quieras." -ForegroundColor Gray
        exit 0
      }
    } catch {
      # Probar siguiente puerto
    }
  }
}

if (-not $listener) {
  Write-Host "  [AVISO] No se pudo iniciar el servidor local en los puertos habituales." -ForegroundColor Yellow
  Write-Host "  Abriendo index.html directamente en el navegador..." -ForegroundColor White
  Start-Process (Join-Path $raiz "index.html")
  exit 0
}

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
Write-Host "   CAMPOGEST - Servidor Local Iniciado" -ForegroundColor Cyan
Write-Host "  ==================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "  URL: " -NoNewline -ForegroundColor Yellow
Write-Host "http://localhost:$puertoActivo/" -ForegroundColor Green
Write-Host "  Directorio: $raiz" -ForegroundColor Gray
Write-Host ""
Write-Host "  Abriendo en tu navegador predeterminado..." -ForegroundColor White
Write-Host "  Presiona Ctrl+C para detener el servidor." -ForegroundColor DarkGray
Write-Host ""

Start-Sleep -Milliseconds 400
Start-Process "http://localhost:$puertoActivo/"

while ($listener.IsListening) {
  try {
    $ctx  = $listener.GetContext()
    try {
      $req  = $ctx.Request
      $resp = $ctx.Response

      # Ruta relativa solicitada
      $urlPath = $req.Url.LocalPath

      if ($urlPath -eq "/" -or $urlPath -eq "") {
        $urlPath = "/index.html"
      }

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
        $body = [System.Text.Encoding]::UTF8.GetBytes("<h1>404 - Archivo no encontrado</h1><p>$urlPath</p>")
        $resp.ContentType   = "text/html; charset=utf-8"
        $resp.StatusCode    = 404
        $resp.ContentLength64 = $body.Length
        $resp.OutputStream.Write($body, 0, $body.Length)

        Write-Host "  404 $urlPath" -ForegroundColor Red
      }

      $resp.OutputStream.Close()
    } catch {
      # Ignorar errores de conexión cerrada por cliente y continuar sirviendo
    }
  } catch {
    if (-not $listener.IsListening) { break }
    Start-Sleep -Milliseconds 50
  }
}

$listener.Stop()
Write-Host ""
Write-Host "  Servidor detenido." -ForegroundColor DarkGray
