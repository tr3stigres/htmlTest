const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
		
function calculo(){
	let dni = document.querySelector("#dni").value;
	let posicion = dni % 23;
	let letra = letras.substring(posicion, posicion + 1);
	document.querySelector("#resultado").value = dni + letra;
}