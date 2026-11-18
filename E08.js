const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
		
function calculo(){
	let dni = document.querySelector("#dni").value;
	let resultado = 'El DNI ha de ser un número de 9 cifras';

	if (!isNaN(Number(dni))) {
		if (dni > 9999999) {
			let posicion = dni % 23;
			let letra = letras.substring(posicion, posicion + 1);
			resultado = 'La letra del DNI es: ' + dni + letra;
		}		
	} 

	document.querySelector("#resultado").innerHTML = resultado;
	
}