var L01_RandomPoem;
(function (L01_RandomPoem) {
    let characters = ["Po", "Shifu", "Oogway", "Tigress", "Crane", "Mantis"];
    let action = ["isst", "bekämpft", "liebt", "balanciert", "vermeidet", "respektiert"];
    let objects = ["Dumplings", "den Drachenkrieger", "Nudeln", "Meditation", "den Jadepalast", "die Drachenrolle"];
    for (let index = 5; index > 0; index--) {
        getVerse(characters, action, objects);
    }
    function getVerse(_characters, _action, _objects) {
        let finishedVerse = "";
        let randomnumber = Math.floor(Math.random() * _characters.length);
        let value = _characters.splice(randomnumber, 1);
        let secondvalue = _action.splice(randomnumber, 1);
        let thirdvalue = _objects.splice(randomnumber, 1);
        finishedVerse = value + " " + secondvalue + " " + thirdvalue;
        console.log(finishedVerse);
    }
})(L01_RandomPoem || (L01_RandomPoem = {}));
//# sourceMappingURL=script.js.map