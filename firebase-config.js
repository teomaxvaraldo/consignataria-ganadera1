// Configuración oficial de Google Firebase Firestore para AgroGestión Ganadera
const firebaseConfig = {
  apiKey: "AIzaSyB9WLGST-98OMcjZc12-R0BCI8Hph1KV-0",
  authDomain: "agrogestion-ganadera.firebaseapp.com",
  projectId: "agrogestion-ganadera",
  storageBucket: "agrogestion-ganadera.firebasestorage.app",
  messagingSenderId: "428106090868",
  appId: "1:428106090868:web:4a60b4afc612b2ee008421",
  measurementId: "G-Y40QWW26HR"
};

// Variables globales de base de datos
let db = null;
let modoNubeActivo = false;

// Inicialización de Firebase
try {
  if (typeof firebase !== 'undefined' && firebaseConfig.apiKey) {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    modoNubeActivo = true;
    console.log("🔥 [AgroGestión] Conectado exitosamente a Google Cloud Firestore.");
  } else {
    console.warn("⚠️ [AgroGestión] Firebase SDK no detectado, operando en modo LocalStorage.");
  }
} catch (error) {
  console.error("❌ [AgroGestión] Error al inicializar Firebase:", error);
  modoNubeActivo = false;
}
