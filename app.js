var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d'); //rajzolási kontextus (lehet 3d is)
context.beginPath();
context.moveTo(55,70); //-től
context.lineTo(150,100); //-ig
context.stroke(); //körvonal
context.strokeStyle = 'orange'; //körvonal színe
context.fill(); //kitöltés