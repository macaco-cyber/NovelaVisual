//final Piko malo
function FinalMalo(){
    
    document.getElementById("malo1").style.display="block";
    document.getElementById("texto").style.display="none";

    let x= document.getElementsByClassName("fondo1");
    x[0].style.display="none"
    let y= document.getElementsByClassName("fondo2");
    y[1].style.display="block"
    
    

}

function piko(){
    document.getElementById("malo1").style.display="none";
    document.getElementById("malo2").style.display="block";

    let x= document.getElementsByClassName("fondo2");
    x[1].style.display="none"
    let y= document.getElementsByClassName("image2");
    y[1].style.display="block"

    let z= document.getElementsByClassName("fondo2");
    z[4].style.display="block"




}
function piko2(){
    document.getElementById("malo2").style.display="none";
    document.getElementById("texto").style.display="block";

    
    let x= document.getElementsByClassName("fondo2");
    x[4].style.display="none"
    let y= document.getElementsByClassName("fondo1");
    y[0].style.display="block"
    let z= document.getElementsByClassName("image2");
    z[1].style.display="none"
}

//boton de musica
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

    let x= document.getElementsByClassName("fondo1");
    x[0].style.display="none"
    let y= document.getElementsByClassName("fondo2");
    y[3].style.display="block"
    
}
function parte2(){
    document.getElementById("texto3").style.display="block";
    document.getElementById("texto2").style.display="none";

    let x= document.getElementsByClassName("image2");
    x[0].style.display="none"

}
//Rem
function Mansion(){
    document.getElementById("texto3").style.display="none";
    document.getElementById("rem1").style.display="block";

    let x= document.getElementsByClassName("fondo2");
    x[3].style.display="none"
    let y= document.getElementsByClassName("fondo2");
    y[6].style.display="block"
    let z= document.getElementsByClassName("image2");
    z[3].style.display="block"
}

function REM1(){
    document.getElementById("rem1").style.display="none";
    document.getElementById("rem2").style.display="block";
}
function REM2(){
    document.getElementById("rem2").style.display="none";
    document.getElementById("rem3").style.display="block";

    let x= document.getElementsByClassName("fondo2");
    x[7].style.display="block"
    let y= document.getElementsByClassName("fondo2");
    y[6].style.display="none"
    let z= document.getElementsByClassName("image2");
    z[3].style.display="none"
}

function REM3(){
    document.getElementById("rem3").style.display="none";
    document.getElementById("texto").style.display="block";

    
    let x= document.getElementsByClassName("fondo2");
    x[7].style.display="none"
    let y= document.getElementsByClassName("fondo1");
    y[0].style.display="block"

}
//Raphatlia
function Bosque(){
    document.getElementById("texto3").style.display="none";
    document.getElementById("rap1").style.display="block";

    let x= document.getElementsByClassName("fondo2");
    x[3].style.display="none"
    let y= document.getElementsByClassName("fondo2");
    y[8].style.display="block"
    let z= document.getElementsByClassName("image2");
    z[4].style.display="block"

    
}

function RAP1(){
    document.getElementById("rap1").style.display="none";
    document.getElementById("rap2").style.display="block";
}

function RAP2(){
    document.getElementById("rap2").style.display="none";
    document.getElementById("rap4").style.display="block";

    let z= document.getElementsByClassName("image2");
    z[4].style.display="none"
}

function RAP4(){
    document.getElementById("rap4").style.display="none";
    document.getElementById("rap5").style.display="block";

    let x= document.getElementsByClassName("fondo2");
    x[8].style.display="none"
    let y= document.getElementsByClassName("fondo2");
    y[9].style.display="block"
    let z= document.getElementsByClassName("image2");
    z[2].style.display="block"


}

function RAP3(){
    document.getElementById("rap2").style.display="none";
    document.getElementById("rap6").style.display="block";
    
    let x= document.getElementsByClassName("fondo2");
    x[8].style.display="none"
    let y= document.getElementsByClassName("fondo2");
    y[13].style.display="block"
    let z= document.getElementsByClassName("image2");
    z[4].style.display="none"
}

function RAP5(){
    document.getElementById("rap5").style.display="none";
    document.getElementById("texto").style.display="block";

    
    let x= document.getElementsByClassName("fondo2");
    x[9].style.display="none"
    let y= document.getElementsByClassName("fondo1");
    y[0].style.display="block"
    let z= document.getElementsByClassName("image2");
    z[2].style.display="none"
}
function RAP6(){
    document.getElementById("rap6").style.display="none";
    document.getElementById("texto").style.display="block";

    
    let x= document.getElementsByClassName("fondo2");
    x[13].style.display="none"
    let y= document.getElementsByClassName("fondo1");
    y[0].style.display="block"
 
}
//Aqua
function Rio(){
    document.getElementById("texto3").style.display="none";
    document.getElementById("aqua1").style.display="block";

    let x= document.getElementsByClassName("fondo2");
    x[3].style.display="none"
    let y= document.getElementsByClassName("fondo2");
    y[10].style.display="block"
    let z= document.getElementsByClassName("image2");
    z[0].style.display="block"
}

function AQUA1(){
    document.getElementById("aqua1").style.display="none";
    document.getElementById("aqua2").style.display="block";
}

