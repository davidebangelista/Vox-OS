function checktime() {
var d = new Date();
var DY =  document.getElementById("dateY");
var DM =  document.getElementById("dateM");
var DW =  document.getElementById("dateW");
var DD =  document.getElementById("dateD");
time.innerHTML = d.getHours() + ":" + d.getMinutes() +":" + d.getSeconds();
DY.innerHTML = d.getFullYear();
DM.innerHTML = d.getMonth();
DD.innerHTML = d.getDate();
var Week;
switch (new Date().getDay()){
  case 0: Week = "SUN"; break;
  case 1: Week = "MON"; break;
  case 2: Week = "TUE"; break;
  case 3: Week = "WED"; break;
  case 4: Week = "THU"; break;
  case 5: Week = "FRI"; break;
  case 6: Week = "SAT"; }
  DW.innerHTML =  Week; }


function startup() { setInterval("checktime()", 1);  closeSNav();}