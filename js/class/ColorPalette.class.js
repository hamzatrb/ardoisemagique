
var ColorPalette = function()
{

	this.canvas2  = document.querySelector('#canvas2');

	this.context2 = this.canvas2.getContext('2d');

	this.remplirPalette();


	this.pickedColor = {r:0,g:0,b:0,a:0};
	

	$('#canvas2').on('click',this.onClickColorPalette.bind(this));
	
};


ColorPalette.prototype.remplirPalette = function()
{

	this.canvas2  = document.querySelector('#canvas2');

	this.context2 = this.canvas2.getContext('2d');

	// degradé horizontale 

	var gradient = this.context2.createLinearGradient(0,0,this.canvas2.width,0);

		gradient.addColorStop(0,    'rgb(255,   0,   0)');
	    gradient.addColorStop(0.15, 'rgb(255,   0, 255)');
	    gradient.addColorStop(0.32, 'rgb(0,     0, 255)');
	    gradient.addColorStop(0.49, 'rgb(0,   255, 255)');
	    gradient.addColorStop(0.66, 'rgb(0,   255,   0)');
	    gradient.addColorStop(0.83, 'rgb(255, 255,   0)');
	    gradient.addColorStop(1,    'rgb(255,   0,   0)');

		this.context2.fillStyle = gradient;  // Affectation au remplissage

		this.context2.fillRect(0,0,this.canvas2.width,this.canvas2.height);


	//degradé verticale


	var gradient = this.context2.createLinearGradient(0,0,0,this.canvas2.height);

		gradient.addColorStop(0,   'rgba(255, 255, 255, 1)');
		gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0)');
		gradient.addColorStop(0.5, 'rgba(0,     0,   0, 0)');
		gradient.addColorStop(1,   'rgba(0,     0,   0, 1)');

		this.context2.fillStyle = gradient;  // Affectation au remplissage

		this.context2.fillRect(0,0,this.canvas2.width,this.canvas2.height);


};

ColorPalette.prototype.onClickColorPalette = function(event)

{

	//console.log(this);

	

	var positionColorPalette = this.getMouseLocation(event);

	var imgData = this.context2.getImageData(positionColorPalette.x, positionColorPalette.y, 1, 1);

	//console.log(imgData.data[0]);

	// this.pen.penColor = "rgba("+imgData.data[0]+","+imgData.data[1]+","+imgData.data[2]+","+imgData.data[3]+")";

	this.pickedColor.r = imgData.data[0];
	this.pickedColor.g = imgData.data[1];
	this.pickedColor.b = imgData.data[2];
	this.pickedColor.a = imgData.data[3];

	//this.context2.strokeStyle = this.pen.penColor;

	$.event.trigger('couleur-choisi'); // au moment de click declencher moi l'evenement couleur choisi

	// (evenement personalisé)

	
};

ColorPalette.prototype.getPickerColor = function()
{
	
	
	return this.pickedColor;


};

ColorPalette.prototype.getMouseLocation = function(event)

{

var position = {};


//  console.log(event.currentTarget);


	var rect =  event.currentTarget.getBoundingClientRect();
	
 	 x = rect.left;
 	 y = rect.top;

 	 var styles = window.getComputedStyle(event.currentTarget);


 	 posx = event.clientX;

 	 posy = event.clientY;

 	 position.x = ( posx - x ) - parseInt(styles.borderLeftWidth);

 	 position.y = ( posy - y ) - parseInt(styles.borderTopWidth);



// alert ("Left: " + x + ", Top: " + y + " clientX "+ posx +" clientY "+posy);



//console.log(position);


return position;



};