namespace L03_CocktailBar {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
        let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#amount");

        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
    }


    function handleChange(_event: Event): void {

        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
        order.innerHTML = "";

        let formData: FormData = new FormData(document.forms[0]);

        for (let entry of formData.entries()) {
            let item: HTMLInputElement = document.querySelector("[value='" + entry[1] + "']");
            let drink: HTMLOptionElement = document.querySelector("[value='" + entry[0] + "']");
            console.log(item);
            console.log(drink);
            let price: number = Number(item.getAttribute("price"));
            

            order.innerHTML += item.name + "  € " + price;
        }

    }


    function displayAmount(_event: Event): void {
        let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
        let amount: string = (<HTMLInputElement>_event.target).value;
        progress.value = parseFloat(amount);
    }
}