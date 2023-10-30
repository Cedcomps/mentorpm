// Call to action course
$('.close').click(function(){
	$('#course').fadeOut();
});
// Nav active underline //
var selector = '.underline1';

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});

// $('#presentation,#cv').hide();

// $('#aboutMe').click(function(){
// 	$('#cv, #tools').fadeOut();
// 	$('#presentation').fadeIn();
// 	$('#aboutMe').style.transform = "rotate(-2000deg) translateX(100px)";
// });

// $('#navTools').click(function(){
// 	$('#presentation').fadeOut();
// 	$('#cv').hide();
// 	$('#tools').fadeIn();
// });

// $('#dlCV').click(function(){
// 	$('#presentation').fadeOut();
// 	$('#tools').hide();
// 	$('#cv').fadeIn();
// });

// const Toast = Swal.mixin({
// 	toast: true,
// 	position: 'top-end',
// 	showConfirmButton: false,
// 	timer: 3000
//   });
  
  
// Click on tools 
// $('#notionTemplate').click(function(){
// 	Swal.fire({
// 		title: '<strong class="subtitle2">Le Product Management en 8 modèles sur Notion</strong>',
// 		width: 550,
// 		html:
// 		'<p><strong>Améliorer la résolution de problème et la prise de décision</strong> </br></br>8 modèles de Notion, guides et exemples inclus:\n</br></br>\n✅ Matrice d&#39;Eisenhower</br>\n✅ Pensée de second ordre</br>\n	✅ L&#39;échelle des besoins</br>\n	✅ DESC</br>\n✅ Impact Mapping</br>\n	✅ Matrice de décision</br>\n✅ Product Brief</br>\n✅ L&#39;opportunité de base</p>',
// 		imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
// 		imageWidth: '4rem',
// 		imageAlt: 'Notion Product Management',
// 		showCloseButton: true,
// 		showConfirmButton: false,
// 		footer: '</br><a class="gumroad-button" href="https://cedricpm.gumroad.com/l/notion">Template gratuit sur</a>',
// 	  })
// 	});
$('#desc').click(function(){
	Swal.fire({
		title: '<strong class="subtitle2">Méthode DESC</strong>',
		width: 700,
		html:
		'<p>⚔️ Vous êtes en désaccord avec une partie prenante ? Un de vos collègues a fait une erreur ?\n</br>\n\n</br>\nMéthode DESC : un feedback décomposé en 4 étapes</br>\n</br>\n1️⃣ Décrivez les faits objectivement et expliquez les conséquences</br>2️⃣ Exprimez votre ressenti face à la situation</br>3️⃣ Spécifiez la solution</br>4️⃣ Conclure positivement</br>\n\n</br>\n\nAdapter ce modèle c\'est se donner les capacités de créer de fortes alliances par la suite.',
		imageUrl: 'assets/desc.png',
		imageAlt: 'Méthode DESC',
		imageClass: 'img-fluid',
		showCloseButton: true,
		showConfirmButton: false,
	  })
	});
$('#productBrief').click(function(){
	Swal.fire({
		title: '<strong class="subtitle2">PRODUCT BRIEF</strong>',
		width: 700,
		html:
		'<p>La fiche produit est un document d&#39;une à trois pages qui fournit des informations très importantes pour que votre collaborateur interne puisse comprendre ou utiliser efficacement le produit.</br></br> Il sera la source d&#39;information centrale pour votre équipe lors de toute évolution, de l&#39;onboarding ou de la préparation et de l&#39;exécution.</br></br>💬 Son retour sur investissement est idéal car il évite une perte des connaissances sur le produit</p>',
		imageUrl: 'assets/productbrief.png',
		imageAlt: 'Product Brief',
		imageClass: 'img-fluid',
		showCloseButton: true,
		showConfirmButton: false,
	  })
	});
