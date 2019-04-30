
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
	img.className='baron'
	img.src = cardName.image;
	let card = document.getElementById(divName);
	card.appendChild(img);
}

displayRandomCard("card", cards);


function displayRandomCard2(divName, array) {
	let cardName2 = array[Math.floor(Math.random() * 16)];
 	let img2 = document.createElement('img');
	img2.className='princesse'
	img2.src = cardName2.image;
	let card2 = document.getElementById(divName);
	card2.appendChild(img2);
}

displayRandomCard2("card2", cards);

function displayRandomCard3(divName, array) {
	let cardName3 = array[Math.floor(Math.random() * 16)];
 	let img3 = document.createElement('img');
	img3.className='garde'
	img3.src = cardName3.image;
	let card3 = document.getElementById(divName);
	card3.appendChild(img3);
}

displayRandomCard3("card3", cards);

function displayRandomCard4(divName, array) {
	let cardName4 = array[Math.floor(Math.random() * 16)];
 	let img4 = document.createElement('img');
	img4.className='servante'
	img4.src = cardName4.image;
	let card4 = document.getElementById(divName);
	card4.appendChild(img4);
}

displayRandomCard4("card4", cards);

function displayRandomCard5(divName, array) {
	let cardName5 = array[Math.floor(Math.random() * 16)];
 	let img5 = document.createElement('img');
	img5.className='baron2'
	img5.src = cardName5.image;
	let card5 = document.getElementById(divName);
	card5.appendChild(img5);
}

displayRandomCard5("card5", cards);


//TAKE A CARD
setTimeout(function(ez){
  document.querySelector('.toggleButton').addEventListener("click", () => {
    var f = document.querySelector('.princesse');
    var g = document.querySelector('.baron2');
    f.style.display='block';
    g.style.display='block';
  });
},7000);
