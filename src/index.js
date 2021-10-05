import "./style.css"
import "bootstrap/dist/css/bootstrap.css"

document.getElementById("all-content").style.display = "block"

function hideAllShowOne(idToShow) {
  document.getElementById("search_html").style = "display:none"
  document.getElementById("api_html").style = "display:none"
  document.getElementById("persons_html").style = "display:none"
  document.getElementById("hobbies_html").style = "display:none"
  document.getElementById(idToShow).style = "display:block"
}

function menuItemClicked(evt) {
  const id = evt.target.id;
  switch (id) {
    case "api": hideAllShowOne("api_html"); break
    case "persons": hideAllShowOne("persons_html"); break
    case "hobbies": hideAllShowOne("hobbies_html"); break
    default: hideAllShowOne("search_html"); break
  }
  evt.preventDefault();
  document.querySelector(".active").classList.remove("active");
  document.querySelector(".selected").classList.remove("selected");
  document.getElementById(id).classList.add("active");
  document.getElementById(id).parentElement.classList.add("selected");
}

document.getElementById("menu").onclick = menuItemClicked;
hideAllShowOne("search_html");



