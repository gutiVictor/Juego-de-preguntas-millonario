/* ============================================
   Sistema de Sonidos - Web Audio API
   ============================================ */

class SoundManager {
    constructor() {
        this.audioContext = null;
        this.initialized = false;
    }

    // Inicializar contexto de audio (debe llamarse después de interacción del usuario)
    init() {
        if (this.initialized) return;
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.initialized = true;
            console.log('Sistema de sonidos inicializado');
        } catch (e) {
            console.warn('Web Audio API no soportada:', e);
        }
    }

    // Reproducir tono simple
    playTone(frequency, duration, type = 'sine', volume = 0.3) {
        if (!this.initialized) this.init();
        if (!this.audioContext) return;

        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        oscillator.frequency.value = frequency;
        oscillator.type = type;

        gainNode.gain.setValueAtTime(volume, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);

        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + duration);
    }

    // Sonido de respuesta correcta (ascendente alegre)
    correct() {
        if (!this.initialized) this.init();
        if (!this.audioContext) return;

        const notes = [523.25, 659.25, 783.99]; // C5, E5, G5
        notes.forEach((freq, i) => {
            setTimeout(() => this.playTone(freq, 0.15, 'sine', 0.3), i * 100);
        });
    }

    // Sonido de respuesta incorrecta (descendente triste)
    wrong() {
        if (!this.initialized) this.init();
        if (!this.audioContext) return;

        const notes = [392, 349.23, 293.66]; // G4, F4, D4
        notes.forEach((freq, i) => {
            setTimeout(() => this.playTone(freq, 0.2, 'sawtooth', 0.2), i * 150);
        });
    }

    // Sonido de selección (click)
    select() {
        this.playTone(800, 0.05, 'sine', 0.2);
    }

    // Sonido de tick (temporizador)
    tick() {
        this.playTone(1000, 0.03, 'square', 0.1);
    }

    // Sonido de comodín usado
    lifeline() {
        if (!this.initialized) this.init();
        if (!this.audioContext) return;

        const notes = [440, 554.37, 659.25, 880]; // A4, C#5, E5, A5
        notes.forEach((freq, i) => {
            setTimeout(() => this.playTone(freq, 0.1, 'sine', 0.25), i * 80);
        });
    }

    // Sonido de victoria (fanfarria)
    win() {
        if (!this.initialized) this.init();
        if (!this.audioContext) return;

        const melody = [
            { freq: 523.25, delay: 0 },    // C5
            { freq: 659.25, delay: 150 },  // E5
            { freq: 783.99, delay: 300 },  // G5
            { freq: 1046.5, delay: 450 },  // C6
            { freq: 783.99, delay: 600 },  // G5
            { freq: 1046.5, delay: 750 },  // C6
        ];
        
        melody.forEach(note => {
            setTimeout(() => this.playTone(note.freq, 0.3, 'sine', 0.3), note.delay);
        });
    }

    // Sonido de suspenso (pulso bajo continuo)
    suspenseInterval = null;
    startSuspense() {
        if (!this.initialized) this.init();
        if (!this.audioContext) return;

        this.stopSuspense();
        let toggle = false;
        this.suspenseInterval = setInterval(() => {
            const freq = toggle ? 80 : 100;
            this.playTone(freq, 0.4, 'sine', 0.15);
            toggle = !toggle;
        }, 500);
    }

    stopSuspense() {
        if (this.suspenseInterval) {
            clearInterval(this.suspenseInterval);
            this.suspenseInterval = null;
        }
    }
}

// Instancia global
const soundManager = new SoundManager();
