@echo off
title CAMPOGEST - Plataforma Ganadera
color 0A
cls
echo ========================================================
echo   CAMPOGEST - Sistema Integral de Gestion Ganadera
echo ========================================================
echo.
echo   Iniciando el sistema en tu navegador web...
echo.

:: 1. Verificar si el servidor local ya esta respondiendo en el puerto 8080
powershell -NoProfile -Command "try { $r = Invoke-WebRequest -Uri 'http://localhost:8080/index.html' -TimeoutSec 1 -UseBasicParsing; exit 0 } catch { exit 1 }" >nul 2>&1
if %errorlevel% neq 0 (
  echo   [+] Iniciando servidor local CAMPOGEST en segundo plano...
  start /min powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0servidor.ps1"
  ping 127.0.0.1 -n 3 >nul
)

:: 2. Abrir directamente en Microsoft Edge si esta disponible
if exist "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" (
  start "" "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" "http://localhost:8080/"
  goto final
)
if exist "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe" (
  start "" "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe" "http://localhost:8080/"
  goto final
)

:: 3. Abrir en Google Chrome si esta disponible
if exist "%ProgramFiles%\Google\Chrome\Application\chrome.exe" (
  start "" "%ProgramFiles%\Google\Chrome\Application\chrome.exe" "http://localhost:8080/"
  goto final
)
if exist "%LocalAppData%\Google\Chrome\Application\chrome.exe" (
  start "" "%LocalAppData%\Google\Chrome\Application\chrome.exe" "http://localhost:8080/"
  goto final
)

:: 4. Fallback: navegador predeterminado del sistema por URL
start "" "http://localhost:8080/"

:final
echo.
echo   [OK] CAMPOGEST se abrio correctamente en tu navegador!
echo.
echo   Direccion local: http://localhost:8080/
echo.
echo   (Esta ventana se cerrara en unos instantes...)
ping 127.0.0.1 -n 3 >nul
exit
