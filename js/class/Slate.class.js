
var Slate = function (pen)
{

	this.pen = pen ;

	this.canvas1  = document.querySelector('#canvas1');

	this.context1 = this.canvas1.getContext('2d');

	this.currentPosition = { x: null,y:null };

	this.isDrawing = false;




};

Slate.prototype.clear = function()
{

	 this.context1.clearRect(0, 0, this.canvas1.width, this.canvas1.height);
	 

	 console.log(" clear canvas ");


}
