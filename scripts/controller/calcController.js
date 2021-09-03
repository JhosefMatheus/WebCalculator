
class calcController {

    constructor () {
        this.numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

        this._displayCalcEl = document.querySelector('.texto-tela');
        this.initialize();
        this.buttonClick();
    }

    initialize () {
        this.displayCalc = '0';
    }

    buttonClick () {
        let buttons = document.querySelectorAll('.botao');

        buttons.forEach(button => {

            button.addEventListener('click', () => {

                if (button.innerHTML in this.numbers) {
                    this.displayCalc = button.innerHTML;
                }

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
