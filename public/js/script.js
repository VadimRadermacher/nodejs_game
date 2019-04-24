let garde = {name:"garde", value: 1, image: "js/garde.jpg"};
let pretre = {name:"pretre", value: 2, image: "js/pretre.jpg"};
let baron = {name:"baron", value: 3, image: "js/baron.jpg"};
let servante = {name:"servante", value: 4, image: "js/servante.jpg"};
let prince = {name:"prince", value: 5, image: "js/prince.jpg"};
let roi = {name:"roi", value: 6, image: "js/roi.jpg"};
let comptesse = {name:"comptesse", value: 7, image: "js/comptesse.jpg"};
let princesse = {name:"princesse", value: 8, image: "js/princesse.jpg"};

let cards = [
				garde,
				pretre,
				baron,
				servante,
				prince,
				roi,
				comptesse,
				princesse
];

console.log(garde);
console.log(garde.image);

// function displayCard(getRandomCard(), divName){
// 	let img = document.createElement('img');
// 	img.src = cardName.image;
// 	let card = document.getElementById(divName);
// 	card.appendChild(img);
// }

function displayRandomCard(divName, array) {
	let cardName = array[Math.floor(Math.random() * 8)];
 	let img = document.createElement('img');
	img.src = cardName.image;
	let card = document.getElementById(divName);
	card.appendChild(img);
	let name = document.createElement('h1');
	name.innerText = cardName.name;
	card.appendChild(name);
}

displayRandomCard("card", cards);

console.log(garde, pretre, baron, servante, prince, roi, comptesse, princesse);