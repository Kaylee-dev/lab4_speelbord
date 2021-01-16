var submitButton = document.getElementById("submitButton");

var words = ["appel", "peer", "kers", "druif"];

submitButton.onclick = function(){
	var text = document.getElementById("text");
	var wordInputField = document.getElementById("word");
	var letterInputField = document.getElementById("letter");
	
	text.innerHTML = wordInputField.value;
	
	// console.log(words);
};
