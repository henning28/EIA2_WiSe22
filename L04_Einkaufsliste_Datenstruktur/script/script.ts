/*
Aufgabe: L04_Einkaufsliste_Datenstruktur
Name: Henning Reck
Matrikel: 271133
Datum: 04.11.2022
Quellen: 
*/

namespace L04_Einkaufsliste_Datenstruktur {

    window.addEventListener("load", handleLoad);

    let itemIndex: number = 0;

    function handleLoad(): void {

        dataItems();

        document.getElementById("AddItem").addEventListener("click", addItem);

    }

    function dataItems(): void {
        let list: HTMLElement = <HTMLElement>document.querySelector("#Einkaufsliste");

        for (let dataIndex: number = 0; dataIndex < inputs.length; dataIndex++) {
            // create Item

            var createItem: HTMLDivElement = document.createElement("div");
            list.appendChild(createItem);
            createItem.classList.add("item_Nr" + dataIndex, "item");

            // create Input Checkbox

            let createcheck: HTMLElement = document.createElement("input");
            createcheck.classList.add("checkbox");
            createcheck.setAttribute("type", String("checkbox"));

            // create Item Details

            let createItemDetails: HTMLDivElement = document.createElement("div");
            createItemDetails.classList.add("itemDetails_Nr" + dataIndex, "itemDetails");

            let createItemName: HTMLParagraphElement = document.createElement("p");
            createItemName.classList.add("itemName");
            createItemName.textContent = inputs[dataIndex].product;

            let createItemAmount: HTMLParagraphElement = document.createElement("p");
            createItemAmount.classList.add("itemAmount");
            createItemAmount.textContent = inputs[dataIndex].amount.toString();

            let createItemComment: HTMLParagraphElement = document.createElement("p");
            createItemComment.classList.add("itemComment");
            createItemComment.textContent = inputs[dataIndex].comment;

            let createItemDate: HTMLParagraphElement = document.createElement("p");
            createItemDate.classList.add("itemDate");
            createItemDate.textContent = "04.11.2022";

            createItemDetails.appendChild(createItemName);
            createItemDetails.appendChild(createItemAmount);
            createItemDetails.appendChild(createItemComment);
            createItemDetails.appendChild(createItemDate);

            // create Edit Button

            let createEditButtonDiv: HTMLDivElement = document.createElement("div");
            createEditButtonDiv.className = "editbutton_Nr" + dataIndex;
            createEditButtonDiv.classList.add("editbutton");

            let createEditButton: HTMLElement = document.createElement("i");
            createEditButton.classList.add("fa-regular", "fa-pen-to-square", "fa-xl", "edit");

            createEditButtonDiv.appendChild(createEditButton);

            // create Trash

            let createTrashcanDiv: HTMLDivElement = document.createElement("div");
            createTrashcanDiv.classList.add("trashcan_Nr" + dataIndex, "trashcan");

            let createtrash: HTMLElement = document.createElement("i");
            createtrash.classList.add("fa-regular", "fa-trash-can", "fa-xl", "trash");

            createTrashcanDiv.appendChild(createtrash);

            // appendChildren

            createItem.appendChild(createcheck);
            createItem.appendChild(createItemDetails);
            createItem.appendChild(createEditButtonDiv);
            createItem.appendChild(createTrashcanDiv);

            // itemIndex = inputs.length;
        }
    }


    function addItem(_event: MouseEvent): void {
        let list: HTMLElement = <HTMLElement>document.querySelector("#Einkaufsliste");

        let inputItemName: HTMLInputElement = document.getElementById("itemName") as HTMLInputElement;
        let inputItemAmount: HTMLInputElement = document.getElementById("itemAmount") as HTMLInputElement;
        let inputItemComment: HTMLTextAreaElement = document.getElementById("itemComment") as HTMLTextAreaElement;

        // create Item

        let createItem: HTMLDivElement = document.createElement("div");
        list.appendChild(createItem);
        createItem.classList.add("item_Nr" + itemIndex, "item");

        // create Input Checkbox

        let createcheck: HTMLElement = document.createElement("input");
        createcheck.classList.add("checkbox");
        createcheck.setAttribute("type", String("checkbox"));

        // create Item Details

        let createItemDetails: HTMLDivElement = document.createElement("div");
        createItemDetails.classList.add("itemDetails_Nr" + itemIndex, "itemDetails");

        let createItemName: HTMLParagraphElement = document.createElement("p");
        createItemName.classList.add("itemName");
        createItemName.textContent = inputItemName.value;

        let createItemAmount: HTMLParagraphElement = document.createElement("p");
        createItemAmount.classList.add("itemAmount");
        createItemAmount.textContent = inputItemAmount.value;

        let createItemComment: HTMLParagraphElement = document.createElement("p");
        createItemComment.classList.add("itemComment");
        createItemComment.textContent = inputItemComment.value;

        let createItemDate: HTMLParagraphElement = document.createElement("p");
        createItemDate.classList.add("itemDate");
        createItemDate.textContent = "04.11.2022";

        createItemDetails.appendChild(createItemName);
        createItemDetails.appendChild(createItemAmount);
        createItemDetails.appendChild(createItemComment);
        createItemDetails.appendChild(createItemDate);

        // create Edit Button

        let createEditButtonDiv: HTMLDivElement = document.createElement("div");
        createEditButtonDiv.classList.add("editbutton_Nr" + itemIndex, "editbutton");

        let createEditButton: HTMLElement = document.createElement("i");
        createEditButton.classList.add("fa-regular", "fa-pen-to-square", "fa-xl", "edit");

        createEditButtonDiv.appendChild(createEditButton);

        // create Trash

        let createTrashcanDiv: HTMLDivElement = document.createElement("div");
        createTrashcanDiv.classList.add("trashcan_Nr" + itemIndex, "trashcan");

        let createtrash: HTMLElement = document.createElement("i");
        createtrash.classList.add("fa-regular", "fa-trash-can", "fa-xl", "trash");

        createTrashcanDiv.appendChild(createtrash);

        createTrashcanDiv.addEventListener("click", deleteTask);

        // appendChildren

        createItem.appendChild(createcheck);
        createItem.appendChild(createItemDetails);
        createItem.appendChild(createEditButtonDiv);
        createItem.appendChild(createTrashcanDiv);

        // clear Inputs

        inputItemName.value = "";
        inputItemAmount.value = "";
        inputItemComment.value = "";

        itemIndex ++;

        function deleteTask(): void {
            createItem.parentElement.removeChild(createItem);
        }

    }
}