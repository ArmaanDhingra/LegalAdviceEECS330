/* Holds information pertaining to a lawyer's profile */
class Lawyer
{
    //Still need to add images
    constructor(lawyerName, picture, logo, location, lawFirm, yearsPracticing, specialty, rate, schoolName, schoolYear, currentCityState, description, rating)
    {
        this.lawyerName=lawyerName;
        this.picture=picture;
        this.logo=logo;
        this.location=location;
        this.lawFirm=lawFirm;
        this.yearsPracticing=yearsPracticing;
        this.specialty=specialty;
        this.rate=rate;
        this.schoolName=schoolName;
        this.schoolYear=schoolYear;
        this.currentCityState=currentCityState;
        this.description=description; //Whatever lawyer wants to say
        this.rating=rating; //A number between 1 and 5
    }
}


var lawyerTemplate=document.getElementById("lawyerTemplate");
var caseTypeSelect=document.getElementById("caseTypeSelect");
var priceRangeSelect=document.getElementById("priceRangeSelect");
var yearRangeSelect=document.getElementById("yearRangeSelect");
var nameSearch=document.getElementById("nameSearch");
var noResults=document.getElementById("noResults");
var infoModal=document.getElementById("moreInfoModal");
var modalBox1=document.getElementById("modalBox1");
var reviewModal=document.getElementById("reviewModal");
var modalBox2=document.getElementById("modalBox2");
var i=0;
var currentlySelected=-1;
//Profile constructor will default to Default.png for the optional image is none is added
var lawyers=[
    new Lawyer("Billy Jones", "images/lawyerSample.png", "images/crest.png","1576 Michigan Avenue, Suite 7B, Chicago, IL 60142", "Gamble Law Firm", "44", "Eviction Law", 150, "Northwestern University", "1963", "Chicago, IL", "I have over 40 years of experience helping clients achieve the rights they deserve.",5),
    new Lawyer("Sara Baxter", "images/sara_baxter.jpg", "images/Default.png","1576 Los Robles Avenue, Suite 5, Albuquerque, NM 12345", "No Current Law Firm", "15", "Intellectual Property Law", 0, "Georgetown University", "1991", "Albuquerque, NM", "I work independently to place the focus on my clients.",4),
    new Lawyer("Raj Patel", "images/lawyerSample.png", "images/firm1.png","7373 Ford Ave, 19b, Seattle, Washington 12345", "Patel & Patel Law Firm", "16", "Accident Compensation", 55, "Harvard University", "2001", "Seattle, WA", "I joined my father's law firm because I share his belief in providing justice to all.",4),
    new Lawyer("Samuel Clearwater", "images/lawyerSample.png", "images/firm2.png","1676 Movie Avenue, Hollywood, CA 14335", "Business Law Solutions", "27", "Immigration Law", 85, "University of California, Davis", "1980", "Hollywood, CA", "You can trust Business Law Solutions to provide the best services possible.",2),
    new Lawyer("P.K. Withers", "images/lawyerSample.png", "images/firm3.png","505 Main Street, Rochester, New Hampshire 57868", "DaBest & DaBest Law Firm", "13", "Eviction Law", 125, "University of Chicago", "2000", "Rochester, NH", "Nothing but the best with DaBest!",3),
    new Lawyer("Bill Jenkins", "images/lawyerSample.png", "images/firm4.png","505 Main Street, Rochester, New Hampshire 57868", "DaBest & DaBest Law Firm", "3", "Eviction Law", 200, "University of Costa Rica", "2011", "Rochester, New Hampshire", "Nothing but the best with DaBest!",4),
    new Lawyer("Carina Thompson", "images/lawyerSample.png", "images/firm5.png","1234 Abbey Road, Suite 19b, New York, New York 30402", "Goldwater Law Firm", "22", "Accident Compensation", 0, "American University", "1991", "New York, NY", "I've worked with Goldwater for over 20 years to provide clients with the care and respect they deserve.",5),
    new Lawyer("Jenna DeMarco", "images/lawyerSample.png", "images/firm6.png","1927 Orrington Ave, Room 1234, Evanston, IL 60201", "Wildcat Law Firm", "6", "Intellectual Property Law", 45, "Northwestern University", "2007", "Evanston, IL", "Go 'Cats!",5)
];

