/* ============================================
   ¿Quién Quiere Ser Millonario? - Lógica
   ============================================ */

// Estado del juego
let gameState = {
    questions: [],
    allQuestions: [],
    currentQuestionIndex: 0,
    currentPrize: 0,
    selectedCategory: 'all',
    timerSeconds: 0,
    timerInterval: null,
    lifelinesUsed: {
        fiftyFifty: false,
        phoneFriend: false,
        audience: false
    },
    isAnswering: false,
    highScore: 0
};

// Configuración
const config = {
    prizeLevels: [
        100, 500, 1000, 2000, 5000, 10000, 20000, 50000, 75000, 100000,
        150000, 250000, 500000, 750000, 1000000, 1500000, 3000000, 5000000, 10000000, 20000000
    ],
    safeHavens: [4, 9, 14], // Índices de niveles seguros
    totalQuestions: 20,
    difficultyRanges: {
        easy: { start: 0, end: 6 },
        medium: { start: 7, end: 13 },
        hard: { start: 14, end: 19 }
    }
};

// Elementos del DOM
const elements = {
    // Pantallas
    startScreen: null,
    gameScreen: null,
    endScreen: null,
    
    // Inicio
    categorySelect: null,
    timerSelect: null,
    startBtn: null,
    highScoreValue: null,
    
    // Juego
    question: null,
    questionCategory: null,
    options: null,
    currentPrizeValue: null,
    questionCounterValue: null,
    timerDisplay: null,
    timerCircle: null,
    timerValue: null,
    prizeLadder: null,
    toggleLadder: null,
    toggleLadderText: null,
    
    // Comodines
    fiftyFifty: null,
    phoneFriend: null,
    audience: null,
    
    // Fin
    resultAnimation: null,
    resultTitle: null,
    resultMessage: null,
    finalPrizeValue: null,
    correctCount: null,
    finalCategory: null,
    playAgainBtn: null,
    menuBtn: null,
    
    // Modal
    lifelineModal: null,
    modalTitle: null,
    modalBody: null,
    modalClose: null,
    
    // Audio (referencias eliminadas, se usa soundManager global)
    sounds: {}
};

// Inicialización
document.addEventListener('DOMContentLoaded', init);

async function init() {
    try {
        cacheElements();
        loadHighScore();
        await loadQuestions();
        await loadSettings();
        setupEventListeners();
        populateCategorySelect();
    } catch (error) {
        console.error('Error durante la inicialización:', error);
        // Continuar con la inicialización básica incluso si hay errores
        setupEventListeners();
        populateCategorySelect();
    }
}

function cacheElements() {
    // Pantallas
    elements.startScreen = document.getElementById('start-screen');
    elements.gameScreen = document.getElementById('game-screen');
    elements.endScreen = document.getElementById('end-screen');
    
    // Inicio
    elements.categorySelect = document.getElementById('category-select');
    elements.timerSelect = document.getElementById('timer-select');
    elements.startBtn = document.getElementById('start-btn');
    elements.highScoreValue = document.getElementById('high-score-value');
    
    // Juego
    elements.question = document.getElementById('question');
    elements.questionCategory = document.getElementById('question-category');
    elements.options = document.getElementById('options');
    elements.currentPrizeValue = document.getElementById('current-prize-value');
    elements.questionCounterValue = document.getElementById('question-counter-value');
    elements.timerDisplay = document.getElementById('timer-display');
    elements.timerCircle = document.getElementById('timer-circle');
    elements.timerValue = document.getElementById('timer-value');
    elements.prizeLadder = document.getElementById('prize-ladder');
    elements.toggleLadder = document.getElementById('toggle-ladder');
    elements.toggleLadderText = document.getElementById('toggle-ladder-text');
    
    // Comodines
    elements.fiftyFifty = document.getElementById('fifty-fifty');
    elements.phoneFriend = document.getElementById('phone-friend');
    elements.audience = document.getElementById('audience');
    
    // Fin
    elements.resultAnimation = document.getElementById('result-animation');
    elements.resultTitle = document.getElementById('result-title');
    elements.resultMessage = document.getElementById('result-message');
    elements.finalPrizeValue = document.getElementById('final-prize-value');
    elements.correctCount = document.getElementById('correct-count');
    elements.finalCategory = document.getElementById('final-category');
    elements.playAgainBtn = document.getElementById('play-again-btn');
    elements.menuBtn = document.getElementById('menu-btn');
    
    // Modal
    elements.lifelineModal = document.getElementById('lifeline-modal');
    elements.modalTitle = document.getElementById('modal-title');
    elements.modalBody = document.getElementById('modal-body');
    elements.modalClose = document.getElementById('modal-close');
}

