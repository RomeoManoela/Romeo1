
var profetion=document.getElementById('profetion');
var image=document.getElementById('rom');
var plus=document.getElementById('plus');
var nom=document.getElementById('nom');
var personne0={
    nom:'ROMEO MANOELA',
    image:'./image/1.jpg',
    metier:'DEVELOPER BLOCKCHAIN',
    info:'Je suis Romeo Manoela,un etudiant à l\'Ecole National d\'Informatique Fianarantsoa.Maintenant je suis un developpeur BLOCKCHAIN depuis l\'année 2019 j\'ai decouvert l\'existance des Cryptomonnais et je me suis concentré dedans.J\'ai appris alors à programmer sur les <strong>Technologie Blockchain</strong>.J\'ai echoué plusieur fois mais je ne compte pas mes échecs je garde toujous la tête froide car je sais que je suis le meilleur et que j\'y arriverai.'
}
var personne1 ={
    nom:"ESOALAHY JOSEFA",
    image:'./image/2.jpg',
    metier:'DEVELOPER BACKEND',
    info:'Je suis Esoalahy,un etudiant à l\'Ecole National d\'Informatique Fianarantsoa.Maintenant je suis un developpeur BACKEND depuis l\'année 2020 j\'ai decouvert l\'existance du JAVASCRIPT et je me suis concentré dedans.J\'ai appris alors à programmer sur les <strong>Technologie Avancées </strong>.J\'ai echoué plusieur fois mais je ne compte pas mes échecs je garde toujous la tête froide car je sais que je suis le meilleur et que j\'y arriverai.',
    
}
var personne2={
    nom:'JOSEPH NAVONY',
    image:'./image/3.jpg',
    metier:'DEVELOPER FRONTED',
    info:'Je suis Joseph ,un etudiant à l\'Ecole National d\'Informatique Fianarantsoa.Maintenant je suis un developpeur BACKEND depuis l\'année 2020 j\'ai decouvert l\'existance du CSS et je me suis concentré dedans.J\'ai appris alors à programmer sur les <strong>Technologie Avancées </strong>.J\'ai echoué plusieur fois mais je ne compte pas mes échecs je garde toujous la tête froide car je sais que je suis le meilleur et que j\'y arriverai.',
}


var personne3={
    nom:'EMMANOEL MITOVIMANA',
    image:'./image/4.jpg',
    metier:'DISIGNER',
    info:'Je suis Emmanoel ,un etudiant à l\'Ecole National d\'Informatique Fianarantsoa.Maintenant je suis un developpeur BACKEND depuis l\'année 2020 j\'ai decouvert l\'existance du JAVASCRIPT et je me suis concentré dedans.J\'ai appris alors à programmer sur les <strong>Technologie Avancées </strong>.J\'ai echoué plusieur fois mais je ne compte pas mes échecs je garde toujous la tête froide car je sais que je suis le meilleur et que j\'y arriverai.',
}

var personne4={
    nom:'CKRISTIAN JOHN CARTER',
    image:'./image/5.jpg',
    metier:'NETWORK ADMIN',
    info:'Je suis Christian,un etudiant à l\'Ecole National d\'Informatique Fianarantsoa.Maintenant je suis un developpeur BACKEND depuis l\'année 2020 j\'ai decouvert l\'existance du JAVASCRIPT et je me suis concentré dedans.J\'ai appris alors à programmer sur les <strong>Technologie Avancées </strong>.J\'ai echoué plusieur fois mais je ne compte pas mes échecs je garde toujous la tête froide car je sais que je suis le meilleur et que j\'y arriverai.',
}
var indice=0;

function precedant(){
    indice--;
    var liste=[personne0,personne1,personne2,personne3,personne4];
    if(indice<0)indice=4;
    nom.innerText=liste[indice].nom;
    profetion.innerText=liste[indice].metier;
    plus.innerHTML=liste[indice].info;
    image.src=liste[indice].image;
}

function suivant(){
    indice++;
    var liste=[personne0,personne1,personne2,personne3,personne4];
    if(indice>4)indice=0;
    nom.innerText=liste[indice].nom;
    profetion.innerText=liste[indice].metier;
    plus.innerHTML=liste[indice].info;
    image.src=liste[indice].image;
}

function aleatoire1(){
    var liste=[personne0,personne1,personne2,personne3,personne4];
    var nombre=Math.random()*liste.length;
    indice=Math.round(nombre);
    nom.innerText=liste[indice].nom;
    profetion.innerText=liste[indice].metier;
    plus.innerText=liste[indice].info;
    image.src=liste[indice].image;
}

var btn_apres=document.getElementById('apres');
var btn_avant=document.getElementById('avant');
var btn_aleatoire=document.getElementById('aleatoire');

btn_aleatoire.addEventListener('click',aleatoire1);
btn_avant.addEventListener('click',precedant);
btn_apres.addEventListener('click',suivant);