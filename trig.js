sin = function (w) {
    return parseFloat(Math.sin(w).toFixed(10));
};

cos = function (w) {
    return parseFloat(Math.cos(w).toFixed(10));
};

module.exports = { sin, cos };