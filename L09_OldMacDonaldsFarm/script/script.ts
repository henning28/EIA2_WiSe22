/*
Aufgabe: L09_OldMacDonaldFarm
Name: Henning Reck
Matrikel: 271133
Datum: 10.12.2022
Quellen: Bastian Aberle, Yannik König
*/

namespace L09_OldMacDonaldFarm {

    window.addEventListener("load", handleLoad);

    let dateDiv: HTMLElement = document.getElementById("dateDiv");
    let foodDiv: HTMLElement = document.getElementById("foodDiv");
    let song: HTMLElement = document.getElementById("song");

    let daycount: number = 1;

    let hayAmount: number = 200;
    let cornAmount: number = 150;
    let dogfoodAmount: number = 30;
    let catfoodAmount: number = 30;
    let strawAmount: number = 50;

    class Animal {
        name: string;
        species: string;
        food: string;
        foodAmount: number;
        sound: string;

        constructor(_name: string, _species: string, _food: string, _amount: number, _sound: string) {
            this.name = _name;
            this.species = _species;
            this.food = _food;
            this.foodAmount = _amount;
            this.sound = _sound;
        }

        animalsSing(): void {
            let newDiv: HTMLDivElement = document.createElement("div");
            newDiv.id = "div";

            if (this.species == "donkey") {
                newDiv.innerHTML = "<br> <br> <i>" + this.name + "</i>" + "<br>" + "<br>" + "OldMac Donald had a farm" + "<br>" + "Ee i ee i o" + "<br>" + "And on his farm he had some " + this.species + "s" + "<br>" +
                    "With a " + this.sound + " here" + "<br>" + "And a " + this.sound + " there" + "<br>" + "Here a " + this.sound + " there a " + this.sound + "<br>"
                    + "Everywhere a " + this.sound + "<br>" + "OldMac Donald had a farm" + "<br>" + "Ee i ee i o" + "<br>" + "<br>";
                song.appendChild(newDiv);
            } else if (this.species == "cow") {
                newDiv.innerHTML = "<i>" + this.name + "</i>" + "<br>" + "<br>" + "OldMac Donald had a farm" + "<br>" + "Ee i ee i o" + "<br>" + "And on his farm he had some " + this.species + "s" + "<br>" +
                    "With a " + this.sound + " here" + "<br>" + "And a " + this.sound + " there" + "<br>" + "Here a " + this.sound + " there a " + this.sound + "<br>"
                    + "Everywhere a " + this.sound + "<br>" + "<br>";
                song.appendChild(newDiv);
            } else {
                newDiv.innerHTML = "<br> <br> <i>" + this.name + "</i>" + "<br>" + "<br>" + "OldMac Donald had a farm" + "<br>" + "Ee i ee i o" + "<br>" + "And on his farm he had some " + this.species + "s" + "<br>" +
                    "With a " + this.sound + " here" + "<br>" + "And a " + this.sound + " there" + "<br>" + "Here a " + this.sound + " there a " + this.sound + "<br>"
                    + "Everywhere a " + this.sound + "<br>" + "<br>";
                song.appendChild(newDiv);
            }
        }

        animalsEat(): void {
            if (this.species == "cow") {
                hayAmount = hayAmount - this.foodAmount;
                let newDiv: HTMLDivElement = document.createElement("div");

                newDiv.id = "cowEat";
                newDiv.innerHTML = "remaining hay: " + hayAmount.toString() + "<br>";

                song.appendChild(newDiv);
            }
            if (this.species == "chicken") {
                cornAmount = cornAmount - this.foodAmount;
                let newDiv: HTMLDivElement = document.createElement("div");

                newDiv.id = "chickenEat";
                newDiv.innerHTML = "remaining corn: " + cornAmount.toString();

                song.appendChild(newDiv);
            }
            if (this.species == "dog") {
                dogfoodAmount = dogfoodAmount - this.foodAmount;
                let newDiv: HTMLDivElement = document.createElement("div");

                newDiv.id = "dogEat";
                newDiv.innerHTML = "remaining dogfood: " + dogfoodAmount.toString();

                song.appendChild(newDiv);
            }
            if (this.species == "cat") {
                catfoodAmount = catfoodAmount - this.foodAmount;
                let newDiv: HTMLDivElement = document.createElement("div");

                newDiv.id = "catEat";
                newDiv.innerHTML = "remaining catfood: " + catfoodAmount.toString();

                song.appendChild(newDiv);
            }
            if (this.species == "donkey") {
                strawAmount = strawAmount - this.foodAmount;
                let newDiv: HTMLDivElement = document.createElement("div");

                newDiv.id = "donkeyEat";
                newDiv.innerHTML = "remaining straws: " + strawAmount.toString() + "<br>";

                song.appendChild(newDiv);
            }
        }
    }

    function handleLoad(): void {
        dateDiv.innerHTML = "Day: " + daycount;

        let cow: Animal = new Animal("Manuel", "cow", "hay", 20, "moo");
        let chicken: Animal = new Animal("Thomas", "chicken", "corn", 15, "bacawk");
        let dog: Animal = new Animal("Antonio", "dog", "dogfood", 2, "ruff");
        let cat: Animal = new Animal("Jamal", "cat", "catfood", 2, "miau");
        let donkey: Animal = new Animal("Ilkay", "donkey", "straw", 5, "hee-haw");

        cow.animalsSing();
        cow.animalsEat();

        chicken.animalsSing();
        chicken.animalsEat();

        dog.animalsSing();
        dog.animalsEat();

        cat.animalsSing();
        cat.animalsEat();

        donkey.animalsSing();
        donkey.animalsEat();

        displayFoodAmount();
    }

    function displayFoodAmount(): void {
        foodDiv.innerHTML = "hay: " + hayAmount.toString() + "<br>"
            + "corn: " + cornAmount.toString() + "<br>"
            + "dogfood: " + dogfoodAmount.toString() + "<br>"
            + "catfood: " + catfoodAmount.toString() + "<br>"
            + "straws: " + strawAmount.toString();
    }
}