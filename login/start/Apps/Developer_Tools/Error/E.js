

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function RUNL() {

var html = document.getElementById("html");
var css = document.getElementById("css");
var js = document.getElementById("js");
var iframe = document.getElementById("iframe");
iframe.height = "650";
iframe.width = "1070";
iframe.srcdoc = html.value;
}


function RUNP() {

meta = "<meta name='viewport'" + "content='width=device-width, initial-scale=1'>"

var html = document.getElementById("html");
var css = document.getElementById("css");
var js = document.getElementById("js");
var iframe = document.getElementById("iframe");
iframe.width = "350";
iframe.height = "570";
iframe.srcdoc = meta + html.value;
}