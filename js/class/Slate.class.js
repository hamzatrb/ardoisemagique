
var Slate = function (pen)
{

	this.pen = pen ;

	this.canvas1  = document.querySelector('#canvas1');

	this.context1 = this.canvas1.getContext('2d');

	this.currentPosition = { x: null,y:null };

	this.isDrawing = false;


	$('#canvas1').on('mousedown',this.onMouseDown.bind(this));

	$('#canvas1').on('mousemove',this.onMousemove.bind(this));

	$('#canvas1').on('mouseup',this.onMousup.bind(this));


};



Slate.prototype.onMouseDown = function (event)
{


	this.isDrawing = true;

	this.currentPosition = this.getMouseLocation(event);

	//console.log(this.currentPosition);

}


Slate.prototype.clear = function()
{

	 this.context1.clearRect(0, 0, this.canvas1.width, this.canvas1.height);


	 console.log(" clear canvas ");


}


Slate.prototype.getMouseLocation = function(event)

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



}


Slate.prototype.onMousemove =  function(event)
{
	



	if(this.isDrawing)

	{
		nouveauPosition = this.getMouseLocation(event);

		//trace une ligne 
		//console.log(this);
		
		this.context1.beginPath();

		//this.context1.strokeStyle = this.pen.penColor;

		//this.context1.lineWidth = this.pen.penSize;

		// ou bien delegué l'objet pen de configurer le contexte

		this.pen.configure(this.context1);

		this.context1.moveTo(this.currentPosition.x,this.currentPosition.y);

		this.context1.lineTo(nouveauPosition.x,nouveauPosition.y);

		this.context1.stroke();

		this.currentPosition = nouveauPosition;

		//console.log(this.currentPosition);
	}	
}

Slate.prototype.onMousup = function()
{
	// console.log('fin dessin');

	this.isDrawing = false;
}