
class calcController {

    constructor () {
        this.numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        this.screen = ['0'];

        this._displayCalcEl = document.querySelector('.texto-tela');
        this.initialize();
        this.initButtons();
    }

    initialize () {
        this.displayCalc = this.screen[0];
    }

    buttonClick (button) {
        if (button.innerHTML in this.numbers) {
            this.buttonClickNumber(button);
        } else {
            this.buttonClickOperator(button);
        }
    }

    buttonClickNumber (button) {
        if (this.screen.length === 1) {
            if (this.screen[0] === '0') {
                this.screen[0] = button.innerHTML;
            } else {
                this.screen[0] += button.innerHTML;
            }
        }

        this.displayCalc = this.screen[0];
    }

    buttonClickOperator (button) {
        switch (button.innerHTML) {
            case '%':
                console.log('%');
                break;

            case 'CE':
                this.clearEntry();
                break;

            case 'C':
                this.clear();
                break;
            
            case '\u2190':
                this.backspace();
                break;
            
            case '1/x':
                this.divideBy();
                break;

            case 'x\u00b2':
                this.power();
                break;

            case '\u221ax':
                this.squareRoot();
                break;

            case '\u00f7':
                console.log('\u00f7');
                break;

            case '\u00d7':
                console.log('\u00d7');
                break;

            case '\u2212':
                console.log('\u2212');
                break;

            case '\u002b':
                console.log('\u002b');
                break;

            case '\u00b1':
                this.changeSignal();
                break;

            case '\u003d':
                console.log('\u003d');
                break;
        }
    }

    backspace () {
        if (this.screen[this.screen.length - 1].length !== 1) {
            this.screen[this.screen.length - 1] = this.screen[this.screen.length - 1].slice(0, -1);
        } else {
            this.screen[this.screen.length - 1] = '0';
        }

        this.displayCalc = this.screen[this.screen.length - 1];
    }

    clearEntry () {
        this.screen[this.screen.length - 1] = '0';

        this.displayCalc = this.screen[this.screen.length - 1];
    }

    clear () {
        this.screen = ['0'];

        this.displayCalc = this.screen[this.screen.length - 1];
    }

    divideBy () {
        this.displayCalc = 1/this.displayCalc;

        this.screen = ['0'];
    }

    power () {
        this.displayCalc = Math.pow(parseFloat(this.displayCalc), 2);

        this.screen = ['0']
    }
    
    squareRoot () {
        this.displayCalc = Math.sqrt(parseFloat(this.displayCalc));

        this.screen = ['0'];
    }

    changeSignal () {
        if (this.displayCalc !== '0') {
            this.displayCalc = parseFloat(this.displayCalc)*-1;

            this.screen = ['0'];
        }
    }

    initButtons () {
        let buttons = document.querySelectorAll('.botao');

        buttons.forEach(button => {

            button.addEventListener('click', () => {

                this.buttonClick(button);

            });

        });
    }

    get displayCalc () {
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc (value) {
        this._displayCalcEl.innerHTML = value;
    }

}
