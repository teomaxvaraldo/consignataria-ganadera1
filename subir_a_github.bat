@echo off
title Subir AgroGestion a GitHub
set PATH=C:\Users\teoma\.gemini\antigravity\scratch\bin\git\cmd;%PATH%

echo ========================================================
echo       SUBIR PROYECTO A TU REPOSITORIO DE GITHUB
echo              FCO Agroganadera SRL v1.0
echo ========================================================
echo.
echo 1. Si aun no creaste el repositorio en GitHub:
echo    - Entra a https://github.com/new
echo    - Nombre del repo: consignataria-ganadera
echo    - Dejalo PUBLICO o PRIVADO (sin agregar README ni .gitignore)
echo    - Hace clic en "Create repository"
echo.
echo 2. Pega a continuacion la URL HTTPS de tu repositorio:
set /p REPO_URL="URL de GitHub (ej. https://github.com/tu-usuario/consignataria-ganadera.git): "

if "%REPO_URL%"=="" (
    echo [ERROR] No ingresaste ninguna URL. Operacion cancelada.
    pause
    exit /b
)

echo.
echo Vinculando con %REPO_URL%...
git remote remove origin >nul 2>&1
git remote add origin %REPO_URL%
git branch -M main

echo.
echo Subiendo archivos a GitHub...
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================================
    echo   FELICITACIONES! El codigo ya esta publicado en GitHub.
    echo ========================================================
) else (
    echo.
    echo ========================================================
    echo   Aviso: Si te pidio usuario/contrasena o token de GitHub,
    echo   asegurate de usar tu Personal Access Token (PAT) o
    echo   iniciar sesion en el navegador cuando se abra la ventana.
    echo ========================================================
)

echo.
pause
