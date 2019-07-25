

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

Pen.prototype.configure =function(context)
{
	context.strokeStyle = this.penColor;

	context.lineWidth = this.penSize;

};

Pen.prototype.convertRgbColor = function(color)
{


		
		var color;

		r = color.r;
		g = color.g;
		b = color.b;
		a = color.a;

	color = "rgba("+r+","+g+","+b+","+a+")";

	return color;

}