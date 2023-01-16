/*
Aufgabe: L10_Vogelhaus
Name: Henning Reck
Matrikel: 271133
Datum: 16.01.2023
Quellen: Natan Haider, Yannik König
 */

namespace L10_Vogelhaus {

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    export let imageData: ImageData;
    export let directions: string[] = ["x", "-x"];
    let xStep: number = 0;

    let moveables: Moveable[] = [];

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d", { willReadFrequently: true });

        drawStatic();
        imageData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);

        createSnowflakes();
        drawBirds(20);

        window.setInterval(update, 50);
    }

    function createSnowflakes(): void {
        for (let index: number = 0; index < 5000; index++) {
            xStep = xStep + 4;
            let snowflake: Snowflake = new Snowflake(1, new Vector(xStep, 0));
            snowflake.create();
            moveables.push(snowflake);
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
            moveables.push(flyingBird);
            flyingBird.draw();
            crc2.restore();
        }
    }

    function update(): void {
        crc2.putImageData(imageData, 0, 0);

        updateMoveables();
    }

    function updateMoveables(): void {
        let transform: DOMMatrix = crc2.getTransform();

        for (let moveable of moveables) {
            if (moveable instanceof Snowflake) {
                moveable.move(1 / 50);
            }
            if (moveable instanceof FlyingBirds) {
                moveable.fly(1 / 50);
                moveable.draw();
            }
        }
        crc2.setTransform(transform);
    }

    export function randomNumber(_min: number, _max: number): number {
        return Math.floor(Math.random() * _max) + _min;
    }
}