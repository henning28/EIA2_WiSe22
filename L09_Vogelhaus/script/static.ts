namespace L09_Vogelhaus {
    export let birdColors: string[] = ["hsl(269, 100%, 50%)", "hsl(336, 100%, 50%)", "hsl(19, 100%, 50%)"];

    export function drawStatic(): void {
        drawBackground();
        drawMountains();
        drawSun();
        drawCloud();
        drawTrees();
        drawBirdHouse();
        drawSittingBirds();
        drawStandingBirds();
        drawSnowman();
    }

    function drawTrees(): void {
        let particleAmount: number = 10;
        let particle: Path2D = new Path2D();

        let particleSize: smallVector = { x: 500, y: 100 };
        let leafSize: smallVector = { x: 40, y: 100 };
        particle.rect(0, 0, 20, 200);

        crc2.save();
        crc2.translate(800, 300);

        for (let amount: number = 0; amount < particleAmount; amount++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * particleSize.x;
            let y: number = - (Math.random() * particleSize.y);
            crc2.translate(x, y);

            crc2.fillStyle = "hsla(34, 64%, 14%, 1)";
            crc2.fill(particle);

            for (let amount: number = 0; amount < 5; amount++) {
                crc2.save();
                crc2.translate(0, 50);

                let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -20);
                gradient.addColorStop(0, "hsla(117, 75%, 27%, 1)");
                gradient.addColorStop(1, "hsla(0, 100%, 100%, 1)");

                crc2.strokeStyle = "hsla(0, 100%, 0%, 1)";
                crc2.fillStyle = gradient;

                let x: number = (Math.random() - 0.5) * leafSize.x;
                let y: number = - (Math.random() * leafSize.y);

                crc2.translate(x, y);
                let randomScale: number = (Math.random() * 30) + 40;

                crc2.beginPath();
                crc2.arc(8, 12, randomScale, 0, 2 * Math.PI, false);
                crc2.lineWidth = 5;
                crc2.fill();
                crc2.stroke();

                crc2.restore();
            }
            crc2.restore();
        }
        crc2.restore();
    }

    function drawSnowman(): void {
        crc2.save();

        crc2.translate(170, 400);
        crc2.translate(randomNumber(0, 50), 0);
        crc2.strokeStyle = "hsla(34, 64%, 14%, 1)";

        crc2.beginPath();
        crc2.moveTo(15, 0);
        crc2.lineTo(-35, 50);
        crc2.lineWidth = 7;
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(90, 0);
        crc2.lineTo(140, 50);
        crc2.lineWidth = 7;
        crc2.stroke();

        crc2.strokeStyle = "hsla(0, 100%, 0%, 1)";
        crc2.fillStyle = "hsla(0, 100%, 100%, 1)";
        crc2.lineWidth = 5;

        crc2.beginPath();
        crc2.arc(50, 95, 50, 0, 2 * Math.PI, false);
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.arc(50, 20, 45, 0, 2 * Math.PI, false);
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.arc(50, -50, 40, 0, 2 * Math.PI, false);
        crc2.fill();
        crc2.stroke();

        crc2.fillStyle = "hsla(0, 100%, 0%, 1)";
        crc2.beginPath();
        crc2.arc(35, -60, 5, 0, 2 * Math.PI, false);
        crc2.fill();

        crc2.fillStyle = "hsla(0, 100%, 0%, 1)";
        crc2.beginPath();
        crc2.arc(60, -60, 5, 0, 2 * Math.PI, false);
        crc2.fill();

        crc2.beginPath();
        crc2.arc(50, -40, 15, 0, 1 * Math.PI, false);
        crc2.stroke();

        crc2.restore();
    }

    function drawMountains(): void {
        let mountainWidth: number = 20;
        let mountainSharp: number = 25;
        let x: number = 0;

        crc2.save();
        crc2.translate(0, 360);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -135);
        do {
            x += mountainWidth + randomNumber(mountainWidth, mountainSharp);
            let y: number = -50 - randomNumber(50, 120);

            crc2.lineTo(x, y);

        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -120);
        gradient.addColorStop(0.3, "hsla(0, 0%, 50%, 1)");
        gradient.addColorStop(1, "hsla(0, 100%, 100%, 1)");

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }


    function drawSun(): void {
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 30, 0, 0, 150);

        gradient.addColorStop(0, "hsla(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "hsla(60, 100%, 50%, 0)");

        crc2.save();
        crc2.translate(900, 75);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, 150, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

    function drawStandingBirds(): void {
        crc2.save();

        let birdAmount: number = 6;
        let birdSize: smallVector = { x: 300, y: 50 };

        let birdDirection: number[] = [1, -1];

        crc2.translate(620, 500);
        crc2.scale(0.6, 0.6);

        for (let amount: number = 0; amount < birdAmount; amount++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * birdSize.x;
            let y: number = - (Math.random() * birdSize.y);
            crc2.translate(x, y);
            let randomScale: number = (Math.random() * .6) + 0.5;

            crc2.scale(randomScale, randomScale);
            crc2.scale(birdDirection[Math.floor(Math.random() * (3) - 1)], 1);

            // Körper
            crc2.beginPath();
            crc2.rotate((Math.PI / 180) * 30);
            crc2.arc(8, 12, 50, 0, 1 * Math.PI, false);
            crc2.fillStyle = birdColors[randomNumber(0, 3)];
            crc2.lineWidth = 5;
            crc2.strokeStyle = "hsla(0, 100%, 0%, 1)";
            crc2.fill();
            crc2.stroke();

            // Schnabel
            crc2.beginPath();
            crc2.moveTo(-60, 25);
            crc2.lineTo(-80, 15);
            crc2.lineTo(-60, -5);
            crc2.fillStyle = "hsla(48, 100%, 50%, 1)";
            crc2.fill();

            crc2.closePath();

            // Kopf
            crc2.beginPath();
            crc2.arc(0 - 40, 0 + 8, 23, 0, 2 * Math.PI, false);
            crc2.fillStyle = birdColors[randomNumber(0, 3)];
            crc2.fill();
            crc2.stroke();

            // Bein links
            crc2.beginPath();
            crc2.moveTo(15, 60);
            crc2.lineTo(40, 100);
            crc2.lineWidth = 5;
            crc2.stroke();

            // Bein rechts
            crc2.beginPath();
            crc2.moveTo(30, 60);
            crc2.lineTo(55, 95);
            crc2.lineWidth = 5;
            crc2.stroke();

            crc2.restore();
        }
        crc2.restore();
    }

    function drawSittingBirds(): void {
        crc2.save();

        let birdAmount: number = 4;
        let birdSize: smallVector = { x: 280, y: 0 };

        let birdDirection: number[] = [1, -1];

        crc2.translate(440, 250);
        crc2.scale(0.6, 0.6);

        for (let amount: number = 0; amount < birdAmount; amount++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * birdSize.x;
            let y: number = - (Math.random() * birdSize.y);
            crc2.translate(x, y);

            crc2.scale(birdDirection[Math.floor(Math.random() * (3) - 1)], 1);

            // Körper
            crc2.beginPath();
            crc2.rotate((Math.PI / 180) * 30);
            crc2.arc(8, 12, 50, 0, 1 * Math.PI, false);
            crc2.fillStyle = birdColors[randomNumber(0, 3)];
            crc2.lineWidth = 5;
            crc2.strokeStyle = "hsla(0, 100%, 0%, 1)";
            crc2.fill();
            crc2.stroke();

            // Schnabel
            crc2.beginPath();
            crc2.moveTo(-60, 25);
            crc2.lineTo(-80, 15);
            crc2.lineTo(-60, -5);
            crc2.fillStyle = "hsla(48, 100%, 50%, 1)";
            crc2.fill();

            crc2.closePath();

            // Kopf
            crc2.beginPath();
            crc2.arc(0 - 40, 0 + 8, 23, 0, 2 * Math.PI, false);
            crc2.fillStyle = birdColors[randomNumber(0, 3)];
            crc2.fill();
            crc2.stroke();

            // Bein links
            crc2.beginPath();
            crc2.moveTo(15, 60);
            crc2.lineTo(40, 100);
            crc2.lineWidth = 5;
            crc2.stroke();

            // Bein rechts
            crc2.beginPath();
            crc2.moveTo(30, 60);
            crc2.lineTo(55, 95);
            crc2.lineWidth = 5;
            crc2.stroke();

            crc2.restore();
        }
        crc2.restore();
    }

    function drawBirdHouse(): void {
        crc2.save();

        crc2.translate(400, 300);

        crc2.fillStyle = "hsla(34, 64%, 14%, 1)";
        crc2.fillRect(0, 0, 80, 80);

        crc2.strokeStyle = "hsla(30, 100%, 29%, 1)";
        crc2.beginPath();
        crc2.moveTo(140, 20);
        crc2.lineTo(-60, 20);
        crc2.lineWidth = 12;
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(80, 0);
        crc2.lineTo(40, -50);
        crc2.fillStyle = "hsla(34, 64%, 14%, 1)";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.moveTo(40, 80);
        crc2.lineTo(40, 200);
        crc2.lineWidth = 12;
        crc2.stroke();

        crc2.restore();
    }

    function drawBackground(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 350);
        gradient.addColorStop(0, "hsl(198, 80%, 50%");
        gradient.addColorStop(1, "hsla(0, 100%, 100%, 1)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        crc2.save();

        crc2.fillStyle = "hsla(202, 100%, 82%, 1)";
        crc2.fillRect(0, 360, crc2.canvas.width, 300);

        crc2.restore();
    }

    function drawCloud(): void {
        let particleAmount: number = 20;
        let particleRadius: number = 50;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, particleRadius);

        particle.arc(0, 0, particleRadius, 0, 2 * Math.PI);
        gradient.addColorStop(0, "hsla(0, 100%, 100%, 0.7)");
        gradient.addColorStop(1, "hsla(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(500, 150);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < particleAmount; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * 300;
            let y: number = - (Math.random() * 75);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
}