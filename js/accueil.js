var semestre = document.querySelectorAll("button.arc");
var semText = document.getElementById('semestre');

var sem1 = '<h3>Semestre 1</h3><br><table><tr>  <td>Unité d'+'enseignement 1 (UE1)</td><img src="../img/semestre1ue1.png" alt="UE 1 Semestre 1>  <td>UE2</td><img src="../img/semestre1ue2.png" alt="UE 2 Semestre 1"> </tr><tr>  <td>- Introduction aux systèmes informatiques </td>  <td>- Mathématiques</td></tr><tr><td>- Introduction à l’algorithmique et à la programmation</td><td>- Algèbre linéaire</td></tr><tr><td>- Structures de données et algorithmes fondamentaux</th><td>- Environnement économique</td></tr><tr><td>- Introduction aux bases de données</th><td>- Fonctionnement des organisations</td></tr><tr><td>- Conception de documents et d’interfaces numériques</th><td>- Expression - Communication</td></tr><tr><td>- Projet tutoré - Découverte</th><td>- Anglais et Informatique</td></tr><tr><td></td><td>- PPP - Connaître le monde professionnel</td></tr></table> <br>';
var sem2 = '<h3>Semestre 2</h3><br><table><tr><td>UE 1 (255 h)</td><img src="../img/semestre2ue1.png" alt="UE 1 Semestre 2"><td>UE 2 (245 h)</td><img src="../img/semestre2ue2.png" alt="UE 2 Semestre 2"></tr><tr><td>- Architecture et programmation</td><td>- Graphes et langages</td></tr><tr><td>- Architecture des réseaux</th><td>- Analyse et méthodes numériques</td></tr><tr><td>- Bases de la programmation orientée objet</th><td>- Environnement comptable, financier, juridique et social</td></tr><tr><td>- Bases de la conception orientée objet</th><td>- Gestion de projet informatique</td></tr><tr><td>- Introduction aux interfaces homme-machine</th><td>- Expression - Communication</td></tr><tr><td>- Programmation et administration des bases de données</th><td>- Anglais</td></tr><tr><td>- Projet tutoré - description et planification de projet</td><td>- PPP- Identifier ses compétences</td></tr></table><br>';
var sem3 = '<h3>Semestre 3</h3><br><table><tr><td>UE 1 (225 h)</td><img src="../img/semestre3ue1.png" alt="UE 1 Semestre 3"><td>UE 2 (225 h)</td><img src="../img/semestre3ue2.png" alt="UE 2 Semestre 3"> <td>UE 3 (80 h)</td><img src="../img/semestre3ue3.png" alt="UE 3 Semestre 3"></tr><tr><td>- Principes des systèmes d’exploitation</td><td>- Probabilités et statistiques</td><td>- Méthodologie de la production d’applications</td></tr><tr><td>- Services réseaux</th><td>- Modélisations mathématiques</td><td>- Projet tutoré - Mise en situation professionnelle</td></tr><tr><td>- Algorithmique avancée</th><td>- Droit des technologies de l’information et de la communication</td><td>- PPP- Préciser son projet</td></tr><tr><td>- Programmation web coté serveur</th><td>- Gestion des systèmes d’information</td></tr><tr><td>- Conception et programmation objet avancées</th><td>- Expression - Communication</td></tr><tr><td>- Bases de données avancées </th><td>- Collaborer en anglais</td></tr><tr><td></td><td>- PPP- Identifier ses compétences</td></tr> </table><br>';
var sem4 = '<h3>Semestre 4 PEC (Parcours Etudes Courtes)</h3><br><table><tr><td>UE 1 (225 h)</td><img src="../img/semestre4ue1.png" alt="UE 1 Semestre 4"><td>UE 2 (225 h)</td><img src="../img/semestre4ue2.png" alt="UE 2 Semestre 4"> <td>UE 3</td></tr><tr><td>- Administration système et réseau</td><td>- Ateliers de création d’entreprise</td><td>- Stage professionnel</td></tr><tr><td>- Programmation répartie</th><td>- Recherche opérationnelle et aide à la décision</td></tr><tr><td>- Programmation web-client riche</th><td>- Expression-Communication</td></tr><tr><td>- Conception et développement d’applications mobiles</th><td>- Travailler en anglais</td></tr><tr><td>- Compléments d’informatique en vue d’une insertion immédiate</th></tr><tr><td>- Projet tutoré</td></tr></table><br><h3>Semestre 4 PEL (Parcours Etudes Longues)</h3><br><table><tr><td>UE 1 (138 h)</td><img src="../img/semestre4bisue1.png" alt="UE 1 Semestre 4"><td>UE 2 (106 h)</td><img src="../img/semestre4bisue2.png" alt="UE 2 Semestre 4"> <td>UE 3</td></tr><tr><td>- Web sémantique</td><td>- Maths pour l’ingénieur</td><td>- Stage professionnel</td></tr><tr><td>- Image & Vidéo</th><td>- Recherche opérationnelle</td></tr><tr><td>- Programmation web</th><td>- Expression-Communication</td></tr><tr><td>- Systèmes embarqués</th><td>- Anglais</td></tr><tr><td>- Cryptage/Compression</th></tr><tr><td>- Projet tutoré</td></tr></table><br>';


/* Pour chaque bouton "1" */
for (let i = 0; i < semestre.length; i++) {

    /* ajoute un evenement click */
    semestre[i].addEventListener("click", function() {

        /* pour chaque bouton "2" */
        for (let j = 0; j < semestre.length; j++) {

            /* Si le bouton "1" n'est pas le bouton "2" */
            if(semestre[i]==semestre[j]){

                if(j+1==1){
                    semText.innerHTML=sem1;
                }
                else if(j+1==2){
                    semText.innerHTML=sem2;
                }
                else if(j+1==3){
                    semText.innerHTML=sem3;
                }
                else if(j+1==4){
                    semText.innerHTML=sem4;
                }
            }
        }
    });
}