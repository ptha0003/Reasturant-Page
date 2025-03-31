import homeImg from "../imgs/logo.jpg";
import aboutImg from "../imgs/profile-pic.jpg";
import menuImg from "../imgs/milksteak.jfif";


const homeContent = document.createElement("div");
homeContent.setAttribute("id","homeContent");
const homeImage = document.createElement("img");
homeImage.src = homeImg;
homeContent.appendChild(homeImage);


const aboutContent = document.createElement("div");
aboutContent.setAttribute("id","aboutContent");
const aboutPara = document.createElement("p");
aboutPara.innerText = `Alright, listen up! I’m Charlie Kelly, an I’m openin my own resturant, yeah? Don’t ask how I’m doin it, I got it all figgered out. I’m servin the bestest thing ever: milk stek. It’s the greatest food, no one can tell me diffrent. You got a big, juicy stek, then you just dump a whole bunch of milk on it. Not too much tho, just enough, like how you feel it, y’know? It’s real soft an tender. I don’t care what them fancy chef people say bout steaks gotta be cooked right, cause they don’t know what they’s talkin bout. Milk stek is where it’s at. The menus real easy — you come in, you say "milk stek," an' if I remembur, I’ll get ya some “garlick bred,” but I might forget, who knows. I ain't too good with the letturs an writin an stuff, but I KNOW milk steks the bestest thing you’ll ever eat. So come on down and get some — I’m Charlie Kelly, an I’m the milk stek master.`
aboutContent.appendChild(aboutPara);
const aboutImage = document.createElement("img");
aboutImage.src = aboutImg;
aboutContent.appendChild(aboutImage);

const menuContent = document.createElement("div")
menuContent.setAttribute("id","menuContent");
const menuTitle = document.createElement("h1");
menuTitle.innerText = "MILK STEK"
menuContent.appendChild(menuTitle);
const menuDes = document.createElement("h2");
menuDes.innerText = "The one an only! Only $9999 order now!";
menuContent.appendChild(menuDes);
const menuImgage = document.createElement("img");
menuImgage.src = menuImg;
menuContent.appendChild(menuImgage);



export {homeContent, aboutContent, menuContent};