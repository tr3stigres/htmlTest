const palabras = ["Mariposa","Cola","Ventana","Elefante","Caramelo","Cocinero","Cabeza","Zapato","Fósforos","Ayuntamiento","Rosa","Ornitorrinco","Maleta","Avión"];
let juego = Array();
let fallosPermitidos = 7;
let fallos = 0;

document.addEventListener("DOMContentLoaded", function () {  	
	reiniciar();
});

function seleccionarPalabra() {
	fallos = fallosPermitidos;
	juego = Array();	
	let palabraSeleccionada = palabras[Math.floor(Math.random() * palabras.length)];
	console.log(palabraSeleccionada);
	let el = document.querySelector('#juego');
	let posiciones = el.querySelectorAll('.letra');
	let i=0;


	posiciones.forEach(e => {
		if(i < palabraSeleccionada.length) {
			juego[i] = Array();
			juego[i][0]=e.id;  // elemento donde se muestra
			juego[i][1]=palabraSeleccionada.substring(i, i+1);  //letra asignada a ese elemento
			juego[i][2]=false; //Si el elemento está acertado o no
			document.querySelector('#' + e.id).style.borderColor = "#000000";
			i+=1;
		}		
		e.innerHTML = '';
	});	
}

function jugar() {	
	let resupesta = document.querySelector('#respuesta');
	let nuevaLetra = document.querySelector('#nuevaLetra').value.toLowerCase();
	resupesta.innerHTML = '';

	if((nuevaLetra>='a' && nuevaLetra<='z') || nuevaLetra==='ñ'  || nuevaLetra==='á' || nuevaLetra==='é' || nuevaLetra==='í' || nuevaLetra==='ó' || nuevaLetra==='ú') {
		let i = 0;
		let acierto = false;
		juego.forEach(e=>{
			if(validarLetra(nuevaLetra, e)){
				document.querySelector('#' + e[0]).innerHTML = e[1];
				e[2] = true;
				acierto =true;
			}
			i+=1;
		});
		
		let r = '';
		if (acierto) {
			r = '¡¡Acertaste!!';
		} else {
			r = '¡Fallaste!';
			fallos -= 1;
			document.querySelector("#imagen").src = "imagenes/fallo_" + fallos + ".png";
		}
		document.querySelector('#nuevaLetra').value = '';
		respuesta.innerHTML = r + ' (' + nuevaLetra + ')';
	} else {
		respuesta.innerHTML = 'Has de introducir una letra.';
	}

	document.querySelector('#nuevaLetra').focus();
	validarPartida();
}

function validarLetra (letraUsuario, posiconComparada) {

	let vocales=[['á','a'], ['é','e'], ['í','i'], ['ó','o'], ['ú','u']]
	let letraPalabra = posiconComparada[1].toLowerCase();


	vocales.forEach(e=> {
		if (e[0] === letraUsuario) {
			letraUsuario = e[1];
		}
	});

	vocales.forEach(e=> {
		if (e[0] === letraPalabra) {
			letraPalabra = e[1];
		}
	});
	
	
	return letraUsuario === letraPalabra && posiconComparada[2] === false;
}

function validarPartida(){
	
	if (fallos === 0) {
		finalPartida('¡¡¡Has perdido!!!');
		let i=0;
		juego.forEach(e=>{
			document.querySelector('#' + e[0]).innerHTML = e[1];
			i+=1;
		});
	} else {
		let i = 0;
		let ganar = true;
		juego.forEach(e=>{
			if(e[2] !== ganar){
				ganar = false;
			}
			i+=1;
		});

		if (ganar) {
			finalPartida('¡¡¡Has ganado!!!');
		}
	}
}

function reiniciar() {
	let resupesta = document.querySelector('#respuesta');
	document.querySelector('#jugar').disabled = false;
	document.querySelector('#nuevaLetra').disabled = false;
	document.querySelector('#reiniciar').disabled = true;
	seleccionarPalabra();
	document.querySelector("#imagen").src = "imagenes/fallo_" + fallos + ".png";
	document.querySelector('#nuevaLetra').focus();
	respuesta.innerHTML = 'Empieza el juego';
}

function finalPartida(mensaje){
	let resupesta = document.querySelector('#respuesta');
	document.querySelector('#jugar').disabled = true;
	document.querySelector('#nuevaLetra').disabled = true;
	document.querySelector('#reiniciar').disabled = false;	
	respuesta.innerHTML = mensaje;
}





