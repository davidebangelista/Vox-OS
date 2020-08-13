
var SDW = document.getElementById("a");
var SDv = document.getElementById("SDview");
var SDP = document.getElementById("SDP");
var DM = document.getElementById("d");

function PW() {SDv.style.display = "block"; closeNav();}
function SD() { SDW.srcdoc = "<div style='background-color:black; color:white; text-align:center;'></div>"; SDW.requestFullscreen();}
function PC(){SDv.style.display = "none";}
function RS() { location.reload( true ); }
function DMOpen() { DM.style.display = "block"; }
