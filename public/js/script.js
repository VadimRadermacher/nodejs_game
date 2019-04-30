
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
				prince,
				princesse,
				garde,
				servante,
				garde,
				pretre,
				baron,
				garde,
				servante,
				pretre,
				prince,
				roi,
				garde,
				baron,
				comptesse,
];

console.log(garde);


// function displayCard(getRandomCard(), divName){
// 	let img = document.createElement('img');
// 	img.src = cardName.image;
// 	let card = document.getElementById(divName);
// 	card.appendChild(img);
// }


// displayRandomCard("card", cards);
// displayRandomCard("card2", cards);
// displayRandomCard("card3", cards);
// displayRandomCard("card4", cards);
// displayRandomCard("card5", cards);

// Shuffle cards

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

console.log(cards);

shuffle(cards);

console.log(cards);

// Burn a card

let burnedCard = cards.pop();
console.log("The burned card is " + burnedCard.name);

function drawCard(array) {
	if (array.length > 0){
		let drawedCard = array.pop();
		let drawedCardImg = document.createElement('img');
		drawedCardImg.src = drawedCard.image;
		document.querySelector('#card').appendChild(drawedCardImg);
		drawedCardImg.style.display='block';
		console.log("You got: " + drawedCard.name);
	}
	else{
		console.log("Game over");
	}
}

document.querySelector('.toggleButton').addEventListener("click", () => {
    drawCard(cards);
 });