async function loadQuestions() {
    try {
        // Usar la base de datos embebida en questions.js
        if (typeof QUESTIONS_DATABASE !== 'undefined' && QUESTIONS_DATABASE.categories) {
            gameState.allQuestions = QUESTIONS_DATABASE.categories;
            console.log('Preguntas cargadas:', gameState.allQuestions.length, 'categorías');
        } else {
            throw new Error('QUESTIONS_DATABASE no encontrada');
        }
    } catch (error) {
        console.error('Error cargando preguntas:', error);
        // Fallback a preguntas básicas si falla la carga
        gameState.allQuestions = getFallbackQuestions();
    }
}

async function loadSettings() {
    try {
        // Usar configuraciones locales (no cargar desde URL remota)
        const settings = {
            timerOptions: [0, 30, 60, 90],
            categories: ['general', 'history', 'science']
        };

        console.log('Configuraciones cargadas:', settings);
        return settings;
    } catch (error) {
        // Manejar cualquier error silenciosamente y devolver valores por defecto
        console.warn('Error cargando configuraciones, usando valores por defecto:', error.message);
        return {
            timerOptions: [0, 30, 60, 90],
            categories: ['general', 'history', 'science']
        };
    }
}

function getFallbackQuestions() {
    return [{
        id: 'general',
        name: 'General',
        icon: '🎯',
        questions: [
            { difficulty: 'easy', question: '¿En qué año Cristóbal Colón llegó a América?', options: ['1492', '1489', '1495', '1500'], correct: 0 },
            { difficulty: 'easy', question: '¿Cuál es el planeta más cercano al Sol?', options: ['Venus', 'Mercurio', 'Marte', 'Tierra'], correct: 1 },
            { difficulty: 'medium', question: '¿En qué año cayó el Muro de Berlín?', options: ['1987', '1988', '1989', '1990'], correct: 2 },
            { difficulty: 'medium', question: '¿Quién pintó la Mona Lisa?', options: ['Miguel Ángel', 'Leonardo da Vinci', 'Rafael', 'Botticelli'], correct: 1 },
            { difficulty: 'hard', question: '¿Cuál es el elemento químico más abundante en el universo?', options: ['Oxígeno', 'Carbono', 'Hidrógeno', 'Helio'], correct: 2 }
        ]
    }];
}

function populateCategorySelect() {
    const select = elements.categorySelect;
    gameState.allQuestions.forEach(category => {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = `${category.icon} ${category.name}`;
        select.appendChild(option);
    });
}

function loadHighScore() {
    const saved = localStorage.getItem('qqsm_highscore');
    gameState.highScore = saved ? parseInt(saved) : 0;
    if (elements.highScoreValue) {
        elements.highScoreValue.textContent = formatMoney(gameState.highScore);
    }
}

function saveHighScore(score) {
    if (score > gameState.highScore) {
        gameState.highScore = score;
        localStorage.setItem('qqsm_highscore', score.toString());
    }
}

function setupEventListeners() {
    // Botón de inicio
    elements.startBtn.addEventListener('click', () => {
        // initializeGameQuestions(gameState.allQuestions);
        startGame();
    });
    
    // Comodines
    elements.fiftyFifty.addEventListener('click', useFiftyFifty);
    elements.phoneFriend.addEventListener('click', usePhoneFriend);
    elements.audience.addEventListener('click', useAudience);
    
    // Botones de fin
    elements.playAgainBtn.addEventListener('click', () => {
        startGame();
    });
    elements.menuBtn.addEventListener('click', showStartScreen);
    
    // Modal
    elements.modalClose.addEventListener('click', closeModal);
    
    // Toggle escalera de premios (móvil)
    elements.toggleLadder.addEventListener('click', togglePrizeLadder);
    
    // Opciones de respuesta
    const optionButtons = elements.options.querySelectorAll('.option');
    optionButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (!gameState.isAnswering) {
                const index = parseInt(btn.dataset.index);
                selectAnswer(index);
            }
        });
    });
}

