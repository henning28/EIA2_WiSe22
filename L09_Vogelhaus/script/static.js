var L09_Vogelhaus;
(function (L09_Vogelhaus) {
    L09_Vogelhaus.birdColors = ["hsl(269, 100%, 50%)", "hsl(336, 100%, 50%)", "hsl(19, 100%, 50%)"];
    function drawStatic() {
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
    L09_Vogelhaus.drawStatic = drawStatic;
    function drawTrees() {
        let particleAmount = 10;
        let particle = new Path2D();
        let particleSize = { x: 500, y: 100 };
        let leafSize = { x: 40, y: 100 };
        particle.rect(0, 0, 20, 200);
        L09_Vogelhaus.crc2.save();
        L09_Vogelhaus.crc2.translate(800, 300);
        for (let amount = 0; amount < particleAmount; amount++) {
            L09_Vogelhaus.crc2.save();
            let x = (Math.random() - 0.5) * particleSize.x;
            let y = -(Math.random() * particleSize.y);
            L09_Vogelhaus.crc2.translate(x, y);
            L09_Vogelhaus.crc2.fillStyle = "hsla(34, 64%, 14%, 1)";
            L09_Vogelhaus.crc2.fill(particle);
            for (let amount = 0; amount < 5; amount++) {
                L09_Vogelhaus.crc2.save();
                L09_Vogelhaus.crc2.translate(0, 50);
                let gradient = L09_Vogelhaus.crc2.createLinearGradient(0, 0, 0, -20);
                gradient.addColorStop(0, "hsla(117, 75%, 27%, 1)");
                gradient.addColorStop(1, "hsla(0, 100%, 100%, 1)");
                L09_Vogelhaus.crc2.strokeStyle = "hsla(0, 100%, 0%, 1)";
                L09_Vogelhaus.crc2.fillStyle = gradient;
                let x = (Math.random() - 0.5) * leafSize.x;
                let y = -(Math.random() * leafSize.y);
                L09_Vogelhaus.crc2.translate(x, y);
                let randomScale = (Math.random() * 30) + 40;
                L09_Vogelhaus.crc2.beginPath();
                L09_Vogelhaus.crc2.arc(8, 12, randomScale, 0, 2 * Math.PI, false);
                L09_Vogelhaus.crc2.lineWidth = 5;
                L09_Vogelhaus.crc2.fill();
                L09_Vogelhaus.crc2.stroke();
                L09_Vogelhaus.crc2.restore();
            }
            L09_Vogelhaus.crc2.restore();
        }
        L09_Vogelhaus.crc2.restore();
    }
    function drawSnowman() {
        L09_Vogelhaus.crc2.save();
        L09_Vogelhaus.crc2.translate(170, 400);
        L09_Vogelhaus.crc2.translate(L09_Vogelhaus.randomNumber(0, 50), 0);
        L09_Vogelhaus.crc2.strokeStyle = "hsla(34, 64%, 14%, 1)";
        L09_Vogelhaus.crc2.beginPath();
        L09_Vogelhaus.crc2.moveTo(15, 0);
        L09_Vogelhaus.crc2.lineTo(-35, 50);
        L09_Vogelhaus.crc2.lineWidth = 7;
        L09_Vogelhaus.crc2.stroke();
        L09_Vogelhaus.crc2.beginPath();
        L09_Vogelhaus.crc2.moveTo(90, 0);
        L09_Vogelhaus.crc2.lineTo(140, 50);
        L09_Vogelhaus.crc2.lineWidth = 7;
        L09_Vogelhaus.crc2.stroke();
        L09_Vogelhaus.crc2.strokeStyle = "hsla(0, 100%, 0%, 1)";
        L09_Vogelhaus.crc2.fillStyle = "hsla(0, 100%, 100%, 1)";
        L09_Vogelhaus.crc2.lineWidth = 5;
        L09_Vogelhaus.crc2.beginPath();
        L09_Vogelhaus.crc2.arc(50, 95, 50, 0, 2 * Math.PI, false);
        L09_Vogelhaus.crc2.fill();
        L09_Vogelhaus.crc2.stroke();
        L09_Vogelhaus.crc2.beginPath();
        L09_Vogelhaus.crc2.arc(50, 20, 45, 0, 2 * Math.PI, false);
        L09_Vogelhaus.crc2.fill();
        L09_Vogelhaus.crc2.stroke();
        L09_Vogelhaus.crc2.beginPath();
        L09_Vogelhaus.crc2.arc(50, -50, 40, 0, 2 * Math.PI, false);
        L09_Vogelhaus.crc2.fill();
        L09_Vogelhaus.crc2.stroke();
        L09_Vogelhaus.crc2.fillStyle = "hsla(0, 100%, 0%, 1)";
        L09_Vogelhaus.crc2.beginPath();
        L09_Vogelhaus.crc2.arc(35, -60, 5, 0, 2 * Math.PI, false);
        L09_Vogelhaus.crc2.fill();
        L09_Vogelhaus.crc2.fillStyle = "hsla(0, 100%, 0%, 1)";
        L09_Vogelhaus.crc2.beginPath();
        L09_Vogelhaus.crc2.arc(60, -60, 5, 0, 2 * Math.PI, false);
        L09_Vogelhaus.crc2.fill();
        L09_Vogelhaus.crc2.beginPath();
        L09_Vogelhaus.crc2.arc(50, -40, 15, 0, 1 * Math.PI, false);
        L09_Vogelhaus.crc2.stroke();
        L09_Vogelhaus.crc2.restore();
    }
    function drawMountains() {
        let mountainWidth = 20;
        let mountainSharp = 25;
        let x = 0;
        L09_Vogelhaus.crc2.save();
        L09_Vogelhaus.crc2.translate(0, 360);
        L09_Vogelhaus.crc2.beginPath();
        L09_Vogelhaus.crc2.moveTo(0, 0);
        L09_Vogelhaus.crc2.lineTo(0, -135);
        do {
            x += mountainWidth + L09_Vogelhaus.randomNumber(mountainWidth, mountainSharp);
            let y = -50 - L09_Vogelhaus.randomNumber(50, 120);
            L09_Vogelhaus.crc2.lineTo(x, y);
        } while (x < L09_Vogelhaus.crc2.canvas.width);
        L09_Vogelhaus.crc2.lineTo(x, 0);
        L09_Vogelhaus.crc2.closePath();
        let gradient = L09_Vogelhaus.crc2.createLinearGradient(0, 0, 0, -120);
        gradient.addColorStop(0.3, "hsla(0, 0%, 50%, 1)");
        gradient.addColorStop(1, "hsla(0, 100%, 100%, 1)");
        L09_Vogelhaus.crc2.fillStyle = gradient;
        L09_Vogelhaus.crc2.fill();
        L09_Vogelhaus.crc2.restore();
    }
    function drawSun() {
        let gradient = L09_Vogelhaus.crc2.createRadialGradient(0, 0, 30, 0, 0, 150);
        gradient.addColorStop(0, "hsla(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "hsla(60, 100%, 50%, 0)");
        L09_Vogelhaus.crc2.save();
        L09_Vogelhaus.crc2.translate(900, 75);
        L09_Vogelhaus.crc2.fillStyle = gradient;
        L09_Vogelhaus.crc2.arc(0, 0, 150, 0, 2 * Math.PI);
        L09_Vogelhaus.crc2.fill();
        L09_Vogelhaus.crc2.restore();
    }
    function drawStandingBirds() {
        L09_Vogelhaus.crc2.save();
        let birdAmount = 6;
        let birdSize = { x: 300, y: 50 };
        let birdDirection = [1, -1];
        L09_Vogelhaus.crc2.translate(620, 500);
        L09_Vogelhaus.crc2.scale(0.6, 0.6);
        for (let amount = 0; amount < birdAmount; amount++) {
            L09_Vogelhaus.crc2.save();
            let x = (Math.random() - 0.5) * birdSize.x;
            let y = -(Math.random() * birdSize.y);
            L09_Vogelhaus.crc2.translate(x, y);
            let randomScale = (Math.random() * .6) + 0.5;
            L09_Vogelhaus.crc2.scale(randomScale, randomScale);
            L09_Vogelhaus.crc2.scale(birdDirection[Math.floor(Math.random() * (3) - 1)], 1);
            // Körper
            L09_Vogelhaus.crc2.beginPath();
            L09_Vogelhaus.crc2.rotate((Math.PI / 180) * 30);
            L09_Vogelhaus.crc2.arc(8, 12, 50, 0, 1 * Math.PI, false);
            L09_Vogelhaus.crc2.fillStyle = L09_Vogelhaus.birdColors[L09_Vogelhaus.randomNumber(0, 3)];
            L09_Vogelhaus.crc2.lineWidth = 5;
            L09_Vogelhaus.crc2.strokeStyle = "hsla(0, 100%, 0%, 1)";
            L09_Vogelhaus.crc2.fill();
            L09_Vogelhaus.crc2.stroke();
            // Schnabel
            L09_Vogelhaus.crc2.beginPath();
            L09_Vogelhaus.crc2.moveTo(-60, 25);
            L09_Vogelhaus.crc2.lineTo(-80, 15);
            L09_Vogelhaus.crc2.lineTo(-60, -5);
            L09_Vogelhaus.crc2.fillStyle = "hsla(48, 100%, 50%, 1)";
            L09_Vogelhaus.crc2.fill();
            L09_Vogelhaus.crc2.closePath();
            // Kopf
            L09_Vogelhaus.crc2.beginPath();
            L09_Vogelhaus.crc2.arc(0 - 40, 0 + 8, 23, 0, 2 * Math.PI, false);
            L09_Vogelhaus.crc2.fillStyle = L09_Vogelhaus.birdColors[L09_Vogelhaus.randomNumber(0, 3)];
            L09_Vogelhaus.crc2.fill();
            L09_Vogelhaus.crc2.stroke();
            // Bein links
            L09_Vogelhaus.crc2.beginPath();
            L09_Vogelhaus.crc2.moveTo(15, 60);
            L09_Vogelhaus.crc2.lineTo(40, 100);
            L09_Vogelhaus.crc2.lineWidth = 5;
            L09_Vogelhaus.crc2.stroke();
            // Bein rechts
            L09_Vogelhaus.crc2.beginPath();
            L09_Vogelhaus.crc2.moveTo(30, 60);
            L09_Vogelhaus.crc2.lineTo(55, 95);
            L09_Vogelhaus.crc2.lineWidth = 5;
            L09_Vogelhaus.crc2.stroke();
            L09_Vogelhaus.crc2.restore();
        }
        L09_Vogelhaus.crc2.restore();
    }
    function drawSittingBirds() {
        L09_Vogelhaus.crc2.save();
        let birdAmount = 4;
        let birdSize = { x: 280, y: 0 };
        let birdDirection = [1, -1];
        L09_Vogelhaus.crc2.translate(440, 250);
        L09_Vogelhaus.crc2.scale(0.6, 0.6);
        for (let amount = 0; amount < birdAmount; amount++) {
            L09_Vogelhaus.crc2.save();
            let x = (Math.random() - 0.5) * birdSize.x;
            let y = -(Math.random() * birdSize.y);
            L09_Vogelhaus.crc2.translate(x, y);
            L09_Vogelhaus.crc2.scale(birdDirection[Math.floor(Math.random() * (3) - 1)], 1);
            // Körper
            L09_Vogelhaus.crc2.beginPath();
            L09_Vogelhaus.crc2.rotate((Math.PI / 180) * 30);
            L09_Vogelhaus.crc2.arc(8, 12, 50, 0, 1 * Math.PI, false);
            L09_Vogelhaus.crc2.fillStyle = L09_Vogelhaus.birdColors[L09_Vogelhaus.randomNumber(0, 3)];
            L09_Vogelhaus.crc2.lineWidth = 5;
            L09_Vogelhaus.crc2.strokeStyle = "hsla(0, 100%, 0%, 1)";
            L09_Vogelhaus.crc2.fill();
            L09_Vogelhaus.crc2.stroke();
            // Schnabel
            L09_Vogelhaus.crc2.beginPath();
            L09_Vogelhaus.crc2.moveTo(-60, 25);
            L09_Vogelhaus.crc2.lineTo(-80, 15);
            L09_Vogelhaus.crc2.lineTo(-60, -5);
            L09_Vogelhaus.crc2.fillStyle = "hsla(48, 100%, 50%, 1)";
            L09_Vogelhaus.crc2.fill();
            L09_Vogelhaus.crc2.closePath();
            // Kopf
            L09_Vogelhaus.crc2.beginPath();
            L09_Vogelhaus.crc2.arc(0 - 40, 0 + 8, 23, 0, 2 * Math.PI, false);
            L09_Vogelhaus.crc2.fillStyle = L09_Vogelhaus.birdColors[L09_Vogelhaus.randomNumber(0, 3)];
            L09_Vogelhaus.crc2.fill();
            L09_Vogelhaus.crc2.stroke();
            // Bein links
            L09_Vogelhaus.crc2.beginPath();
            L09_Vogelhaus.crc2.moveTo(15, 60);
            L09_Vogelhaus.crc2.lineTo(40, 100);
            L09_Vogelhaus.crc2.lineWidth = 5;
            L09_Vogelhaus.crc2.stroke();
            // Bein rechts
            L09_Vogelhaus.crc2.beginPath();
            L09_Vogelhaus.crc2.moveTo(30, 60);
            L09_Vogelhaus.crc2.lineTo(55, 95);
            L09_Vogelhaus.crc2.lineWidth = 5;
            L09_Vogelhaus.crc2.stroke();
            L09_Vogelhaus.crc2.restore();
        }
        L09_Vogelhaus.crc2.restore();
    }
    function drawBirdHouse() {
        L09_Vogelhaus.crc2.save();
        L09_Vogelhaus.crc2.translate(400, 300);
        L09_Vogelhaus.crc2.fillStyle = "hsla(34, 64%, 14%, 1)";
        L09_Vogelhaus.crc2.fillRect(0, 0, 80, 80);
        L09_Vogelhaus.crc2.strokeStyle = "hsla(30, 100%, 29%, 1)";
        L09_Vogelhaus.crc2.beginPath();
        L09_Vogelhaus.crc2.moveTo(140, 20);
        L09_Vogelhaus.crc2.lineTo(-60, 20);
        L09_Vogelhaus.crc2.lineWidth = 12;
        L09_Vogelhaus.crc2.stroke();
        L09_Vogelhaus.crc2.beginPath();
        L09_Vogelhaus.crc2.moveTo(0, 0);
        L09_Vogelhaus.crc2.lineTo(80, 0);
        L09_Vogelhaus.crc2.lineTo(40, -50);
        L09_Vogelhaus.crc2.fillStyle = "hsla(34, 64%, 14%, 1)";
        L09_Vogelhaus.crc2.fill();
        L09_Vogelhaus.crc2.closePath();
        L09_Vogelhaus.crc2.beginPath();
        L09_Vogelhaus.crc2.moveTo(40, 80);
        L09_Vogelhaus.crc2.lineTo(40, 200);
        L09_Vogelhaus.crc2.lineWidth = 12;
        L09_Vogelhaus.crc2.stroke();
        L09_Vogelhaus.crc2.restore();
    }
    function drawBackground() {
        let gradient = L09_Vogelhaus.crc2.createLinearGradient(0, 0, 0, 350);
        gradient.addColorStop(0, "hsl(198, 80%, 50%");
        gradient.addColorStop(1, "hsla(0, 100%, 100%, 1)");
        L09_Vogelhaus.crc2.fillStyle = gradient;
        L09_Vogelhaus.crc2.fillRect(0, 0, L09_Vogelhaus.crc2.canvas.width, L09_Vogelhaus.crc2.canvas.height);
        L09_Vogelhaus.crc2.save();
        L09_Vogelhaus.crc2.fillStyle = "hsla(202, 100%, 82%, 1)";
        L09_Vogelhaus.crc2.fillRect(0, 360, L09_Vogelhaus.crc2.canvas.width, 300);
        L09_Vogelhaus.crc2.restore();
    }
    function drawCloud() {
        let particleAmount = 20;
        let particleRadius = 50;
        let particle = new Path2D();
        let gradient = L09_Vogelhaus.crc2.createRadialGradient(0, 0, 0, 0, 0, particleRadius);
        particle.arc(0, 0, particleRadius, 0, 2 * Math.PI);
        gradient.addColorStop(0, "hsla(0, 100%, 100%, 0.7)");
        gradient.addColorStop(1, "hsla(0, 100%, 100%, 0)");
        L09_Vogelhaus.crc2.save();
        L09_Vogelhaus.crc2.translate(500, 150);
        L09_Vogelhaus.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < particleAmount; drawn++) {
            L09_Vogelhaus.crc2.save();
            let x = (Math.random() - 0.5) * 300;
            let y = -(Math.random() * 75);
            L09_Vogelhaus.crc2.translate(x, y);
            L09_Vogelhaus.crc2.fill(particle);
            L09_Vogelhaus.crc2.restore();
        }
        L09_Vogelhaus.crc2.restore();
    }
})(L09_Vogelhaus || (L09_Vogelhaus = {}));
//# sourceMappingURL=static.js.map