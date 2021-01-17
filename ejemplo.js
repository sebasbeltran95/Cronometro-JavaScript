//javascript document

var minutos=0;
var segundos=0;
var centesimas=0;
var control;
var estado=0;

function iniciarbb()
{if(estado==0)
{
	control=setInterval(incrementar,10);
estado=1;	
	}
	}

function incrementar()
{centesimas++;
if(centesimas==100)
{segundos++
centesimas=0;
if (segundos==60)
{minutos++;
segundos=0;
	}
	}
	
document.getElementById('centesimas').innerHTML=centesimas;
document.getElementById('segundos').innerHTML=segundos;
document.getElementById('minutos').innerHTML=minutos;
	}

function detener()
{ clearInterval(control);
estado=0;
	}
