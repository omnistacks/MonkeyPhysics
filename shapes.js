const drawRectangle = (coordinateX, coordinateY, width, height, color, canvasContext) => {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(coordinateX, coordinateY, width, height);
};

const drawCircle = (coordinateX, coordinateY, radius, color, canvasContext) => {
    canvasContext.fillStyle = color;
    canvasContext.beginPath();
    canvasContext.arc(coordinateX, coordinateY, radius, 0, Math.PI * 2, true);
    canvasContext.fill();
};

const drawText = (coordinateX, coordinateY, size, color, font, text, canvasContext) => {
    canvasContext.font = size + ' ' + font;
    canvasContext.fillStyle = color;
    canvasContext.textAlign = "center";
    canvasContext.fillText(text, coordinateX, coordinateY);
};

const drawLine = (coordinateX, coordinateY, coordinateXEnd, coordinateYEnd, canvasContext) => {
    canvasContext.strokeStyle = 'black';
    canvasContext.beginPath();
    canvasContext.moveTo(coordinateX, coordinateY);
    canvasContext.lineTo(coordinateXEnd, coordinateYEnd);
    canvasContext.stroke();
};