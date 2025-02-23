// 初始化变量
let secretNumber;
let attempts = 0;
const scores = [];

// 获取 DOM 元素
const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const restartButton = document.getElementById('restart-button');
const messageElement = document.getElementById('message');
const attemptsElement = document.getElementById('attempts');
const scoresList = document.getElementById('scores');

// 开始新游戏
function startNewGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    guessInput.disabled = false;
    guessButton.disabled = false;
    restartButton.style.display = 'none';
    messageElement.textContent = '';
    attemptsElement.textContent = `Number of attempts: 0`;
}

// 处理猜测事件
guessButton.addEventListener('click', function () {
    const userGuess = parseInt(guessInput.value);
    attempts++;

    // 检查输入是否有效
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        messageElement.textContent = 'Please enter a valid number between 1 and 100.';
    } else if (userGuess < secretNumber) {
        messageElement.textContent = 'Too low! Try again.';
    } else if (userGuess > secretNumber) {
        messageElement.textContent = 'Too high! Try again.';
    } else {
        messageElement.textContent = `Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`;
        guessInput.disabled = true;
        guessButton.disabled = true;
        restartButton.style.display = 'inline-block';

        // 记录成绩
        scores.push(attempts);
        const listItem = document.createElement('li');
        listItem.textContent = `Guessed in ${attempts} attempts`;
        scoresList.appendChild(listItem);
    }

    // 更新尝试次数显示
    attemptsElement.textContent = `Number of attempts: ${attempts}`;
});

// 处理重开事件
restartButton.addEventListener('click', startNewGame);

// 初始化游戏
startNewGame();