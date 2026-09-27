// Datos iniciales de demostración para FCO Agroganadera SRL
const DATOS_INICIALES_NEGOCIOS = [
  {
    id: 3428,
    fecha: "2026-03-24",
    operador: "TOMI R.",
    vendedor: "EL DESPERTAR SA",
    comprador: "QUICKFOOD",
    acargo: "FCO AGROGANADERA SRL",
    hacienda: {
      tipo: "Faena",
      detalle: "26 VACAS DE FAENA",
      cabezas: 26,
      kilos: 7670,
      precio: 6896.95,
      subtotal: 52899600.00,
      tropaRomaneo: [
        { categoria: "VACA DE FAENA", cabezas: 24, kilos: 7202, precio: 6900.00, subtotal: 49693800.00 },
        { categoria: "VACA DE FAENA", cabezas: 2, kilos: 468, precio: 6850.00, subtotal: 3205800.00 }
      ]
    },
    venta: {
      plazo1: 30,
      plazo2: 30,
      comisionPct: 1.0,
      comisionImp: 528996.00,
      comisionDesc: "COMISIÓN VENTA FCO 1%",
      ivaAlicuota: 10.5,
      ivaHacienda: 5554458.00,
      ivaComision: 55544.58,
      totalVenta: 59038598.14
    },
    compra: {
      plazo1: 30,
      plazo2: 32,
      comisionPct: 1.5,
      comisionImp: 793494.00,
      comisionDesc: "COMISIÓN COMPRA FCO 1,5%",
      ivaAlicuota: 10.5,
      ivaHacienda: 5554458.00,
      ivaComisionDescuento: 83316.87,
      ivaLiquidacion: 5471140.70,
      retIIGG: 1053511.92,
      retIIBB: 0.00,
      comTerceros: 396747.00,
      comTercerosDesc: "Comisión N3428 Miguel Figueroa",
      flete: 0.00,
      otrosGastos: 0.00,
      subtotalLiquidacion: 57577246.70,
      totalCompra: 57973993.70,
      netoProductor: 51052589.99
    },
    resumen: {
      difCompVenta: 0,
      otroIngreso1: 0,
      otroIngreso2: 0,
      subtotal1: 1322490.00,
      costoCom1: 396747.00,
      costoDesc1: "Comisión Miguel Figueroa",
      costoCom2: 0,
      costoDesc2: "",
      costoOtro1: 0,
      costoOtro2: 0,
      subtotal2: 396747.00,
      margenNeto: 1064604.44,
      utilidad: 1064604.44,
      ajusteCero: 0.00,
      instrucciones: "CARGAR A FCO - 4 E-CHEQS QUICKFOOD - CUADRE EXACTO"
    },
    documentos: {
      dte: {
        numero: "0326493104",
        nombre: "DTE_0326493104_ElDespertar_Quickfood.pdf",
        tipo: "application/pdf",
        tamano: "1.4 MB"
      },
      romaneo: {
        numero: "ROM-15340",
        nombre: "Romaneo_Quickfood_7670kg.pdf",
        tipo: "application/pdf",
        tamano: "920 KB"
      }
    },
    echeqs: [
      { nro: "E-10821", monto: 2514863.25, vencimiento: "2026-04-24", dias: 30, emisor: "Quickfood", estado: "Acreditado" },
      { nro: "E-10822", monto: 18841243.56, vencimiento: "2026-04-24", dias: 30, emisor: "Quickfood", estado: "Acreditado" },
      { nro: "E-10823", monto: 18841243.56, vencimiento: "2026-04-24", dias: 30, emisor: "Quickfood", estado: "Acreditado" },
      { nro: "E-10824", monto: 18841243.56, vencimiento: "2026-04-24", dias: 30, emisor: "Quickfood", estado: "Acreditado" }
    ],
    estado: "Liquidado / Cuadrado"
  },
  {
    id: 3423,
    fecha: "2026-09-23",
    operador: "TOMI R.",
    vendedor: "LUCIANO CASADO",
    comprador: "FIROKI SRL",
    acargo: "ARIEL SAENZ Y CIA.",
    hacienda: {
      tipo: "Invernada",
      detalle: "108 TERNEROS DE INVERNADA",
      cabezas: 108,
      kilos: 25356,
      precio: 6180.00,
      subtotal: 156700080.00
    },
    venta: {
      plazo1: 30,
      plazo2: 60,
      comisionPct: 1.5,
      comisionImp: 2350501.20,
      comisionDesc: "COM MAS IVA FCO 1,5%"
    },
    compra: {
      plazo1: 35,
      plazo2: 65,
      comisionPct: 4.0,
      comisionImp: 6268003.20,
      comisionDesc: "COM MAS IVA 2% FCO"
    },
    resumen: {
      difCompVenta: 0,
      otroIngreso1: 0,
      otroIngreso2: 0,
      subtotal1: 8618504.40,
      costoCom1: 3134001.60,
      costoDesc1: "COM LUCIANO CASADO 2%",
      costoCom2: 0,
      costoDesc2: "",
      costoOtro1: 0,
      costoOtro2: 0,
      subtotal2: 3134001.60,
      margenNeto: 5484502.80,
      instrucciones: "LIQUIDA A. SAENZ\nFCO FACTURA LAS COM A A. SAENZ"
    },
    documentos: {
      dte: {
        numero: "0045-88392014",
        nombre: "DTE_3423_Casado_Firoki.pdf",
        tipo: "application/pdf",
        tamano: "1.2 MB"
      },
      romaneo: {
        numero: "ROM-3423",
        nombre: "Romaneo_Balanza_Invernada.pdf",
        tipo: "application/pdf",
        tamano: "840 KB"
      }
    },
    estado: "Pendiente Facturar"
  },
  {
    id: 3422,
    fecha: "2026-09-20",
    operador: "TOMI R.",
    vendedor: "ESTANCIA LA JUANITA",
    comprador: "FRIGORIFICO CENTRAL",
    acargo: "ARIEL SAENZ Y CIA.",
    hacienda: {
      tipo: "Faena",
      detalle: "45 NOVILLOS PESADOS",
      cabezas: 45,
      kilos: 22500,
      precio: 5200.00,
      subtotal: 117000000.00
    },
    venta: {
      plazo1: 15,
      plazo2: 30,
      comisionPct: 1.5,
      comisionImp: 1755000.00,
      comisionDesc: "COM MAS IVA FCO 1,5%"
    },
    compra: {
      plazo1: 20,
      plazo2: 40,
      comisionPct: 2.0,
      comisionImp: 2340000.00,
      comisionDesc: "COM MAS IVA FCO 2%"
    },
    resumen: {
      difCompVenta: 0,
      otroIngreso1: 0,
      otroIngreso2: 0,
      subtotal1: 4095000.00,
      costoCom1: 0,
      costoDesc1: "",
      costoCom2: 0,
      costoDesc2: "",
      costoOtro1: 0,
      costoOtro2: 0,
      subtotal2: 0,
      margenNeto: 4095000.00,
      instrucciones: "LIQUIDACION DIRECTA A FRIGORIFICO"
    },
    documentos: {
      dte: {
        numero: "0012-77441199",
        nombre: "DTE_3422_LaJuanita.pdf",
        tipo: "application/pdf",
        tamano: "1.1 MB"
      },
      romaneo: {
        numero: "ROM-9941",
        nombre: "Romaneo_Frigorifico_Central.pdf",
        tipo: "application/pdf",
        tamano: "650 KB"
      }
    },
    estado: "Facturado"
  },
  {
    id: 3421,
    fecha: "2026-09-18",
    operador: "TOMI R.",
    vendedor: "CABAÑA DON PEDRO",
    comprador: "AGROPECUARIA EL OMBÚ",
    acargo: "ARIEL SAENZ Y CIA.",
    hacienda: {
      tipo: "Cría / Reproducción",
      detalle: "30 VAQUILLONAS PREÑADAS (GARANTÍA)",
      cabezas: 30,
      kilos: 13500,
      precio: 6500.00,
      subtotal: 87750000.00
    },
    venta: {
      plazo1: 30,
      plazo2: 60,
      comisionPct: 2.0,
      comisionImp: 1755000.00,
      comisionDesc: "COM MAS IVA FCO 2%"
    },
    compra: {
      plazo1: 30,
      plazo2: 60,
      comisionPct: 2.0,
      comisionImp: 1755000.00,
      comisionDesc: "COM MAS IVA 2% FCO"
    },
    resumen: {
      difCompVenta: 0,
      otroIngreso1: 0,
      otroIngreso2: 0,
      subtotal1: 3510000.00,
      costoCom1: 877500.00,
      costoDesc1: "COM ARIEL SAENZ 1%",
      costoCom2: 0,
      costoDesc2: "",
      costoOtro1: 0,
      costoOtro2: 0,
      subtotal2: 877500.00,
      margenNeto: 2632500.00,
      instrucciones: "VIENTRES CON CERTIFICADO VETERINARIO"
    },
    documentos: {
      dte: {
        numero: "0088-33221100",
        nombre: "DTE_3421_DonPedro_Ombu.pdf",
        tipo: "application/pdf",
        tamano: "950 KB"
      },
      romaneo: {
        numero: "ROM-1102",
        nombre: "Romaneo_Balanza_Cabana.pdf",
        tipo: "application/pdf",
        tamano: "520 KB"
      }
    },
    estado: "Cobrado / Liquidado"
  }
];

