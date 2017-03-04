
/// Variables /// 
var createButton = document.getElementById("showMeButton");

var textPlaceHolder = document.getElementById("userText");

var outputCardFromDiv = document.getElementById("ouputCardDiv");

var deleteButton = document.getElementById("clearBtn");

// Potentially another way of doing it with another method read Duckett DOM Chapter.
// To help find maybe easier or more effective ways of handling the issue. 


//////////////////// JavaScript ////////////////


function writeToDom() {
	var cardToBuild = "";
		cardToBuild += `<div class="cardBox">`;
		cardToBuild += `<h3> ${textPlaceHolder.value} </h3>`;
		cardToBuild += `<button id="clearBtn">Clear</button>`;
		cardToBuild += `</div>`;
		outputCardFromDiv.innerHTML += cardToBuild;
}

function deleteCard () {
	outputCardFromDiv.innerHTML = "";
}

createButton.addEventListener("click", writeToDom);

deleteButton.addEventListener("click", deleteCard);






//function to get the user input from user input string ....


//functiion to return the information to the DOM in the form of a card. 

// kjsdhfkjsh





