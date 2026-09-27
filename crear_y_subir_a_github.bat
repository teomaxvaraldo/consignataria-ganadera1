@echo off
title Crear y Subir Repositorio a GitHub
set PATH=C:\Users\teoma\.gemini\antigravity\scratch\bin\gh;C:\Users\teoma\.gemini\antigravity\scratch\bin\git\cmd;%PATH%

echo ========================================================
echo       CREAR Y SUBIR REPOSITORIO AUTOMATICO A GITHUB
echo                AgroGestion Ganadera v1.0
echo ========================================================
echo.
echo Como ya tenes tu sesion iniciada en el navegador:
echo.
echo 1. Ahora se va a abrir GitHub en tu navegador.
echo 2. Copia el codigo de 8 caracteres que veras abajo y
echo    hace clic en "Authorize" en tu navegador.
echo.
pause

echo.
echo Iniciando autorizacion web...
gh auth login -w -p https

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] No se pudo completar la autenticacion.
    pause
    exit /b
)

echo.
echo ========================================================
echo  Autenticado con exito! Creando repositorio en tu GitHub...
echo ========================================================
echo.

cd /d C:\Users\teoma\.gemini\antigravity\scratch\consignataria-ganadera
git remote remove origin >nul 2>&1

gh repo create consignataria-ganadera --public --source=. --remote=origin --push --description "Sistema Integral de Consignacion y Liquidacion Ganadera - FCO Agroganadera"

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================================
    echo   FELICITACIONES!
    echo   Tu repositorio ya esta creado y publicado en tu GitHub.
    echo ========================================================
) else (
    echo.
    echo Si el nombre 'consignataria-ganadera' ya existe, intentando push directo...
    git push -u origin main
)

echo.
pause
