var L10_Vogelhaus;
(function (L10_Vogelhaus) {
    class Snowflake extends L10_Vogelhaus.Moveable {
        size;
        snowflake;
        gradient;
        constructor(_size, _position) {
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L10_Vogelhaus.Vector(0, 0);
            this.velocity = new L10_Vogelhaus.Vector(0, 0);
            this.velocity.random(50, 150);
            this.size = _size;
        }
        create(_xStep) {
            let start = L10_Vogelhaus.crc2.getTransform();
            this.snowflake = new Path2D();
            this.gradient = L10_Vogelhaus.crc2.createRadialGradient(0, 0, 0, 0, 0, 10);
            this.snowflake.arc(0, 0, 10, 0, 2 * Math.PI);
            this.gradient.addColorStop(0, "hsla(0, 100%, 100%, 1)");
            this.gradient.addColorStop(1, "hsla(0, 100%, 100%, 0)");
            L10_Vogelhaus.crc2.fillStyle = this.gradient;
            if (_xStep) {
                this.position.x = this.position.x + _xStep;
            }
            L10_Vogelhaus.crc2.save();
            L10_Vogelhaus.crc2.translate(this.position.x, this.position.y);
            L10_Vogelhaus.crc2.scale(this.size, this.size);
            L10_Vogelhaus.crc2.fill(this.snowflake);
            L10_Vogelhaus.crc2.restore();
            L10_Vogelhaus.crc2.setTransform(start);
        }
        move(_step) {
            let offset = new L10_Vogelhaus.Vector(0, this.velocity.y);
            offset.scale(_step);
            this.position.add(offset);
            if (this.position.y > 677) {
                this.position.y = 0;
            }
            this.create();
        }
    }
    L10_Vogelhaus.Snowflake = Snowflake;
})(L10_Vogelhaus || (L10_Vogelhaus = {}));
//# sourceMappingURL=snowflakes.js.map