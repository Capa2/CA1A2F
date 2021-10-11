import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import facade from "./script/facade.js";
import Person from "./script/person.js";

document.getElementById("all-content").style.display = "block";

function hideAllShowOne(idToShow) {
	document.getElementById("search_html").style = "display:none";
	document.getElementById("person_html").style = "display:none";
	document.getElementById("hobby_html").style = "display:none";
	document.getElementById("api_html").style = "display:none";
	document.getElementById("about_html").style = "display:none";
	document.getElementById(idToShow).style = "display:block";
}

function menuItemClicked(evt) {
	const id = evt.target.id;
	switch (id) {
		case "person":
			hideAllShowOne("person_html");
			break;
		case "hobby":
			hideAllShowOne("hobby_html");
			break;
		case "api":
			hideAllShowOne("api_html");
			break;
		case "about":
			hideAllShowOne("about_html");
			break;
		default:
			hideAllShowOne("search_html");
			break;
	}
	evt.preventDefault();
	document.querySelector(".active").classList.remove("active");
	document.querySelector(".selected").classList.remove("selected");
	document.getElementById(id).classList.add("active");
	document.getElementById(id).parentElement.classList.add("selected");
}

document.getElementById("menu").onclick = menuItemClicked;
hideAllShowOne("search_html");

//FACADE
var resultView = document.querySelector(".resultView");
document.querySelector("form .btn").onclick = getResult;
getResult();

function pTag(content) {
	let p = document.createElement("p");
	let text = document.createTextNode(content);
	p.appendChild(text);
	return p;
}

function getResult() {
	resultView.innerHTML = "";
	facade.getPersons().then((persons) => {
		persons.map((person) => {
			console.log(person);
			let personObj = new Person(person);
			let div = document.createElement("div");
			div.appendChild(pTag(personObj.getName()));
			div.appendChild(pTag(personObj.getPhones()));
			div.appendChild(pTag(personObj.getAddress()));
			div.appendChild(pTag(personObj.getId()));
			resultView.insertAdjacentElement("beforeend", div);
		});
	});
}
