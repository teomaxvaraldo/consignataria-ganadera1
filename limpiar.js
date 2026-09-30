const fs = require('fs');

// ==== PROCESS index.html ====
let html = fs.readFileSync('index.html', 'utf8');

// Replace emojis with SVG icons or simple text dashes
const htmlReplacements = [
  // Feature icon wrappers - replace emoji with SVG inline icons
  // Module 1: 🐂 -> SVG cattle icon
  [/🐂/g, '<svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 7h18M3 12h18M3 17h18"/></svg>'],
  // Module 2: ⚖️ -> SVG balance icon  
  [/⚖️/g, '<svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 6l3 12h12l3-12M12 3v3M6 6l-3 0M18 6l3 0"/></svg>'],
  // Module 3: 💳 -> SVG card icon
  [/💳/g, '<svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2" stroke-width="1.8"/><path stroke-width="1.8" d="M2 10h20"/></svg>'],
  // Module 4: 👥 -> SVG users icon
  [/👥/g, '<svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>'],
  
  // Hero mini-badges: replace emoji spans with dot indicators
  [/<span class="text-emerald-400 font-bold">⚡<\/span>/g, '<span class="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>'],
  [/<span class="text-emerald-400 font-bold">💰<\/span>/g, '<span class="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>'],
  
  // Auth tabs - remove emojis, keep text only
  [/🔑 /g, ''],
  [/🏢 /g, ''],
  
  // Error/warning icons - replace with SVG
  [/<span class="text-rose-400 text-sm">⚠️<\/span>/g, '<svg class="w-4 h-4 text-rose-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z"/></svg>'],
  
  // Demo accounts hint
  [/<span>💡<\/span> /g, ''],
  
  // Form action buttons - replace emoji with SVG icons
  [/<span>📲<\/span>/g, '<svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>'],
  [/<span>👁️<\/span>/g, '<svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>'],
  [/<span>💾<\/span>/g, '<svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"/></svg>'],
  
  // Select options - remove emojis from text
  [/🌾 Invernada/g, 'Invernada'],
  [/🥩 Faena/g, 'Faena'],
  [/🐂 Cría \/ Reproducción/g, 'Cría / Reproducción'],
  
  // Badge tipo resumen
  [/🌾 /g, ''],
  
  // Document section icons
  [/<span class="text-lg">📄<\/span>/g, '<svg class="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>'],
  [/<span class="text-lg">⚖️<\/span>/g, '<svg class="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 6l3 12h12l3-12M12 3v3"/></svg>'],
  
  // Upload zone icons
  [/<div class="text-2xl mb-1">📤<\/div>/g, '<div class="mb-1"><svg class="w-7 h-7 mx-auto text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg></div>'],
  
  // File preview icons
  [/<span class="text-2xl" id="dte-file-icon">📄<\/span>/g, '<svg class="w-6 h-6 text-blue-600" id="dte-file-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>'],
  [/<span class="text-2xl" id="romaneo-file-icon">⚖️<\/span>/g, '<svg class="w-6 h-6 text-emerald-600" id="romaneo-file-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 6l3 12h12l3-12M12 3v3"/></svg>'],
  
  // File action buttons
  [/👁️ Ver/g, 'Ver'],
  [/🗑️/g, 'Eliminar'],
  
  // Vencimientos icons
  [/<span>📥<\/span>/g, '<svg class="w-4 h-4 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>'],
  [/<span>📤<\/span>/g, '<svg class="w-4 h-4 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>'],
  
  // Liquidacion section
  [/<span class="text-2xl">📊<\/span>/g, '<svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>'],
  [/<span>🔄<\/span>/g, '<svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>'],
  [/<span>🖨️<\/span>/g, '<svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>'],
  
  // KPI card emojis in liquidacion
  [/<span>🥩<\/span>/g, ''],
  [/<span>🌾<\/span>/g, ''],
  [/<span>🏛️<\/span>/g, ''],
  [/<span>🏆<\/span>/g, ''],
  
  // Liquidacion panel header
  [/<span class="text-xl">🌾<\/span>/g, ''],
  [/<span class="text-xl">🥩<\/span>/g, ''],
  
  // View doc buttons
  [/>👁️<\/button>/g, '><svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg></button>'],
  
  // Arrow icons
  [/➔/g, '\u2192'],
  [/➕/g, '+'],
  [/⇄/g, '\u2194'],
  
  // "Cambiar Cuenta ⇄" text
  [/Cambiar Cuenta \u2194/g, 'Cambiar Cuenta'],
  
  // Remaining scattered emojis
  [/🏆/g, ''],
  [/🥩/g, ''],
  [/🌾/g, ''],
  [/🏛️/g, ''],
  [/📄/g, ''],
  [/📤/g, ''],
  [/📥/g, ''],
  [/📊/g, ''],
  [/🔄/g, ''],
  [/🖨️/g, ''],
  [/📲/g, ''],
  [/💾/g, ''],
  [/👁️/g, ''],
  [/⚠️/g, ''],
  [/🗑️/g, ''],
  [/💳/g, ''],
  [/👥/g, ''],
  [/⚡/g, ''],
  [/💰/g, ''],
  [/⚖️/g, ''],
  [/🐂/g, ''],
  [/🔑/g, ''],
  [/🏢/g, ''],
  [/💡/g, ''],
  [/🔒/g, ''],
  [/❌/g, ''],
  [/🎉/g, ''],
  [/🔥/g, ''],
  [/✓/g, 'OK'],
];

