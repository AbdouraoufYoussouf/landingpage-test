
export const data = [
    { 
        id: 1, 
        title: "Niveau A", 
        horaire_hospital: "100% BR",
        chambre: "-" ,
        horaire_soin:"100% BR",
        medicament:"100% BR",
    },
    { 
        id: 2, 
        title: "Niveau B", 
        horaire_hospital: "125% BR",
        chambre: "35€/jour" ,
        horaire_soin:"125% BR",
        medicament:"100% BR",
    },
    { 
        id: 3, 
        title: "Niveau C", 
        horaire_hospital: "125% BR",
        chambre: "45€/jour" ,
        horaire_soin:"150% BR",
        medicament:"100% BR",
    },
    { 
        id: 4, 
        title: "Niveau D", 
        horaire_hospital: "130% BR",
        chambre: "20€/jour" ,
        horaire_soin:"125% BR",
        medicament:"125% BR",
    }
 
];


 
 const tableau = document.getElementById("lesgaranties");

 const elementsHTML = data.map((item) => `
 
           <div class="garanties-item">
               <p class="item-title">${item.title}</p>

               <div class="item-content">
                   <h3 class="content-title">Hospitalisation</h3>

                   <div class="garantie-content">
                       <div class="content-left">
                           <p class="content-text-left">Honoraires</p>
                           <p class="content-text-left">Chambre particulière</p>
                       </div>
                       <div class="content-right">
                           <p class="content-text-right">${item.horaire_hospital}</p>
                           <p class="content-text-right">${item.chambre}</p>
                       </div>
                   </div>
               </div>

               <div class="item-content">
                   <h3 class="content-title">Soins courants</h3>

                   <div class="garantie-content">
                       <div class="content-left">
                           <p class="content-text-left">Honoraires</p>
                       </div>
                       <div class="content-right">
                           <p class="content-text-right">${item.horaire_soin}</p>
                       </div>
                   </div>
               </div>

               <div class="item-content">
                   <h3 class="content-title">Pharmacie</h3>

                   <div class="garantie-content">
                       <div class="content-left">
                           <p class="content-text-left">Médicaments</p>
                       </div>
                       <div class="content-right">
                           <p class="content-text-right">${item.medicament}</p>
                       </div>
                   </div>
               </div>

               <div class="item-content">
                   <h3 class="content-title">Optique (100% santé)</h3>

                   <div class="garantie-content">
                       <div class="content-left">
                           <p class="content-text-left">Equipement class A</p>
                       </div>
                       <div class="content-right">
                           <p class="content-text-right">Rembt intégral</p>
                       </div>
                   </div>
               </div>

               <div class="item-content">
                   <h3 class="content-title">Aides auditives (100% santé)</h3>

                   <div class="garantie-content">
                       <div class="content-left">
                           <p class="content-text-left">Appareillage</p>
                       </div>
                       <div class="content-right">
                           <p class="content-text-right">Rembt intégral</p>
                       </div>
                   </div>
               </div>
               <div class="item-content">
                   <h3 class="content-title">Dentaires (100% santé)</h3>

                   <div class="garantie-content">
                       <div class="content-left">
                           <p class="content-text-left">Prothèse dentaires</p>
                       </div>
                       <div class="content-right">
                           <p class="content-text-right">Rembt intégral</p>
                       </div>
                   </div>
               </div>

               <div class="item-content">
                   <h3 style="margin-bottom: 5px;">Le + :</h3>

                   <div class="garantie-content">
                       <div class="content-left">
                           <p class="content-text-left text-left">Vous bénéficiez de l’offre de service <span
                                   class="bold-underline">Carte Blanche</span></p>
                       </div>

                   </div>
               </div>
               <p class="price">A partir de XX€ TTC/mois</p>
           </div>
 `);

 tableau.innerHTML = elementsHTML.join("");



