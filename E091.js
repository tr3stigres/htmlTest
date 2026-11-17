function repintar(color){
	
	let colorLetras = '#000000';
	document.body.style.backgroundColor = color;
	
	if (color === '#000000' || color === '#0000FF') {
		colorLetras = '#FFFFFF';
	}
	document.body.style.color = colorLetras;

}