function calculo(){
	let base = document.querySelector("#base").value;
	let exponente = document.querySelector("#exponente").value;
	let resultado = '';

	if(!isNaN(Number(base))) {
		
		if(!isNaN(Number(exponente))) {
			let r = 1;		
			for(let i=0; i<exponente; i++) {
					r = r * base;
			}
			resultado = 'Resultado: ' + r;
		} else {
			resultado = exponente + ' no es un número';	
		}
		

	} else {
		resultado = base + ' no es un número';
	}
	
	
	document.querySelector("#resultado").innerHTML = resultado;
}