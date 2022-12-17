var L09_Vogelhaus;
(function (L09_Vogelhaus) {
    class Snowflake {
        position;
        velocity;
        size;
        snowflake;
        gradient;
        constructor(_size, _position) {
            if (_position)
                this.position = _position;
            else
                this.position = new L09_Vogelhaus.Vector(0, 0);
            this.velocity = new L09_Vogelhaus.Vector(0, 0);
            this.velocity.random(50, 150);
            this.size = _size;
        }
        create(_stepAmount) {
            this.snowflake = new Path2D();
            this.gradient = L09_Vogelhaus.crc2.createRadialGradient(0, 0, 0, 0, 0, 10);
            this.snowflake.arc(0, 0, 10, 0, 2 * Math.PI);
            this.gradient.addColorStop(0, "hsla(0, 100%, 100%, 1)");
            this.gradient.addColorStop(1, "hsla(0, 100%, 100%, 0)");
            L09_Vogelhaus.crc2.fillStyle = this.gradient;
            if (_stepAmount) {
                this.position.x = this.position.x + _stepAmount;
            }
        }
        draw() {
            L09_Vogelhaus.crc2.save();
            L09_Vogelhaus.crc2.translate(this.position.x, this.position.y);
            L09_Vogelhaus.crc2.scale(this.size, this.size);
            L09_Vogelhaus.crc2.fill(this.snowflake);
            L09_Vogelhaus.crc2.restore();
        }
        move(_step) {
            let offset = new L09_Vogelhaus.Vector(0, this.velocity.y);
            offset.scale(_step);
            this.position.add(offset);
            if (this.position.y > 677) {
                this.position.y = 0;
            }
            this.draw();
        }
    }
    L09_Vogelhaus.Snowflake = Snowflake;
})(L09_Vogelhaus || (L09_Vogelhaus = {}));
//# sourceMappingURL=snowflakes.js.map