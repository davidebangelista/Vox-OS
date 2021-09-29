

var DMv = document.getElementById("DMview");

var DMiframe = document.getElementById("dmif");

function DMOpen() { DMv.style.display = "block"; }
function dmindex() { DMiframe.src = "Apps/Developer_Tools/DeveloperTools.html"; }
function DMClose() { DMv.style.display = "none"; }

function isok() {
  var  ison = Root;

if( ison == "No" ) {
    open("Error/Error.html", "_self");
}
}