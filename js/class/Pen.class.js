

var Pen  = function()
{

	this.penColor = "black";
	this.penSize  = 1;

};

Pen.prototype.setPenColor = function(penColor)
{
	this.penColor = penColor;

};

Pen.prototype.setSize =function(penSize)
{
	this.penSize = penSize;

};