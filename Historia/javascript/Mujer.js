//final Dio malo
function FinalMalo(){
    
    document.getElementById("malo1").style.display="block";
    document.getElementById("texto").style.display="none";

    let x= document.getElementsByClassName("fondo1");
    x[0].style.display="none"
    let y= document.getElementsByClassName("fondo2");
    y[1].style.display="block"


}


function Dio(){
    document.getElementById("malo1").style.display="none";
    document.getElementById("malo2").style.display="block";

    let x= document.getElementsByClassName("fondo2");
    x[1].style.display="none"
    let y= document.getElementsByClassName("fondo2");
    y[2].style.display="block"
    let z= document.getElementsByClassName("image2");
    z[5].style.display="block"
}

function Dio2(){
    document.getElementById("malo2").style.display="none";
    document.getElementById("malo3").style.display="block";
}

function Dio3(){
    document.getElementById("malo3").style.display="none";
    document.getElementById("texto").style.display="block";

    
    let x= document.getElementsByClassName("fondo2");
    x[2].style.display="none"
    let y= document.getElementsByClassName("fondo1");
    y[0].style.display="block"
    let z= document.getElementsByClassName("image2");
    z[5].style.display="none"
}

//Boton Musica
function Config(){
    
    document.getElementById("configuracion").style.display="block";
    document.getElementById("texto").style.display="none";

}

function Music(){
    
    document.getElementById("configuracion").style.display="none";
    document.getElementById("texto").style.display="block";

}

// boton de fullscreen
var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}

//Main

function Final(){
    document.getElementById("texto2").style.display="block";
    document.getElementById("texto").style.display="none";


    
}
function parte2(){
    document.getElementById("texto3").style.display="block";
    document.getElementById("texto2").style.display="none";


}
//kirito
function Game(){
    document.getElementById("texto3").style.display="none";
    document.getElementById("kir1").style.display="block";

    let x= document.getElementsByClassName("fondo1");
    x[0].style.display="none"
    let y= document.getElementsByClassName("fondo2");
    y[3].style.display="block"

}

function KIR1(){
    document.getElementById("kir1").style.display="none";
    document.getElementById("kir2").style.display="block";

    let x= document.getElementsByClassName("fondo2");
    x[3].style.display="none"
    let y= document.getElementsByClassName("fondo2");
    y[4].style.display="block"
    let z= document.getElementsByClassName("image2");
    z[6].style.display="block"
}
function KIR2(){
    document.getElementById("kir2").style.display="none";
    document.getElementById("kir3").style.display="block";

    let x= document.getElementsByClassName("fondo2");
    x[5].style.display="block"
    let y= document.getElementsByClassName("fondo2");
    y[4].style.display="none"
    let z= document.getElementsByClassName("image2");
    z[6].style.display="none"
}

function KIR3(){
    document.getElementById("kir3").style.display="none";
    document.getElementById("texto").style.display="block";

    
    let x= document.getElementsByClassName("fondo2");
    x[5].style.display="none"
    let y= document.getElementsByClassName("fondo1");
    y[0].style.display="block"
    let z= document.getElementsByClassName("image2");
    z[6].style.display="none"
}
//Kaneki
function Calle(){
    document.getElementById("texto3").style.display="none";
    document.getElementById("kan1").style.display="block";

    let x= document.getElementsByClassName("fondo1");
    x[0].style.display="none"
    let y= document.getElementsByClassName("fondo2");
    y[6].style.display="block"
}

function KAN1(){
    document.getElementById("kan1").style.display="none";
    document.getElementById("kan2").style.display="block";

    let z= document.getElementsByClassName("image2");
    z[7].style.display="block"
}

function KAN2(){
    document.getElementById("kan2").style.display="none";
    document.getElementById("kan3").style.display="block";

    let z= document.getElementsByClassName("image2");
    z[8].style.display="block"
    let x= document.getElementsByClassName("image2");
    x[7].style.display="none"
}


function KAN3(){
    document.getElementById("kan3").style.display="none";
    document.getElementById("kan4").style.display="block";

    let x= document.getElementsByClassName("fondo2");
    x[7].style.display="block"
    let y= document.getElementsByClassName("fondo2");
    y[6].style.display="none"
    let z= document.getElementsByClassName("image2");
    z[7].style.display="none"
    let a= document.getElementsByClassName("image2");
    a[8].style.display="none"
}

function KAN4(){
    document.getElementById("kan4").style.display="none";
    document.getElementById("texto").style.display="block";

    
    let x= document.getElementsByClassName("fondo2");
    x[7].style.display="none"
    let y= document.getElementsByClassName("fondo1");
    y[0].style.display="block"

}
//Gendo
function Laboratorio(){
    document.getElementById("texto3").style.display="none";
    document.getElementById("gen1").style.display="block";

    let x= document.getElementsByClassName("fondo1");
    x[0].style.display="none"
    let y= document.getElementsByClassName("fondo2");
    y[8].style.display="block"
    let z= document.getElementsByClassName("image2");
    z[3].style.display="block"
}

