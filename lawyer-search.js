
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


var clientTemplate=document.getElementById("clientTemplate");
var caseTypeSelect=document.getElementById("caseTypeSelect");
var priceRangeSelect=document.getElementById("priceRangeSelect");
var noResults=document.getElementById("noResults");
var modal=document.getElementById("moreInfoModal");
var modalBox=document.getElementById("modalBox");
var i=0;
//Profile constructor will default to Default.png for the optional image is none is added
var clients=[
    new Client("Phil Smith", "philsmith@aol.com", "1234 Clark Street, Evanston, IL 60901", "Accident Compensation", 50, "Seeking assistance to help recieve the money I deserve after being injured on the job."),
    new Client("Delia Rogers", "drog@gmail.com", "1576 Los Robles Avenue, Suite 5, Albuquerque, NM 12345", "Intellectual Property Law", 300, "Desperately trying to get my patent approved. I need any help I can get!"),
    new Client("Wallace Caldwell", "wallacecaldwell@yahoo.com", "7373 Ford Ave, 19b, Seattle, Washington 12345", "Accident Compensation", 50, "Broke my wrist on the job and my boss is not willing to give me paid leave while I recover. I'm so disappointed at how I am being treated and I need the law on my side."),
    new Client("Sadie Stevens", "sadieohsadie@hotmail.com","1676 Movie Avenue, Hollywood, CA 14335", "Immigration Law", 0, "I can't offer any money, but I'm hoping to find a lawyer who could help advise me on the citizenship process. I have a family member immigrating from Poland and we're both unsure about the process."),
    new Client("Lee Walker", "lwalker@gmail.com", "505 Main Street, Rochester, New Hampshire 57868", "Eviction Law", 200, "My landlord has been violating my contract, I need a lawyer to represent me."),
    new Client("Gary Riviera", "welovepets@aol.com", "505 Main Street, Rochester, New Hampshire 57868", "Eviction Law", 50, "Seeking a lawyer who could help me with an eviction case. Will provide more details upon contact."),
    new Client("Stanley Bennett", "sbennett@aol.com","1234 Abbey Road, Suite 19b, New York, New York 30402", "Accident Compensation", 50, "Injured on the workplace and require legal assistance at a reduced price."),
    new Client("Marianne Fowler", "notsofowl@yahoo.com", "1927 Orrington Ave, Room 1234, Evanston, IL 60201", "Intellectual Property Law", 100,  "Individual stepped over my copyright and need a lawyer who can advise me on my current options."),
    new Client("Isabel Paul", "izzypaul@gmail.com", "1927 Orrington Ave, Room 4321, Evanston, IL 60201", "Accident Compensation Law", 100,  "Broke my arm doing construction work, my boss didn't offer me any form of compensation and tells me to be back at work Monday, which would be impossible, or be fired. Would like a lawyer to help me sue for paid leave while I recover."),
    new Client("Cameron Bridges", "cbridges@yahoo.com", "1927 Oregon Ave, Room 1234, Oregon City, OR 12345", "Accident Compensation Law", 100,  "Would like a lawyer to help settle damages I owe following an injury on a bus ride."),
    new Client("Tom Ballard", "tommyballard@yahoo.com", "1234 Main Street, Room 1234, Loyola, IL 60201", "Immigration Law", 0,  "Will provide more details upon contact. It's a really bad situation but I promise we can work through it.")
];

var clientProfiles=[];

for (var j=0; j<clients.length; j++)
{
    createClientProfile(clients[j]);
}

filterResults();


//Populates the client profiles array. Pass in an instance of a client
function createClientProfile(clientToMake){
    var clone=clientTemplate.cloneNode(true);
    clone.id=i++;
    clone.querySelector("#client-name").innerHTML=clientToMake.clientName;
    clone.querySelector("#client-location").innerHTML=clientToMake.location;
    clone.querySelector("#client-type").innerHTML=clientToMake.caseType;
    clone.querySelector("#client-email").innerHTML=clientToMake.clientEmail;
    if (clientToMake.rate==0)
        clone.querySelector("#client-rate").innerHTML="Seeks Pro Bono Services";
    else clone.querySelector("#client-rate").innerHTML="Offered Rate: $"+clientToMake.rate+"/hr";
    //clone.querySelector("#client-school-name").innerHTML=clientToMake.schoolName;
    //clone.querySelector("#client-school-year").innerHTML="Class of "+clientToMake.schoolYear;
    clientProfiles.push(clone);
    //clientTemplate.parentNode.appendChild(clone);
}

function populateModal(clientSelected){
    modalBox.querySelector("#modal-client-name").innerHTML=clientSelected.clientName;
    modalBox.querySelector("#modal-client-location").innerHTML=clientSelected.location;
    modalBox.querySelector("#modal-type").innerHTML=clientSelected.caseType;
    modalBox.querySelector("#modal-client-email").innerHTML=clientSelected.clientEmail;
    if (clientSelected.rate==0)
        modalBox.querySelector("#modal-client-rate").innerHTML="Seeks Pro Bono Services";
    else modalBox.querySelector("#modal-client-rate").innerHTML="$"+clientSelected.rate+"/hr";
    modalBox.querySelector("#modal-description").innerHTML="\""+clientSelected.description+"\"";
}

function filterResults()
{
    //This algorithm is certainly inefficient for large databases,
    //but since for this course the database is small
    //it will suffice
    noResults.style.display="none";
    for (var q=0; q<clientProfiles.length; q++)
    {
        //Wipe the search results
        if (clientProfiles[q].parentNode==clientTemplate.parentNode) //i.e. check if the profile is currently showing
            clientTemplate.parentNode.removeChild(clientProfiles[q]);
    }
    var numItemsShown=0;
    //Add only the ones that fit
    for (var k=0; k<clientProfiles.length; k++)
    {
        var caseType=caseTypeSelect.options[caseTypeSelect.selectedIndex].value;
        var maxPrice=priceRangeSelect.options[priceRangeSelect.selectedIndex].value;
        if (caseType=="any" && maxPrice=="any")
        {
            clientTemplate.parentNode.appendChild(clientProfiles[k]);
            numItemsShown++;
        }
        else
        {
            var check1;
            if (caseType=="any") check1=true;
            else check1=(clients[k].caseType==caseTypeSelect.options[caseTypeSelect.selectedIndex].value);
            var check2;
            if (maxPrice=="any") check2=true;
            else check2=(clients[k].rate<=parseInt(priceRangeSelect.options[priceRangeSelect.selectedIndex].value));
            if (check1 && check2)
            {
                clientTemplate.parentNode.appendChild(clientProfiles[k]);
                numItemsShown++;
            }
        }
    }
    //console.log(numItemsShown);
    if (numItemsShown==0) noResults.style.display="inline";
}

function toTheContactPage()
{
	alert("Taking you to the contact page...");
}

//The following adapted from https://www.w3schools.com/howto/howto_css_modals.asp

function displayModal(el)
{
    //Hackiest thing I've ever done
    var indexNum=el.parentElement.parentElement.id;
    //console.log(indexNum);
    populateModal(clients[parseInt(indexNum)]);
    moreInfoModal.style.display="block";
}

function closeModal()
{
    moreInfoModal.style.display="none";
}

window.onclick = function(event) {
    if (event.target == moreInfoModal) {
        moreInfoModal.style.display = "none";
    }
}
