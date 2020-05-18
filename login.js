

function check() {
	var uname = document.getElementById('user').value;
	var psw = document.getElementById('pass').value;
	if(uname === "philasmith"){
		if(psw === "client"){
			return window.location.href='client-profile.html';
		}
		else{
			return window.location.href='loginbad.html';
		}
	}
	else{
	   if(uname === "sbaxter"){
	   	if(psw === "lawyer"){
			return window.location.href='lawyer-profile.html';
		}
	   	else{
			return window.location.href='loginbad.html';
		}
		}
		else{
			return window.location.href='loginbad.html';
		}
	}
}