
    var Protected = document.getElementById("PP");

    var rooted = document.getElementById("DM");

    var VoxV = document.getElementById("VV");

    var User = document.getElementById("UN");

    var CompN = document.getElementById("CN");

    var IP = document.getElementById("IP");


function Loadstuff() {
getPassP();
}

function getPassP() {

Protected.value = PassProtected;

getDeveloperM();
}

function getDeveloperM() {
  
  rooted.value = Root;
   
   getVoxV(); 

}

function getVoxV() {

 VoxV.value = Verson;

   getUser();
}
 

function getUser() {

User.value = UserName;

   getComputer();
}


function getComputer() {

CompN.value = ComputerName;


   getIp(); 
}


function getIp() {
    var xhr;

        xhr = new XMLHttpRequest();
        xhr.open('GET', "https://ipinfo.io/json", true);
        xhr.send();

        xhr.addEventListener("readystatechange", processRequest, true);

        function processRequest(e) {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = JSON.parse(xhr.responseText);
                IP.value = response.ip;
            }
        }
}



var AV = document.getElementById("Aview");


function AVOpen(){ AV.style.display = "block"; closeNav(); }
function AVClose() { AV.style.display = "none"; }