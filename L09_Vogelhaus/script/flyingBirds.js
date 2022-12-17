var L09_Vogelhaus;
(function (L09_Vogelhaus) {
    class FlyingBirds {
        position;
        velocity;
        scale;
        constructor(_position) {
            this.position = _position;
            this.velocity = new L09_Vogelhaus.Vector(0, 0);
            this.velocity.random(50, 200, L09_Vogelhaus.directions[Math.floor(Math.random() * L09_Vogelhaus.directions.length)]);
            this.scale = new L09_Vogelhaus.Vector(0, 0);
            this.scale.set(this.position.y / 75, this.position.y / 75);
        }
        draw() {
            L09_Vogelhaus.crc2.save();
            L09_Vogelhaus.crc2.translate(this.position.x, this.position.y);
            L09_Vogelhaus.crc2.scale(this.scale.x, this.scale.y);
            L09_Vogelhaus.crc2.beginPath();
            L09_Vogelhaus.crc2.moveTo(0, 0);
            L09_Vogelhaus.crc2.bezierCurveTo(0, -10, -10, -10, -10, 0);
            L09_Vogelhaus.crc2.moveTo(0, 0);
            L09_Vogelhaus.crc2.strokeStyle = "#000";
            L09_Vogelhaus.crc2.closePath();
            L09_Vogelhaus.crc2.stroke();
            L09_Vogelhaus.crc2.beginPath();
            L09_Vogelhaus.crc2.moveTo(0, 0);
            L09_Vogelhaus.crc2.bezierCurveTo(0, -10, 10, -10, 10, 0);
            L09_Vogelhaus.crc2.moveTo(0, 0);
            L09_Vogelhaus.crc2.strokeStyle = "#000";
            L09_Vogelhaus.crc2.closePath();
            L09_Vogelhaus.crc2.stroke();
            L09_Vogelhaus.crc2.restore();
        }
        fly(_timeslice) {
            let offset = new L09_Vogelhaus.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x > L09_Vogelhaus.crc2.canvas.width)
                this.position.x -= L09_Vogelhaus.crc2.canvas.width;
            if (this.position.x < 0)
                this.position.x += L09_Vogelhaus.crc2.canvas.width;
        }
    }
    L09_Vogelhaus.FlyingBirds = FlyingBirds;
})(L09_Vogelhaus || (L09_Vogelhaus = {}));
//# sourceMappingURL=flyingBirds.js.map