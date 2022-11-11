/*
Aufgabe: L05_Einkaufsliste_Client
Name: Henning Reck
Matrikel: 271133
Datum: 08.11.2022
Quellen:
*/
var L05_Einkaufsliste_Client;
(function (L05_Einkaufsliste_Client) {
    let list;
    let itemIndex = 0;
    let form;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        list = document.querySelector("#Einkaufsliste");
        form = document.querySelector("form");
        dataItems();
        document.getElementById("AddItem").addEventListener("click", addItem);
    }
    async function dataItems() {
        let response = await fetch("https://henning28.github.io/EIA2_WiSe22/L05_Einkaufsliste_Client/Data.json");
        let offer = await response.text();
        let data = JSON.parse(offer);
        let items = data["Items"];
        for (let dataIndex = 0; dataIndex < items.length; dataIndex++) {
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
            createItemName.textContent = items[dataIndex].product;
            let createItemAmount = document.createElement("p");
            createItemAmount.classList.add("itemAmount");
            createItemAmount.textContent = items[dataIndex].amount.toString();
            let createItemComment = document.createElement("p");
            createItemComment.classList.add("itemComment");
            createItemComment.textContent = items[dataIndex].comment;
            let createItemDate = document.createElement("p");
            createItemDate.classList.add("itemDate");
            createItemDate.textContent = items[dataIndex].purchaseDate;
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
            itemIndex = items.length;
        }
    }
    function addItem(_event) {
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
        sendOrder();
    }
    function deleteItem(_event) {
        let trigger = _event.target.id;
        let triggerNum = trigger.replace(/\D/g, "");
        let identifyer = parseInt(triggerNum);
        let list = document.querySelector("#Einkaufsliste");
        let remIt = document.getElementById("item_Nr" + identifyer);
        list.removeChild(remIt);
    }
    async function sendOrder() {
        let alertDiv = document.querySelector("#alert");
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        await fetch("../EinkaufslisteClient.html?" + query.toString());
        alert("Item added!");
        // alert
        alertDiv.classList.add("alert");
        alertDiv.innerHTML = "Data sent, Item added!";
        setTimeout(function () {
            alertDiv.classList.remove("alert");
            alertDiv.innerHTML = "";
        }, 1200);
    }
})(L05_Einkaufsliste_Client || (L05_Einkaufsliste_Client = {}));
//# sourceMappingURL=script.js.map