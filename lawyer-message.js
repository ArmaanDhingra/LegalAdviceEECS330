var reply = document.getElementById("reply");
var button = document.getElementById("send_button");
var y = document.getElementById("final_div");
var contacts = [];
var x = document.getElementById("response_div");
var z = document.getElementById("first_div");
var firstThingSaid=document.getElementById("firstThingSaid");
var lastThingSaid=document.getElementById("lastThingSaid");
var responseMessage=document.getElementById("response_message");
var replied0, replied1, replied2, replied3, replied4 = false;
var yourReply0, yourReply1, yourReply2, yourReply3, yourReply4 ="";
var currentChat=0;

for (var i = 0; i < 5; i++) {
    contacts[i] = document.getElementById("" + i);
	}

toggle_button();
function loadmessage() {

	if (reply.value !== "") {
	switch(currentChat)
    {
        case 0:
            replied0=true;
            yourReply0=reply.value;
            responseMessage.innerHTML = reply.value;
            break;
        case 1:
            replied1=true;
            yourReply1=reply.value;
            responseMessage.innerHTML = reply.value;
            break;
        case 2:
            replied2=true;
            yourReply2=reply.value;
            responseMessage.innerHTML = reply.value;
            break;
        case 3:
            replied3=true;
            yourReply3=reply.value;
            responseMessage.innerHTML = reply.value;
            break;
        case 4:
            replied4=true;
            yourReply4=reply.value;
            responseMessage.innerHTML = reply.value;
            break;
    }
    toggle_button();
    x.style.display = "block";
	setTimeout(finalmessage, 2000);
	reply.value = "";
	}

}

function finalmessage() {
	y.style.display = "block";
	button.disabled = true;
}

function toggle_button() {
    var repliedToThisChatAlready=false;
    switch (currentChat)
    {
        case 0:
            if (replied0) repliedToThisChatAlready=true;
            break;
        case 1:
            if (replied1) repliedToThisChatAlready=true;
            break;
        case 2:
            if (replied2) repliedToThisChatAlready=true;
            break;
        case 3:
            if (replied3) repliedToThisChatAlready=true;
            break;
        case 4:
            if (replied4) repliedToThisChatAlready=true;
            break;
    }
		if (repliedToThisChatAlready || reply.value === "") {
			button.disabled = true;
            button.style.backgroundColor="grey";
		}
		else {
			button.disabled = false;
            button.style.backgroundColor="#006699";
		}
	}

function change_chat(id) {
	for (var j = 0; j < 5; j++) {
		contacts[j].style.background = "white";
	}
	document.getElementById(id).style.background = "lightblue";

	if (id == 0) {
        currentChat=0;
		document.getElementById("name").innerHTML = "Phil Smith";
        firstThingSaid.innerHTML="Would it be possible to meet Tuesday at 2pm?";
        responseMessage.innerHTML=yourReply0;
        lastThingSaid.innerHTML="Great. See you then!";
		z.style.display = "block";
		if (replied0) {
		y.style.display = "block"
		x.style.display = "block";
	}
        else{
            y.style.display = "none"
		  x.style.display = "none"; 
        }
    }
	if (id == 1) {
        currentChat=1;
		document.getElementById("name").innerHTML = "Patrick Johnson";
        firstThingSaid.innerHTML="Hi Sara, just wanted to thank you for answering my questions yesterday!";
        responseMessage.innerHTML=yourReply1;
		z.style.display = "block";
        lastThingSaid.innerHTML="I appreciate your hard work!";
		if (replied1) {
		y.style.display = "block";
		x.style.display = "block";
        }
                else{
            y.style.display = "none"
		  x.style.display = "none"; 
        }
	}
	if (id == 2) {
        currentChat=2;
		document.getElementById("name").innerHTML = "Richard Altman";
        firstThingSaid.innerHTML="It was a pleasure working with you Sara! You were a big help.";
        responseMessage.innerHTML=yourReply2;
        lastThingSaid.innerHTML="Hope you have a great rest of your day!";
		z.style.display = "block";
		if (replied2) {
		y.style.display = "block";
		x.style.display = "block";
        }
                else{
            y.style.display = "none"
		  x.style.display = "none"; 
        }
	}
	if (id == 3) {
        currentChat=3;
		document.getElementById("name").innerHTML = "Elizabeth Gordon";
        firstThingSaid.innerHTML="Can we do the phone call at 5pm tomorrow?";
        responseMessage.innerHTML=yourReply3;
        lastThingSaid.innerHTML="You can reach me at 555-555-5555. Talk to you then!";
		z.style.display = "block";
		if (replied3) {
		y.style.display = "block";
		x.style.display = "block";
	}
                else{
            y.style.display = "none"
		  x.style.display = "none"; 
        }
    }
	if (id == 4) {
        currentChat=4;
		document.getElementById("name").innerHTML = "Joseph Smith";
        firstThingSaid.innerHTML="Hi Sara, I found your profile through this site. Could we set up a phone call to talk more about my case?";
        responseMessage.innerHTML=yourReply4;
        lastThingSaid.innerHTML="Excellent, I'll be in touch!";
        z.style.display = "block";
		if (replied4) {
		y.style.display = "block";
		x.style.display = "block";
	}
                else{
            y.style.display = "none"
		  x.style.display = "none"; 
        }


}
    toggle_button();
}