var reviews=[
    ["★★★★★ Billy Jones is the best lawyer in town!", "★★★★★ Mr. Jones has helped me successfully sue my landlord. I am so thankful for his help."],
    ["★★★★★ Sara provided me with useful advice for my case!", "★★★☆☆ Although Sara was so helpful, I wish she was more punctual with answering emails. I once had to wait 3 days for a response, and that was especially frustrating."],
    ["★★★☆☆ Mr. Patel could not help me win my case. He tried his best though, so I do appreciate his effort.", "★★★★★ Raj got me over $25,000 for my accident claim! Wow! So thankful he was on my side."],
    ["★☆☆☆☆ Was rude to me beyond belief. Please avoid.", "★★★☆☆ Mr. Clearwater is helpful, just really not a nice guy."],
    ["★★☆☆☆ I hate to say it, but Mr. Withers is not DaBest. Didn't do a great job of handling my case. He was fast at answering messages though, which I appreciated.", "★★★★☆ So happy I found Mr. Withers. He seems to stumble over his words a lot, but otherwise he is a very smart man. Successfully got my apartment back."],
    ["★★★★☆ Mr. Jenkins is a lifesaver!", "★★★★☆ Mr. Jenkins represented me in my case against my landlord and, let me tell you, this man has experience. If you run into any problems with your lease, he is the man to call."],
    ["★★★★★ Carina is a true professional. I got my money and my life back.", "★★★★★ Mrs. Thompson is truly a lifesaver. She is so passionae about her work, and she truly cares about her clients!"],
    ["★★★★★ I helped get my patent thanks to Jenna and the great folks at Wildcat Law!","★★★★★ Ms. DeMarco is such a fantastic lawyer!"]
];


var lawyerProfiles=[];

for (var j=0; j<lawyers.length; j++)
{
    createLawyerProfile(lawyers[j]);
}

filterResults();


//Populates the lawyer profiles array. Pass in an instance of a Lawyer
function createLawyerProfile(lawyerToMake){
    var clone=lawyerTemplate.cloneNode(true);
    clone.id=i++;
    clone.querySelector("#profile-picture").src=lawyerToMake.picture;
    clone.querySelector("#lawyer-logo").src=lawyerToMake.logo;
    //console.log(clone.querySelector("#profile-picture").style.src);
    clone.querySelector("#lawyer-name").innerHTML=lawyerToMake.lawyerName;
    clone.querySelector("#lawyer-location").innerHTML=lawyerToMake.location;
    clone.querySelector("#lawyer-firm").innerHTML=lawyerToMake.lawFirm;
    if(lawyerToMake.yearsPracticing == 1){
        clone.querySelector("#lawyer-years-practicing").innerHTML="Practicing for "+lawyerToMake.yearsPracticing+" year";
    }
    else{clone.querySelector("#lawyer-years-practicing").innerHTML="Practicing for "+lawyerToMake.yearsPracticing+" years";}
    clone.querySelector("#lawyer-type").innerHTML=lawyerToMake.specialty;
    if (lawyerToMake.rate==0)
        clone.querySelector("#lawyer-rate").innerHTML="Offers Pro Bono Services";
    else clone.querySelector("#lawyer-rate").innerHTML="Average rate: $"+lawyerToMake.rate+"/hr";
    var starRating=clone.querySelector("#rating");
    switch (lawyerToMake.rating)
            {
        case 1:
            starRating.innerHTML="★☆☆☆☆";
            break;
        case 2:
            starRating.innerHTML="★★☆☆☆";
            break;
        case 3:
            starRating.innerHTML="★★★☆☆";
            break;
        case 4:
            starRating.innerHTML="★★★★☆";
            break;
        case 5:
            starRating.innerHTML="★★★★★";
            break;
        default:
            starRating.innerHTML="★★★☆☆";
    }
    //clone.querySelector("#lawyer-school-name").innerHTML=lawyerToMake.schoolName;
    //clone.querySelector("#lawyer-school-year").innerHTML="Class of "+lawyerToMake.schoolYear;
    lawyerProfiles.push(clone);
    //lawyerTemplate.parentNode.appendChild(clone);
}

function populateModal(lawyerSelected){
    modalBox1.querySelector("#modal-profile-picture").src=lawyerSelected.picture;
    modalBox1.querySelector("#modal-lawyer-name").innerHTML=lawyerSelected.lawyerName;
    modalBox1.querySelector("#modal-lawyer-firm").innerHTML=lawyerSelected.lawFirm;
    modalBox1.querySelector("#modal-lawyer-type").innerHTML=lawyerSelected.specialty;
    modalBox1.querySelector("#modal-lawyer-years-practicing").innerHTML="Practicing for "+lawyerSelected.yearsPracticing+" years";
    if (lawyerSelected.rate==0)
        modalBox1.querySelector("#modal-lawyer-rate").innerHTML="Offers Pro Bono Services";
    else modalBox1.querySelector("#modal-lawyer-rate").innerHTML="Average rate: $"+lawyerSelected.rate+"/hr";
    modalBox1.querySelector("#modal-city-state").innerHTML="Currently Practicing in "+lawyerSelected.currentCityState;
    modalBox1.querySelector("#modal-description").innerHTML="\""+lawyerSelected.description+"\"";
    modalBox1.querySelector("#modal-school-name").innerHTML=lawyerSelected.schoolName+",";
    modalBox1.querySelector("#modal-school-year").innerHTML=lawyerSelected.schoolYear;
}

