let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = "*";
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screenValue= eval(screenValue);
        }
         else if(buttonText== 'del'){
            screenValue = screenValue.slice(0, -1);
         }
         else if(buttonText=='Enter'){
            screenValue= eval(screenValue);
         }
         else if (buttonText == '√') {
            screenValue = Math.sqrt(eval(screenValue));
        }
        else if (buttonText == '^') {
           screenValue += "**";
        }
        else if (buttonText == '!') {
            screenValue += buttonText;
            screenValue = factorial(parseFloat(screenValue)).toString();
        }
        else {
            screenValue += buttonText;
        }
        screen.value = screenValue;
    })
}

