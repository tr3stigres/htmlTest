let textNumeros = '';
let suma = 0;

for(let i= 0; i<1000; i++){
	if ((i%23) === 0) {
		textNumeros += i + ", ";
		suma += i;
	}
}

document.querySelector("#descripcion").innerHTML = textNumeros.slice(0, -2) + '<br /><br />Que sumados dan: ' + suma;