for (const [pattern, replacement] of htmlReplacements) {
  html = html.replace(pattern, replacement);
}

// Change font: Plus Jakarta Sans -> IBM Plex Sans
html = html.replace(/Plus\+Jakarta\+Sans:wght@300;400;500;600;700;800/g, 'IBM+Plex+Sans:wght@300;400;500;600;700');
html = html.replace(/family=Plus\+Jakarta\+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400/g, 'family=IBM+Plex+Sans:wght@300;400;500;600;700');

fs.writeFileSync('index.html', html, 'utf8');
console.log('index.html procesado.');

// ==== PROCESS styles.css ====
let css = fs.readFileSync('styles.css', 'utf8');
css = css.replace(/family=Plus\+Jakarta\+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400/g, 'family=IBM+Plex+Sans:wght@300;400;500;600;700');
css = css.replace(/'Plus Jakarta Sans'/g, "'IBM Plex Sans'");
fs.writeFileSync('styles.css', css, 'utf8');
console.log('styles.css procesado.');

// ==== PROCESS app.js ====
let js = fs.readFileSync('app.js', 'utf8');

const jsReplacements = [
  [/🔑/g, ''],
  [/❌/g, ''],
  [/🏢/g, ''],
  [/🎉/g, ''],
  [/⚠️/g, ''],
  [/🔒/g, ''],
  [/🔥/g, ''],
  [/💾/g, ''],
  [/📲/g, ''],
  [/💡/g, ''],
  [/🌾/g, ''],
  [/🥩/g, ''],
  [/🐂/g, ''],
  [/📄/g, ''],
  [/📤/g, ''],
  [/🗑️/g, ''],
  [/➕/g, '+'],
  [/📥/g, ''],
  [/📊/g, ''],
  [/🔄/g, ''],
  [/🖨️/g, ''],
  [/🏛️/g, ''],
  [/🏆/g, ''],
  [/💳/g, ''],
  [/👥/g, ''],
  [/👁️/g, ''],
  [/⚖️/g, ''],
  [/💰/g, ''],
  [/⚡/g, ''],
  [/➔/g, '\u2192'],
  [/⇄/g, ''],
  [/✓/g, 'OK'],
];

for (const [pattern, replacement] of jsReplacements) {
  js = js.replace(pattern, replacement);
}

// Clean up empty emoji parameter in showToast calls: showToast('msg', '') -> showToast('msg')
js = js.replace(/showToast\(([^,]+),\s*''\)/g, 'showToast($1)');

fs.writeFileSync('app.js', js, 'utf8');
console.log('app.js procesado.');

console.log('Listo! Emojis eliminados y tipografia cambiada a IBM Plex Sans.');
