# 🐂 AgroGestión - Sistema para Consignatarias de Hacienda

Aplicación web diseñada específicamente para consignatarias y comisionistas de hacienda ganadera (ej. **FCO Agroganadera SRL**), diseñada para reemplazar las planillas de cálculo de **Resumen, Venta y Compra** por un flujo ágil, seguro y automatizado.

---

## 🚀 ¿Cómo abrir la aplicación?

No requiere instalar ningún programa ni servidor complejo. Podés usarla de dos formas:

1. **Directamente en tu navegador:**
   - Hacé doble clic en el archivo [`index.html`](file:///C:/Users/teoma/.gemini/antigravity/scratch/consignataria-ganadera/index.html) desde el Explorador de Archivos de Windows.
   - O abrí Google Chrome / Microsoft Edge y arrastrá el archivo `index.html`.

2. **Como espacio de trabajo:**
   - Te recomendamos establecer esta carpeta (`C:\Users\teoma\.gemini\antigravity\scratch\consignataria-ganadera`) como tu espacio de trabajo activo.

---

## ✨ Módulos y Funcionalidades Principales

### 1. 📂 Tablero de Negocios Ganaderos
* Muestra el resumen del mes: **Volumen Total Operado ($)**, **Kilos Totales**, **Cantidad de Cabezas**, **Comisiones Brutas** y el **Margen Neto (I.D - C.D)**.
* Buscador instantáneo por N° de negocio (`#3423`), vendedor, comprador o tipo de hacienda.
* Filtro por estado: *Pendiente Facturar*, *Facturado*, *Cobrado / Liquidado*.
* Exportación directa a **CSV / Excel** con un solo clic.

### 2. ⚡ Creador / Editor de Operaciones
* **Asignación automática** del siguiente número de operación correlativo.
* **Tipo de Operación / Destino:** Clasificación inmediata entre 🌾 **Invernada**, 🥩 **Faena** o 🐂 **Cría / Reproducción**.
* **Autocompletado de partes** (Vendedor, Comprador, Representante / A Cargo De) desde el directorio de clientes.
* **Detalle de Hacienda:** Ingreso de cabezas, kilos y precio por kilo. Calcula automáticamente el peso promedio por cabeza y el total de la hacienda.
* **Calculadora de Vencimientos Automática:**
  - Ingresás los días de plazo para Venta (ej. 30 y 60 días) y Compra (ej. 35 y 65 días).
  - La app calcula automáticamente el día de la semana y la fecha de vencimiento calendario.
* **Comisiones:** Permite calcularlas ingresando el porcentaje (`%`) o el importe fijo (`$`).
* **Liquidación Financiera:** Calcula en tiempo real el **Subtotal 1** (Ingresos directos), el **Subtotal 2** (Costos directos / comisiones a terceros) y el **Margen Neto ($ I.D - C.D)**.
* **📄 Documentación Oficial Adjunta (DTE y Romaneo):**
  - Espacio dedicado para ingresar el **N° de DTE (SENASA)** y **N° de Romaneo**.
  - **Carga de archivos PDF o Imágenes (JPG/PNG)** mediante arrastrar y soltar o clic.
  - **Visor interactivo incorporado:** Podés previsualizar el PDF o la foto del DTE/Romaneo en pantalla completa y descargarlo con un clic directamente desde el tablero.

### 3. 📑 Vista Ficha Excel e Impresión
* Replica exactamente el formato de las 3 solapas de tu Excel original:
  - **RESUMEN:** Encabezado con N°, Vendedor, Comprador, A Cargo De, tabla de conceptos, Subtotales 1 y 2, resultado neto y notas de liquidación.
  - **VENTA:** Plazos de cobro, kilos, precio, total hacienda y comisión.
  - **COMPRA:** Plazos de pago, kilos, precio, total hacienda y costos asociados.
* Botón **"Imprimir / PDF"** optimizado para hoja A4 sin barras ni botones molestos.

### 4. 📲 Compartir por WhatsApp
* Genera un mensaje con formato Markdown limpio (con emojis, negritas y orden claro) listo para enviar al productor, comprador o representante.

### 5. 👥 Directorio de Clientes y Productores
* Guarda Razón Social, CUIT, Localidad, Teléfono y condición habitual para no volver a tipear los datos nunca más.

### 6. 📅 Cronograma de Vencimientos
* Separa en dos columnas las cobranzas a compradores y los pagos a vendedores para tener control de cheques y transferencias.

### 7. 📊 Liquidación y Control de Compra / Venta (Conciliación Contable y Ajuste a 0)
* **Sincronización Total con Negocios:** Todo lo que se carga en la solapa de Negocio o Formulario figura automáticamente en la Liquidación sin necesidad de volver a tipear.
* **Doble Panel Comparativo en Vivo:**
  - **Liquidación de Compra (Productor / Vendedor):** Hacienda bruta, deducción de comisión con su crédito fiscal de IVA, IVA neto liquidado, retención de Ganancias RG 830 (2% deducido mínimo no imponible), comisión a colaboradores/terceros (ej. Miguel Figueroa) y neto bancario final a transferir.
  - **Liquidación de Venta (Frigorífico / Comprador):** Hacienda bruta, adición de comisión con alícuota de IVA (10,5% o 21%), control y entrega, flete y total a facturar.
  - **Ficha de Romaneo y Rendimiento:** Seguimiento de cabezas, kilos pesada, desbaste y rinde al gancho estimado.
* **Auditoría Contable y "Ajuste a Cero":**
  - Comprobación matemática en vivo: `Total Venta - Total Compra = Utilidad Neta Consignataria` (ej. **$1.064.604,44**).
  - Badge de verificación: `✓ AJUSTE A 0 (CUADRADO)`.
* **Cheques Digitales (E-Cheqs) & Financiación:**
  - Planilla de e-cheqs recibidos del frigorífico (con validación de si cubren el 100% de la factura de venta).
  - Calculadora de desfasaje de días con tasa de interés diaria (ej. 0,170% diaria) por diferencia de plazos entre cobro y pago.
* **Guía Oficial de Facturación de Frigoríficos Exportadores:**
  - Tablero de referencia para Swift, Quickfood, Coto, Bernal, Rioplatense, Arrebeef, Azul Natural Beef, Frimsa, Gorina, Frigolar, etc.
  - Muestra comisiones admitidas, alícuotas de IVA comercial (10.5% vs 21%), control y entrega, fletes, emails de contacto y notas operativas.
  - Botón **"⚡ Aplicar"** para auto-configurar la liquidación según las reglas de cada frigorífico.
* **Impresión y WhatsApp:**
  - Emisión de la **Hoja 4 (Liquidación Doble)** en el comprobante imprimible / PDF.
  - Exportación de resumen para WhatsApp estructurado para enviar al productor y al frigorífico.
