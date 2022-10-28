/*
Aufgabe: L02_EventInspector
Name: Henning Reck
Matrikel: 271133
Datum: 28.10.2022
Quellen:
*/

namespace L03_Einkaufsliste_Formular {
    window.addEventListener("load", handleLoad);

    let addItemButton: HTMLButtonElement = document.querySelector("button");

    function handleLoad(): void {
        addItemButton.addEventListener("click", buttonClick);

        document.querySelector(".trashcan").addEventListener("click", deleteItem);
        
        document.querySelector(".editbutton").addEventListener("click", editItem);

        document.querySelector(".checkbox").addEventListener("click", checkItem);
    }

    function buttonClick(): void {
        console.log("button pressed, create new Item (Name, Amount, Comment, Date)");
    }

    function deleteItem(): void {
        console.log("trash pressed, delete Item");
    }

    function editItem(): void {
        console.log("edit button pressed, edit Item");
    }

    function checkItem(): void {
        console.log("checkbox pressed");
    }
}