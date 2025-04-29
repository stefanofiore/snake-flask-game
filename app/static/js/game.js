const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const gridSize = 20;
let snake = [{ x: 160, y: 160 }];
let dx = gridSize;
let dy = 0;
let apple = getRandomPosition();
let score = 0;

document.addEventListener("keydown", changeDirection);

function gameLoop() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };

    if (checkCollision(head)) {
        alert("Game over! Hai fatto " + score + " punti.");
        document.location.reload();
        return;
    }

    snake.unshift(head);

    if (head.x === apple.x && head.y === apple.y) {
        apple = getRandomPosition();
        score += 10;
        document.getElementById("score").textContent = "Punteggio: " + score;
    } else {
        snake.pop();
    }

    draw();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Snake
    ctx.fillStyle = "green";
    for (let s of snake) {
        ctx.fillRect(s.x, s.y, gridSize, gridSize);
    }

    // Apple
    ctx.fillStyle = "red";
    ctx.fillRect(apple.x, apple.y, gridSize, gridSize);
}

function changeDirection(event) {
    switch (event.key) {
        case "ArrowUp":
            if (dy === 0) {
                dx = 0;
                dy = -gridSize;
            }
            break;
        case "ArrowDown":
            if (dy === 0) {
                dx = 0;
                dy = gridSize;
            }
            break;
        case "ArrowLeft":
            if (dx === 0) {
                dx = -gridSize;
                dy = 0;
            }
            break;
        case "ArrowRight":
            if (dx === 0) {
                dx = gridSize;
                dy = 0;
            }
            break;
    }
}

function getRandomPosition() {
    const x = Math.floor(Math.random() * canvas.width / gridSize) * gridSize;
    const y = Math.floor(Math.random() * canvas.height / gridSize) * gridSize;
    return { x, y };
}

function checkCollision(head) {
    return (
        head.x < 0 || head.x >= canvas.width ||
        head.y < 0 || head.y >= canvas.height ||
        snake.some(segment => segment.x === head.x && segment.y === head.y)
    );
}

setInterval(gameLoop, 100);
