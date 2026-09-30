@echo off
title CAMPOGEST - Servidor Local
color 0A
echo.
echo  =============================================
echo   Iniciando CAMPOGEST Ganadera...
echo   Se abrira automaticamente en tu navegador.
echo   Cerra esta ventana para detener el servidor.
echo  =============================================
echo.
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0servidor.ps1"
if %errorlevel% neq 0 (
  echo No se pudo iniciar el servidor local, abriendo directamente...
  start "" "%~dp0index.html"
)
pause
