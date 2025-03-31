// index.js
import "./style.css";
import { homeContent, aboutContent, menuContent } from "./content.js";

const homeContentBtn = document.getElementById("home");
const aboutContentBtn = document.getElementById("about");
const menuContentBtn = document.getElementById("menu");
const content = document.getElementById("content");
content.appendChild(homeContent);


homeContentBtn.addEventListener("click",(e)=>{
    content.innerHTML = "";
    content.appendChild(homeContent);
})

aboutContentBtn.addEventListener("click",(equals)=>{
    content.innerHTML = "";
    content.appendChild(aboutContent);
})

menuContentBtn.addEventListener("click",(e)=>{
    content.innerHTML = "";
    content.appendChild(menuContent);
})
