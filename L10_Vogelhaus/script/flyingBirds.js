var L10_Vogelhaus;
(function (L10_Vogelhaus) {
    class FlyingBirds extends L10_Vogelhaus.Moveable {
        scale;
        constructor(_position) {
            super(_position);
            this.velocity = new L10_Vogelhaus.Vector(0, 0);
            this.velocity.random(50, 200, L10_Vogelhaus.directions[Math.floor(Math.random() * L10_Vogelhaus.directions.length)]);
            this.scale = new L10_Vogelhaus.Vector(0, 0);
            this.scale.set(this.position.y / 75, this.position.y / 75);
        }
        draw() {
            let start = L10_Vogelhaus.crc2.getTransform();
            L10_Vogelhaus.crc2.save();
            L10_Vogelhaus.crc2.translate(this.position.x, this.position.y);
            L10_Vogelhaus.crc2.scale(this.scale.x, this.scale.y);
            L10_Vogelhaus.crc2.beginPath();
            L10_Vogelhaus.crc2.moveTo(0, 0);
            L10_Vogelhaus.crc2.bezierCurveTo(0, -10, -10, -10, -10, 0);
            L10_Vogelhaus.crc2.moveTo(0, 0);
            L10_Vogelhaus.crc2.strokeStyle = "#000";
            L10_Vogelhaus.crc2.closePath();
            L10_Vogelhaus.crc2.stroke();
            L10_Vogelhaus.crc2.beginPath();
            L10_Vogelhaus.crc2.moveTo(0, 0);
            L10_Vogelhaus.crc2.bezierCurveTo(0, -10, 10, -10, 10, 0);
            L10_Vogelhaus.crc2.moveTo(0, 0);
            L10_Vogelhaus.crc2.strokeStyle = "#000";
            L10_Vogelhaus.crc2.closePath();
            L10_Vogelhaus.crc2.stroke();
            L10_Vogelhaus.crc2.restore();
            L10_Vogelhaus.crc2.setTransform(start);
        }
        fly(_timeslice) {
            let offset = new L10_Vogelhaus.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x > L10_Vogelhaus.crc2.canvas.width)
                this.position.x -= L10_Vogelhaus.crc2.canvas.width;
            if (this.position.x < 0)
                this.position.x += L10_Vogelhaus.crc2.canvas.width;
        }
    }
    L10_Vogelhaus.FlyingBirds = FlyingBirds;
})(L10_Vogelhaus || (L10_Vogelhaus = {}));
//# sourceMappingURL=flyingBirds.js.map