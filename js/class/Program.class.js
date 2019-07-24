
var Program = function()

{

	this.pen 	         = new Pen();
	this.colorpalette    = new ColorPalette();
	this.slate 		  	 = new Slate(this.pen);


};

Program.prototype.start = function ()
{


	$('.pen-color').on('click',this.onClickGetColor.bind(this));

	$('.pensize').on('click',this.onClickGetsize.bind(this));

	$('#tool-color-picker').on('click',this.onClickColorPicker);

	$('#tool-clear-canvas').on('click',this.slate.clear.bind(this.slate));





}

Program.prototype.onClickGetColor = function(event)

	{

	penColor = $(event.currentTarget).data('color');

	console.log(penColor);

	//console.log(this);
	
	this.pen.setPenColor(penColor);

	console.log(this.pen);

	};

Program.prototype.onClickGetsize = function(event)

{

	pensize = $(event.currentTarget).data('size');

	
	this.pen.setSize(pensize);


	console.log(this.pen);

}	

Program.prototype.onClickColorPicker = function()
{



	$('#canvas2').toggle();




	
}