// ============================================
// Control de pantallas
// ============================================

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function showStartScreen() {
    stopTimer();
    stopAllSounds();
    showScreen('start-screen');
    loadHighScore();
}

// ============================================
// Lógica del juego
// ============================================

function startGame() {
    // Resetear estado
    gameState.currentQuestionIndex = 0;
    gameState.currentPrize = 0;
    gameState.lifelinesUsed = {
        fiftyFifty: false,
        phoneFriend: false,
        audience: false
    };
    gameState.isAnswering = false;
    gameState.selectedCategory = elements.categorySelect.value;
    gameState.timerSeconds = parseInt(elements.timerSelect.value);
    
    // Preparar preguntas
    prepareQuestions();
    
    // Resetear UI de comodines
    resetLifelines();
    
    // Mostrar pantalla de juego
    showScreen('game-screen');
    
    // Configurar temporizador
    if (gameState.timerSeconds > 0) {
        elements.timerDisplay.classList.remove('hidden');
    } else {
        elements.timerDisplay.classList.add('hidden');
    }
    
    // Resetear escalera de premios
    updatePrizeLadder();
    
    // Mostrar primera pregunta
    showQuestion();
    
    // Inicializar audio si es necesario
    if (typeof soundManager !== 'undefined' && !soundManager.initialized) {
        soundManager.init();
    }
}

function prepareQuestions() {
    let availableQuestions = [];
    
    // Filtrar por categoría
    if (gameState.selectedCategory === 'all') {
        gameState.allQuestions.forEach(category => {
            category.questions.forEach(q => {
                availableQuestions.push({
                    ...q,
                    categoryId: category.id,
                    categoryName: category.name,
                    categoryIcon: category.icon
                });
            });
        });
    } else {
        const category = gameState.allQuestions.find(c => c.id === gameState.selectedCategory);
        if (category) {
            category.questions.forEach(q => {
                availableQuestions.push({
                    ...q,
                    categoryId: category.id,
                    categoryName: category.name,
                    categoryIcon: category.icon
                });
            });
        }
    }
    
    // Separar por dificultad
    const easyQuestions = shuffleArray(availableQuestions.filter(q => q.difficulty === 'easy'));
    const mediumQuestions = shuffleArray(availableQuestions.filter(q => q.difficulty === 'medium'));
    const hardQuestions = shuffleArray(availableQuestions.filter(q => q.difficulty === 'hard'));
    
    // Construir array de 20 preguntas con dificultad progresiva
    gameState.questions = [];
    
    // Preguntas 1-7: Fáciles
    for (let i = 0; i < 7 && i < easyQuestions.length; i++) {
        gameState.questions.push(easyQuestions[i]);
    }
    
    // Preguntas 8-14: Medianas
    for (let i = 0; i < 7 && i < mediumQuestions.length; i++) {
        gameState.questions.push(mediumQuestions[i]);
    }
    
    // Preguntas 15-20: Difíciles
    for (let i = 0; i < 6 && i < hardQuestions.length; i++) {
        gameState.questions.push(hardQuestions[i]);
    }
    
    // Si no hay suficientes preguntas, rellenar con las disponibles
    while (gameState.questions.length < config.totalQuestions && availableQuestions.length > 0) {
        const remaining = shuffleArray(availableQuestions);
        for (let i = 0; i < remaining.length && gameState.questions.length < config.totalQuestions; i++) {
            if (!gameState.questions.includes(remaining[i])) {
                gameState.questions.push(remaining[i]);
            }
        }
        break;
    }
}

