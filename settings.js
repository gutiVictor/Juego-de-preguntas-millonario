/* ============================================
   Configuraciones del Juego
   ============================================ */

// Este archivo maneja las configuraciones del juego localmente
// No intenta cargar desde URLs remotas para evitar errores de red

(async function main() {
    try {
        // Las configuraciones se manejan en logica.js
        // Este archivo existe solo para prevenir errores si es cargado por el navegador
        console.log('settings.js cargado - usando configuraciones locales');
    } catch (error) {
        console.warn('Error en settings.js (ignorado):', error.message);
    }
})();

