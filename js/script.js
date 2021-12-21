const buttons = document.querySelectorAll("#button");
let calculator_screen = document.querySelector("#screen_text");

let register = [null,];

function button_click() {
    
    buttons.forEach(button => {

        button.addEventListener("click", () => {

            if (button.className === "not_operator") {

                button_click_number(button);

            } else {

                switch (button.innerHTML) {
                    case "\u0025":
                        
                        break;
                    
                    case "CE":

                        break;

                    case "C":

                        break;
                    
                    case "\u2190":

                        backspace();
                        break;
                    
                    case "1/x":
                        
                        break;
                    
                    case "x²":

                        break;
                    
                    case "\u221A":

                        break;
                    
                    case "\u00F7":

                        break;
                    
                    case "\u00D7":

                        break;

                    case "-":

                        break;
                    
                    case "+":

                        break;
                    
                    case "=":

                        break;
                }

            }

        });

    });

}

function button_click_number(button) {
    
    if (register.length === 1) {
        
        if (register[0] === null) {

            register[0] = button.innerHTML;
            
        } else {
            
            register[0] += button.innerHTML;
            
        }
        
        calculator_screen.innerHTML = register[0];

    }

}

function backspace() {

    if (register.length === 1) {

        if (register[0].length > 1) {

            register[0] = register[0].slice(0, -1);
            calculator_screen.innerHTML = register[0];

        } else if (register[0].length === 1 && register[0] !== null) {

            register[0] = null;
            calculator_screen.innerHTML = "0";

        }

    }

}

button_click();
