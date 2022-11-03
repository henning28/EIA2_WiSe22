/*
Aufgabe: L01_RandomPoem
Name: Henning Reck
Matrikel: 271133
Datum: 14.10.2022
Quellen:
*/

namespace L01_RandomPoem {
    let characters: string[] = ["Po", "Shifu", "Oogway", "Tigress", "Crane", "Mantis"];

    let action: string[] = ["isst", "bekämpft", "liebt", "balanciert", "vermeidet", "respektiert"];

    let objects: string[] = ["Dumplings", "den Drachenkrieger", "Nudeln", "Pfirsiche", "den Jadepalast", "die Drachenrolle"];

    for (let iNumber: number = characters.length; iNumber > 0; iNumber--) {
        console.log(getVerse(characters, action, objects));
    }

    function getVerse(_characters: string[], _action: string[], _objects: string[]): string {
        let finishedVerse: string = "";
        let randomNumber: number;

        randomNumber = Math.floor(Math.random() * _characters.length);
        let randomCharacter: string[] = _characters.splice(randomNumber, 1);

        randomNumber = Math.floor(Math.random() * _action.length);
        let randomAction: string[] = _action.splice(randomNumber, 1);

        randomNumber = Math.floor(Math.random() * _objects.length);
        let randomObject: string[] = _objects.splice(randomNumber, 1);

        finishedVerse = randomCharacter + " " + randomAction + " " + randomObject;

        return finishedVerse;
    }
}