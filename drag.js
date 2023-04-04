// DOM ELEMENTS

const boxes = document.querySelectorAll(".box");
image= document.querySelector(".image");

/* PREMIER METHODE */

boxes.forEach(box =>{

    box.addEventListener("dragover", (e)=>{
        e.preventDefault();
        box.classList.add("hovered");

    });
    //Lorsque  l'élément est glisser dehors de la limite de la cible de dépôt

    box.addEventListener("dragleave", () =>{
        box.classList.remove("hovered");
    });
    //vénement est déclenché lorsqu'un élément est déposé sur une cible de dépôt valide
    box.addEventListener("drop", () =>{
        box.appendChild(image);
        box.classList.remove("hovered");
    })
});
A
/* Deuxieme METHODE */