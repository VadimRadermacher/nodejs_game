
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
				garde,
				garde,
				garde,
				garde,
				pretre,
				pretre,
				baron,
				baron,
				servante,
				servante,
				prince,
				prince,
				roi,
				comptesse,
				princesse
];

console.log(garde);


// function displayCard(getRandomCard(), divName){
// 	let img = document.createElement('img');
// 	img.src = cardName.image;
// 	let card = document.getElementById(divName);
// 	card.appendChild(img);
// }

function displayRandomCard(divName, array) {
	let cardName = array[Math.floor(Math.random() * 16)];
 	let img = document.createElement('img');
	img.src = cardName.image;
	let card = document.getElementById(divName);
	card.appendChild(img);
}

displayRandomCard("card", cards);
displayRandomCard("card2", cards);
displayRandomCard("card3", cards);
displayRandomCard("card4", cards);
displayRandomCard("card5", cards);

//TAKE A CARD
setTimeout(function(ez){
  document.querySelector('.toggleButton').addEventListener("click", () => {
    var f = document.querySelector('#card5');
    var g = document.querySelector('#card3');
		var h= document.querySelector('#card2');
    f.style.display='block';
    g.style.display='block';
		h.style.display ='block';
  });
},7000);
