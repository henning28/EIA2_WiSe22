/*
Aufgabe: L09_Vogelhaus
Name: Henning Reck
Matrikel: 271133
Datum: 17.12.2022
Quellen: Natan Haider, Yannik König
*/
var L10_Vogelhaus;
(function (L10_Vogelhaus) {
    window.addEventListener("load", handleLoad);
    L10_Vogelhaus.directions = ["x", "-x"];
    let xStep = 0;
    let moveables = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        L10_Vogelhaus.crc2 = canvas.getContext("2d", { willReadFrequently: true });
        L10_Vogelhaus.drawStatic();
        L10_Vogelhaus.imageData = L10_Vogelhaus.crc2.getImageData(0, 0, L10_Vogelhaus.crc2.canvas.width, L10_Vogelhaus.crc2.canvas.height);
        createSnowflakes();
        drawBirds(20);
        window.setInterval(update, 50);
    }
    function createSnowflakes() {
        for (let index = 0; index < 5000; index++) {
            xStep = xStep + 4;
            let snowflake = new L10_Vogelhaus.Snowflake(1, new L10_Vogelhaus.Vector(xStep, 0));
            snowflake.create();
            moveables.push(snowflake);
        }
    }
    function drawBirds(_nBirds) {
        let nFlying = 15;
        for (let drawn = 0; drawn < nFlying; drawn++) {
            L10_Vogelhaus.crc2.save();
            let maxWidth = 740;
            let minWidth = 10;
            let minHeight = 0;
            let maxHeight = 225;
            let x = randomNumber(minWidth, maxWidth);
            let y = randomNumber(minHeight, maxHeight);
            let birdPos = new L10_Vogelhaus.Vector(x, y);
            let flyingBird = new L10_Vogelhaus.FlyingBirds(birdPos);
            moveables.push(flyingBird);
            flyingBird.draw();
            L10_Vogelhaus.crc2.restore();
        }
    }
    function update() {
        L10_Vogelhaus.crc2.putImageData(L10_Vogelhaus.imageData, 0, 0);
        updateMoveables();
    }
    function updateMoveables() {
        let transform = L10_Vogelhaus.crc2.getTransform();
        for (let moveable of moveables) {
            if (moveable instanceof L10_Vogelhaus.Snowflake) {
                moveable.move(1 / 50);
            }
            if (moveable instanceof L10_Vogelhaus.FlyingBirds) {
                moveable.fly(1 / 50);
                moveable.draw();
            }
        }
        L10_Vogelhaus.crc2.setTransform(transform);
    }
    function randomNumber(_min, _max) {
        return Math.floor(Math.random() * _max) + _min;
    }
    L10_Vogelhaus.randomNumber = randomNumber;
})(L10_Vogelhaus || (L10_Vogelhaus = {}));
//# sourceMappingURL=main.js.map