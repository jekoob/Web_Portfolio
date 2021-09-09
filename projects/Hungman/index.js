let canvas=document.getElementsByClassName("canvas")[0];
let ctx=canvas.getContext("2d");

ctx.fillStyle="red";
ctx.strokeStyle="white";
ctx.font="50px Comic Sans MS";
ctx.baseLine="middle";
ctx.textAlign="left";
ctx.fillText("HangMan" ,canvas.width/7,canvas.height/2);
ctx.strokeText("HangMan" ,canvas.width/7,canvas.height/2);
ctx.textAlign="left";

let interval =null;
let count=0;


function moveImage(body,event){

	body.style.backgroundPositionX=event.offsetX*0.04-50+"px";
	//body.style.backgroundPositionY=event.offsetY*0.04-40+"px";
}
function startGame(){
	let div=document.createElement("div");
	div.setAttribute("id","game");
	let gameCanvas = document.createElement("canvas")
	gameCanvas.setAttribute("class","canvas");
	gameCanvas.setAttribute("id","gameCanvas");
	document.getElementsByTagName("body")[0].appendChild(div);
	document.getElementById("game").appendChild(gameCanvas);
	document.getElementById("entrance").style.visibility="hidden";

}

function openReviewBox(reviewButton){
	let div=document.createElement("div");
	document.getElementById("entrance").appendChild(div);
	div.setAttribute("id","reviewBox");
	reviewButton.style.opacity=0;
	document.getElementById("startButton").style.opacity=0;
    let reviewBox=document.getElementById("reviewBox");
interval=setInterval(function(){
	count+=2;
	reviewBox.style.width=reviewButton.offsetWidth+count+"px";
	reviewBox.style.height=reviewButton.offsetWidth+count+"px";
	reviewBox.style.margintop=-count;
	reviewBox.style.margin="auto";
	reviewBox.style.opacity=0.005*count;
	reviewBox.style.marginTop=-count*0.7+"px";
		if(reviewBox.offsetWidth>320){
			clearInterval(interval);
			
	}
},1);

} 
let reviewButton = document.getElementById("reviewButton");
reviewButton.setAttribute("onclick","openReviewBox(reviewButton)");

let startButton = document.getElementById("startButton");
startButton.setAttribute("onclick","startGame()");
let body=document.getElementById("xxx");
body.setAttribute("onmousemove","moveImage(body,event)");
let button = document.getElementById("button");