function cambiarDibujo(){
	let img = document.querySelector("#imagenes").value;
	let nomImatge = '';
	switch (img) {
	  case "arbol":
		nomImatge = 'arbol.png';
		break;
	  case "abeja":
		nomImatge = 'abeja.png';
		break;
	  case "flor":
		nomImatge = 'flor.png';
		break;	
	  default:
		return				
	}
	
	document.querySelector("#imagen").src = "imagenes/" + nomImatge;
}