const prompt = require('prompt-sync')()


let quizz = [
    {
      question: "Qui est l'enseignant principal de Yūji Itadori à l'école des sorciers ?",
      reponse: ["1) Kento Nanami", "2) Satoru Gojō", "3) Masamichi Yaga", "4) Toge Inumaki"],
      reponseCorrect: 2
    },
    {
      question: "Quel est le nom du roi des fléaux que Yūji Itadori héberge en lui ?",
      reponse: ["1) Sukuna", "2) Mahito", "3) Hanami", "4) Jogo"], 
      reponseCorrect: 1
    },
    {
      question: "Quelle est la capacité unique de l'œil droit de Satoru Gojō lorsqu'il utilise la technique de l'Infinité ?",
      reponse: ["1) La téléportation", "2) La création de barrières protectrices", "3) Le ralentissement du temps", "4) La manipulation de l'espace et de la distance"],
      reponseCorrect: 4
    },
    {
      question: "Quel est l'objectif principal de Suguru Geto, meilleur ami de Gojo :'( ....  dans l'histoire ?",
      reponse: ["1) Devenir le Roi des Fléaux", "2) Éradiquer tous les non-sorciers", "3) Tuer Sukuna", "4) Contrôler tous les fléaux de classe spéciale"],
      reponseCorrect: 2
    },
    {
      question: "Combien de doigts de Sukuna existent-ils en tout ?",
      reponse: ["1) 10", "2) 15", "3) 20", "4) 25"],
      reponseCorrect: 3
    }
  ];
  
  let score = 0
  
  console.log("Bienvenue au jeu de quiz ! Répondez aux 5 questions en entrant le numéro correspondant.")
  
  for (let i = 0; i < quizz.length; i++) {
    let resultat = quizz[i];
    console.log(`Question ${i + 1}: ${resultat.question}`);

    
    for (let j = 0; j < resultat.reponse.length; j++) {
      console.log(resultat.reponse[j]);
    }
  
    let reponseUtilisateur = Number(prompt('Votre réponse (entrez le numéro correspondant) : '))
    while (isNaN(reponseUtilisateur) || reponseUtilisateur < 1 || reponseUtilisateur > resultat.reponse.length) {
      console.log('Veuillez entrer un numéro valide compris entre 1 et 4.');
      reponseUtilisateur = Number(prompt('Votre réponse (entrez le numéro correspondant) : '))
    }
  
    if (reponseUtilisateur === resultat.reponseCorrect) {
      console.log("Bonne réponse !")
      score++;
    } else {
      console.log(`Incorrect. La bonne réponse est : ${resultat.reponse[resultat.reponseCorrect - 1]}`)
    }
  }
  
  console.log(`Quiz terminé! Votre score final est de : ${score} / ${quizz.length}`)
