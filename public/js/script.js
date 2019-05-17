
let garde = {name:"garde", value: 1, image: "js/garde.jpg"};
let pretre = {name:"pretre", value: 2, image: "js/pretre.jpg"};
let baron = {name:"baron", value: 3, image: "js/baron.jpg"};
let servante = {name:"servante", value: 4, image: "js/servante.jpg"};
let prince = {name:"prince", value: 5, image: "js/prince.jpg"};
let roi = {name:"roi", value: 6, image: "js/roi.jpg"};
let contesse = {name:"contesse", value: 7, image: "js/comptesse.jpg"};
let princesse = {name:"princesse", value: 8, image: "js/princesse.jpg"};
const socket = io();

let cards = [
				garde,
				prince,
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
				contesse,
				princesse,
];


// Shuffle cards

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

shuffle(cards);

// Burn a card

let burnedCard = cards.pop();
console.log("The burned card is " + burnedCard.name);

// Draw a card

function drawCard(array) {
	if (array.length > 0){
		let drawedCard = array.pop();
		let drawedCardImg = document.createElement('img');
		drawedCardImg.src = drawedCard.image;
		drawedCardImg.className='imageCard';
		document.querySelector('#card').appendChild(drawedCardImg);
		drawedCardImg.style.display='block';
		console.log("You got: " + drawedCard.name);
		if (drawedCard.value === 1){
			document.querySelector('.focusPlayer').style.display ='block';
		}
		else if (drawedCard.value === 2) {
			document.querySelector('.focusPlayer').style.display ='block';
		}
		else if (drawedCard.value === 3) {
			document.querySelector('.focusPlayer').style.display ='block';
		}
		else if (drawedCard.value === 5) {
			document.querySelector('.focusPlayer').style.display ='block';
		}
		else if (drawedCard.value === 6) {
			document.querySelector('.focusPlayer').style.display ='block';
		}
		else{
			document.querySelector('.focusPlayer').style.display ='none';
		}
		if (drawedCard.value === 1){
				document.querySelector('#input2').style.display ='block';
		}
		else {
			document.querySelector('#input2').style.display ='none';
		}
		if (drawedCard.value === 2){
				document.querySelector('.priestEffect').style.display ='block';
			//	document.querySelector('.priestRules').style.display='block';
		}
		else {
			document.querySelector('.priestEffect').style.display ='none';
			//document.querySelector('.priestRules').style.display='none';
		}
		if (drawedCard.value === 3){
				document.querySelector('.baronEffect').style.display ='block';
		}
		else {
			document.querySelector('.baronEffect').style.display ='none';
		}
		if (drawedCard.value === 5){
				document.querySelector('.princeEffect').style.display ='block';
		//		document.querySelector('.princeRules').style.display='block';
		}
		else {
			document.querySelector('.princeEffect').style.display ='none';
//			document.querySelector('.princeRules').style.display='none';
		}
		if (drawedCard.value === 6){
				document.querySelector('.kingEffect').style.display ='block';
		}
		else {
			document.querySelector('.kingEffect').style.display ='none';
		}
		if(drawedCard.value === 8){
			document.querySelector('.looseBckg').style.display='block';
			document.querySelector('.toggleButton').style.display='none';
		}
		else{
			document.querySelector('.looseBckg').style.display='none';
		}

		if (array.length === 0){
			document.querySelector('.toggleButton').style.display='none';
			console.log("No Vrincesse, padim loses");
		}
	}
}

function playCard(){
		document.querySelector('.imageCard').addEventListener("click", () => {
					document.querySelector('.imageCard').style.left='39.9rem';
					document.querySelector('.imageCard').style.marginTop='-5rem';
	 		});
	}

document.querySelector('.toggleButton').addEventListener("click", () => {
		drawCard(cards);
		playCard();
 });

 document.querySelector('#focusPlayer2').addEventListener("click", () => {
     document.querySelector('.focusPlayer').style.display='none';
		 document.querySelector('#input2').style.display='none';
  });
	document.querySelector('#focusPlayer3').addEventListener("click", () => {
	    document.querySelector('.focusPlayer').style.display='none';
			document.querySelector('#input2').style.display='none';
	 });
	 document.querySelector('#focusPlayer4').addEventListener("click", () => {
	     document.querySelector('.focusPlayer').style.display='none';
			 document.querySelector('#input2').style.display='none';
	  });
