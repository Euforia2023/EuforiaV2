const canvas = document.getElementById('heart');
const ctx = canvas.getContext('2d');

// Dopasowanie canvas do okna
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Tablica serduszek
let hearts = [];
const maxHearts = 50;

function createHeart() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        size: Math.random() * 8 + 6,
        speedY: Math.random() * 2 + 1,
        speedX: Math.random() * 1 - 0.5,
        opacity: Math.random() * 0.5 + 0.5,
        swaySpeed: Math.random() * 0.02 + 0.01
    };
}

// Rysowanie serduszka
function drawHeart(x, y, size, opacity) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(size / 10, size / 10);
    ctx.beginPath();
    ctx.moveTo(0, 3);
    ctx.bezierCurveTo(-5, -2, -10, 2, 0, 12);
    ctx.bezierCurveTo(10, 2, 5, -2, 0, 3);
    ctx.closePath();
    ctx.fillStyle = `rgba(255, 70, 100, ${opacity})`;
    ctx.fill();
    ctx.restore();
}

// Inicjalizacja
for (let i = 0; i < maxHearts; i++) {
    hearts.push(createHeart());
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    hearts.forEach(heart => {
        heart.x += Math.sin(heart.y * heart.swaySpeed) + heart.speedX;
        heart.y += heart.speedY;

        drawHeart(heart.x, heart.y, heart.size, heart.opacity);

        if (heart.y > canvas.height) {
            heart.y = -20;
            heart.x = Math.random() * canvas.width;
        }
    });

    requestAnimationFrame(animate);
}

animate();
