/*
Aufgabe: L09_Vogelhaus
Name: Henning Reck
Matrikel: 271133
Datum: 17.12.2022
Quellen: Natan Haider, Jonas Atzenhofer, Yannik König
*/

namespace L09_Vogelhaus {

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    export let imageData: ImageData;
    export let directions: string[] = ["x", "-x"];

    let background: ImageData;
    let stepAmount: number = 0;

    let snowflakes: Snowflake[] = [];
    let flyingBirdsArray: FlyingBirds[] = [];

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d", {willReadFrequently: true});

        drawStatic();
        imageData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);

        drawSnowfall();
        drawBirds(20);

        window.setInterval(update, 50);
    }

    function drawSnowfall(): void {
        for (let index: number = 0; index < 500; index++) {
            stepAmount = stepAmount + 2;
            let snowflake: Snowflake = new Snowflake(1);
            snowflake.create(stepAmount);
            snowflakes.push(snowflake);
            background = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
        }
    }

    function drawBirds(_nBirds: number): void {

        let nFlying: number = 15;

        for (let drawn: number = 0; drawn < nFlying; drawn++) {
            crc2.save();

            let maxWidth: number = 740;
            let minWidth: number = 10;
            let minHeight: number = 0;
            let maxHeight: number = 225;

            let x: number = randomNumber(minWidth, maxWidth);
            let y: number = randomNumber(minHeight, maxHeight);
            let birdPos: Vector = new Vector(x, y);

            let flyingBird: FlyingBirds = new FlyingBirds(birdPos);
            flyingBirdsArray.push(flyingBird);
            flyingBird.draw();

            crc2.restore();

        }
    }

    function update(): void {
        crc2.putImageData(imageData, 0, 0);
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        updateFlyingBirds();

        for (let snowflake of snowflakes) {
            snowflake.move(1 / 30);
            snowflake.draw();
        }
    }

    function updateFlyingBirds(): void {
        for (let bird of flyingBirdsArray) {
            crc2.save();

            bird.fly(1 / 50);
            bird.draw();
            crc2.restore();
        }
    }

    export function randomNumber(_min: number, _max: number): number {
        return Math.floor(Math.random() * _max) + _min;
    }
}