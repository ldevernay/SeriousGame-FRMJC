$(document).ready(function() {

    $('.lang').click(function() {
        console.log("lol")
        var lang = $(this).attr('id'); // obtain language id
        // translate all translatable elements
        $('.tr').each(function(i) {
            $(this).text(aLangKeys[lang][$(this).attr('key')]);
        });
    });

    var aLangKeys = new Array();
    aLangKeys['fr'] = new Array();
    aLangKeys['uk'] = new Array();
    // Page de début
    aLangKeys['fr']['presentation'] = "Salut, moi c'est Indy. Je vais te guider a la découverte du service volontaire européen(SVE). Tout d'abord, une petite présentation avant de commencer. Une fois que tu es prêt, cliques sur le bouton 'Démarrez'";
    aLangKeys['uk']['presentation'] = "Hi ! My name is Indy. I will guide you through the discovery of the European Voluntary Service (EVS). First of all, take a look at the definition before beginning. Once you're ready, click on the button'start'";
    // Définition du SVE
    aLangKeys['fr']['definition'] = "Le Service Volontaire Européen (SVE) permet de partir dans un pays étranger pour travailler dans une organisation à but non lucratif en tant que volontaire. Ce séjour permet de découvrir une autre culture et d'acquérir de nouvelles compétences. C’est un moyen de se sentir citoyen de l'Europe et se mettre au service d'un projet d'intérêt général.";
    aLangKeys['uk']['definition'] = "The european Voluntary Service allows you to travel in a foreign country to work in a non-profit organization as a volunteer. During this journey, you will discover other cultures and learn new skills. It's a way to feel as an european citizen and work for a project of general interest"
        // Démarrage du jeu
    aLangKeys['fr']['intro'] = "Voici ton carnet de bord récapitulant toutes les étapes de ton aventure. Tu peux y retourner à tout moment pour suivre ton évolution. Pour commencer, je te propose de choisir entre une mission ou un pays.";
    aLangKeys['uk']['intro'] = "Take a look at your log book. It sums each step of you're adventure. You can go back to it at any time to follow your progression. Now that you're ready, just choose between a mission or a country.";
    // choix pays
    aLangKeys['fr']['pays'] = "Voici la carte d’Europe sur laquelle tu peux choisir le pays dans lequel tu veux faire ton service européen. clique sur le pays de ton choix.";
    aLangKeys['uk']['pays'] = "Think about which country you would like to do your EVS in. Then select it on the map";
    // choix mission
    aLangKeys['fr']['missions'] = "Voici une sélection de missions dans divers pays. Regarde bien les thèmatiques et clique sur la mission de ton choix";
    aLangKeys['uk']['missions'] = "Here's a selection of missions in various countries. Explore the different thematics and click on your choice.";
    // Après choix de la mission ou du Pays
    aLangKeys['fr']['start'] = "Très bon choix ! C’est parti !";
    aLangKeys['uk']['start'] = "Very good choice ! Let's start !";
    // Budget
    aLangKeys['fr']['budget'] = "Comment allons nous financer ce projet ? je te propose de faire une sélection de toutes les dépenses que tu penses être amené à devoir payer.";
    aLangKeys['uk']['budget'] = "How are we gonna finance this project ? Let's make a selection of all the costs you'll will certainly face during your trip";
    // Lettre de motivation
    aLangKeys['fr']['motiv'] = "Un bon CV et une lettre de motivation sont des clés essentielles pour obtenir un service volontaire européen. Tu va devoir reconstituer ce puzzle pour obtenir ton CV et ta lettre de motivation. Conseil: Un CV et une lettre de motivation rédigés en anglais auront plus d’impact pour la sélection de votre candidature.";
    aLangKeys['uk']['motiv'] = "A good CV and a cover letter are essentials to obtain a mission within the EVS. If you want to see how to structure those documents, try to reconstruct the jigsaw above. Tip: A CV and a cover letter written in english will have a greater impact on your candidacy.";
    // Entretien Skype
    aLangKeys['fr']['skype'] = "Nous allons maintenant simuler un entretien. Cet entretien sera sous forme de qcm , il te suffit donc de cocher la bonne réponse. Bonne chance !";
    aLangKeys['uk']['skype'] = "We are now going to simulate an interview. Our referent abroad will ask you a few questions under a MCQ form. Good luck !";
    // Page de fin
    aLangKeys['fr']['end'] = "Félicitations ! Toutes les conditions sont remplies pour effectuer ta mission de service civique européen. Maintenant que tu sais tout, lances toi et montes un projet concret !";
    aLangKeys['uk']['end'] = "Congratulations ! All the requirements to prepare your European Voluntary Service are met. Now that you know everything, why don't you make a try and plan a concrete project ?";
    // Questionnaire
    aLangKeys['fr']['Q1'] = "Pour quelles raisons voulez-vous faire un service volontaire ?";
    aLangKeys['uk']['Q1'] = "For which reasons do you want to make an European Voluntary Service ?";
    aLangKeys['fr']['Q1R1'] = "découvrir d’autre cultures.";
    aLangKeys['uk']['Q1R1'] = "To discover other cultures.";
    aLangKeys['fr']['Q1R2'] = "Résoudre les problèmes d’environnement.";
    aLangKeys['uk']['Q1R2'] = "To solve environnemental problems.";
    aLangKeys['fr']['Q1R3'] = "aider les populations les plus défavorisées.";
    aLangKeys['uk']['Q1R3'] = "To helpl the disadvandaged people.";
    aLangKeys['fr']['Q1R4'] = "faire la fête.";
    aLangKeys['uk']['Q1R4'] = "To party !!!";
    aLangKeys['fr']['Q2'] = "Dans quel domaine souhaitez vous exercer votre mission ?";
    aLangKeys['uk']['Q2'] = "What is your mission thematic ?";
    aLangKeys['fr']['Q2R1'] = "Culture et loisirs";
    aLangKeys['uk']['Q2R1'] = "Culture and hobbies";
    aLangKeys['fr']['Q2R2'] = "le sport et la jeunesse";
    aLangKeys['uk']['Q2R2'] = "Youth and sport";
    aLangKeys['fr']['Q2R3'] = "Sauvetage des licornes";
    aLangKeys['uk']['Q2R3'] = "Unicorns rescue";
    aLangKeys['fr']['Q2R4'] = "la solidarité";
    aLangKeys['uk']['Q2R4'] = "Solidarity";
    aLangKeys['fr']['Q3'] = "A votre avis que peut vous apporter le service volontaire européen ?";
    aLangKeys['uk']['Q3'] = "In your opinion, which benefits will you gain from the EVS?";
    aLangKeys['fr']['Q3R1'] = "acquérir de nouvelles compétences et apprendre de nouvelles langues";
    aLangKeys['uk']['Q3R1'] = "gain new skills and learn new languages";
    aLangKeys['fr']['Q3R2'] = "Me faire de nouveaux amis pour mon facebook";
    aLangKeys['uk']['Q3R2'] = "to make new friends for my Facebook";
    aLangKeys['fr']['Q3R3'] = "une expérience personnelle et professionnelle de terrain.";
    aLangKeys['uk']['Q3R3'] = "Personnal development and a professional experience";
    aLangKeys['fr']['Q3R4'] = "une rencontre et une ouverture aux autres par l’entraide";
    aLangKeys['uk']['Q3R4'] = "Meeting other people and opening my mind through mutual aid";
    aLangKeys['fr']['Q4'] = "Vos amis disent de vous que vous êtes plutôt :";
    aLangKeys['uk']['Q4'] = "Your friends would tell that you are rather :";
    aLangKeys['fr']['Q4R1'] = "Généreux et altruiste.";
    aLangKeys['uk']['Q4R1'] = "Generous and altruistic";
    aLangKeys['fr']['Q4R2'] = "Aventurier et courageux";
    aLangKeys['uk']['Q4R2'] = "Adventurous and couragous";
    aLangKeys['fr']['Q4R3'] = "Casanier et indépendant";
    aLangKeys['uk']['Q4R3'] = "Homebody and independant";
    aLangKeys['fr']['Q5'] = "Pendant une soirée, un étudiant Erasmus, que vous ne connaissez pas veut engager la conversation avec vous. Problème, vous ne comprenez pas un mot d’espagnol. Quelle est votre attitude ?";
    aLangKeys['uk']['Q5'] = "During a party, an unknown Erasmus student want to talk to you. Problem, you don't understand a word. How do you react ?";
    aLangKeys['fr']['Q5R1'] = "Vous ne cherchez pas a faire d’efforts et l’abandonnez au bout de quelques minutes";
    aLangKeys['uk']['Q5R1'] = "You don't make any effort and go away after a few minuts";
    aLangKeys['fr']['Q5R2'] = "Vous essayez de comprendre quelques mots et d’en apprendre un peu plus sur lui";
    aLangKeys['uk']['Q5R2'] = "You try to learn a few things about him with the words you've managed to understand.";
    aLangKeys['fr']['Q5R3'] = "Vous tentez de continuer la conversation en anglais , ou bien demandez a une personne de faire l’interprète";
    aLangKeys['uk']['Q5R3'] = "You keep speaking english or you ask a person to translate";
    aLangKeys['fr']['Q6'] = "Vous avez l’occasion de partir faire un voyage dans un pays étranger :";
    aLangKeys['uk']['Q6'] = "You travel in a foreign country, what are your activities ?";
    aLangKeys['fr']['Q6R1'] = "Vous faites quelques visites culturelles";
    aLangKeys['uk']['Q6R1'] = "You make some cultural visits";
    aLangKeys['fr']['Q6R2'] = "Vous restez a l’hôtel pour profiter de la piscine";
    aLangKeys['uk']['Q6R2'] = "You stay at the hotel to enjoy the pool";
    aLangKeys['fr']['Q6R3'] = "Vous vous immerger totalement dans la culture du pays et respectez les traditions locales";
    aLangKeys['uk']['Q6R3'] = "You immers yourself in the culture of the country and you respect the local traditions";
    aLangKeys['fr']['Q7'] = "Seul, au beau milieu d’une île déserte :";
    aLangKeys['uk']['Q7'] = "You are alone on a desertic island :";
    aLangKeys['fr']['Q7R1'] = "Vous cherchez un abri pour la nuit";
    aLangKeys['uk']['Q7R1'] = "You look for a shelter for the night";
    aLangKeys['fr']['Q7R2'] = "Vous essayez de construire un radeau pour rejoindre le continent le plus proche";
    aLangKeys['uk']['Q7R2'] = "You try to build a raft to join the nearest continent";
    aLangKeys['fr']['Q7R3'] = "Vous paniquez et attendez les secours";
    aLangKeys['fr']['Q7R3'] = " You panic and wait for the rescuers";

})