const DATOS_INICIALES_CLIENTES = [
  {
    id: 8,
    nombre: "EL DESPERTAR SA",
    rol: "Vendedor / Productor",
    cuit: "30-70701728-3",
    renspa: "03.009.0.10217/00",
    localidad: "Olavarría, Buenos Aires",
    telefono: "2284-551122",
    comisionHabitual: 1.5
  },
  {
    id: 9,
    nombre: "QUICKFOOD",
    rol: "Comprador / Frigorífico Exportador",
    cuit: "30-50413188-9",
    renspa: "20.018.0.00099/00",
    localidad: "San Jorge / Baradero",
    telefono: "011-4711-8000",
    comisionHabitual: 1.0
  },
  {
    id: 1,
    nombre: "LUCIANO CASADO",
    rol: "Vendedor / Productor",
    cuit: "20-28495021-4",
    renspa: "01.002.0.00123/00",
    localidad: "Azul, Buenos Aires",
    telefono: "2281-554433",
    comisionHabitual: 1.5
  },
  {
    id: 2,
    nombre: "FIROKI SRL",
    rol: "Comprador / Feedlot",
    cuit: "30-71192834-8",
    renspa: "01.004.0.00456/00",
    localidad: "Rauch, Buenos Aires",
    telefono: "2297-443322",
    comisionHabitual: 2.0
  },
  {
    id: 3,
    nombre: "ARIEL SAENZ Y CIA.",
    rol: "Representante / Intermediario",
    cuit: "30-68934521-9",
    renspa: "01.005.0.00789/00",
    localidad: "Tandil, Buenos Aires",
    telefono: "2494-887766",
    comisionHabitual: 2.0
  },
  {
    id: 4,
    nombre: "ESTANCIA LA JUANITA",
    rol: "Vendedor / Productor",
    cuit: "30-55443322-1",
    renspa: "01.006.0.00321/00",
    localidad: "Olavarría, Buenos Aires",
    telefono: "2284-665544",
    comisionHabitual: 1.5
  },
  {
    id: 5,
    nombre: "FRIGORIFICO CENTRAL",
    rol: "Comprador / Industria",
    cuit: "30-61223344-5",
    renspa: "20.015.0.00111/00",
    localidad: "Cañuelas, Buenos Aires",
    telefono: "2226-778899",
    comisionHabitual: 2.0
  },
  {
    id: 6,
    nombre: "CABAÑA DON PEDRO",
    rol: "Vendedor / Cabaña",
    cuit: "30-58992211-3",
    renspa: "01.008.0.00222/00",
    localidad: "Balcarce, Buenos Aires",
    telefono: "2266-441122",
    comisionHabitual: 2.0
  },
  {
    id: 7,
    nombre: "AGROPECUARIA EL OMBÚ",
    rol: "Comprador / Invernador",
    cuit: "30-72334455-8",
    renspa: "01.010.0.00333/00",
    localidad: "Chascomús, Buenos Aires",
    telefono: "2241-556677",
    comisionHabitual: 2.0
  }
];

