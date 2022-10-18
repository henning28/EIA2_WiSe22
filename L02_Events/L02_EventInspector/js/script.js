var L02_EventInspector;
(function (L02_EventInspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.querySelector("body").addEventListener("click", logInfo);
        document.querySelector("body").addEventListener("keyup", logInfo);
        document.querySelector("div").addEventListener("click", logInfo);
        document.querySelector("div").addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        let xValue = document.getElementById("xValue");
        let yValue = document.getElementById("yValue");
        let eventTargetValue = document.getElementById("eventTarget");
        document.querySelector("span").style.top = (_event.clientY + 5) + "px";
        document.getElementById("span").style.left = (_event.clientX + 5) + "px";
        xValue.innerHTML = "Mouseposition X = " + _event.clientX.toString();
        yValue.innerHTML = "Mouseposition Y = " + _event.clientY.toString();
        eventTargetValue.innerHTML = "Event Target = " + _event.target.toString();
    }
    function logInfo(_event) {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }
})(L02_EventInspector || (L02_EventInspector = {}));
//# sourceMappingURL=script.js.map