$('#valuePropositionCanvas').click(function(){
	Swal.fire({
		title: '<strong class="subtitle2">VALUE PROPOSITION CANVAS</strong>',
		width: 700,
		html:
		'<p>Ce modèle est présenté en deux parties distinctes : le profil du client et la carte des valeurs. Voici comment est représenté le modèle Value Proposition Canvas. </br></br> Cela conditionnera votre "promesse" business.  		Elle définit la conception du produit ou du service, son positionnement, et donc ce que vous proposez à vos futurs clients afin qu&#39;ils puissent comprendre clairement ce que vous apportez de différent.</p></br><a class="button" target="_blank"href="https://cedricpm.s3.eu-west-3.amazonaws.com/Canevas+de+proposition+de+valeur+-+CedricPM.pdf"><i class="fas fa-download"></i>&nbsp;Télécharger</a>',
		imageUrl: 'assets/parrot-captain.png',
		imageAlt: 'Value Proposition Canvas',
		imageClass: 'img-fluid',
		showCloseButton: true,
		showConfirmButton: false,
		})
	});
$('#impactMapping').click(function(){
Swal.fire({
	title: '<strong class="subtitle2">Impact Mapping</strong>',
	width: 700,
	html:
	'<p>\nL’Impact Mapping est une technique visuelle de planification tactique qui vous permet de clairement identifier les hypothèses, en aidant le product manager à connaître l’étendu de l’impact qu’un objectif peut avoir dans un produit \n<br>\n \n<br>\n 🎯 Définir un objectif SMART \n<br>\n 👥 Définir la ou les cibles  \n<br>\n 💥 Définir l’impact ou le comportement  \n<br>\n 💡 Définir la fonctionnalité de levier  \n<br>\n <br>\n\nCette méthode permet d’avoir une vue holistique des opportunités et approches à tester pour réaliser un objectif.</p>',
	imageUrl: 'assets/impactmapping.webp',
	imageAlt: 'Impact Mapping',
	imageClass: 'img-fluid',
	showCloseButton: true,
	showConfirmButton: false,
	  })
	});
$('#LadderNeeds').click(function(){
	Swal.fire({
		title: '<strong class="subtitle2">L&#39;échelle des besoins</strong>',
		width: 700,
		html:
		'<p>Voulez-vous une TECHNIQUE TRÈS SIMPLE pour une meilleure VISION PRODUIT ? 👓 </p>🎯	Utile pour préparer la vision d&#39;une feature comme le "Product Vision Board", résumé de manière claire et concise comme le propose <span class="underline"><a target="_blank" href="https://www.youtube.com/watch?v=IPYeCltXpxw"> Simon Sinek</a> with #startwithwhy</span></p><p> Etre capable de répondre à ces 3 questions :</br>⛳️ Pourquoi votre produit fait le travail, </br>⛳️ Comment votre produit fait le travail </br>⛳️ Quel travail fait votre produit.</p>',
		imageUrl: 'assets/echelledesbesoins.webp',
		imageAlt: 'L&#39;echelle des besoins',
		imageClass: 'img-fluid',
		showCloseButton: true,
		showConfirmButton: false,
	  })
	});
$('#matricedecision').click(function(){
	Swal.fire({
		title: '<strong class="subtitle2">Matrice de décision</strong>',
		width: 700,
		html:
		'<p>Choisissez la meilleure option en tenant compte de nombreux critères.\n</br></br>\nCertaines décisions peuvent être difficiles à prendre. Surtout lorsque plusieurs critères entrent en ligne de compte. </br></br>🗳La matrice de décision est un outil qui vous aidera à prendre en compte tous les critères importants lors de la prise d\'une décision. Elle apporte plus de clarté dans le processus.\n</br>\n</br>Elle est particulièrement utile lorsque vous avez plusieurs options et que vous devez les départager sur la base de plusieurs critères différents.\n</br></p>',
		imageUrl: 'assets/decision.png',
		imageAlt: 'Matrice de décision',
		imageClass: 'img-fluid',
		showCloseButton: true,
		showConfirmButton: false,
	  })
	});
