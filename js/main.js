
var penColor;
var	pensize;
var	canvas1;
var	slateContext;
var	currentPosition;
var	nouveauPosition;
var isDrawing;
var	palette;
var canvas2;

$(function(){


	isDrawing = false;

	canvas1  = document.querySelector('#canvas1');

	context = canvas1.getContext('2d');

	//ajouter palette de couleur 

	remplirPalette();


	$('#tool-color-picker').on('click',onClickColorPicker);
	
	$('#tool-clear-canvas').on('click',onClickClearCanvas);

	$('.pen-color').on('click',onClickGetColor);

	$('.pensize').on('click',onClickGetsize);

	$('#canvas1').on('mousedown',onMouseDown);

	$('#canvas1').on('mouseup',onMousup);

	$('#canvas1').on('mousemove',onMousemove);



});

function remplirPalette()
{

	canvas2  = document.querySelector('#canvas2');

	context = canvas2.getContext('2d');

	var gradient = context.createLinearGradient(10,10,canvas2.width,0);

		gradient.addColorStop(0,		"rgba(250,0,0,0.6)");     // Départ
		gradient.addColorStop(0.2,		"rgba(250,0,250,0.8)"); // Intermédiaire
		gradient.addColorStop(0.4,		"rgba(0,250,0, .6)");// Intermédiaire
		gradient.addColorStop(0.6,		"rgba(255,255,0, .7)"); // Intermédiaire
		gradient.addColorStop(0.8,		"rgba(255,255,0, .8)"); // Intermédiaire
		gradient.addColorStop(1,		"#ef0404");    // Arrivée

		context.fillStyle = gradient;            // Affectation au remplissage

		context.fillRect(0,0,canvas2.width,canvas2.height);
}

function onClickColorPicker()
{



	$('#canvas2').toggle();



	
}

function onClickClearCanvas()
{


 context.clearRect(0, 0, canvas1.width, canvas1.height);

}

function  onClickGetColor()
{
	penColor = $(this).data('color');

	console.log(penColor);

	//equivaut en js => this.dataSet.color
	//event.currentTarget.dataSet.color
	//this.dataSet.color
}

function onClickGetsize()
{
	pensize = $(this).data('size');
}


function onMouseDown(event)
{
	isDrawing = true;

	currentPosition = getMouseLocation(event);

	console.log(currentPosition);
}

function onMousup()
{
	// console.log('fin dessin');
	isDrawing = false;
}


function onMousemove(event)
{
	if(isDrawing)

	{
		nouveauPosition = getMouseLocation(event);

		//trace une ligne 

		context.beginPath();

		context.strokeStyle = penColor;

		context.lineWidth = pensize;

		context.moveTo(currentPosition.x,currentPosition.y);

		context.lineTo(nouveauPosition.x,nouveauPosition.y);

		context.stroke();

		currentPosition = nouveauPosition;

		console.log(currentPosition);
	}	
}



function getMouseLocation(event)
{

var position = {};

var rect = canvas1.getBoundingClientRect();

 	 x = rect.left;
 	 y = rect.top;

 	 var styles = window.getComputedStyle(canvas1);


 	 posx = event.clientX;

 	 posy = event.clientY;

 	 position.x = ( posx - x ) - parseInt(styles.borderLeftWidth);

 	 position.y = ( posy - y ) - parseInt(styles.borderTopWidth);

// alert ("Left: " + x + ", Top: " + y + " clientX "+ posx +" clientY "+posy);



//console.log(position);


return position;



}