function showQuestion() {
    const questionData = gameState.questions[gameState.currentQuestionIndex];
    
    if (!questionData) {
        endGame(true);
        return;
    }
    
    // Actualizar UI
    elements.question.textContent = questionData.question;
    elements.questionCategory.textContent = `${questionData.categoryIcon} ${questionData.categoryName}`;
    elements.questionCounterValue.textContent = `${gameState.currentQuestionIndex + 1}/${config.totalQuestions}`;
    elements.currentPrizeValue.textContent = formatMoney(gameState.currentPrize);
    
    // Actualizar opciones
    const optionButtons = elements.options.querySelectorAll('.option');
    optionButtons.forEach((btn, index) => {
        btn.classList.remove('selected', 'correct', 'wrong', 'disabled', 'hidden');
        const optionText = btn.querySelector('.option-text');
        optionText.textContent = questionData.options[index];
    });
    
    // Iniciar temporizador si está activo
    if (gameState.timerSeconds > 0) {
        startTimer();
    }
    
    // Reproducir música de suspense en preguntas finales
    if (gameState.currentQuestionIndex >= 14) {
        playSound('suspense');
    }
    
    gameState.isAnswering = false;
}

function selectAnswer(index) {
    if (gameState.isAnswering) return;
    gameState.isAnswering = true;
    
    stopTimer();
    playSound('select');
    
    const questionData = gameState.questions[gameState.currentQuestionIndex];
    const optionButtons = elements.options.querySelectorAll('.option');
    const selectedButton = optionButtons[index];
    
    // Marcar selección
    selectedButton.classList.add('selected');
    
    // Esperar antes de mostrar resultado
    setTimeout(() => {
        if (index === questionData.correct) {
            // Respuesta correcta
            selectedButton.classList.remove('selected');
            selectedButton.classList.add('correct');
            playSound('correct');
            stopSound('suspense');
            
            // Actualizar premio
            gameState.currentPrize = config.prizeLevels[gameState.currentQuestionIndex];
            gameState.currentQuestionIndex++;
            
            // Actualizar UI
            elements.currentPrizeValue.textContent = formatMoney(gameState.currentPrize);
            updatePrizeLadder();
            
            // Verificar si ganó
            if (gameState.currentQuestionIndex >= config.totalQuestions) {
                setTimeout(() => endGame(true), 1500);
            } else {
                setTimeout(() => showQuestion(), 1500);
            }
        } else {
            // Respuesta incorrecta
            selectedButton.classList.remove('selected');
            selectedButton.classList.add('wrong');
            optionButtons[questionData.correct].classList.add('correct');
            playSound('wrong');
            stopSound('suspense');
            
            // Calcular premio a llevarse (último nivel seguro alcanzado)
            const safePrize = getSafePrize();
            gameState.currentPrize = safePrize;
            
            setTimeout(() => endGame(false), 2000);
        }
    }, 1000);
}

function getSafePrize() {
    // Encontrar el último nivel seguro alcanzado
    for (let i = config.safeHavens.length - 1; i >= 0; i--) {
        if (gameState.currentQuestionIndex > config.safeHavens[i]) {
            return config.prizeLevels[config.safeHavens[i]];
        }
    }
    return 0;
}

function endGame(won) {
    stopTimer();
    stopAllSounds();
    
    // Guardar puntuación
    saveHighScore(gameState.currentPrize);
    
    // Configurar pantalla de fin
    if (won) {
        elements.resultAnimation.textContent = '🎉';
        elements.resultTitle.textContent = '¡FELICIDADES!';
        elements.resultMessage.textContent = '¡Has llegado al máximo premio!';
        playSound('win');
    } else {
        if (gameState.currentPrize > 0) {
            elements.resultAnimation.textContent = '💰';
            elements.resultTitle.textContent = '¡Buen intento!';
            elements.resultMessage.textContent = 'Te llevas:';
        } else {
            elements.resultAnimation.textContent = '😢';
            elements.resultTitle.textContent = '¡Juego terminado!';
            elements.resultMessage.textContent = 'No alcanzaste ningún nivel seguro';
        }
    }
    
    elements.finalPrizeValue.textContent = formatMoney(gameState.currentPrize);
    elements.correctCount.textContent = gameState.currentQuestionIndex.toString();
    
    const categoryName = gameState.selectedCategory === 'all' 
        ? 'Todas' 
        : gameState.allQuestions.find(c => c.id === gameState.selectedCategory)?.name || 'General';
    elements.finalCategory.textContent = categoryName;
    
    showScreen('end-screen');
}

// ============================================
// Comodines
// ============================================

