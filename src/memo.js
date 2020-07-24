import "./style.css";


let test = "Yo Wins !";
const idTest = document.getElementById('test');

const testFunction = function(num1, num2){
    return num1 + num2;
}

// idTest.innerHTML = testFunction(6, 6);
// console.log(testFunction(6, 6));


const personne = {
    Prenom: 'Alice',
    Nom: 'Goujon'
};

const b = {
    Prenom: 'Skye',
    Nom: 'Bréchaire'
};

// console.log(Object.entries(personne));

function afficheMessage(message = 'WIns !'){
    console.log(message.fontcolor('red'));
}

// afficheMessage('Yeah yeah');

function addition(...nombres){
    let somme = 0;
    for(let i = 0; i < nombres.length; i++){
        somme += nombres[i];
    }
    return somme;
}

const resultat = addition(10, 20, 30, 40, 50);
// document.write(resultat);

const famille = {
    femme: "Lilie",
    fille: "Skyou"
}

const nombreMembre = () => {
    let membre = 0;
    for(membres in famille){
        membre += 1;
    }
    return membre;
}

// console.log(famille['fille']);

const tab = [1, 2, 3, 4, 5, {
    name: "Soleil"
}];

const [tab1, , tab3, ...tab4Et5] = tab;

// console.log(tab4Et5);
// console.log(tab.indexOf(2));

// Copie profonde ! Pour modifier des objets dans des objets (na marche pas avec des fonctions dans des objets)

const copieTab = JSON.parse(JSON.stringify(tab));

copieTab.push(6);
copieTab[5].name = "Lune";

// console.log(tab);
// console.log(copieTab);


const tabPasTrié = [7, 45, 25, 4135, 54, 45 , 7852, 4];

tabPasTrié.sort((a, b) => {
    return a - b
});

// console.log(tabPasTrié);

// console.log(document.querySelector("#firstTitle").nextElementSibling.attributes[0].nodeValue); /* === */ console.log(document.querySelector("#firstTitle").nextElementSibling.id);

const carre1 = document.querySelector("#carre1");
const carre2 = document.querySelector("#carre2");


// section.className = "red";

carre1.onmouseover = () => {
    carre1.setAttribute("style", "background-color: red;"); // div.style.backgroundColor = "red";
    carre1.style.width = "300px";
    carre1.style.height = "300px";

};

carre1.onmouseout = () => {
    carre1.style.backgroundColor = "#eee";
    carre1.style.width = "200px";
    carre1.style.height = "200px";
};

carre2.addEventListener("mouseover", () => {
    carre2.style.backgroundColor = "green";
    carre2.style.width = "300px";
    carre2.style.height = "300px";
});

carre2.addEventListener("mouseout", () => {
    carre2.style.backgroundColor = "#eee";
    carre2.style.width = "200px";
    carre2.style.height = "200px";
});

const btn = document.querySelector("#bouton");

btn.addEventListener('click', (event) => {
    console.log(Date());
})

// let tableauToDo = [{
//     nom: "Tache Une",
//     done: "false"
// },
// {
//     nom: "Tache Deux",
//     done: "false"
// },
// {
//     nom: "Tache Trois",
//     done: "false"
// },
// {
//     nom: "Tache Quatre",
//     done: "false"
// },
// {
//     nom: "Tache Cinq",
//     done: "false"
// }];

// const listeEnfant = document.createElement('li');

// const ul = document.querySelector('ul');
// const list = document.querySelector(".list");

// for(let i = 0; i < tableauToDo.length; i++){
//     ul.innerHTML = `${listeEnfant}`;
// }

// list.addEventListener("mouseover", () => {
//     list.style.width = "350px";
// })




