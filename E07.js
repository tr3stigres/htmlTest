function calculo(){
	let base = document.querySelector("#base").value;
	let exponente = document.querySelector("#exponente").value;
	let resultado = 1;
	
	for(let i=0; i<exponente; i++) {
			resultado = resultado * base;
	}
	
	document.querySelector("#resultado").value = resultado;
}