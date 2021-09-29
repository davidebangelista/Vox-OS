
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





   var bdy = document.getElementById("bdy");
 
 
 var ifr1 = document.getElementById("iframe1");
   var htt1 = document.getElementById("http/s1");
    var s1 = document.getElementById("search1");


 var ifr2 = document.getElementById("iframe2");
   var htt2 = document.getElementById("http/s2");
    var s2 = document.getElementById("search2");


 var ifr3 = document.getElementById("iframe3");
   var htt3 = document.getElementById("http/s3");
    var s3 = document.getElementById("search3");


 var ifr4 = document.getElementById("iframe4");
   var htt4 = document.getElementById("http/s4");
    var s4 = document.getElementById("search4");

 var ifr5 = document.getElementById("iframe5");
   var htt5 = document.getElementById("http/s5");
    var s5 = document.getElementById("search5");


  function search1()
{
 ifr1.src = htt1.value + s1.value;
if( htt1.value == "http://" ){
  bdy.style.backgroundColor = "orange";
  s1.style.backgroundColor = "yellow";
   s1.style.color = "black"; 
  }
else { 
  bdy.style.backgroundColor = "blue";
   s1.style.backgroundColor = "green";
     s1.style.color = "white";
   }
}
function home1()
{
   ifr1.src =  "https://bing.com";
    bdy.style.backgroundColor = "black";
   s1.style.backgroundColor = "black";
     s1.style.color = "white";
}
function proxy1()
{
  window.doNotTrack = 1;
   ifr1.src =  "https://sslvpn.club";
    bdy.style.backgroundColor = "black";
   s1.style.backgroundColor = "black";
     s1.style.color = "white";
}



  function search2()
{
 ifr2.src = htt2.value + s2.value;
if( htt2.value == "http://" ){
  bdy.style.backgroundColor = "orange";
  s2.style.backgroundColor = "yellow";
   s2.style.color = "black"; 
  }
else { 
  bdy.style.backgroundColor = "blue";
   s2.style.backgroundColor = "green";
     s2.style.color = "white";
   }
}
function home2()
{
   ifr2.src =  "https://bing.com";
    bdy.style.backgroundColor = "black";
   s2.style.backgroundColor = "black";
     s2.style.color = "white";
}
function proxy2()
{
  window.doNotTrack = 1;
   ifr2.src =  "https://sslvpn.club";
    bdy.style.backgroundColor = "black";
   s2.style.backgroundColor = "black";
     s2.style.color = "white";
}



  function search3()
{
 ifr3.src = htt3.value + s3.value;
if( htt3.value == "http://" ){
  bdy.style.backgroundColor = "orange";
  s3.style.backgroundColor = "yellow";
   s3.style.color = "black"; 
  }
else { 
  bdy.style.backgroundColor = "blue";
   s3.style.backgroundColor = "green";
     s3.style.color = "white";
   }
}
function home3()
{
   ifr3.src =  "https://bing.com";
    bdy.style.backgroundColor = "black";
   s3.style.backgroundColor = "black";
     s3.style.color = "white";
}
function proxy3()
{
  window.doNotTrack = 1;
   ifr3.src =  "https://sslvpn.club";
    bdy.style.backgroundColor = "black";
   s3.style.backgroundColor = "black";
     s3.style.color = "white";
}


  function search4()
{
 ifr4.src = htt4.value + s4.value;
if( htt4.value == "http://" ){
  bdy.style.backgroundColor = "orange";
  s4.style.backgroundColor = "yellow";
   s4.style.color = "black"; 
  }
else { 
  bdy.style.backgroundColor = "blue";
   s4.style.backgroundColor = "green";
     s4.style.color = "white";
   }
}
function home4()
{
   ifr4.src =  "https://bing.com";
    bdy.style.backgroundColor = "black";
   s4.style.backgroundColor = "black";
     s4.style.color = "white";
}
function proxy4()
{
  window.doNotTrack = 1;
   ifr4.src =  "https://sslvpn.club";
    bdy.style.backgroundColor = "black";
   s4.style.backgroundColor = "black";
     s4.style.color = "white";
}



  function search5()
{
 ifr5.load(htt5.value + s5.value);
if( htt5.value == "http://" ){
  bdy.style.backgroundColor = "orange";
  s5.style.backgroundColor = "yellow";
   s5.style.color = "black"; 
  }
else { 
  bdy.style.backgroundColor = "blue";
   s5.style.backgroundColor = "green";
     s5.style.color = "white";
   }
}
function home5()
{
   ifr5.load("https://bing.com");
    bdy.style.backgroundColor = "black";
   s5.style.backgroundColor = "black";
     s5.style.color = "white";
}
function proxy5()
{
  window.doNotTrack = 1;
   ifr5.load("https://sslvpn.club");
    bdy.style.backgroundColor = "black";
   s5.style.backgroundColor = "black";
     s5.style.color = "white";
}


var IE = document.getElementById("IEview");

function IEOpen() { IE.style.display = "block"; }
function IEClose() { IE.style.display = "none"; }
