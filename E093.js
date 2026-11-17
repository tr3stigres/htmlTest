let nombre = prompt ('¿Cómo te llamas?', '');
let edad = prompt ('¿Qué edad tienes?', 0);
alert(montarFrase(nombre, edad));

function MostrarMensaje() {
	let nom = document.querySelector('#nom').value;
	let edat = document.querySelector('#edat').value;
	document.write('<p>' + montarFrase(nom, edat) + '</p>');	
}

function montarFrase (nombre, edad) {
	let dias = edad * 365;
	return 'Hola ' + nombre + ',\nLlevas vividos ' + dias + ' días.'
}
