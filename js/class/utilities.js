'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* *********************************** FONCTIONS UTILITAIRES *********************************** */
/*************************************************************************************************/
function getRandomInteger(min , max)
{

	var randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
	return randomInteger;
}



function getRandomColor()
{
	var color= "",
		
	
		r = getRandomInteger(0,255),
		g = getRandomInteger(0,255),
		b = getRandomInteger(0,255),
		a = Math.random();

	color = "rgba("+r+","+g+","+b+","+a+")";

	return color;



	





}