function addReviews(lawyerSelected){
    var reviewModalContent=document.getElementById("reviewModalContent");
    //Wipe whatever reviews are already stored there
    var currentReviews=reviewModalContent.getElementsByClassName("review");
    var numCurrentReviews=currentReviews.length;
    for (var oldRev=0; oldRev<numCurrentReviews; oldRev++)
    {
        reviewModalContent.removeChild(currentReviews[0]);
    }
    for (var revNum=0; revNum<lawyerSelected.length; revNum++)
    {
        var line=document.createElement("HR");
        line.className="review";
        reviewModalContent.appendChild(line);
        var review=document.createElement("DIV");
        review.innerHTML=lawyerSelected[revNum];
        review.className="review";
        reviewModalContent.appendChild(review);

        //document.getElementById("review1").innerHTML=lawyerSelected[0];
        //document.getElementById("review2").innerHTML=lawyerSelected[1];
    }
}

function filterResults()
{
    //This algorithm is certainly inefficient for large databases,
    //but since for this course the database is small
    //it will suffice
    noResults.style.display="none";
    for (var q=0; q<lawyerProfiles.length; q++)
    {
        //Wipe the search results
        if (lawyerProfiles[q].parentNode==lawyerTemplate.parentNode) //i.e. check if the profile is currently showing
            lawyerTemplate.parentNode.removeChild(lawyerProfiles[q]);
    }
    var numItemsShown=0;
    //Add only the ones that fit
    for (var k=0; k<lawyerProfiles.length; k++)
    {
        var caseType=caseTypeSelect.options[caseTypeSelect.selectedIndex].value;
        var maxPrice=priceRangeSelect.options[priceRangeSelect.selectedIndex].value;
        var years=yearRangeSelect.options[yearRangeSelect.selectedIndex].value;
        if (caseType=="any" && maxPrice=="any" && years=="any")
        {
            if (lawyers[k].lawyerName.toLowerCase().includes(nameSearch.value.toLowerCase()))
            {
                lawyerTemplate.parentNode.appendChild(lawyerProfiles[k]);
                numItemsShown++;
            }
        }
        else
        {
            var check1;
            if (caseType=="any") check1=true;
            else check1=(lawyers[k].specialty==caseTypeSelect.options[caseTypeSelect.selectedIndex].value);
            var check2;
            if (maxPrice=="any") check2=true;
            else check2=(lawyers[k].rate<=parseInt(priceRangeSelect.options[priceRangeSelect.selectedIndex].value));
            var check3;
            if (years=="any") check3=true;
            else check3=(lawyers[k].yearsPracticing>=parseInt(yearRangeSelect.options[yearRangeSelect.selectedIndex].value));
            if (check1 && check2 && check3)
            {
                if (lawyers[k].lawyerName.toLowerCase().includes(nameSearch.value.toLowerCase()))
                {
                    lawyerTemplate.parentNode.appendChild(lawyerProfiles[k]);
                    numItemsShown++;
                }
            }
        }
    }
    //console.log(numItemsShown);
    if (numItemsShown==0) noResults.style.display="inline";
}

//The following adapted from https://www.w3schools.com/howto/howto_css_modals.asp

function displayInfoModal(el)
{
    //Hackiest thing I've ever done
    var indexNum=el.parentElement.parentElement.parentElement.id;
    populateModal(lawyers[parseInt(indexNum)]);
    infoModal.style.display="block";
}

function displayReviewModal(el)
{
    //Hackiest thing I've ever done
    var indexNum=el.parentElement.parentElement.parentElement.parentElement.id;
    addReviews(reviews[parseInt(indexNum)]);
    reviewModal.style.display="block";
    currentlySelected=indexNum;
}


function closeInfoModal()
{
    infoModal.style.display="none";
}

function closeReviewModal()
{
    reviewModal.style.display="none";
    //document.getElementById("reviewTextarea").value="";
}

function addReview(el)
{
    var newReview="";
    if (document.getElementById("rating1").checked === true)
        newReview=newReview+"★☆☆☆☆";
    else if (document.getElementById("rating2").checked === true)
        newReview=newReview+"★★☆☆☆";
    else if (document.getElementById("rating3").checked === true)
        newReview=newReview+"★★★☆☆";
    else if (document.getElementById("rating4").checked === true)
        newReview=newReview+"★★★★☆";
    else if (document.getElementById("rating5").checked === true)
        newReview=newReview+"★★★★★";
    else{
        alert("Please enter a star rating for your review.")
        return;
    }
    newReview=newReview+" "+document.getElementById("reviewTextarea").value;
    reviews[currentlySelected].push(newReview);
    document.getElementById("reviewTextarea").value="";
    document.getElementById("rating1").checked = false;
    document.getElementById("rating2").checked = false;
    document.getElementById("rating3").checked = false;
    document.getElementById("rating4").checked = false;
    document.getElementById("rating5").checked = false;
    document.getElementById("reviewSubmitButton").disabled=true;
    addReviews(reviews[currentlySelected]);
}

function updateSubmitButton()
{
    if (document.getElementById("reviewTextarea").value==="")
    {
       document.getElementById("reviewSubmitButton").disabled=true;
    }
    else document.getElementById("reviewSubmitButton").disabled=false;
}

window.onclick = function(event) {
    if (event.target == infoModal) {
        infoModal.style.display = "none";
    }
    else if (event.target == reviewModal){
        reviewModal.style.display = "none";
    }
}
