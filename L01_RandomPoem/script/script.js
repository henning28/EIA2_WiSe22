/*
Aufgabe: L01_RandomPoem
Name: Henning Reck
Matrikel: 271133
Datum: 14.10.2022
Quellen:
*/
var L01_RandomPoem;
(function (L01_RandomPoem) {
    let characters = ["Po", "Shifu", "Oogway", "Tigress", "Crane", "Mantis"];
    let action = ["isst", "bekämpft", "liebt", "balanciert", "vermeidet", "respektiert"];
    let objects = ["Dumplings", "den Drachenkrieger", "Nudeln", "Pfirsiche", "den Jadepalast", "die Drachenrolle"];
    for (let iNumber = characters.length; iNumber > 0; iNumber--) {
        console.log(getVerse(characters, action, objects));
    }
    function getVerse(_characters, _action, _objects) {
        let finishedVerse = "";
        let randomNumber;
        randomNumber = Math.floor(Math.random() * _characters.length);
        let randomCharacter = _characters.splice(randomNumber, 1);
        randomNumber = Math.floor(Math.random() * _action.length);
        let randomAction = _action.splice(randomNumber, 1);
        randomNumber = Math.floor(Math.random() * _objects.length);
        let randomObject = _objects.splice(randomNumber, 1);
        finishedVerse = randomCharacter + " " + randomAction + " " + randomObject;
        return finishedVerse;
    }
})(L01_RandomPoem || (L01_RandomPoem = {}));
//# sourceMappingURL=script.js.map