/*
Aufgabe: L09_Vogelhaus
Name: Henning Reck
Matrikel: 271133
Datum: 17.12.2022
Quellen: Natan Haider, Jonas Atzenhofer, Yannik König
*/
var L09_Vogelhaus;
(function (L09_Vogelhaus) {
    window.addEventListener("load", handleLoad);
    L09_Vogelhaus.directions = ["x", "-x"];
    let background;
    let stepAmount = 0;
    let snowflakes = [];
    let flyingBirdsArray = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        L09_Vogelhaus.crc2 = canvas.getContext("2d", { willReadFrequently: true });
        L09_Vogelhaus.drawStatic();
        L09_Vogelhaus.imageData = L09_Vogelhaus.crc2.getImageData(0, 0, L09_Vogelhaus.crc2.canvas.width, L09_Vogelhaus.crc2.canvas.height);
        drawSnowfall();
        drawBirds(20);
        window.setInterval(update, 50);
    }
    function drawSnowfall() {
        for (let index = 0; index < 500; index++) {
            stepAmount = stepAmount + 2;
            let snowflake = new L09_Vogelhaus.Snowflake(1);
            snowflake.create(stepAmount);
            snowflakes.push(snowflake);
            background = L09_Vogelhaus.crc2.getImageData(0, 0, L09_Vogelhaus.crc2.canvas.width, L09_Vogelhaus.crc2.canvas.height);
        }
    }
    function drawBirds(_nBirds) {
        let nFlying = 15;
        for (let drawn = 0; drawn < nFlying; drawn++) {
            L09_Vogelhaus.crc2.save();
            let maxWidth = 740;
            let minWidth = 10;
            let minHeight = 0;
            let maxHeight = 225;
            let x = randomNumber(minWidth, maxWidth);
            let y = randomNumber(minHeight, maxHeight);
            let birdPos = new L09_Vogelhaus.Vector(x, y);
            let flyingBird = new L09_Vogelhaus.FlyingBirds(birdPos);
            flyingBirdsArray.push(flyingBird);
            flyingBird.draw();
            L09_Vogelhaus.crc2.restore();
        }
    }
    function update() {
        L09_Vogelhaus.crc2.putImageData(L09_Vogelhaus.imageData, 0, 0);
        L09_Vogelhaus.crc2.fillRect(0, 0, L09_Vogelhaus.crc2.canvas.width, L09_Vogelhaus.crc2.canvas.height);
        updateFlyingBirds();
        for (let snowflake of snowflakes) {
            snowflake.move(1 / 30);
            snowflake.draw();
        }
    }
    function updateFlyingBirds() {
        for (let bird of flyingBirdsArray) {
            L09_Vogelhaus.crc2.save();
            bird.fly(1 / 50);
            bird.draw();
            L09_Vogelhaus.crc2.restore();
        }
    }
    function randomNumber(_min, _max) {
        return Math.floor(Math.random() * _max) + _min;
    }
    L09_Vogelhaus.randomNumber = randomNumber;
})(L09_Vogelhaus || (L09_Vogelhaus = {}));
//# sourceMappingURL=main.js.map