/*
Aufgabe: L06_Einkaufsliste_Server
Name: Henning Reck
Matrikel: 271133
Datum: 19.11.2022
Quellen:
*/

namespace L06_Einkaufsliste_Server {

    interface Item {
        product: string;
        amount: number;
        finished: boolean;
        comment: string;
        purchaseDate: string;
    }

    let list: HTMLElement;
    let itemIndex: number = 0;
    let form: HTMLFormElement;

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        list = <HTMLElement>document.querySelector("#Einkaufsliste");
        form = <HTMLFormElement>document.querySelector("form");

        dataItems();

        document.getElementById("AddItem").addEventListener("click", addItem);
    }

    async function dataItems(): Promise<void> {

        let response: Response = await fetch("https://webuser.hs-furtwangen.de/~reckhenn/database/index.php/?command=find&collection=Items");
        let offer: string = await response.text();
        let data: Text = JSON.parse(offer);

        let items: Item[] = data.data["Items"];

        for (let dataIndex: number = 0; dataIndex < items.length; dataIndex++) {

            // create Item

            var createItem: HTMLDivElement = document.createElement("div");
            list.appendChild(createItem);
            createItem.classList.add("item_Nr" + dataIndex, "item");
            createItem.setAttribute("id", String("item_Nr" + dataIndex));

            // create Input Checkbox

            let createcheck: HTMLElement = document.createElement("input");
            createcheck.classList.add("checkbox");
            createcheck.setAttribute("type", String("checkbox"));

            // create Item Details

            let createItemDetails: HTMLDivElement = document.createElement("div");
            createItemDetails.classList.add("itemDetails_Nr" + dataIndex, "itemDetails");

            let createItemName: HTMLParagraphElement = document.createElement("p");
            createItemName.classList.add("itemName");
            createItemName.textContent = items[dataIndex].product;

            let createItemAmount: HTMLParagraphElement = document.createElement("p");
            createItemAmount.classList.add("itemAmount");
            createItemAmount.textContent = items[dataIndex].amount.toString();

            let createItemComment: HTMLParagraphElement = document.createElement("p");
            createItemComment.classList.add("itemComment");
            createItemComment.textContent = items[dataIndex].comment;

            let createItemDate: HTMLParagraphElement = document.createElement("p");
            createItemDate.classList.add("itemDate");
            createItemDate.textContent = items[dataIndex].purchaseDate;

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

            let createTrash: HTMLElement = document.createElement("i");
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

    function addItem(): void {

        let inputItemName: HTMLInputElement = document.getElementById("itemName") as HTMLInputElement;
        let inputItemAmount: HTMLInputElement = document.getElementById("itemAmount") as HTMLInputElement;
        let inputItemComment: HTMLTextAreaElement = document.getElementById("itemComment") as HTMLTextAreaElement;

        // create Item

        let createItem: HTMLDivElement = document.createElement("div");
        list.appendChild(createItem);
        createItem.classList.add("item_Nr" + itemIndex, "item");
        createItem.setAttribute("id", String("item_Nr" + itemIndex));

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

        let createTrash: HTMLElement = document.createElement("i");
        createTrash.classList.add("fa-regular", "fa-trash-can", "fa-xl", "trash");
        createTrash.setAttribute("id", String("trashcan" + itemIndex));

        createTrashcanDiv.appendChild(createTrash);

        createTrash.addEventListener("click", deleteItem);

        // appendChildren

        createItem.appendChild(createcheck);
        createItem.appendChild(createItemDetails);
        createItem.appendChild(createEditButtonDiv);
        createItem.appendChild(createTrashcanDiv);

        // send Order

        sendOrder();
        
        // clear Inputs

        inputItemName.value = "";
        inputItemAmount.value = "";
        inputItemComment.value = "";

        itemIndex++;
    }

    function deleteItem(_event: Event): void {
        let trigger: string = (_event.target as HTMLElement).id;
        let triggerNum: string = trigger.replace(/\D/g, "");
        let identifyer: number = parseInt(triggerNum);

        let list: HTMLElement = <HTMLElement>document.querySelector("#Einkaufsliste");
        let removeItem: HTMLElement = document.getElementById("item_Nr" + identifyer);

        list.removeChild(removeItem);
    }

    async function sendOrder(): Promise<void> {
        let alertDiv: HTMLElement = document.querySelector("#alert");

        // let formData: FormData = new FormData(form);
        // let query: URLSearchParams = new URLSearchParams(<any>formData);

        // await fetch("EinkaufslisteClient.html?" + query.toString());
        // alert("Item added!");

        interface FormDataJSON {
            [key: string]: FormDataEntryValue | FormDataEntryValue[];
          }
          
        let formData: FormData = new FormData(form);
        let json: FormDataJSON = {};

        for (let key of formData.keys())
            if (!json[key]) {
              let values: FormDataEntryValue[] = formData.getAll(key);
              json[key] = values.length > 1 ? values : values[0];
            }

        let query: URLSearchParams = new URLSearchParams();
        query.set("command", "insert");
        query.set("collection", "Items");
        query.set("data", JSON.stringify(json));

        // alert

        alertDiv.classList.add("alert");
        alertDiv.innerHTML = "Data sent, Item added!";

        setTimeout(function(): void {
            alertDiv.classList.remove("alert");
            alertDiv.innerHTML = "";
        },         1200); 
    }
}