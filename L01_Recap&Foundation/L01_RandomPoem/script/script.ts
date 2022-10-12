namespace L01_RandomPoem {
    let characters: string[] = ["Po", "Shifu", "Oogway", "Tigress", "Crane", "Mantis"];

    let action: string[] = ["isst", "bekämpft", "liebt", "balanciert", "vermeidet", "respektiert"];

    let objects: string[] = ["Dumplings", "den Drachenkrieger", "Nudeln", "Meditation", "den Jadepalast", "die Drachenrolle"];


    for (let index: number = 5; index > 0; index--) {
        getVerse(characters, action, objects);
    }

    function getVerse(_characters: string[], _action: string[], _objects: string[]): void {
        let finishedVerse: string = "";

        let randomnumber: number = Math.floor(Math.random() * _characters.length);

        let value: string[] = _characters.splice(randomnumber, 1);

        let secondvalue: string[] = _action.splice(randomnumber, 1);

        let thirdvalue: string[] = _objects.splice(randomnumber, 1);

        finishedVerse = value + " " + secondvalue + " " + thirdvalue;

        console.log(finishedVerse);

    }
}