/*
Aufgabe: L02_EventInspector
Name: Henning Reck
Matrikel: 271133
Datum: 28.10.2022
Quellen:
*/
var L03_Einkaufsliste_Formular;
(function (L03_Einkaufsliste_Formular) {
    window.addEventListener("load", handleLoad);
    let addItemButton = document.querySelector("button");
    function handleLoad() {
        addItemButton.addEventListener("click", buttonClick);
        document.querySelector(".trashcan").addEventListener("click", deleteItem);
        document.querySelector(".editbutton").addEventListener("click", editItem);
        document.querySelector(".checkbox").addEventListener("click", checkItem);
    }
    function buttonClick() {
        console.log("button pressed, create new Item (Name, Amount, Comment, Date)");
    }
    function deleteItem() {
        console.log("trash pressed, delete Item");
    }
    function editItem() {
        console.log("edit button pressed, edit Item");
    }
    function checkItem() {
        console.log("checkbox pressed");
    }
})(L03_Einkaufsliste_Formular || (L03_Einkaufsliste_Formular = {}));
//# sourceMappingURL=script.js.map