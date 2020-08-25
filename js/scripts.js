
document.addEventListener('DOMContentLoaded', startScript);

function startScript() {

    console.log('Hello World')

    document.body.style.backgroundImage = 'url("img/bg.jpg")';

    var new_element = document.createElement("div");
    new_element.setAttribute("id", "title-wrapper");

    new_element.setAttribute("style",  "top: 50%; width: 100%; text-align: center; font-family: impact; position: absolute; text-transform: uppercase");
   

    document.body.appendChild(new_element);

    var heading_element = document.createElement ("h1");
    heading_element.setAttribute("id", "title");
    heading_element.innerText = "Work under Progress";

    heading_element.setAttribute("style", "width: fit-content; margin: auto; background: black; color: white");

    document.body.appendChild (heading_element);


};