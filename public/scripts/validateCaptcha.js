//Usado en el registro para validar si el captcha es correcto o no (REVISAR).
validateCaptcha= function() {
	var response = grecaptcha.getResponse();
	if(response.length == 0){
		window.location.replace("https://www.servme.es/registro")
		alert('Error: Captcha no verificado.')
		//Funciona muy asi asi, se debe revisar xD.
	}
}