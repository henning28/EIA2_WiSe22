/*
Aufgabe: L04_Einkaufsliste_Datenstruktur
Name: Henning Reck
Matrikel: 271133
Datum: 04.11.2022
Quellen:
*/
var L04_Einkaufsliste_Datenstruktur;
(function (L04_Einkaufsliste_Datenstruktur) {
    window.addEventListener("load", handleLoad);
    let itemIndex = 0;
    function handleLoad() {
        // console.log(inputs[0].amount);
        document.querySelector("button#AddItem").addEventListener("click", addItem);
    }
    function addItem() {
        let list = document.querySelector("#Einkaufsliste");
        itemIndex++;
        let inputItemName = document.getElementById("itemName");
        let inputItemAmount = document.getElementById("itemAmount");
        let inputItemComment = document.getElementById("itemComment");
        // create Item
        let createItem = document.createElement("div");
        createItem.className = "item_Nr" + itemIndex;
        list.appendChild(createItem);
        createItem.classList.add("item");
        // create Input Checkbox
        let createcheck = document.createElement("input");
        createcheck.classList.add("checkbox");
        createcheck.setAttribute("type", String("checkbox"));
        // create Item Details
        let createItemDetails = document.createElement("div");
        createItemDetails.className = "itemDetails_Nr" + itemIndex;
        createItemDetails.classList.add("itemDetails");
        let createItemName = document.createElement("p");
        createItemName.classList.add("itemName");
        createItemName.textContent = inputItemName.value;
        let createItemAmount = document.createElement("p");
        createItemAmount.classList.add("itemAmount");
        createItemAmount.textContent = inputItemAmount.value;
        let createItemComment = document.createElement("p");
        createItemComment.classList.add("itemComment");
        createItemComment.textContent = inputItemComment.value;
        let createItemDate = document.createElement("p");
        createItemDate.classList.add("itemDate");
        createItemDate.textContent = "04.11.2022";
        createItemDetails.appendChild(createItemName);
        createItemDetails.appendChild(createItemAmount);
        createItemDetails.appendChild(createItemComment);
        createItemDetails.appendChild(createItemDate);
        // create Edit Button
        let createEditButtonDiv = document.createElement("div");
        createEditButtonDiv.className = "editbutton_Nr" + itemIndex;
        createEditButtonDiv.classList.add("editbutton");
        let createEditButton = document.createElement("i");
        createEditButton.classList.add("fa-regular");
        createEditButton.classList.add("fa-pen-to-square");
        createEditButton.classList.add("fa-xl");
        createEditButton.classList.add("edit");
        createEditButtonDiv.appendChild(createEditButton);
        // create Trash
        let createTrashcanDiv = document.createElement("div");
        createTrashcanDiv.className = "trashcan_Nr" + itemIndex;
        createTrashcanDiv.classList.add("trashcan");
        let createtrash = document.createElement("i");
        createtrash.classList.add("fa-regular");
        createtrash.classList.add("fa-trash-can");
        createtrash.classList.add("fa-xl");
        createtrash.classList.add("trash");
        createTrashcanDiv.appendChild(createtrash);
        // appendChildren
        createItem.appendChild(createcheck);
        createItem.appendChild(createItemDetails);
        createItem.appendChild(createEditButtonDiv);
        createItem.appendChild(createTrashcanDiv);
        // clear Inputs
        inputItemName.value = "";
        inputItemAmount.value = "";
        inputItemComment.value = "";
    }
})(L04_Einkaufsliste_Datenstruktur || (L04_Einkaufsliste_Datenstruktur = {}));
//# sourceMappingURL=script.js.map