// Reglas oficiales de facturación y liquidación para Frigoríficos Exportadores e Industrias
const REGLAS_FRIGORIFICOS = [
  {
    nombre: "QUICKFOOD (Marfrig)",
    cuit: "30-50413188-9",
    comision: "ND 2% máx a pedido",
    comisionPct: 2.0,
    ivaComision: 10.5,
    control: "NO",
    flete: "NO",
    mails: "haciendavm.ar@marfrig.com, natalia.pringles@marfrig.com",
    notas: "Solo 2 cheques digitales por factura. Ajuste por nota de débito."
  },
  {
    nombre: "SWIFT (Minerva)",
    cuit: "30-50005234-8",
    comision: "2% máx",
    comisionPct: 2.0,
    ivaComision: 21.0,
    control: "NO",
    flete: "NO",
    mails: "sectoradministracionhacienda@minervafoods.com, daniela.morelli@minervafoods.com",
    notas: "Facturación directa con 21% de IVA en comisiones y gastos."
  },
  {
    nombre: "BERNAL",
    cuit: "30-54129845-6",
    comision: "Libre",
    comisionPct: 2.0,
    ivaComision: 21.0,
    control: "Libre (21%)",
    flete: "Libre (21%)",
    mails: "gabriel_saldana@ciaber.com, mariel_orellana@ciaber.com",
    notas: "Permite comisión, flete y control y entrega libres con alícuota 21%."
  },
  {
    nombre: "COTO",
    cuit: "30-54808315-6",
    comision: "Libre (mucho consultar)",
    comisionPct: 1.5,
    ivaComision: 10.5,
    control: "NO",
    flete: "NO",
    mails: "hacienda@coto.com.ar",
    notas: "Consultar previamente plazos de pago y porcentajes autorizados."
  },
  {
    nombre: "RIOPLATENSE",
    cuit: "30-50143890-7",
    comision: "2%",
    comisionPct: 2.0,
    ivaComision: 10.5,
    control: "1% (10.5%)",
    flete: "Lógico (10.5%)",
    mails: "hacienda@rioplatense.com",
    notas: "Admite 2% de comisión + 1% de control y entrega formal."
  },
  {
    nombre: "ARREBEEF",
    cuit: "30-50341290-6",
    comision: "A consultar",
    comisionPct: 1.5,
    ivaComision: 10.5,
    control: "Sin info",
    flete: "Sin info",
    mails: "administracion@arrebeef.com",
    notas: "IVA general 10.5% hacienda y comisiones según acuerdo."
  },
  {
    nombre: "AZUL NATURAL BEEF",
    cuit: "30-71409831-2",
    comision: "Libre",
    comisionPct: 2.0,
    ivaComision: 21.0,
    control: "Libre (21%)",
    flete: "Libre (21%)",
    mails: "hacienda@azulnaturalbeef.com",
    notas: "Alícuota del 21% para rubros comerciales."
  },
  {
    nombre: "FRIMSA",
    cuit: "30-56901234-5",
    comision: "Libre",
    comisionPct: 2.0,
    ivaComision: 10.5,
    control: "Libre (10.5%)",
    flete: "Libre (21%)",
    mails: "gabrielar@frimsa.com.ar, fpeix@frimsa.com.ar",
    notas: "Comisión al 10.5%, fletes al 21%."
  },
  {
    nombre: "RUNFO",
    cuit: "30-67129034-8",
    comision: "Libre",
    comisionPct: 2.0,
    ivaComision: 21.0,
    control: "Libre (21%)",
    flete: "Libre (21%)",
    mails: "hacienda@runfo.com.ar",
    notas: "IVA comisiones y gastos 21%."
  },
  {
    nombre: "19 DE MARZO",
    cuit: "30-70891234-9",
    comision: "A consultar (permite achique)",
    comisionPct: 2.0,
    ivaComision: 10.5,
    control: "A consultar",
    flete: "A consultar",
    mails: "ldfernandez13@gmail.com, 19dmarzo@gmail.com",
    notas: "Permite compensación y achique pactado."
  },
  {
    nombre: "FRIGORÍFICO PICO",
    cuit: "30-58190234-1",
    comision: "Libre",
    comisionPct: 2.0,
    ivaComision: 10.5,
    control: "Libre (10.5%)",
    flete: "Factura aparte (21%)",
    mails: "hacienda@frigopico.com.ar",
    notas: "Flete preferentemente facturado por separado."
  },
  {
    nombre: "SA CARNES PAMPEANAS",
    cuit: "30-65431289-4",
    comision: "2%",
    comisionPct: 2.0,
    ivaComision: 10.5,
    control: "1% (10.5%)",
    flete: "NO",
    mails: "nicolasjofrecora@carnes-pampeanas.com, leonortorres@carnes-pampeanas.com",
    notas: "2% de comisión + 1% de control."
  },
  {
    nombre: "FRIGORÍFICO ANSELMO",
    cuit: "30-51209345-7",
    comision: "2%",
    comisionPct: 2.0,
    ivaComision: 10.5,
    control: "2% (10.5%)",
    flete: "NO",
    mails: "mbarrionuevo@frigoanselmo.com, eduvedoya.ev@gmail.com",
    notas: "2% comisión + 2% control."
  },
  {
    nombre: "GORINA",
    cuit: "30-52341908-1",
    comision: "Libre con achique",
    comisionPct: 2.0,
    ivaComision: 10.5,
    control: "A consultar",
    flete: "A consultar",
    mails: "patricio.quevedo@friggorina.com",
    notas: "Permite achique pactado con tesorería."
  },
  {
    nombre: "FRIGOLAR",
    cuit: "30-59012345-9",
    comision: "2%",
    comisionPct: 2.0,
    ivaComision: 10.5,
    control: "NO",
    flete: "NO",
    mails: "hacienda@frigolar.com.ar",
    notas: "Comisión estándar del 2% con IVA 10.5%."
  }
];

// Categorías oficiales SENASA por pesos
const CATEGORIAS_SENASA = [
  { nombre: "Novillos", rangoKilos: "431 a 460 kg" },
  { nombre: "Novillitos", rangoKilos: "351 a 430 kg" },
  { nombre: "Terneros", rangoKilos: "300 a 350 kg" },
  { nombre: "Terneras", rangoKilos: "300 a 380 kg" },
  { nombre: "Vaquillonas", rangoKilos: "351 a 430 kg" },
  { nombre: "Vacas de Faena", rangoKilos: "> 430 kg" },
  { nombre: "Toros", rangoKilos: "> 550 kg" }
];
