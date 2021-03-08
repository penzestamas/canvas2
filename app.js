var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d'); //rajzolási kontextus (lehet 3d is)
context.beginPath();
context.moveTo(55,70);
context.lineTo(150,100);
context.stroke();