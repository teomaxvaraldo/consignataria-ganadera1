# Script para eliminar emojis y reemplazar tipografia
# Procesar index.html
$html = Get-Content -Path "index.html" -Encoding UTF8 -Raw

# Reemplazar emojis en badges de capacidades (mini badges hero)
$html = $html -replace '⚡', '—'
$html = $html -replace '⚖️', '—'
$html = $html -replace '💰', '—'
$html = $html -replace '📲', '—'
$html = $html -replace '🐂', '—'
$html = $html -replace '💳', '—'
$html = $html -replace '👥', '—'
$html = $html -replace '💾', '—'
$html = $html -replace '👁️', '—'
$html = $html -replace '⚠️', '—'
$html = $html -replace '🔑', ''
$html = $html -replace '🏢', ''
$html = $html -replace '💡', ''
$html = $html -replace '📄', '—'
$html = $html -replace '📤', '—'
$html = $html -replace '🗑️', 'X'
$html = $html -replace '➕', '+'
$html = $html -replace '📥', '—'
$html = $html -replace '📊', '—'
$html = $html -replace '🔄', '—'
$html = $html -replace '🖨️', '—'
$html = $html -replace '🥩', '—'
$html = $html -replace '🌾', '—'
$html = $html -replace '🏛️', '—'
$html = $html -replace '🏆', '—'
$html = $html -replace '➔', [char]0x2192  # flecha derecha unicode →
$html = $html -replace '⇄', '—'

# Reemplazar emojis en opciones de select (tipo operacion)
$html = $html -replace '🌾 Invernada', 'Invernada'
$html = $html -replace '🥩 Faena', 'Faena'
$html = $html -replace '🐂 Cría / Reproducción', 'Cría / Reproducción'
$html = $html -replace '🌾 Invernada', 'Invernada'

# Limpiar doble dash que pudo quedar
$html = $html -replace '— —', '—'

# Cambiar tipografia: Plus Jakarta Sans -> IBM Plex Sans (mas seria/corporativa)
$html = $html -replace 'Plus\+Jakarta\+Sans:wght@300;400;500;600;700;800', 'IBM+Plex+Sans:wght@300;400;500;600;700'
$html = $html -replace "family=Plus\+Jakarta\+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400", "family=IBM+Plex+Sans:wght@300;400;500;600;700"

Set-Content -Path "index.html" -Value $html -Encoding UTF8 -NoNewline

Write-Host "index.html procesado."

# Procesar styles.css 
$css = Get-Content -Path "styles.css" -Encoding UTF8 -Raw

# Cambiar tipografia en CSS
$css = $css -replace "family=Plus\+Jakarta\+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400", "family=IBM+Plex+Sans:wght@300;400;500;600;700"
$css = $css -replace "'Plus Jakarta Sans'", "'IBM Plex Sans'"

Set-Content -Path "styles.css" -Value $css -Encoding UTF8 -NoNewline

Write-Host "styles.css procesado."

# Procesar app.js
$js = Get-Content -Path "app.js" -Encoding UTF8 -Raw

# Reemplazar emojis en showToast y console.log
$js = $js -replace '🔑', ''
$js = $js -replace '❌', ''
$js = $js -replace '🏢', ''
$js = $js -replace '🎉', ''
$js = $js -replace '⚠️', ''
$js = $js -replace '🔒', ''
$js = $js -replace '🔥', '[Firestore]'
$js = $js -replace '💾', '[Local]'
$js = $js -replace '📲', ''
$js = $js -replace '💡', ''
$js = $js -replace '🌾', ''
$js = $js -replace '🥩', ''
$js = $js -replace '🐂', ''
$js = $js -replace '📄', ''
$js = $js -replace '📤', ''
$js = $js -replace '🗑️', ''
$js = $js -replace '➕', '+'
$js = $js -replace '📥', ''
$js = $js -replace '📊', ''
$js = $js -replace '🔄', ''
$js = $js -replace '🖨️', ''
$js = $js -replace '🏛️', ''
$js = $js -replace '🏆', ''
$js = $js -replace '💳', ''
$js = $js -replace '👥', ''
$js = $js -replace '👁️', ''
$js = $js -replace '⚖️', ''
$js = $js -replace '💰', ''
$js = $js -replace '⚡', ''
$js = $js -replace '➔', [char]0x2192
$js = $js -replace '⇄', ''
$js = $js -replace '✓', 'OK'

# Limpiar "showToast(..., '')" - quitar emojis vacios de segundo parametro
# Patron: , '') al final del showToast  
$js = $js -replace "showToast\(([^,]+),\s*''\)", 'showToast($1)'

Set-Content -Path "app.js" -Value $js -Encoding UTF8 -NoNewline

Write-Host "app.js procesado."
Write-Host "Listo! Emojis eliminados y tipografia cambiada a IBM Plex Sans."
