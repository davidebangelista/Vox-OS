var np = document.getElementsByTagName("num-pad");

for(var i=0; i < np.length; i++ ){
var pi = np[i].getAttribute("pad-id"); 

onyes = np[i].getAttribute("onyes");

np[i].style.userSelect="none";
pid = document.getElementById("lh");
var a1 = "<button onclick='Add(1)'style=background-color:black;color:white;border:none;width:30%;height:10%;>1</button>";
var b1 = "<button onclick='Add(2)'style=background-color:black;color:white;border:none;width:30%;height:10%;margin-left:5%;margin-right:5%;>2</button>";
var c1 = "<button onclick='Add(3)'style=background-color:black;color:white;border:none;width:30%;height:10%;>3</button>";
var a2 = "<button onclick='Add(4)'style=background-color:black;color:white;border:none;width:30%;height:10%;>4</button>";
var b2 = "<button onclick='Add(5)'style=background-color:black;color:white;border:none;width:30%;height:10%;margin-left:5%;margin-right:5%;>5</button>";
var c2 = "<button onclick='Add(6)'style=background-color:black;color:white;border:none;width:30%;height:10%;>6</button>";
var a3 = "<button onclick='Add(7)'style=background-color:black;color:white;border:none;width:30%;height:10%;>7</button>";
var b3 = "<button onclick='Add(8)'style=background-color:black;color:white;border:none;width:30%;height:10%;margin-left:5%;margin-right:5%;>8</button>";
var c3 = "<button onclick='Add(9)'style=background-color:black;color:white;border:none;width:30%;height:10%;>9</button>";
var a4 = "<button onclick='Clear()'style=background-color:red;color:white;border:none;width:30%;height:10%;>&times</button>";
var b4 = "<button onclick='Add(0)'style=background-color:black;color:white;border:none;width:30%;height:10%;margin-left:5%;margin-right:5%;>0</button>";

np[i].innerHTML = "<input type=password style='user-select:none;color:white;background-color:black;display:block;margin-right:auto;margin-left:auto;border:1px solid blue;' readonly disabled id="+ pi +">"+a1+b1+c1+"<br>"+a2+b2+c2+"<br>"+a3+b3+c3+"<br>"+a4+b4;
}

function Add(num)
{
	
id = document.getElementById("lh");
id.value =id.value +num;
Check();
}

function Check()
{
	id = document.getElementById("lh");
if(id.value.length == max){
if(id.value == Pass ){go(); 
	id.value ="";}
else{ No();id.value =""; }}}

function Clear()
{
	id = document.getElementById("lh");
	id.value ="";
}