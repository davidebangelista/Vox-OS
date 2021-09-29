
var dia = document.getElementById('fra');

var User = document.getElementById('user');

var pass = document.getElementById('pass');

var pasd = document.getElementById('pasd');

var inv = document.getElementById('invview');

function go(){
fra.requestFullscreen();
fra.src = "start/start.html";
}

function No(){
 inv.style.display = "block";
 pasd.style.display = "none";
}


function okbtn()
{
  inv.style.display = "none";
  pasd.style.display = "block";
}
function Startup()
{
 User.innerHTML = UserName;
}

            var menuDisplayed = false;
            var menuBox = null;
            window.addEventListener("contextmenu", function() {
                var left = arguments[0].clientX;
                var top = arguments[0].clientY;
                menuBox = window.document.querySelector(".menu");
                menuBox.style.left = left + "px";
                menuBox.style.top = top + "px";
                menuBox.style.display = "block";
                arguments[0].preventDefault();
                menuDisplayed = true;
            }, false);
            window.addEventListener("click", function() {
                if(menuDisplayed == true){
                    menuBox.style.display = "none"; 
                }
            }, true);
      
      
     var sdv = document.getElementById("sdview");

     //shutdown stuff
function sdyes()
{
  var sdw = document.getElementById("fra");
  sdw.srcdoc = "<div style='background-color:black; color:white; text-align:center;'><a>Shut Complete. Press ESC</a></div>";
  sdw.requestFullscreen();
}

function sd()
{
sdv.style.display = "block";
}

function sdno()
{
sdv.style.display = "none";
}
