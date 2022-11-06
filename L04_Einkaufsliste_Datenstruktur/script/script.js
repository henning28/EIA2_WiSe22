/*
Aufgabe: L04_Einkaufsliste_Datenstruktur
Name: Henning Reck
Matrikel: 271133
Datum: 06.11.2022
Quellen: Yannik König
*/
var L04_Einkaufsliste_Datenstruktur;
(function (L04_Einkaufsliste_Datenstruktur) {
    window.addEventListener("load", handleLoad);
    let itemIndex = 0;
    function handleLoad() {
        dataItems();
        document.getElementById("AddItem").addEventListener("click", addItem);
    }
    function dataItems() {
        let list = document.querySelector("#Einkaufsliste");
        for (let dataIndex = 0; dataIndex < L04_Einkaufsliste_Datenstruktur.inputs.length; dataIndex++) {
            // create Item
            var createItem = document.createElement("div");
            list.appendChild(createItem);
            createItem.classList.add("item_Nr" + dataIndex, "item");
            createItem.setAttribute("id", String("item_Nr" + dataIndex));
            // create Input Checkbox
            let createcheck = document.createElement("input");
            createcheck.classList.add("checkbox");
            createcheck.setAttribute("type", String("checkbox"));
            // create Item Details
            let createItemDetails = document.createElement("div");
            createItemDetails.classList.add("itemDetails_Nr" + dataIndex, "itemDetails");
            let createItemName = document.createElement("p");
            createItemName.classList.add("itemName");
            createItemName.textContent = L04_Einkaufsliste_Datenstruktur.inputs[dataIndex].product;
            let createItemAmount = document.createElement("p");
            createItemAmount.classList.add("itemAmount");
            createItemAmount.textContent = L04_Einkaufsliste_Datenstruktur.inputs[dataIndex].amount.toString();
            let createItemComment = document.createElement("p");
            createItemComment.classList.add("itemComment");
            createItemComment.textContent = L04_Einkaufsliste_Datenstruktur.inputs[dataIndex].comment;
            let createItemDate = document.createElement("p");
            createItemDate.classList.add("itemDate");
            createItemDate.textContent = "04.11.2022";
            createItemDetails.appendChild(createItemName);
            createItemDetails.appendChild(createItemAmount);
            createItemDetails.appendChild(createItemComment);
            createItemDetails.appendChild(createItemDate);
            // create Edit Button
            let createEditButtonDiv = document.createElement("div");
            createEditButtonDiv.className = "editbutton_Nr" + dataIndex;
            createEditButtonDiv.classList.add("editbutton");
            let createEditButton = document.createElement("i");
            createEditButton.classList.add("fa-regular", "fa-pen-to-square", "fa-xl", "edit");
            createEditButtonDiv.appendChild(createEditButton);
            // create Trash
            let createTrashcanDiv = document.createElement("div");
            createTrashcanDiv.classList.add("trashcan_Nr" + dataIndex, "trashcan");
            let createTrash = document.createElement("i");
            createTrash.classList.add("fa-regular", "fa-trash-can", "fa-xl", "trash");
            createTrash.setAttribute("id", String("trashcan" + dataIndex));
            createTrashcanDiv.appendChild(createTrash);
            createTrash.addEventListener("click", deleteItem);
            // appendChildren
            createItem.appendChild(createcheck);
            createItem.appendChild(createItemDetails);
            createItem.appendChild(createEditButtonDiv);
            createItem.appendChild(createTrashcanDiv);
            itemIndex = L04_Einkaufsliste_Datenstruktur.inputs.length;
        }
    }
    function addItem(_event) {
        let list = document.querySelector("#Einkaufsliste");
        let inputItemName = document.getElementById("itemName");
        let inputItemAmount = document.getElementById("itemAmount");
        let inputItemComment = document.getElementById("itemComment");
        // create Item
        let createItem = document.createElement("div");
        list.appendChild(createItem);
        createItem.classList.add("item_Nr" + itemIndex, "item");
        createItem.setAttribute("id", String("item_Nr" + itemIndex));
        // create Input Checkbox
        let createcheck = document.createElement("input");
        createcheck.classList.add("checkbox");
        createcheck.setAttribute("type", String("checkbox"));
        // create Item Details
        let createItemDetails = document.createElement("div");
        createItemDetails.classList.add("itemDetails_Nr" + itemIndex, "itemDetails");
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
        createEditButtonDiv.classList.add("editbutton_Nr" + itemIndex, "editbutton");
        let createEditButton = document.createElement("i");
        createEditButton.classList.add("fa-regular", "fa-pen-to-square", "fa-xl", "edit");
        createEditButtonDiv.appendChild(createEditButton);
        // create Trash
        let createTrashcanDiv = document.createElement("div");
        createTrashcanDiv.classList.add("trashcan_Nr" + itemIndex, "trashcan");
        let createTrash = document.createElement("i");
        createTrash.classList.add("fa-regular", "fa-trash-can", "fa-xl", "trash");
        createTrash.setAttribute("id", String("trashcan" + itemIndex));
        createTrashcanDiv.appendChild(createTrash);
        createTrash.addEventListener("click", deleteItem);
        // appendChildren
        createItem.appendChild(createcheck);
        createItem.appendChild(createItemDetails);
        createItem.appendChild(createEditButtonDiv);
        createItem.appendChild(createTrashcanDiv);
        // clear Inputs
        inputItemName.value = "";
        inputItemAmount.value = "";
        inputItemComment.value = "";
        itemIndex++;
    }
    function deleteItem(_event) {
        let trigger = _event.target.id;
        let triggerNum = trigger.replace(/\D/g, "");
        let identifyer = parseInt(triggerNum);
        let list = document.querySelector("#Einkaufsliste");
        let remIt = document.getElementById("item_Nr" + identifyer);
        list.removeChild(remIt);
    }
})(L04_Einkaufsliste_Datenstruktur || (L04_Einkaufsliste_Datenstruktur = {}));
//# sourceMappingURL=script.js.map