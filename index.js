function changeBackground(color) {
	return function() {
		document.getElementById("background").style.background = color;
	};
}

function changeText(color) {
	return function() {
		document.getElementById("sample-text").style.color = color;
	};
}

var blue = changeBackground("#62a0f0");
var grey = changeBackground("lightgrey");
var green = changeBackground("#5bad2b");
var red = changeBackground("#db2b14");
var yellow = changeBackground("#fae92f");
var white = changeBackground("white");
var black = changeBackground("black");

var textblue = changeText("blue");
var textgrey = changeText("grey");
var textgreen = changeText("green");
var textred = changeText("red");
var textyellow = changeText("yellow");
var textwhite = changeText("white");
var textblack = changeText("black");

document.getElementById("bg-blue").onclick = blue;
document.getElementById("bg-grey").onclick = grey;
document.getElementById("bg-green").onclick = green;
document.getElementById("bg-red").onclick = red;
document.getElementById("bg-yellow").onclick = yellow;
document.getElementById("bg-white").onclick = white;
document.getElementById("bg-black").onclick = black;

document.getElementById("bg-textblue").onclick = textblue;
document.getElementById("bg-textgrey").onclick = textgrey;
document.getElementById("bg-textgreen").onclick = textgreen;
document.getElementById("bg-textred").onclick = textred;
document.getElementById("bg-textyellow").onclick = textyellow;
document.getElementById("bg-textwhite").onclick = textwhite;
document.getElementById("bg-textblack").onclick = textblack;