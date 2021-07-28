//Ingles

function ingles(){
    document.getElementById("econfiguracion").style.display="block";
    document.getElementById("configuracion").style.display="none";
}

function español(){
    document.getElementById("econfiguracion").style.display="none";
    document.getElementById("configuracion").style.display="block";
}

//final Piko malo
function eFinalMalo(){
    
    document.getElementById("emalo1").style.display="block";
    document.getElementById("etexto").style.display="none";

    let x= document.getElementsByClassName("fondo1");
    x[0].style.display="none"
    let y= document.getElementsByClassName("fondo2");
    y[1].style.display="block"
    
    

}

function epiko(){
    document.getElementById("emalo1").style.display="none";
    document.getElementById("emalo2").style.display="block";

    let x= document.getElementsByClassName("fondo2");
    x[1].style.display="none"
    let y= document.getElementsByClassName("image2");
    y[1].style.display="block"

    let z= document.getElementsByClassName("fondo2");
    z[4].style.display="block"




}
function epiko2(){
    document.getElementById("emalo2").style.display="none";
    document.getElementById("etexto").style.display="block";

    
    let x= document.getElementsByClassName("fondo2");
    x[4].style.display="none"
    let y= document.getElementsByClassName("fondo1");
    y[0].style.display="block"
    let z= document.getElementsByClassName("image2");
    z[1].style.display="none"
}

//boton de musica
function eConfig(){
    
    document.getElementById("econfiguracion").style.display="block";
    document.getElementById("etexto").style.display="none";

}

function eMusic(){
    
    document.getElementById("econfiguracion").style.display="none";
    document.getElementById("etexto").style.display="block";

}
// boton de fullscreen
var elem = document.documentElement;
function eopenFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

function ecloseFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }

  
}

//Main
function eFinal(){
    document.getElementById("etexto2").style.display="block";
    document.getElementById("etexto").style.display="none";

    let x= document.getElementsByClassName("fondo1");
    x[0].style.display="none"
    let y= document.getElementsByClassName("fondo2");
    y[3].style.display="block"
    
}
function eparte2(){
    document.getElementById("etexto3").style.display="block";
    document.getElementById("etexto2").style.display="none";

    let x= document.getElementsByClassName("image2");
    x[0].style.display="none"

}
//Rem
function eMansion(){
    document.getElementById("etexto3").style.display="none";
    document.getElementById("erem1").style.display="block";

    let x= document.getElementsByClassName("fondo2");
    x[3].style.display="none"
    let y= document.getElementsByClassName("fondo2");
    y[6].style.display="block"
    let z= document.getElementsByClassName("image2");
    z[3].style.display="block"
}

function eREM1(){
    document.getElementById("erem1").style.display="none";
    document.getElementById("erem2").style.display="block";
}
function eREM2(){
    document.getElementById("erem2").style.display="none";
    document.getElementById("erem3").style.display="block";

    let x= document.getElementsByClassName("fondo2");
    x[7].style.display="block"
    let y= document.getElementsByClassName("fondo2");
    y[6].style.display="none"
    let z= document.getElementsByClassName("image2");
    z[3].style.display="none"
}

function eREM3(){
    document.getElementById("erem3").style.display="none";
    document.getElementById("etexto").style.display="block";

    
    let x= document.getElementsByClassName("fondo2");
    x[7].style.display="none"
    let y= document.getElementsByClassName("fondo1");
    y[0].style.display="block"

}
//Raphatlia
function eBosque(){
    document.getElementById("etexto3").style.display="none";
    document.getElementById("erap1").style.display="block";

    let x= document.getElementsByClassName("fondo2");
    x[3].style.display="none"
    let y= document.getElementsByClassName("fondo2");
    y[8].style.display="block"
    let z= document.getElementsByClassName("image2");
    z[4].style.display="block"

    
}

function eRAP1(){
    document.getElementById("erap1").style.display="none";
    document.getElementById("erap2").style.display="block";
}

function eRAP2(){
    document.getElementById("erap2").style.display="none";
    document.getElementById("erap4").style.display="block";

    let z= document.getElementsByClassName("image2");
    z[4].style.display="none"
}