function AQUA2(){
    document.getElementById("aqua2").style.display="none";
    document.getElementById("aqua4").style.display="block";

    let x= document.getElementsByClassName("fondo2");
    x[10].style.display="none"
    let y= document.getElementsByClassName("fondo2");
    y[12].style.display="block"
    let z= document.getElementsByClassName("image2");
    z[0].style.display="none"

}

function AQUA3(){
    document.getElementById("aqua2").style.display="none";
    document.getElementById("aqua5").style.display="block";

    let x= document.getElementsByClassName("fondo2");
    x[10].style.display="none"
    let y= document.getElementsByClassName("fondo2");
    y[11].style.display="block"
    let z= document.getElementsByClassName("image2");
    z[0].style.display="none"

}
function AQUA4(){
    document.getElementById("aqua4").style.display="none";
    document.getElementById("texto").style.display="block";

    
    let x= document.getElementsByClassName("fondo2");
    x[12].style.display="none"
    let y= document.getElementsByClassName("fondo1");
    y[0].style.display="block"

}

function AQUA5(){
    document.getElementById("aqua5").style.display="none";
    document.getElementById("texto").style.display="block";

    
    let x= document.getElementsByClassName("fondo2");
    x[11].style.display="none"
    let y= document.getElementsByClassName("fondo1");
    y[0].style.display="block"

}
//monika

function Regresar(){
    document.getElementById("texto3").style.display="none";
    document.getElementById("mon1").style.display="block";


    let y= document.getElementsByClassName("fondo2");
    y[2].style.display="block"
    let z= document.getElementsByClassName("fondo2");
    z[3].style.display="none"
}

function MON3(){
    document.getElementById("mon1").style.display="none";
    document.getElementById("mon2").style.display="block";

    let x= document.getElementsByClassName("image2");
    x[0].style.display="none"
    let y= document.getElementsByClassName("fondo2");
    y[0].style.display="block"  
    let z= document.getElementsByClassName("fondo2");
    z[2].style.display="none"
}


//Musica
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

//Teclado

// window.onkeydown = p1;
// window.onkeydown = p2;
// window.onkeydown = p3;
// window.onkeydown = p4;
// window.onkeydown = p5;
// window.onkeydown = p6;
// window.onkeydown = p7;
// window.onkeydown = p8;
// window.onkeydown = p9;
// window.onkeydown = p10;
// window.onkeydown = p11;
// window.onkeydown = p12;
// window.onkeydown = p13;
// window.onkeydown = p14;


// function p1() {

// tecla_esc = event.keyCode;
// if (tecla_esc == 32) {
// return Music();
// }
    
// if (tecla_esc == 13) {
// return Music();
        
// }
// }

// function p2() {

// tecla_esc = event.keyCode;
// if (tecla_esc == 32) {
// return piko();
// }
    
// if (tecla_esc == 13) {
// return piko();
        
// }
// }

// function p3() {

// tecla_esc = event.keyCode;
// if (tecla_esc == 32) {
// return piko2();
// }
    
// if (tecla_esc == 13) {
// return piko2();
        
// }
// }

// function p4() {

// tecla_esc = event.keyCode;
// if (tecla_esc == 32) {
// return parte2();
// }
    
// if (tecla_esc == 13) {
// return parte2();
        
// }
// }

// function p5() {

// tecla_esc = event.keyCode;
// if (tecla_esc == 32) {
// return REM1();
// }
    
// if (tecla_esc == 13) {
// return REM1();
        
// }
// }

// function p6() {

// tecla_esc = event.keyCode;
// if (tecla_esc == 32) {
// return REM2();
// }
    
// if (tecla_esc == 13) {
// return REM2();
        
// }
// }

// function p7() {

// tecla_esc = event.keyCode;
// if (tecla_esc == 32) {
// return REM3();
// }
    
// if (tecla_esc == 13) {
// return REM3();
        
// }
// }

// function p8() {

// tecla_esc = event.keyCode;
// if (tecla_esc == 32) {
// return RAP1();
// }
    
// if (tecla_esc == 13) {
// return RAP1();
        
// }
// }

// function p9() {

// tecla_esc = event.keyCode;
// if (tecla_esc == 32) {
// return RAP4();
// }
    
// if (tecla_esc == 13) {
// return RAP4();
        
// }
// }

// function p10() {

// tecla_esc = event.keyCode;
// if (tecla_esc == 32) {
// return RAP5();
// }
    
// if (tecla_esc == 13) {
// return RAP5();
        
// }
// }

// function p11() {

// tecla_esc = event.keyCode;
// if (tecla_esc == 32) {
// return RAP6();
// }
    
// if (tecla_esc == 13) {
// return RAP6();
        
// }
// }

// function p12() {

// tecla_esc = event.keyCode;
// if (tecla_esc == 32) {
// return AQUA1();
// }
    
// if (tecla_esc == 13) {
// return AQUA1();
        
// }
// }

// function p13() {

// tecla_esc = event.keyCode;
// if (tecla_esc == 32) {
// return AQUA4();
// }
    
// if (tecla_esc == 13) {
// return AQUA4();
        
// }
// }

// function p14() {

// tecla_esc = event.keyCode;
// if (tecla_esc == 32) {
// return AQUA5();
// }
    
// if (tecla_esc == 13) {
// return AQUA5();
        
// }
// }

//escape
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

