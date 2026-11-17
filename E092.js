function repintar(color){
	
	let zona = document.querySelector('input[name="zona"]:checked').value;
	let colorLetras = '#000000';
	
	if (zona === 'fondo') {
		
		document.body.style.backgroundColor = color;
		if (color === '#000000' || color === '#0000FF') {
			colorLetras = '#FFFFFF';
		}
		document.body.style.color = colorLetras;
	} else {
		document.querySelector("#cuadro").style.background = color;
	}

}