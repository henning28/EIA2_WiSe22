namespace L10_Vogelhaus {
    export class FlyingBirds extends Moveable {

        scale: Vector;

        constructor(_position: Vector) {
            super(_position);
            this.velocity = new Vector(0, 0);
            this.velocity.random(50, 200, directions[Math.floor(Math.random() * directions.length)]);

            this.scale = new Vector(0, 0);
            this.scale.set(this.position.y / 75, this.position.y / 75);
        }

        draw(): void {
            let start: DOMMatrix = crc2.getTransform();

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.scale.x, this.scale.y);

            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.bezierCurveTo(0, -10, -10, -10, -10, 0);
            crc2.moveTo(0, 0);
            crc2.strokeStyle = "#000";
            crc2.closePath();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.bezierCurveTo(0, -10, 10, -10, 10, 0);
            crc2.moveTo(0, 0);
            crc2.strokeStyle = "#000";
            crc2.closePath();
            crc2.stroke();

            crc2.restore();
            crc2.setTransform(start);
        }

        fly(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
        }
    }
}