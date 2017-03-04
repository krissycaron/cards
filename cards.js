
/// Variables /// 
var createButton = document.getElementById("showMeButton");

var textPlaceHolder = document.getElementById("userText");

var outputCardFromDiv = document.getElementById("ouputCardDiv");

var deleteButton = document.getElementById("clearBtn");


//////////////////// JavaScript ////////////////


function writeToDom() {
	var cardToBuild = "";
		cardToBuild += `<div class="cardBox">`;
		cardToBuild += `<h3> ${textPlaceHolder.value} </h3>`;
		cardToBuild += `<button class="deleteBtn">Delete</button>`;
		cardToBuild += `</div>`;
		outputCardFromDiv.innerHTML += cardToBuild;
}

function deleteCard () {
	outputCardFromDiv.innerHTML = "";
}

function deleteSingleCard(event){
		if (event.target.className === "deleteBtn"){
		// cardToBuild.removeChild();
		// console.log(event);
		event.target.parentElement.remove();
		};
}
// function deleteOneCard () {
// 	cardToBuild.removeChild(parent.firstChild);
// } /// shit dont work.

createButton.addEventListener("click", writeToDom);

deleteButton.addEventListener("click", deleteCard);

document.body.addEventListener("click", deleteSingleCard)




//function to get the user input from user input string ....


//functiion to return the information to the DOM in the form of a card. 

// kjsdhfkjsh





