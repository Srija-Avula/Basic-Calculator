function appendValue(value) {
    document.getElementById("display").value += value;
}
function clearDisplay() {
    document.getElementById("display").value = "";
}
function deleteLastCharacter() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}
function calculateResult() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");

    function appendValue(value) {
        display.value += value;
    }

    function clearDisplay() {
        display.value = "";
    }

    function deleteLastCharacter() {
        display.value = display.value.slice(0, -1);
    }

    function calculateResult() {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    }

    document.addEventListener("keydown", (event) => {
        if (/^[0-9+\-*/.=]$/.test(event.key)) {
            if (event.key === "=") {
                calculateResult();
            } else {
                appendValue(event.key);
            }
        } else if (event.key === "Enter") {
            calculateResult();
        } else if (event.key === "Backspace") {
            deleteLastCharacter();
        } else if (event.key === "Escape") {
            clearDisplay();
        }
    });

    window.appendValue = appendValue;
    window.clearDisplay = clearDisplay;
    window.deleteLastCharacter = deleteLastCharacter;
    window.calculateResult = calculateResult;
});
