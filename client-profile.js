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
var modalBox=document.getElementById("modalBox)");
var i=0;
var currentlySelected=-1;
//Profile constructor will default to Default.png for the optional image is none is added
var lawyers=[
    new Lawyer("George Leopold", "images/lawyerSample.png", "images/crest.png","1576 Michigan Avenue, Suite 7B, Chicago, IL 60142", "Gamble Law Firm", "44", "Eviction Law", 150, "Northwestern University", "1963", "Chicago, IL", "I have over 40 years of experience helping clients achieve the rights they deserve.",5),
    new Lawyer("John Baxter", "images/sara_baxter.jpg", "images/Default.png","1576 Los Robles Avenue, Suite 5, Albuquerque, NM 12345", "Baxter, Baxter & Baxter", "15", "Intellectual Property Law", 100, "Georgetown University", "1991", "Albuquerque, NM", "I work independently to place the focus on my clients.",4)
];


var lawyerProfiles=[];

var reviews=[
    ["★★★★★ George Leopold is the best lawyer in town!", "★★★★★ Mr. Leopold has helped me successfully sue my landlord. I am so thankful for his help."],
    ["★★★★★ John provided me with useful advice for my case!", "★★★☆☆ Although John was so helpful, I wish he was more punctual with answering emails. I once had to wait 3 days for a response, and that was especially frustrating."],
  ];

/* Not  needed for this page
  for (var j=0; j<lawyers.length; j++)
  {
      createLawyerProfile(lawyers[j]);
  }
*/
  function createLawyerProfile(lawyerToMake){
      var clone=lawyerTemplate.cloneNode(true);
      clone.id=i++;

      console.log(clone.querySelector("#profile-picture").style.src);


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
//Populates the lawyer profiles array. Pass in an instance of a Lawyer

function toTheContactPage()
{
    alert("Taking you to the contact page...");
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
//The following adapted from https://www.w3schools.com/howto/howto_css_modals.asp

function displayInfoModal()
{
    infoModal.style.display="block";
}

function displayReviewModal1()
{
  currentlySelected = 0;
  //addReviews(reviews[parseInt(0)]);
  reviewModal.style.display="block";
  document.getElementById("reviewName").innerHTML="Leave a Review for George Leopold";
}

function displayReviewModal2()
{
currentlySelected = 0;
  //addReviews(reviews[parseInt(1)]);
  reviewModal.style.display="block";
  document.getElementById("reviewName").innerHTML="Leave a Review for John Baxter";

}

function closeInfoModal()
{
    closeReviewModal();
    infoModal.style.display="none";
}

function closeReviewModal()
{
    reviewModal.style.display="none";
    document.getElementById("reviewTextarea").value="";
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
    var theReview=document.getElementById("reviewTextarea");
    if (theReview.value=="")
    {
        alert("Please write a short review in the text box.");
        return;
    }
    newReview=newReview+" "+theReview.value;
    reviews[currentlySelected].push(newReview);
    document.getElementById("reviewTextarea").value="";
    document.getElementById("rating1").checked = false;
    document.getElementById("rating2").checked = false;
    document.getElementById("rating3").checked = false;
    document.getElementById("rating4").checked = false;
    document.getElementById("rating5").checked = false;
    //addReviews(reviews[currentlySelected]);
    reviewModal.style.display = "none";
    var snack = document.getElementById("snackbar");
    snack.className = "show";
    setTimeout(function(){ snack.className = snack.className.replace("show", ""); }, 3000);
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
