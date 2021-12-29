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
                        clear_entry();
                        break;

                    case "C":
                        clear_all();
                        break;
                    
                    case "\u2190":
                        backspace();
                        break;
                    
                    case "1/x":
                        division_by();
                        break;
                    
                    case "x²":
                        pow_2();
                        break;
                    
                    case "\u221Ax":
                        sqrt_x();
                        break;
                    
                    case "\u00F7":
                        division();
                        break;
                    
                    case "\u00D7":
                        times();
                        break;

                    case "-":
                        diff();
                        break;
                    
                    case "+":
                        sum();
                        break;
                    
                    case "=":
                        equals();
                        break;
                }

            }

        });

    });

}

function button_click_number(button) {

    if (button.innerHTML === ",") {

        floating_point();
    
    } else if (button.innerHTML === "+/-") {

        change_signal();

    }else if (register.length === 1) {
        
        if (register[0] === null) {

            register[0] = button.innerHTML;
            
        } else {
            
            register[0] += button.innerHTML;
            
        }
        
        calculator_screen.innerHTML = register[0];

    } else if (register.length === 3) {

        if (register[2] === null) {

            register[2] = button.innerHTML;

        } else {

            register[2] += button.innerHTML;

        }

        calculator_screen.innerHTML = register[2];

    }

}

function floating_point() {

    if (register.length === 1 && register[0] === null) {

        register[0] = "0.";

        calculator_screen.innerHTML = register[0];
        
    } else if (register.length === 1 && register[0] !== null && !register[0].includes(".")) {
        
        register[0] += ".";
        
        calculator_screen.innerHTML = register[0];
        
    } else if (register.length === 3 && register[2] === null) {
        
        register[2] = "0.";
        
        calculator_screen.innerHTML = register[2];
        
    } else if (register.length === 3 && register[2] !== null && !register[2].includes(".")) {
        
        register[2] += ".";
        
        calculator_screen.innerHTML = register[2];

    }

}

function change_signal() {

    if (register.length === 1 && register[0] !== null) {

        register[0] = String(parseFloat(register[0])*-1);

        calculator_screen.innerHTML = register[0];
        
    } else if (register.length === 3 && register[2] !== null) {
        
        register[2] = String(parseFloat(register[2])*-1);
        
        calculator_screen.innerHTML = register[2];

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

    } else if (register.length === 3) {

        if (register[2].length > 1) {

            register[2] = register[2].slice(0, -1);
            calculator_screen.innerHTML = register[2];

        } else if (register[2].length === 1) {

            register[2] = null;
            calculator_screen.innerHTML = "0";

        }

    }

}

function clear_entry() {

    register[register.length - 1] = null;
    calculator_screen.innerHTML = "0";
    console.log(register)

}

function clear_all() {

    register = [null,];
    calculator_screen.innerHTML = "0";
    console.log(register)

}

function division_by() {

    var resultado = 1/parseFloat(calculator_screen.innerHTML);

    if (resultado === Infinity) {

        alert("Itsn't possible to divide a number by zero.");
        
    } else {
        
        calculator_screen.innerHTML = resultado;
        
    }
    
    register = [null,];
    
}

function pow_2() {
    
    calculator_screen.innerHTML = Math.pow(parseFloat(calculator_screen.innerHTML), 2);
    
}

function sqrt_x() {
    
    var resultado = Math.sqrt(parseFloat(calculator_screen.innerHTML));
    
    if (resultado === NaN) {
        
        alert("Itsn't possible to show an undefined result.");
        
    } else {
        
        calculator_screen.innerHTML = resultado;
        
    }
    
    register = [null,];
    
}

function division() {
    
    if (register.length === 1 && register[0] === null) {
        
        register[0] = calculator_screen.innerHTML;
        register.push("/", null);
        
    } else if (register.length === 1 && register[0] !== null) {
        
        register.push("/", null);
        
    } else if (register.length === 3 && register[2] === null) {
        
        register[1] = "/";
        
    } else if (register.length === 3 && register[3] !== null) {
        
        var resultado = eval(register.join(""));
        
        if (resultado === Infinity) {
            
            alert("Itsn't possible to divide a number by zero.");
            
            calculator_screen.innerHTML = "0";
            
            register = ["0", "/", null];
            
        } else {
            
            calculator_screen.innerHTML = resultado;
            
            register = [resultado, "/", null];
            
        }
        
    }
    
}

function times() {
    
    if (register.length === 1 && register[0] === null) {
        
        register[0] = calculator_screen.innerHTML;
        register.push("*", null);
    
    } else if (register.length === 1 && register[0] !== null) {
    
        register.push("*", null);
        
    } else if (register.length === 3 && register[2] === null) {
        
        register[1] = "*";
        
    } else if (register.length === 3 && register[3] !== null) {
        
        var resultado = eval(register.join(""));
        calculator_screen.innerHTML = resultado;
        
        register = [resultado, "*", null];
        
    }
    
}

function diff() {
    
    if (register.length === 1 && register[0] === null) {
        
        register[0] = calculator_screen.innerHTML;
        register.push("-", null);
        
    } else if (register.length === 1 && register[0] !== null) {
        
        register.push("-", null);
        
    } else if (register.length === 3 && register[2] === null) {
        
        register[1] = "-";
        
    } else if (register.length === 3 && register[3] !== null) {
        
        var resultado = eval(register.join(""));
        calculator_screen.innerHTML = resultado;
        
        register = [resultado, "-", null];
        
    }
    
}

function sum() {
    
    if (register.length === 1 && register[0] === null) {
        
        register[0] = calculator_screen.innerHTML;
        register.push("+", null);
        
    } else if (register.length === 1 && register[0] !== null) {
        
        register.push("+", null);
        
    } else if (register.length === 3 && register[2] === null) {
        
        register[1] = "+";
        
    } else if (register.length === 3 && register[3] !== null) {
        
        var resultado = eval(register.join(""));
        calculator_screen.innerHTML = resultado;
        
        register = [resultado, "+", null];
        
    }
    
}

function equals() {
    
    if (register.length === 3 && register[2] !== null) {
        
        var resultado = eval(register.join(""));
        
        if (resultado === Infinity) {
            
            alert("Itsn't possible to divide a number by zero.");

        } else {

            calculator_screen.innerHTML = resultado;

        }

        register = [null,];

    } else if ((register.length === 3 && register[2] === null) || (register.length === 1 && register[0] !== null)) {

        calculator_screen.innerHTML = register[0];

        register = [null,];

    } else if (register.length === 1 && register[0] === null) {

        calculator_screen.innerHTML = "0";

        register = [null,];

    }

}

button_click();
