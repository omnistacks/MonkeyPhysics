let canvas;
let canvasContext;

window.onload = () => {
    canvas = document.getElementById('myCanvas');
    canvasContext = canvas.getContext('2d');
    drawRectangle(0, 0, canvas.width, canvas.height, 'black', canvasContext);
};