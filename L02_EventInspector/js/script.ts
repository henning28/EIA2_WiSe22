/*
Aufgabe: L02_EventInspector
Name: Henning Reck
Matrikel: 271133
Datum: 19.10.2022
Quellen: Daniel Meier
*/

namespace L02_EventInspector {
    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        document.addEventListener("mousemove", setInfoBox);

        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);

        document.querySelector("body").addEventListener("click", logInfo);
        document.querySelector("body").addEventListener("keyup", logInfo);

        document.querySelector("#div0").addEventListener("click", logInfo);
        document.querySelector("#div0").addEventListener("keyup", logInfo);

        document.querySelector("#div1").addEventListener("click", logInfo);
        document.querySelector("#div1").addEventListener("keyup", logInfo);

        document.querySelector("button").addEventListener("click", buttonClick);

    }

    function setInfoBox(_event: MouseEvent): void {
        let infoBox: HTMLElement = document.querySelector("span");
        let xValue: HTMLElement = document.getElementById("xValue");
        let yValue: HTMLElement = document.getElementById("yValue");
        let eventTargetValue: HTMLElement = document.getElementById("eventTarget");
    
        infoBox.style.top = (_event.clientY + 5) + "px";
        infoBox.style.left = (_event.clientX + 5) + "px";

        xValue.innerHTML = "Mouseposition X = " + _event.clientX.toString();
        yValue.innerHTML = "Mouseposition Y = " + _event.clientY.toString();
        eventTargetValue.innerHTML = "Event Target = " + _event.target.toString();
    }

    function logInfo(_event: Event): void {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }

    function buttonClick(_event: Event): void {
        let button: HTMLButtonElement = document.querySelector("button");
        let event: CustomEvent = new CustomEvent("Button clicked!", {bubbles: true});
        button.dispatchEvent(event);
    }
}