function eRAP4(){
    document.getElementById("erap4").style.display="none";
    document.getElementById("erap5").style.display="block";

    let x= document.getElementsByClassName("fondo2");
    x[8].style.display="none"
    let y= document.getElementsByClassName("fondo2");
    y[9].style.display="block"
    let z= document.getElementsByClassName("image2");
    z[2].style.display="block"


}

function eRAP3(){
    document.getElementById("erap2").style.display="none";
    document.getElementById("erap6").style.display="block";
    
    let x= document.getElementsByClassName("fondo2");
    x[8].style.display="none"
    let y= document.getElementsByClassName("fondo2");
    y[13].style.display="block"
    let z= document.getElementsByClassName("image2");
    z[4].style.display="none"
}

function eRAP5(){
    document.getElementById("erap5").style.display="none";
    document.getElementById("etexto").style.display="block";

    
    let x= document.getElementsByClassName("fondo2");
    x[9].style.display="none"
    let y= document.getElementsByClassName("fondo1");
    y[0].style.display="block"
    let z= document.getElementsByClassName("image2");
    z[2].style.display="none"
}
function eRAP6(){
    document.getElementById("erap6").style.display="none";
    document.getElementById("etexto").style.display="block";

    
    let x= document.getElementsByClassName("fondo2");
    x[13].style.display="none"
    let y= document.getElementsByClassName("fondo1");
    y[0].style.display="block"
 
}
//Aqua
function eRio(){
    document.getElementById("etexto3").style.display="none";
    document.getElementById("eaqua1").style.display="block";

    let x= document.getElementsByClassName("fondo2");
    x[3].style.display="none"
    let y= document.getElementsByClassName("fondo2");
    y[10].style.display="block"
    let z= document.getElementsByClassName("image2");
    z[0].style.display="block"
}

function eAQUA1(){
    document.getElementById("eaqua1").style.display="none";
    document.getElementById("eaqua2").style.display="block";
}

function eAQUA2(){
    document.getElementById("eaqua2").style.display="none";
    document.getElementById("eaqua4").style.display="block";

    let x= document.getElementsByClassName("fondo2");
    x[10].style.display="none"
    let y= document.getElementsByClassName("fondo2");
    y[12].style.display="block"
    let z= document.getElementsByClassName("image2");
    z[0].style.display="none"

}

function eAQUA3(){
    document.getElementById("eaqua2").style.display="none";
    document.getElementById("eaqua5").style.display="block";

    let x= document.getElementsByClassName("fondo2");
    x[10].style.display="none"
    let y= document.getElementsByClassName("fondo2");
    y[11].style.display="block"
    let z= document.getElementsByClassName("image2");
    z[0].style.display="none"

}
function eAQUA4(){
    document.getElementById("eaqua4").style.display="none";
    document.getElementById("etexto").style.display="block";

    
    let x= document.getElementsByClassName("fondo2");
    x[12].style.display="none"
    let y= document.getElementsByClassName("fondo1");
    y[0].style.display="block"

}

function eAQUA5(){
    document.getElementById("eaqua5").style.display="none";
    document.getElementById("etexto").style.display="block";

    
    let x= document.getElementsByClassName("fondo2");
    x[11].style.display="none"
    let y= document.getElementsByClassName("fondo1");
    y[0].style.display="block"

}
//monika

function eRegresar(){
    document.getElementById("etexto3").style.display="none";
    document.getElementById("emon1").style.display="block";


    let y= document.getElementsByClassName("fondo2");
    y[2].style.display="block"
    let z= document.getElementsByClassName("fondo2");
    z[3].style.display="none"
}

function eMON3(){
    document.getElementById("emon1").style.display="none";
    document.getElementById("emon2").style.display="block";

    let x= document.getElementsByClassName("image2");
    x[0].style.display="none"
    let y= document.getElementsByClassName("fondo2");
    y[0].style.display="block"  
    let z= document.getElementsByClassName("fondo2");
    z[2].style.display="none"
}


function eparte3(){
    document.getElementById("texto4").style.display="block";
    document.getElementById("texto3").style.display="none";
}
window.addEventListener("load",function(){
	document.getElementById("eplay").addEventListener("click",sonarPajaros);
	document.getElementById("estop").addEventListener("click",callarPajaros);			
});