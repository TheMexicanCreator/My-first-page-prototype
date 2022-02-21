function checkPassword(inputtxt) {
var myInput = document.getElementById("pass1");
var myInput = document.getElementById("pass2");
if(inputtxt.value.match(passw)) { 
	alert('Correct, try another...')
	return true;
}else { 
	alert('Wrong...!')
	return false;
}
}
