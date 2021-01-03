var colors = generaterandomcolor(numsquares);
var numsquares=6;
var squares= document.querySelectorAll(".square");
var pickedcolor= pickcolor();
var colordisplay=document.getElementById("colordisplay");
var messagedisplay=document.getElementById("message");
var h1= document.querySelector("h1");
var resetbutton= document.querySelector("#reset");
var easybtn= document.querySelector("#easybtn");
var hardbtn= document.querySelector("#hardbtn");

easybtn.addEventListener("click",function(){
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	numsquares=3;
	messagedisplay.textContent="";
	colors=generaterandomcolor(numsquares);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
	for(var i=0; i< squares.length; i++){
		if(colors[i])
		{
			squares[i].style.backgroundColor= colors[i];
		} else {
			squares[i].style.display= "none";
		}

	}



})

hardbtn.addEventListener("click",function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	numsquares=6;
	messagedisplay.textContent="";
	colors=generaterandomcolor(numsquares);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
	for(var i=0; i< squares.length; i++){
		
		
			squares[i].style.backgroundColor= colors[i];
		
			squares[i].style.display= "block";
		

	}
})





resetbutton.addEventListener("click",function(){

    colors= generaterandomcolor(numsquares);
    pickedcolor= pickcolor();
	colordisplay.textContent= pickedcolor;
	this.textContent="New Colors";
	messagedisplay.textContent="";
	for(var i=0; i< squares.length; i++)
{
	squares[i].style.backgroundColor= colors[i];
}
h1.style.backgroundColor="steelblue";
})
colordisplay.textContent= pickedcolor;

for(var i=0; i< squares.length; i++)
{
	squares[i].style.backgroundColor= colors[i];

	squares[i].addEventListener("click", function(){
	//grab a clicked color
	var clickedcolor= this.style.backgroundColor;
	//compare color to pickcolor
	if(clickedcolor === pickedcolor)
	{
	   messagedisplay.textContent= "Correct";
	   resetbutton.textContent="Play Again?"
	   changecolor(clickedcolor);
	   h1.style.backgroundColor= clickedcolor;
	}else{
		this.style.backgroundColor= "black";
		messagedisplay.textContent= "Try Again";
	}
	})
}

function changecolor(color)
{
	for(var i=0 ; i< squares.length; i++)
	{
		squares[i].style.backgroundColor=color;
	}
}

function pickcolor()
{
	var random= Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generaterandomcolor(num){
	var arr =[]
	for(var i=0; i< num; i++)
	{
		arr.push(randomcolor());

	}

	return arr;

}

function randomcolor()
{
	var r = Math.floor(Math.random()* 256);
	var g = Math.floor(Math.random()* 256);
	var b = Math.floor(Math.random()* 256);

	return "rgb("+ r+ ", "+ g +", "+ b +")";
}