@echo off
title AgroGestion Ganadera - Servidor Local
color 0A
echo.
echo  =============================================
echo   Iniciando servidor en http://localhost:8080
echo   Cerrá esta ventana para detenerlo.
echo  =============================================
echo.
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0servidor.ps1"
pause
