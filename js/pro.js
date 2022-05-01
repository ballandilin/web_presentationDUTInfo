var bt = document.querySelectorAll("button.drop");
var text = document.querySelectorAll("p.text");

var btList = [];

// var i = 0;

for(let i = 0; i < bt.length; i++) {
    btList.push(bt[i]);
}
 
// btList.shift;
// btList.shift;

var listText = ["Les métiers accessibles avec cette formation sont : <br>"+
                "<ul>"+
                    "<li>Administrateur de base de données</li>"+
                    "<li>Administrateur de logiciels de laboratoire</li>"+
                    "<li>Administrateur de réseau</li>"+
                    "<li>Technicien de maintenance en informatique</li>"+
                "</ul>"+
                'Source : <a href=""http://www.onisep.fr/Ressources/Univers-Formation/Formations/Post-bac/Licence-pro-metiers-de-l-informatique-conception-developpement-et-test-de-logiciels" target="blank"> Onisep</a>',

                "Les métiers accessibles avec cette formation sont : <br>"+
                "<ul>"+
                    "<li>Concepteur multimédia</li>"+
                    "<li>Formateur en informatique</li>"+
                "</ul>"+
                'Source : <a href="http://www.onisep.fr/Ressources/Univers-Formation/Formations/Post-bac/Licence-pro-metiers-de-l-informatique-applications-web" target="blank"> Onisep</a>',

                "Les métiers accessibles avec cette formation sont : <br>"+
                "<ul>"+
                    "<li>Administrateur de logiciels de laboratoire</li>"+
                    "<li>Développeur d'applications mobiles</li>"+
                    "<li>Développeur informatique</li>"+
                    "<li>Formateur en informatique</li>"+
                    "<li>Intégrateur web</li>"+
                    "<li>Testeur en informatique</li>"+
                "</ul>"+
                'Source : <a href="http://www.onisep.fr/Ressources/Univers-Formation/Formations/Post-bac/Licence-pro-metiers-de-l-informatique-conception-developpement-et-test-de-logiciels" target="blank"> Onisep</a>"',

                "Les métiers accessibles avec cette formation sont : <br>"+
                "<ul>"+
                    "<li>Chef de projet informatique</li>"+
                    "<li>Chef de projet web-mobile</li>"+
                    "<li>Consultant en solutions intégrées</li>"+
                    "<li>Ingénieur technico-commercial</li>"+
                    "<li>Ingénieur technico-commercial en informatique</li>"+
                    "<li>Ingénieur télécoms et réseaux</li>"+
                    "<li>Testeur en informatique</li>"+
                "</ul>"+
                'Source : <a href="http://www.onisep.fr/Ressources/Univers-Formation/Formations/Post-bac/Diplome-d-ingenieur-de-l-Ecole-internationale-des-sciences-du-traitement-de-l-information-specialite-genie-informatique" target="blank"> Onisep</a>"',

                "Les métiers accessibles avec cette formation sont : <br>"+
                "<ul>"+
                    "<li>Chef de produit technique en informatique</li>"+
                    "<li>Chef de projet informatique</li>"+
                    "<li>Chef de projet web-mobile</li>"+
                    "<li>Concepteur de niveaux de jeu web</li>"+
                    "<li>Consultant</li>"+
                    "<li>Consultant informatique</li>"+
                    "<li>Formateur en informatique</li>"+
                    "<li>Ingénieur support</li>"+
                    "<li>Ingénieur systèmes embarqués</li>"+
                    "<li>Responsable du soutien logistique intégré</li>"+
                "</ul>"+
                'Source : <a href="http://www.onisep.fr/Ressources/Univers-Formation/Formations/Post-bac/Diplome-d-ingenieur-d-EFREI-Paris" target="blank"> Onisep</a>',

                "Les métiers accessibles avec cette formation sont : <br>"+
                "<ul>"+
                    "<li>Architecte réseau</li>"+
                    "<li>Développeur informatique</li>"+
                "</ul>"+
                'Source : <a href="http://www.onisep.fr/Ressources/Univers-Formation/Formations/Post-bac/Expert-en-informatique-et-systemes-d-information-EPSI" target="blank"> Onisep</a>',

                "Les métiers accessibles avec cette formation sont : <br>"+
                "<ul>"+
                    "<li>Administrateur de base de données</li>"+
                    "<li>Administrateur de réseau</li>"+
                    "<li>Architecte des systèmes d'information</li>"+
                    "<li>Architecte réseau</li>"+
                    "<li>Architecte web</li>"+
                    "<li>Chef de produit technique en informatique</li>"+
                    "<li>Chef de projet informatique</li>"+
                    "<li>Chef de projet web-mobile</li>"+
                    "<li>Consultant en informatique décisionnelle</li>"+
                    "<li>Développeur d'applications mobiles</li>"+
                    "<li>Développeur informatique</li>"+
                    "<li>Expert en sécurité informatique</li>"+
                    "<li>Formateur en informatique</li>"+
                    "<li>Ingénieur cloud computing</li>"+
                    "<li>Ingénieur logiciel</li>"+
                    "<li>Ingénieur support</li>"+
                    "<li>Ingénieur système</li>"+
                    "<li>Intégrateur web</li>"+
                    "<li>Spécialiste de l'accessibilité numérique</li>"+
                    "<li>Testeur en informatique</li>"+
                "</ul>"+
                'Source : <a href="http://www.onisep.fr/Ressources/Univers-Formation/Formations/Post-bac/Expert-en-informatique-et-systemes-d-information-SUPINFO" target="blank"> Onisep</a>',

                "Les métiers accessibles avec cette formation sont :"+
                "<ul>"+
                    "<li>Administrateur de réseau</li>"+
                    "<li>Architecte réseau</li>"+
                    "<li>Chef de projet informatique</li>"+
                    "<li>Développeur informatique</li>"+
                    "<li>Expert en sécurité informatique</li>"+
                    "<li>Informaticien industriel</li>"+
                    "<li>Ingénieur système</li>"+
                "</ul>"+
            'Source : <a href="http://www.onisep.fr/Ressources/Univers-Formation/Formations/Post-bac/Expert-en-technologies-de-l-information-EPITECH" target="blank"> Onisep</a>'
            ];

var statBt = [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false
            ];




for(let i = 0; i < btList.length; i++) {
    btList[i].addEventListener("click", function () {
        console.log(i)
        statBt[i] = !statBt[i];
        if(statBt[i]) {
            text[i].innerHTML = listText[i];
            btList[i].id = "active";
            console.log(btList[i].id);
        } else {
            text[i].innerHTML = "";
            btList[i].id = "";
        }
        console.log(statBt[i]);
    })
}


console.log(btList);
console.log(text);