$('#eisenhower').click(function(){
	Swal.fire({
		title: '<strong class="subtitle2">Matrice d&#39;Eisenhower</strong>',
		width: 700,
		html:
		'<p>Pour chaque activité ou tâche, posez-vous la question suivante : Est-elle importante ou non ? Est-elle urgente ou non ?</br></br>\n\nEn fonction de la réponse, placez l\'activité/tâche dans le bon quadrant. Le quadrant détermine ce que vous devez faire de la tâche :\n\n</br></br>🔥 Importante et urgente → Faites-la 🔥\n </br>   \n📅 Important mais pas urgent → Planifiez-le 📅\n</br>    \n👨‍💼Urgent mais pas important → Déléguer 👨‍💼\n   </br> \n☠ Pas urgent et pas important → Ne le faites pas ☠</p>',
		imageUrl: 'assets/eisenhower.webp',
		imageAlt: 'Matrice d&#39;Eisenhower',
		imageClass: 'img-fluid',
		showCloseButton: true,
		showConfirmButton: false,
	  })
	});
$('#secondordre').click(function(){
	Swal.fire({
		title: '<strong class="subtitle2">Pensée de second ordre</strong>',
		width: 700,
		html:
		'<p>Considérez les conséquences à long terme de vos décisions : </br>⏳ dans 5 jours, </br>⏳ 5 mois </br>⏳ et 5 ans.\n</br>\nConsidérez une décision que vous devez prendre. Commencez par examiner les effets les plus immédiats de cette décision - le premier ordre\n</br></br>\nEnsuite, pour chacun des effets, demandez-vous : \"Et ensuite ?\" C\'est ainsi que vous examinez le second ordre des conséquences de cette décision.',
		imageUrl: 'assets/secondordre.png',
		imageAlt: 'Pensée de second ordre',
		imageClass: 'img-fluid',
		showCloseButton: true,
		showConfirmButton: false,
	  })
	});
$('#Agilecard').click(function(){
	Swal.fire({
		title: '<strong class="subtitle2">Agile Comfort Zone Game</strong>',
		width: 700,
		html:
		'<p>Voulez vous changer la <b>culture d&#39;entreprise actuelle ?</b> Cela vous empêche-t-il de lancer vos propres initiatives ou de créer des MVP ? 🎯 </p><p>Vous voulez prendre le taureau par les cornes mais vous ne savez pas par où commencer ?	Vous n&#39;avez pas encore trouvé d&#39;outils pour <b>changer l&#39;état d&#39;esprit</b> qui consume lentement vos relations au travail ? 😷 </p><p>Que vous soyez un agent de changement, un coach, un facilitateur, un RH ou un PDG, vous êtes tous concernés par la culture promue au sein de votre entreprise ⛳️ C&#39;est pourquoi je vous propose cet outil : à imprimer... en masse :)</p><p> </br><a class="button" target="_blank"href="http://bit.ly/Agilegame"><i class="fas fa-download"></i>&nbsp;Télécharger</a>',
		imageUrl: 'assets/confortzone.png',
		imageAlt: 'Agile Comfort Zone Game',
		imageClass: 'img-fluid',
		showCloseButton: true,
		showConfirmButton: false,
		footer: '💜 created with <a target="_blank" href="https://www.linkedin.com/in/yoanthirion/">&nbsp;Yoan Thirion</a>, <a target="_blank" href="https://www.linkedin.com/in/adrien-muller-566373a/">&nbsp;Adrien Muller</a>&nbsp;& <a target="_blank" href="https://www.linkedin.com/in/isabel-van-de-voorde-8180432/">&nbsp;Isabel Van De Voorde</a> ',
		})
	});
	$('#opportunite').click(function(){
		Swal.fire({
			title: '<strong class="subtitle2">Opportunité</strong>',
			width: 700,
			html:
			'<p>Un framework simple utilisé chez Facebook pour toutes vos opportunités\n</br>\n\n</br>1. Quel est le problème qu\'on les gens ? *What is the people\'s problem ?*\n</br>2. Est-ce qu\'on pense que ça vaut le coup de régler ce problème ? *Is this problem worth to be solved ?*\n</br>3. Qu\'est-ce qui se passe une fois qu\'on a réglé le problème ? *What happens once we solved the problem ?*',
			imageUrl: 'assets/opportunite.png',
			imageAlt: 'Opportunité',
			imageClass: 'img-fluid',
			showCloseButton: true,
			showConfirmButton: false,
	  })
	});