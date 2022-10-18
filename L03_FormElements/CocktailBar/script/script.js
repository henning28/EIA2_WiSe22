var L03_CocktailBar;
(function (L03_CocktailBar) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let form = document.querySelector("div#form");
        let slider = document.querySelector("input#amount");
        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
    }
    function handleChange(_event) {
        let progress = document.querySelector("progress");
        let amountPrice = progress.value * 10;
        let order = document.querySelector("div#order");
        order.innerHTML = "";
        let formData = new FormData(document.forms[0]);
        let drink = document.getElementById("select").value;
        let drinkPrice = document.getElementById(drink).getAttribute("price");
        order.innerHTML += drink + "  € " + drinkPrice + "<br>" + "<br>";
        let totalPrice = 0;
        for (let entry of formData.entries()) {
            let item = document.querySelector("[value='" + entry[1] + "']");
            let price = Number(item.getAttribute("price"));
            order.innerHTML += item.name + "  € " + price + "<br>" + "<br>";
            totalPrice = totalPrice + price;
        }
        order.innerHTML += "Amount " + amountPrice + " €" + "<br>" + "<br>";
        let cleanTotal = totalPrice.toFixed(2);
        order.innerHTML += "Your Total is " + cleanTotal + " €" + "<br>" + "<br>";
    }
    function displayAmount(_event) {
        let progress = document.querySelector("progress");
        let amount = _event.target.value;
        progress.value = parseFloat(amount);
    }
})(L03_CocktailBar || (L03_CocktailBar = {}));
//# sourceMappingURL=script.js.map