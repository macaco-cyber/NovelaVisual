//Ingles

function ingles(){
    document.getElementById("econfiguracion").style.display="block";
    document.getElementById("configuracion").style.display="none";
}

function español(){
    document.getElementById("econfiguracion").style.display="none";
    document.getElementById("configuracion").style.display="block";
}


//final Dio malo
function eFinalMalo(){
    
    document.getElementById("emalo1").style.display="block";
    document.getElementById("etexto").style.display="none";

    let x= document.getElementsByClassName("fondo1");
    x[0].style.display="none"
    let y= document.getElementsByClassName("fondo2");
    y[1].style.display="block"


}


function eDio(){
    document.getElementById("emalo1").style.display="none";
    document.getElementById("emalo2").style.display="block";

    let x= document.getElementsByClassName("fondo2");
    x[1].style.display="none"
    let y= document.getElementsByClassName("fondo2");
    y[2].style.display="block"
    let z= document.getElementsByClassName("image2");
    z[5].style.display="block"
}

function eDio2(){
    document.getElementById("emalo2").style.display="none";
    document.getElementById("malo3").style.display="block";
}

function eDio3(){
    document.getElementById("emalo3").style.display="none";
    document.getElementById("etexto").style.display="block";

    
    let x= document.getElementsByClassName("fondo2");
    x[2].style.display="none"
    let y= document.getElementsByClassName("fondo1");
    y[0].style.display="block"
    let z= document.getElementsByClassName("image2");
    z[5].style.display="none"
}

//Boton Musica
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


    
}
function eparte2(){
    document.getElementById("etexto3").style.display="block";
    document.getElementById("etexto2").style.display="none";


}
//kirito
function eGame(){
    document.getElementById("etexto3").style.display="none";
    document.getElementById("ekir1").style.display="block";

    let x= document.getElementsByClassName("fondo1");
    x[0].style.display="none"
    let y= document.getElementsByClassName("fondo2");
    y[3].style.display="block"

}

function eKIR1(){
    document.getElementById("ekir1").style.display="none";
    document.getElementById("ekir2").style.display="block";

    let x= document.getElementsByClassName("fondo2");
    x[3].style.display="none"
    let y= document.getElementsByClassName("fondo2");
    y[4].style.display="block"
    let z= document.getElementsByClassName("image2");
    z[6].style.display="block"
}
function eKIR2(){
    document.getElementById("ekir2").style.display="none";
    document.getElementById("ekir3").style.display="block";

    let x= document.getElementsByClassName("fondo2");
    x[5].style.display="block"
    let y= document.getElementsByClassName("fondo2");
    y[4].style.display="none"
    let z= document.getElementsByClassName("image2");
    z[6].style.display="none"
}

function eKIR3(){
    document.getElementById("ekir3").style.display="none";
    document.getElementById("etexto").style.display="block";

    
    let x= document.getElementsByClassName("fondo2");
    x[5].style.display="none"
    let y= document.getElementsByClassName("fondo1");
    y[0].style.display="block"
    let z= document.getElementsByClassName("image2");
    z[6].style.display="none"
}
//Kaneki
function eCalle(){
    document.getElementById("etexto3").style.display="none";
    document.getElementById("ekan1").style.display="block";

    let x= document.getElementsByClassName("fondo1");
    x[0].style.display="none"
    let y= document.getElementsByClassName("fondo2");
    y[6].style.display="block"
}

function eKAN1(){
    document.getElementById("ekan1").style.display="none";
    document.getElementById("ekan2").style.display="block";

    let z= document.getElementsByClassName("image2");
    z[7].style.display="block"
}

function eKAN2(){
    document.getElementById("ekan2").style.display="none";
    document.getElementById("ekan3").style.display="block";

    let z= document.getElementsByClassName("image2");
    z[8].style.display="block"
    let x= document.getElementsByClassName("image2");
    x[7].style.display="none"
}


function eKAN3(){
    document.getElementById("ekan3").style.display="none";
    document.getElementById("ekan4").style.display="block";

    let x= document.getElementsByClassName("fondo2");
    x[7].style.display="block"
    let y= document.getElementsByClassName("fondo2");
    y[6].style.display="none"
    let z= document.getElementsByClassName("image2");
    z[7].style.display="none"
    let a= document.getElementsByClassName("image2");
    a[8].style.display="none"
}

