namespace L03_CocktailBar {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
        let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#amount");

        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
    }


    function handleChange(_event: Event): void {

        let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
        let amountPrice: number = progress.value * 10;


        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
        order.innerHTML = "";

        let formData: FormData = new FormData(document.forms[0]);
        let drink: string = (<HTMLSelectElement>document.getElementById("select")).value;
        let drinkPrice: string = document.getElementById(drink).getAttribute("price");

        order.innerHTML += drink + "  € " + drinkPrice + "<br>" + "<br>";

        let totalPrice: number = 0;

        for (let entry of formData.entries()) {
            let item: HTMLInputElement = document.querySelector("[value='" + entry[1] + "']");
            let price: number = Number(item.getAttribute("price"));

            order.innerHTML += item.name + "  € " + price + "<br>" + "<br>";

            totalPrice = totalPrice + price;
        }

        order.innerHTML += "Amount " + amountPrice + " €" + "<br>" + "<br>";

        let cleanTotal: string = totalPrice.toFixed(2);
        order.innerHTML += "Your Total is " + cleanTotal + " €" + "<br>" + "<br>";

    }

    function displayAmount(_event: Event): void {
        let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
        let amount: string = (<HTMLInputElement>_event.target).value;
        progress.value = parseFloat(amount);

    }
}