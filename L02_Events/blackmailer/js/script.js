var L02_BlackmailerCompanion;
(function (L02_BlackmailerCompanion) {
    let chosenCharacter = "a";
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let mail = document.querySelector("div#mail");
        mail.addEventListener("click", placeLetter);
        document.querySelector(".keyboard__keys").addEventListener("click", chooseCharacter);
        addClass();
    }
    function decideAction(_event) {
        // console.log(eventTargetName.innerHTML);
        // if (eventTargetName.innerHTML == " ") {
        //     placeLetter(_event);
        // } else {
        //     console.log("doesnt work");
        // }
    }
    function placeLetter(_event) {
        // console.log(_event);
        let x = _event.offsetX;
        let y = _event.offsetY;
        let mail = _event.target;
        let letter = document.createElement("span");
        mail.appendChild(letter);
        letter.textContent = chosenCharacter;
        letter.style.left = x + "px";
        letter.style.top = y + "px";
        letter.addEventListener("click", deleteLetter);
    }
    function chooseCharacter(_event) {
        // chosenCharacter = _event.key;
        let clickedCharacter = _event.target;
        if (clickedCharacter.innerHTML.length == 1) {
            chosenCharacter = clickedCharacter.innerHTML;
        }
    }
    function deleteLetter(_event) {
        let target = _event.target;
        let parent = target.parentNode;
        parent.removeChild(target);
    }
    function addClass() {
        let buttonCollection = document.querySelector(".keyboard__keys").querySelectorAll("button");
        buttonCollection.forEach(button => {
            button.addEventListener("click", () => {
                resetButtons();
                button.classList.add("active");
            });
        });
        function resetButtons() {
            buttonCollection.forEach(button => {
                button.classList.remove("active");
            });
        }
    }
})(L02_BlackmailerCompanion || (L02_BlackmailerCompanion = {}));
//# sourceMappingURL=script.js.map