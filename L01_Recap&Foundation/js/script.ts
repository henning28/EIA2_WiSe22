let v: number = 1;
v = v + 1;

interface Student {
    name: string;
    matrikel: number;
}
let students: Student[] = [];

students.push({name: "Big Brain", matrikel: 123456});

interface MapStringToBoolean {
    [key: string]: boolean;
}
let z: MapStringToBoolean = {"wert1": true, "wert2": false};

function isDivisible(_dividend: number, _divisor: number): boolean {
    let result: boolean = (_dividend % _divisor == 0);
    return result;
  }

let v1: number = 3;
let v2: number = 4;

v1 = v2;

let x1: string [] = ["yes", "mmh", "wow"];
let x2: string = "ahaaa";