function GEN1(){
    document.getElementById("gen1").style.display="none";
    document.getElementById("gen2").style.display="block";
}

function GEN2(){
    document.getElementById("gen2").style.display="none";
    document.getElementById("gen5").style.display="block";

    let x= document.getElementsByClassName("fondo2");
    x[9].style.display="block"
    let y= document.getElementsByClassName("fondo2");
    y[8].style.display="none"
    let z= document.getElementsByClassName("image2");
    z[3].style.display="none"
}

function GEN3(){
    document.getElementById("gen2").style.display="none";
    document.getElementById("gen4").style.display="block";

    let x= document.getElementsByClassName("fondo2");
    x[10].style.display="block"
    let y= document.getElementsByClassName("fondo2");
    y[8].style.display="none"
    let z= document.getElementsByClassName("image2");
    z[3].style.display="none"
}

function GEN4(){
    document.getElementById("gen4").style.display="none";
    document.getElementById("gen5").style.display="block";

    let y= document.getElementsByClassName("fondo2");
    y[9].style.display="block"

    let z= document.getElementsByClassName("image2");
    z[3].style.display="none"
    let x= document.getElementsByClassName("fondo2");
    x[10].style.display="none"


}
function GEN5(){
    document.getElementById("gen5").style.display="none";
    document.getElementById("texto").style.display="block";

    
    let x= document.getElementsByClassName("fondo2");
    x[9].style.display="none"
    let y= document.getElementsByClassName("fondo1");
    y[0].style.display="block"
}



//Ban

function Bar(){
    document.getElementById("texto3").style.display="none";
    document.getElementById("ban1").style.display="block";

    let x= document.getElementsByClassName("fondo1");
    x[0].style.display="none"
    let y= document.getElementsByClassName("fondo2");
    y[11].style.display="block"

}

function BAN1(){
    document.getElementById("ban1").style.display="none";
    document.getElementById("ban2").style.display="block";

    let z= document.getElementsByClassName("image2");
    z[0].style.display="block"
}

function BAN2(){
    document.getElementById("ban2").style.display="none";
    document.getElementById("ban5").style.display="block";

    let x= document.getElementsByClassName("fondo2");
    x[11].style.display="none"
    let y= document.getElementsByClassName("fondo2");
    y[12].style.display="block"
    let z= document.getElementsByClassName("image2");
    z[0].style.display="none"
}

function BAN3(){
    document.getElementById("ban2").style.display="none";
    document.getElementById("ban4").style.display="block";

    let x= document.getElementsByClassName("image2");
    x[9].style.display="block"
    let z= document.getElementsByClassName("image2");
    z[0].style.display="none"
}

function BAN4(){
    document.getElementById("ban4").style.display="none";
    document.getElementById("ban6").style.display="block";

    let x= document.getElementsByClassName("fondo2");
    x[11].style.display="none"
    let y= document.getElementsByClassName("fondo2");
    y[13].style.display="block"
    let z= document.getElementsByClassName("image2");
    z[9].style.display="none"

}

function BAN5(){
    document.getElementById("ban5").style.display="none";
    document.getElementById("texto").style.display="block";

    
    let x= document.getElementsByClassName("fondo2");
    x[12].style.display="none"
    let y= document.getElementsByClassName("fondo1");
    y[0].style.display="block"

}

function BAN6(){
    document.getElementById("ban6").style.display="none";
    document.getElementById("texto").style.display="block";

    
    let x= document.getElementsByClassName("fondo2");
    x[13].style.display="none"
    let y= document.getElementsByClassName("fondo1");
    y[0].style.display="block"

}


function parte3(){
    document.getElementById("texto4").style.display="block";
    document.getElementById("texto3").style.display="none";
}

// musica
window.addEventListener("load",function(){
	document.getElementById("play").addEventListener("click",sonarPajaros);
	document.getElementById("stop").addEventListener("click",callarPajaros);			
});

function sonarPajaros(){
	var sonido = document.createElement("iframe");
	sonido.setAttribute("src","/Historia/Audio/Girl.mp3");
	document.body.appendChild(sonido);
	document.getElementById("play").removeEventListener("click",sonarPajaros);
}

function callarPajaros(){
	var iframe = document.getElementsByTagName("iframe");

	if (iframe.length > 0){
		iframe[0].parentNode.removeChild(iframe[0]);
		document.getElementById("play").addEventListener("click",sonarPajaros);
	}
}


//Escape

function p1() {

    tecla_esc = event.keyCode;
    
    if (tecla_esc == 27) {
    
    return MenuMain();   
    }
    }
    window.onkeydown = p1;
    
    
    function MenuMain(){
        window.location.href='Main.html'
        
    }
    