function resetLifelines() {
    elements.fiftyFifty.classList.remove('used');
    elements.phoneFriend.classList.remove('used');
    elements.audience.classList.remove('used');
}

function useFiftyFifty() {
    if (gameState.lifelinesUsed.fiftyFifty || gameState.isAnswering) return;
    
    gameState.lifelinesUsed.fiftyFifty = true;
    elements.fiftyFifty.classList.add('used');
    playSound('lifeline');
    
    const questionData = gameState.questions[gameState.currentQuestionIndex];
    const optionButtons = elements.options.querySelectorAll('.option');
    
    // Determinar qué opciones eliminar (2 incorrectas)
    const incorrectIndices = [];
    for (let i = 0; i < 4; i++) {
        if (i !== questionData.correct) {
            incorrectIndices.push(i);
        }
    }
    
    // Eliminar 2 aleatorias
    shuffleArray(incorrectIndices);
    const toHide = incorrectIndices.slice(0, 2);
    
    toHide.forEach(index => {
        optionButtons[index].classList.add('disabled', 'hidden');
    });
}

function usePhoneFriend() {
    if (gameState.lifelinesUsed.phoneFriend || gameState.isAnswering) return;
    
    gameState.lifelinesUsed.phoneFriend = true;
    elements.phoneFriend.classList.add('used');
    playSound('lifeline');
    
    const questionData = gameState.questions[gameState.currentQuestionIndex];
    const correctAnswer = questionData.options[questionData.correct];
    
    // Simular que el amigo tiene 80% de certeza
    const confidence = Math.random() > 0.2 ? questionData.correct : Math.floor(Math.random() * 4);
    const suggestedAnswer = questionData.options[confidence];
    const certainty = confidence === questionData.correct ? Math.floor(Math.random() * 20) + 75 : Math.floor(Math.random() * 40) + 30;
    
    const friendNames = ['Carlos', 'María', 'Juan', 'Ana', 'Pedro', 'Laura'];
    const friendName = friendNames[Math.floor(Math.random() * friendNames.length)];
    
    elements.modalTitle.textContent = '📞 Llamada a un amigo';
    elements.modalBody.innerHTML = `
        <p><strong>${friendName}</strong> dice:</p>
        <p style="font-style: italic; margin: 15px 0;">"Mmm... déjame pensar... Estoy ${certainty}% seguro de que la respuesta es:"</p>
        <p style="font-size: 1.3rem; color: var(--accent-gold); font-weight: 600;">${suggestedAnswer}</p>
    `;
    
    showModal();
}

function useAudience() {
    if (gameState.lifelinesUsed.audience || gameState.isAnswering) return;
    
    gameState.lifelinesUsed.audience = true;
    elements.audience.classList.add('used');
    playSound('lifeline');
    
    const questionData = gameState.questions[gameState.currentQuestionIndex];
    
    // Generar porcentajes con sesgo hacia la correcta
    const percentages = generateAudiencePercentages(questionData.correct, questionData.difficulty);
    
    elements.modalTitle.textContent = '👥 Ayuda del público';
    elements.modalBody.innerHTML = `
        <p>El público ha votado:</p>
        <div class="audience-chart">
            ${['A', 'B', 'C', 'D'].map((letter, index) => `
                <div class="audience-bar">
                    <div class="audience-bar-fill" style="height: ${percentages[index]}%;"></div>
                    <span class="audience-bar-label">${letter}</span>
                    <span class="audience-bar-percent">${percentages[index]}%</span>
                </div>
            `).join('')}
        </div>
    `;
    
    showModal();
}

function generateAudiencePercentages(correctIndex, difficulty) {
    const percentages = [0, 0, 0, 0];
    let remaining = 100;
    
    // Porcentaje base para la correcta según dificultad
    let correctBase;
    switch (difficulty) {
        case 'easy': correctBase = Math.floor(Math.random() * 15) + 70; break;
        case 'medium': correctBase = Math.floor(Math.random() * 20) + 50; break;
        case 'hard': correctBase = Math.floor(Math.random() * 20) + 35; break;
        default: correctBase = Math.floor(Math.random() * 20) + 50;
    }
    
    percentages[correctIndex] = correctBase;
    remaining -= correctBase;
    
    // Distribuir el resto entre las otras opciones
    for (let i = 0; i < 4; i++) {
        if (i !== correctIndex) {
            if (i === 3 || (i === 2 && percentages[3] === 0)) {
                percentages[i] = remaining;
                remaining = 0;
            } else {
                const portion = Math.floor(Math.random() * remaining * 0.6);
                percentages[i] = portion;
                remaining -= portion;
            }
        }
    }
    
    return percentages;
}

