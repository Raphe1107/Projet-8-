const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


// On récupècure nos éléments dans le HTML
const flecheGauche = document.querySelector (".arrow_left");
const flecheDroite = document.querySelector (".arrow_right");
const tagLine = document.querySelector ("#banner p");
const Image = document.querySelector (".banner-img");
const dots = document.querySelector (".dot");

document.querySelector(".dots").innerHTML = 
'<div class="dot"></div>'
+'<div class="dot"></div>'
+'<div class="dot"></div>'
+'<div class="dot"></div>';

// On défini l'index de la diapositive actuelle
let currentSlide = 0;

// Fonction qui permet d'afficher la diapositive actuelle 
function showSlide() {

// On récupère l'objet de la diapositive correspondante à l'index actuel
const currentSlideObj = slides[currentSlide];


// On met à jour l'image de la diapositive
Image.src = `./assets/images/slideshow/${currentSlideObj.image}`;

// On met à jour la tagLine de l'image 
tagLine.innerHTML = currentSlideObj.tagLine;

};

// On ajoute un évenement sur la flèche de gauche 
flecheGauche.addEventListener ("click" , ()=> {
	// On décrémente l'index de la diapositive actuelle 
	currentSlide--;

	// On vérifie avec la condition if si l'index est inférieur à 0 et donc revenir à la dernière diapositive
	if (currentSlide <0) {
		currentSlide = slides.length - 1;
	}

	// On affiche la diapostive mise à jour
	showSlide();
	
});

// On ajoute un évenement sur la flèche de droite
flecheDroite.addEventListener ("click" , ()=> {
	// On incrémente l'index de la diapositive actuelle 
	currentSlide ++;

	// On vérifie si l'index dépasse la dernière diapositive
	if (currentSlide >= slides.length) {
		currentSlide = 0; // On réinitialise l'index à 0 
	}

	// On affiche la diapostive mise à jour
	showSlide();
});

showSlide();










