namespace L02_BlackmailerCompanion {
    let chosenCharacter: string = "a";
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        let mail: HTMLElement = <HTMLElement>document.querySelector("div#mail");
        mail.addEventListener("click", placeLetter);
        document.querySelector(".keyboard__keys").addEventListener("click", chooseCharacter);
        addClass();
    }

    function placeLetter(_event: MouseEvent): void {
        let x: number = _event.offsetX;
        let y: number = _event.offsetY;

        let mail: HTMLElement = <HTMLElement>_event.target;
        let letter: HTMLSpanElement = document.createElement("span");
        mail.appendChild(letter);

        letter.textContent = chosenCharacter;
        letter.style.left = x + "px";
        letter.style.top = y + "px";

        letter.addEventListener("click", deleteLetter);
    }

    function chooseCharacter(_event: KeyboardEvent): void {
        document.querySelector(".keyboard__keys").addEventListener("click", addClass);

        let clickedCharacter: HTMLElement = <HTMLElement>_event.target;
        if (clickedCharacter.innerHTML.length == 1) {
            chosenCharacter = clickedCharacter.innerHTML;
        }

    }

    function deleteLetter(_event: MouseEvent): void {
        let target: Node = <Node>_event.target;
        let parent: Node = <Node>target.parentNode;
        parent.removeChild(target);
    }

    function addClass(): void {
        let buttonCollection: NodeListOf<HTMLButtonElement> = document.querySelector(".keyboard__keys").querySelectorAll("button");

        buttonCollection.forEach(button => {
            button.addEventListener("click", () => {
                resetButtons();
                button.classList.add("active");
            });
        });

        function resetButtons(): void {
            buttonCollection.forEach(button => {
                button.classList.remove("active");
            });
        }
    }
}