// ============================================
// Modal
// ============================================

function showModal() {
    elements.lifelineModal.classList.remove('hidden');
}

function closeModal() {
    elements.lifelineModal.classList.add('hidden');
}

// ============================================
// Temporizador
// ============================================

function startTimer() {
    let timeLeft = gameState.timerSeconds;
    const circumference = 283; // 2 * PI * 45 (radio del círculo SVG)
    
    updateTimerDisplay(timeLeft, circumference);
    
    gameState.timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay(timeLeft, circumference);
        
        if (timeLeft <= 10) {
            playSound('tick');
        }
        
        if (timeLeft <= 0) {
            stopTimer();
            // Tiempo agotado = respuesta incorrecta
            const questionData = gameState.questions[gameState.currentQuestionIndex];
            const optionButtons = elements.options.querySelectorAll('.option');
            optionButtons[questionData.correct].classList.add('correct');
            playSound('wrong');
            
            gameState.currentPrize = getSafePrize();
            setTimeout(() => endGame(false), 2000);
        }
    }, 1000);
}

function updateTimerDisplay(timeLeft, circumference) {
    const progress = (timeLeft / gameState.timerSeconds) * circumference;
    elements.timerCircle.style.strokeDashoffset = circumference - progress;
    elements.timerValue.textContent = timeLeft;
    
    // Cambiar color según tiempo restante
    elements.timerCircle.classList.remove('warning', 'danger');
    if (timeLeft <= 10) {
        elements.timerCircle.classList.add('danger');
    } else if (timeLeft <= 20) {
        elements.timerCircle.classList.add('warning');
    }
}

function stopTimer() {
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
        gameState.timerInterval = null;
    }
}

// ============================================
// Escalera de premios
// ============================================

function updatePrizeLadder() {
    const levels = document.querySelectorAll('.prize-level');
    
    levels.forEach(level => {
        const levelIndex = parseInt(level.dataset.level);
        level.classList.remove('current', 'passed');
        
        if (levelIndex === gameState.currentQuestionIndex) {
            level.classList.add('current');
        } else if (levelIndex < gameState.currentQuestionIndex) {
            level.classList.add('passed');
        }
    });
}

function togglePrizeLadder() {
    const ladder = elements.prizeLadder;
    const isVisible = ladder.classList.contains('visible');
    
    if (isVisible) {
        ladder.classList.remove('visible');
        elements.toggleLadderText.textContent = 'Ver Premios';
    } else {
        ladder.classList.add('visible');
        elements.toggleLadderText.textContent = 'Ocultar';
    }
}

// ============================================
// Audio
// ============================================

function playSound(soundKey) {
    if (typeof soundManager !== 'undefined') {
        // Inicializar si es la primera interacción
        if (!soundManager.initialized) soundManager.init();
        
        switch(soundKey) {
            case 'correct': soundManager.correct(); break;
            case 'wrong': soundManager.wrong(); break;
            case 'tick': soundManager.tick(); break;
            case 'suspense': soundManager.startSuspense(); break;
            case 'win': soundManager.win(); break;
            case 'lifeline': soundManager.lifeline(); break;
            case 'select': soundManager.select(); break;
        }
    }
}

function stopSound(soundKey) {
    if (typeof soundManager !== 'undefined') {
        if (soundKey === 'suspense') {
            soundManager.stopSuspense();
        }
    }
}

function stopAllSounds() {
    if (typeof soundManager !== 'undefined') {
        soundManager.stopSuspense();
    }
}

// ============================================
// Utilidades
// ============================================

function formatMoney(amount) {
    return '$' + amount.toLocaleString('en-US');
}

function shuffleArray(array) { if (!Array.isArray(array)) { console.error('shuffleArray received non-array:', array); return []; }
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
