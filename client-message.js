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
		document.getElementById("name").innerHTML = "Sara Baxter";
        firstThingSaid.innerHTML="Hi Phil, I am available to talk about your case on Thursday at 2pm. Does that work?";
        responseMessage.innerHTML=yourReply0;
        lastThingSaid.innerHTML="Great. Talk to you then!";
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
		document.getElementById("name").innerHTML = "Samuel Clearwater";
        firstThingSaid.innerHTML="Hello Phil, I hope I was able to help with your case.";
        responseMessage.innerHTML=yourReply1;
		z.style.display = "block";
        lastThingSaid.innerHTML="Good luck with everything!";
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
		document.getElementById("name").innerHTML = "Carina Thompson";
        firstThingSaid.innerHTML="Hi Phil, I forgot to ask you, what is your email? I wanted to send over a document.";
        responseMessage.innerHTML=yourReply2;
        lastThingSaid.innerHTML="Excellent, thank you!";
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
		document.getElementById("name").innerHTML = "Jenna DeMarco";
        firstThingSaid.innerHTML="Can we do the phone call at 5pm Wednesday?";
        responseMessage.innerHTML=yourReply3;
        lastThingSaid.innerHTML="You can reach me at 556-556-5556. Looking forward to our conversation.";
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
		document.getElementById("name").innerHTML = "Raj Patel";
        firstThingSaid.innerHTML="Hi Phil, just wanted to say it was a pleasure working with you. Congratulations on winning the case.";
        responseMessage.innerHTML=yourReply4;
        lastThingSaid.innerHTML="Happy to help anytime.";
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
