
/* Holds information pertaining to a client's profile */
class Client
{
    //Still need to add images
    constructor(clientName, email, location, type, rate, description)
    {
        this.clientName=clientName;
        this.clientEmail=email;
        this.location=location;
        this.caseType=type;
        this.rate=rate;
        this.description=description; //Whatever client wants to say
    }
}

var starRating=document.getElementById("starRating");
var clientTemplate=document.getElementById("clientTemplate");
var caseTypeSelect=document.getElementById("caseTypeSelect");
var priceRangeSelect=document.getElementById("priceRangeSelect");
var noResults=document.getElementById("noResults");
var modal=document.getElementById("moreInfoModal");
var reviewModal=document.getElementById("reviewModal");
var modalBox=document.getElementById("modalBox");
var i=0;
//Profile constructor will default to Default.png for the optional image is none is added
var clients=[
    new Client("Billy Jones", "billyjones@aol.com", "1576 Michigan Avenue, Suite 7B, Chicago, IL 60142", "Eviction Law", 100, "Got removed from my property after noise complaints, contract states I should have been given a warning. Would like a lawyer to get me back into the apartment or secure me the cancellation fee stated in the contract."),
    new Client("John Williams", "johnwil@gmail.com", "1927 Orrington Ave, Room 4321, Evanston, IL 60201", "Accident Compensation Law", 100,  "Broke my arm doing construction work, my boss didn't offer me any form of compensation and tells me to be back at work Monday, which would be impossible, or be fired. Would like a lawyer to help me sue for paid leave while I recover."),
    new Client("John Doe", "jdoe@yahoo.com", "1927 Oregon Ave, Room 1234, Oregon City, OR 12345", "Accident Compensation Law", 100,  "Would like a lawyer to help settle damages I owe following an injury to someone as a result of a SWATing incident in which I was complicit.")
];

var clientProfiles=[];

function toTheContactPage()
{
	alert("Taking you to the contact page...");
}

//The following adapted from https://www.w3schools.com/howto/howto_css_modals.asp

function displayModal()
{
    //Hackiest thing I've ever done
    moreInfoModal.style.display="block";
}

function reviewyModal()
{
    //Hackiest thing I've ever done
    
    reviewModal.style.display="block";
}

function closeModal()
{
    moreInfoModal.style.display="none";
}
function closeReviewModal()
{
    reviewModal.style.display="none";
}

window.onclick = function(event) {
    if (event.target == moreInfoModal) {
        moreInfoModal.style.display = "none";
    }
}