function eKAN4(){
    document.getElementById("ekan4").style.display="none";
    document.getElementById("etexto").style.display="block";

    
    let x= document.getElementsByClassName("fondo2");
    x[7].style.display="none"
    let y= document.getElementsByClassName("fondo1");
    y[0].style.display="block"

}
//Gendo
function eLaboratorio(){
    document.getElementById("etexto3").style.display="none";
    document.getElementById("egen1").style.display="block";

    let x= document.getElementsByClassName("fondo1");
    x[0].style.display="none"
    let y= document.getElementsByClassName("fondo2");
    y[8].style.display="block"
    let z= document.getElementsByClassName("image2");
    z[3].style.display="block"
}

function eGEN1(){
    document.getElementById("egen1").style.display="none";
    document.getElementById("egen2").style.display="block";
}

function eGEN2(){
    document.getElementById("egen2").style.display="none";
    document.getElementById("egen5").style.display="block";

    let x= document.getElementsByClassName("fondo2");
    x[9].style.display="block"
    let y= document.getElementsByClassName("fondo2");
    y[8].style.display="none"
    let z= document.getElementsByClassName("image2");
    z[3].style.display="none"
}

function eGEN3(){
    document.getElementById("egen2").style.display="none";
    document.getElementById("egen4").style.display="block";

    let x= document.getElementsByClassName("fondo2");
    x[10].style.display="block"
    let y= document.getElementsByClassName("fondo2");
    y[8].style.display="none"
    let z= document.getElementsByClassName("image2");
    z[3].style.display="none"
}

function eGEN4(){
    document.getElementById("egen4").style.display="none";
    document.getElementById("egen5").style.display="block";

    let y= document.getElementsByClassName("fondo2");
    y[9].style.display="block"

    let z= document.getElementsByClassName("image2");
    z[3].style.display="none"
    let x= document.getElementsByClassName("fondo2");
    x[10].style.display="none"


}
function eGEN5(){
    document.getElementById("egen5").style.display="none";
    document.getElementById("etexto").style.display="block";

    
    let x= document.getElementsByClassName("fondo2");
    x[9].style.display="none"
    let y= document.getElementsByClassName("fondo1");
    y[0].style.display="block"
}



//Ban

function eBar(){
    document.getElementById("etexto3").style.display="none";
    document.getElementById("eban1").style.display="block";

    let x= document.getElementsByClassName("fondo1");
    x[0].style.display="none"
    let y= document.getElementsByClassName("fondo2");
    y[11].style.display="block"

}

function eBAN1(){
    document.getElementById("eban1").style.display="none";
    document.getElementById("eban2").style.display="block";

    let z= document.getElementsByClassName("image2");
    z[0].style.display="block"
}

function eBAN2(){
    document.getElementById("eban2").style.display="none";
    document.getElementById("eban5").style.display="block";

    let x= document.getElementsByClassName("fondo2");
    x[11].style.display="none"
    let y= document.getElementsByClassName("fondo2");
    y[12].style.display="block"
    let z= document.getElementsByClassName("image2");
    z[0].style.display="none"
}

function eBAN3(){
    document.getElementById("eban2").style.display="none";
    document.getElementById("eban4").style.display="block";

    let x= document.getElementsByClassName("image2");
    x[9].style.display="block"
    let z= document.getElementsByClassName("image2");
    z[0].style.display="none"
}

function eBAN4(){
    document.getElementById("eban4").style.display="none";
    document.getElementById("eban6").style.display="block";

    let x= document.getElementsByClassName("fondo2");
    x[11].style.display="none"
    let y= document.getElementsByClassName("fondo2");
    y[13].style.display="block"
    let z= document.getElementsByClassName("image2");
    z[9].style.display="none"

}

function eBAN5(){
    document.getElementById("eban5").style.display="none";
    document.getElementById("etexto").style.display="block";

    
    let x= document.getElementsByClassName("fondo2");
    x[12].style.display="none"
    let y= document.getElementsByClassName("fondo1");
    y[0].style.display="block"

}

function eBAN6(){
    document.getElementById("eban6").style.display="none";
    document.getElementById("etexto").style.display="block";

    
    let x= document.getElementsByClassName("fondo2");
    x[13].style.display="none"
    let y= document.getElementsByClassName("fondo1");
    y[0].style.display="block"

}


function eparte3(){
    document.getElementById("etexto4").style.display="block";
    document.getElementById("etexto3").style.display="none";
}

// musica
window.addEventListener("load",function(){
	document.getElementById("eplay").addEventListener("click",sonarPajaros);
	document.getElementById("estop").addEventListener("click",callarPajaros);			
});
