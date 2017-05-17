      //funcion que muestra un mensaje al hacer click en el boton "Pinchame"

      document.getElementById("demo").addEventListener("click", function(){
      	document.getElementById("demo").innerHTML = "Hola, Mundo";
      });
	//alert("Hello World");

	function cargada(){	
	//window.addEventListener("load", function(){
		alert("La página está cargada");
	}				//  funcion muestra un alert que avisa que la página está cargada

	function ratonEncima() {// función que muestra un alert cuando el mouse está encima del elemento
		document.getElementById("input-text");    
		alert("Estás sobre mí");
		console.log("Estás sobre mí");
	}
	
    function ratonFuera() {// función que muestra un alert cuando el mouse está fuera del elemento
    	document.getElementById("input-text");
    	alert("No estás sobre mí");
    	console.log("No estás sobre mí");
    }

