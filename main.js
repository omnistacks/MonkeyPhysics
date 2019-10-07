let canvas;
let canvasContext;

const frameRate = 10;
const pixelsPerMeter = 100;
const playSpeed = 1;

let simulating = false;

const arrow = {
    velocity: 8,
    angle: Math.atan(4 / 6),
    initX: 1,
    initY: 1,
    radius: 0.1,
    color: 'white'
};

const monkey = {
    velocity: 0,
    angle: 0,
    initX: 7,
    initY: 5,
    radius: 0.1,
    color: 'brown'
}

let time = 0;

const calculatePosition = (projectile, time) => {
    const positionX = (projectile.velocity * Math.Cos(projectile.angle) * time) + projectile.initX;
    const positionY = (projectile.velocity * Math.Sin(projectile.angle) * time) + (0.5 * -9.8 * (time ** 2)) + projectile.initY;
    return { x: positionX, y: positionY };
};

const drawProjectile = (projectile) => {
    const position = calculatePosition(projectile, time / 1000);
    const x = position.x * pixelsPerMeter;
    const y = 600 - (position.y * pixelsPerMeter);
    const color = projectile.color;
    const radius = projectile.radius * pixelsPerMeter;
    drawCircle(x, y, radius, color, canvasContext);
};

const drawFloor = () => {
    drawRectangle(0, canvas.height - (pixelsPerMeter * arrow.initY), canvas.width, pixelsPerMeter * arrow.initY, '#16c94f', canvasContext);
};

const update = () => {
    if (simulating) {
        // incrementing time
        time += frameRate * playSpeed;
    }
    // drawing background
    drawRectangle(0, 0, canvas.width, canvas.height, '#1df2e8', canvasContext);
    drawFloor();
    drawProjectile(monkey);
    drawProjectile(arrow);
};

const restart = () => {
    time = 0;
    const velocityInput = document.getElementById("velocity").value;
    if (velocityInput) {
        arrow.velocity = parseInt(velocityInput);
    }
    const monkeyXInput = document.getElementById("monkeyx").value;
    if (monkeyXInput) {
        monkey.initX = parseInt(monkeyXInput);
    }
    const monkeyYInput = document.getElementById("monkeyy").value;
    if (monkeyYInput) {
        monkey.initY = parseInt(monkeyYInput);
    }
    arrow.angle = Math.atan((monkey.initY - arrow.initY) / (monkey.initX - arrow.initX));
};

const pause = () => {
    simulating = false;
}

const play = () => {
    simulating = true;
}

window.onload = () => {
    canvas = document.getElementById('myCanvas');
    canvasContext = canvas.getContext('2d');
    drawRectangle(0, 0, canvas.width, canvas.height, 'black', canvasContext);
    setInterval(update, frameRate);
};