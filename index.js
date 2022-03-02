let screenValue = document.getElementById("screenValue");


function createRipple(e) {

    //UI input handler
    const button = e.currentTarget;

    let value = e.target.parentElement.innerText;
    if (value == "C") {
        screenValue.innerText = "";
    }
    else if (value == "DEL") {
        screenValue.innerText = screenValue.innerText.slice(0, -1);
    }
    else if (value == "X") {
        screenValue.innerText += "*";
    }
    else if (value == "=") {
        try {
            screenValue.innerText = eval(screenValue.innerText);
        }
        catch (e) {
            alert("Please enter valid expression");
        }
    }
    else {
        screenValue.innerText += value;
    }


    //ripple effect
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
}

const buttons = document.getElementsByTagName("button");
for (const button of buttons) {
    button.addEventListener("click", createRipple);
}

const keys = ['/', '*', '-', '+', '%', '.', '(', ')'];
const exc = ['/', '*', '-', '+', '%', '.'];

//keyboard input handler
document.addEventListener('keydown', (event) => {
    var name = event.key;
    
    console.log(name);
    try {
        if (name == 'Backspace') screenValue.innerText = screenValue.innerText.slice(0, -1);

        else if (screenValue.innerText.length === 0 && (name !== '-' && isNaN(name))) return;

        else if (screenValue.innerText[screenValue.innerText.length - 1] === name && exc.includes(name)) return;

        else if (screenValue.innerText.length>0 &&  exc.includes(screenValue.innerText[screenValue.innerText.length - 1]) && exc.includes(name)) return;

        else if (keys.includes(name)) screenValue.innerText += name;

        else if (!isNaN(name) || exc.includes(name)) screenValue.innerText += name;

        else if (name === "Enter") screenValue.innerText = eval(screenValue.innerText);
    }
    catch (e) {
        alert("Please enter valid expression");
    }

}, false);




