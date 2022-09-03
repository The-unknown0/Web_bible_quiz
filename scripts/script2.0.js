//import List0 from 'data base of questions.js';
//console.log(List0);
$(()=>{init()});
function init() {
	//on remets tous les variables à 0
	var indexSent = 0;
	var indexVal  = 0;
	var userScore = 0;
	var id = Math.floor(Math.random() * 3);
var questions = [];
		questions[0] = [
			"Jésus est né", 
			"l'un a vendu et l'autre a renié Jésus",
			"Le Nouveau Testament Contient",
			"après qu'il soit enterré, Jésus fut ressusciter",
			"la divinité de Jésus s'élève à ",
			"Voilà, c'est fait! vous avez fini le quiz"
			];
			questions[1] = ["Après la naissance de Jésus, les mages sont venus ",
			"Le prémier évangile à etre ecrit est",
			"Jésus est né",
			"Le quel ne figure pas parmis les attributs de l'amour selon Paul",
			"Jésus est né",
			"Voilà, c'est fait! vous avez fini le quiz"];
			questions[2] = ["Pourquoi Paul fit-il circoncire Timothée?",
			"Selon 2co 3:7, paul considère comme passagèr(e)",
			"Selon Jacques nous ne récevons pas parce que",
			"Voici, je me tiens devant la porte, et je frappe. Si quelqu'un attends ma voix... cet extrait est tiré de",
			"Quelle est la volonté de Dieu selon 1 Thessaloniciens 4:3",
			"Voilà, c'est fait! vous avez fini le quiz"
];

	var reponses = [];
		reponses[0] = [
						["à betheléem","à Jérusalem","à nazareth","en egypte"],
						["paul & pierre","jean & juda","juda & pierre","jean & matthieu"],
						["26livres","27livres","66livres","33livres"],
						["le 5em jour","le jour du sabat","Aucune bonne reponse","après 3 jours"],
						["50%homme - 50%Dieu","100%homme - 100%Dieu","75%Dieu - 25%homme","25%Dieu - 75%homme"],
						["bravo!!!","bravo!!!","bravo!!!","bravo!!!"]
					];
		reponses[1] = [
						["de l'est","de l'ouest","du nord","du sud"],
						["Matthieu","Marc","Jean","Luc"],
						["à Jérusalem","à betheléem","en egypte","à nazareth"],
						["l'amour supporte tout","l'amour pardonne tout","l'amour peut s'acheter","l'amour ne supçone pas le mal"],
						["à l'époque d'Herode","à l'époque de David","à l'époque de César","à l'époque ou il n'y avait pas de Roi"],
						["bravo!!!","bravo!!!","bravo!!!","bravo!!!"]
					];
		reponses[2] =[ 
						["Parce qu'il était Grec", "A cause des juifs","Parce qu'il jouissait d'un bon témoignage","Parce que Timothée avait démandé"],
						["La Gloire du visage de Moise","Le Ministère de Moise","La loi de Moise","Aucune bonne reponse"],
						["Nous demandons mal, dans le but de satisfaire la chair","Dieu ne nous aime pas","Aucune bonne reponse","Dieu n'a pas ce que nous demandons"],
						["Jean 3:16","Matthieu 7:7","Apocalypse 3:20","Aucune bonne reponse"],
						["Que nous dominons la terre","Que nous l'assujetissons","Notre Sanctification et notre abstention face à l'impudicité","toutes les reponses sont bonnes"],
						["bravo!!!","bravo!!!","bravo!!!","bravo!!!"]
					];

	var bonneReponses = [];
		bonneReponses[0] = [1,3,2,4,2];
		bonneReponses[1] = [3,2,2,3,1];
		bonneReponses[2] = [2,1,1,3,3];
	
	
	

	//on reaffiche les element
	$('#container-zone-user').show(2000);
	//on met tous les textes vides
	$('#container-question').text(' ');
	$('.zone-rep').val(' ');
	$('#user-name').text(' ');
	$('#user-score').text(' ');
	$('#champ-nom').val('');
	$('#replay, #quittez').hide(2000);
	$('#container-zone-user').show();

//le boutton start
$('#play-button').click(function() {
	var userName = $('#champ-nom').val();
	if (userName!="") {
	//commence le jeu en affichant le nom du jouer puis on appel la nextQuestion
		$('#user-name').text(userName);
		$('#container-zone-user').hide("slow");
		$('#all-end').show("slow");
		nextQuestion(0);
		button();
	} else {
		$('#champ-nom').addClass("is-invalid");
		document.querySelector('#champ-nom').placeholder = "Ecrivez au moin un nom...";
	}
});
//la fonction du chronometre
var one = 0;
function compteur() {
	// alert();
	if (one==0) {
		var interval = setInterval(kit, 1000);
	}	
	
var time = 30;
function kit() {
	// body...
	if (one<=30) {
		document.getElementById('compte-à-rebours').textContent = time;
		time--;
	} else {
		//clearInterval(interval);
		stopGame(true);
	}
	one++;
	if (time<9) {
		$('#compte-à-rebours').css("color", "red");
	}
}
}

questionsNow= questions[id];
reponsesNow= reponses[id];

function nextQuestion(indexQ) {
	//affiche la questions et les reponses 
	$('#container-question').text(questionsNow[indexQ]);
	$('#zone-rep-1').val(reponsesNow[indexQ][0]);
	$('#zone-rep-2').val(reponsesNow[indexQ][1]);
	$('#zone-rep-3').val(reponsesNow[indexQ][2]);
	$('#zone-rep-4').val(reponsesNow[indexQ][3]);/**/
	compteur();
	//réinitialise la couleur du boutton 
	$('.zone-rep').css("backgroundColor", "white");
	if (indexSent>=5) {
		indexSent = 0;
		setTimeout(stopGame(false), 1000);
	} else {indexSent++;}
	
};

const image = document.querySelector('#img-rep');

bonneReponsesNow=bonneReponses[id];
var index = 0;
var val = (sentReponse) => {
	//l'image qui change
	if (sentReponse == bonneReponsesNow[index]) {
		userScore++;
		$('#user-score').text(userScore);
		image.src = "./assets/img/good.gif";
		setTimeout(imgClearer, 800);
		$('#zone-rep-'+sentReponse).css("backgroundColor", "green");
		document.getElementById('good-song').play();
	} else {
		image.src = "./assets/img/bad.gif";
		setTimeout(imgClearer, 800);
		$('#zone-rep-'+sentReponse).css("backgroundColor", "red");
		document.getElementById('bad-song').play();
	}
	index++;

	function imgClearer() {
		image.src = "none.gif";
	}

}
//l'appele de la prochaine question par une reponse
function button() {
	//button 1
	$('#zone-rep-1').click(function() {
	/*on envoi une reponses*/
		val(1);	
		setTimeout(function() {
			nextQuestion(indexSent)
		}, 1000);
		});
	//button 2
	$('#zone-rep-2').click(function() {
		//on envoi une reponses
		val(2);
		//coloration du button cliqué
		/* $('#zone-rep-2').css("backgroundColor", "skyblue"); */
		setTimeout(function() {
			nextQuestion(indexSent)
		}, 1000);
	});
	//button 3
	$('#zone-rep-3').click(function() {
		//on envoi une reponses
		val(3);
		//coloration du button cliqué
		/* $('#zone-rep-3').css("backgroundColor", "skyblue"); */
		setTimeout(function() {
			nextQuestion(indexSent)
		}, 1000);
	});
	//button 4
	$('#zone-rep-4').click(function() {
		//on envoi une reponses
		val(4);
		//coloration du button cliqué
		/* $('#zone-rep-4').css("backgroundColor", "skyblue"); */
		setTimeout(function() {
			nextQuestion(indexSent)
		}, 1000);
	});
  }
 //la fonction de fin de jeu	
 var state = true;
function stopGame(bool) {
	var userName = $('#champ-nom').val();
	if (bool) {
		if (state) {
			//var lastAlert = alert("Le temps s'est écroulé");
			$('#all-end').hide(2000);
			$('#replay, #quittez').show(2000);
			indexSent = 0;
			if (userScore>=3) {
				$('#result-img').show();
				document.querySelector('#result-img').src = "./assets/img/good.gif"; 
				$('#result').text('Bravo '+userName+' vous avez '+ userScore +'/5');
			} else {
				$('#result-img').show();
				document.querySelector('#result-img').src = "./assets/img/bad.gif";
				$('#result').text('Désolé '+userName+' vous n\'avez que '+ userScore +'/5');
			}
		}
		
			
	} else {
		state = false;
		alert("Vous avez fini avant le temps bravo!!!");
		$('#all-end').hide(2000);
		$('#replay, #quittez').show(2000);
		indexSent = 0;
		if (userScore>=3) {
			$('#result-img').show();
			document.querySelector('#result-img').src = "./assets/img/good.gif"; 
			$('#result').text('Bravo '+userName+' vous avez '+ userScore +'/5');
		} else {
			$('#result-img').show();
			document.querySelector('#result-img').src = "./assets/img/bad.gif";
			$('#result').text('Désolé '+userName+' vous n\'avez que '+ userScore +'/5');
		}
		//console.log(state);
	}	
}
}	

window.onload = init();