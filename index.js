const colors = {
	blue: "#62a0f0",
 	grey: "lightgrey",
  green: "#5bad2b",
  red: "#db2b14",
  yellow: "#fae92f",
  white: "white",
  black: "black"	
};

Object.keys(colors).forEach(color => {
	const backgroundButton = document.getElementById(`bg-${color}`);
	const textButton = document.getElementById(`bg-text${color}`);
	backgroundButton.addEventListener('click', () => document.getElementById("background").style.background = colors[color]);
	textButton.addEventListener('click', () => document.getElementById("sample-text").style.color = colors[color]);
});
