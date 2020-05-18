var pwordText=document.getElementById("pwordText");
var confirmText=document.getElementById("confirmText");
var pwordMatch=document.getElementById("pwordMatch");

function pwordMatchTest()
{
    if (confirmText.value==="")
    {
        pwordMatch.style.visibility="hidden";
    }
    else if (pwordText.value===confirmText.value)
    {
        pwordMatch.style.visibility="visible";
        pwordMatch.style.color="green";
        pwordMatch.innerHTML="&#x2713; Passwords Match";
    }
    else
    {
        pwordMatch.style.visibility="visible";
        pwordMatch.style.color="red";
        pwordMatch.innerHTML="&#x2715 Passwords Do Not Match";
    }
}