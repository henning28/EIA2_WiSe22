/*
Aufgabe: L08_Canvas
Name: Henning Reck
Matrikel: 271133
Datum: 24.11.2022
Quellen: W3
*/

namespace L08_Canvas {

    window.addEventListener("load", handleLoad);

    interface Vector {
        [key: string]: number;
    }

    let canvas: HTMLCanvasElement = document.querySelector("canvas");
    let crc2: CanvasRenderingContext2D = canvas.getContext("2d");

    function handleLoad(_event: Event): void {
        // Canvas Größe
        canvas.width = 1500;
        canvas.height = 625;

        drawPattern();

        drawLines();

        drawBoxes();
    }

    function drawLines(): void {
        let lineAmount: number = 20;

        for (let amount: number = 0; amount < lineAmount; amount++) {
            crc2.beginPath();
    
            crc2.moveTo(0, 0);
            crc2.lineTo(randomNumber(1, 2000), randomNumber(1, 1000));
            crc2.lineWidth = randomNumber(5, 30);

            crc2.stroke();
        }
    }

    function drawPattern(): void {
        let pattern: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.createElement("canvas").getContext("2d");

        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, randomNumber(0, 20), 0, 0, randomNumber(0, 400));

        gradient.addColorStop(0, "black");
        gradient.addColorStop(1, "hsl(" + randomNumber(0, 360) + ", 100%, 50%)");

        crc2.save();

        pattern.fillStyle = gradient;
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);

        crc2.fillStyle = <CanvasPattern>crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        crc2.restore();

    }

    function drawBoxes(): void {
        let boxColors: string[] = ["hsl(212, 100%, 47%)", "hsl(42, 100%, 50%)", "hsl(33, 100%, 90%)", "hsl(0, 99%, 51%)"];
    
        let particleAmount: number = 200;
        let particle: Path2D = new Path2D();

        let particleSize: Vector = {x: 1500, y: 625};

        particle.rect(0, 0, 50, 50);

        // Schatten
        crc2.shadowColor = "black";
        crc2.shadowBlur = 15;

        crc2.save();
        crc2.translate(725, 600);

        for (let amount: number = 0; amount < particleAmount; amount++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * particleSize.x;
            let y: number = - (Math.random() * particleSize.y);
            crc2.translate(x, y);

            crc2.fillStyle = boxColors[randomNumber(0, 4)];

            crc2.fill(particle);
            crc2.restore();
        }

        crc2.restore();
    }

    function randomNumber(_min: number, _max: number): number {
        return Math.floor(Math.random() * _max) + _min;
    }
}