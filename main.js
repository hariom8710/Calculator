/**
 * Calculator Application - Main JavaScript
 * Features: Basic arithmetic operations, keyboard support, error handling
 */

class Calculator {
    constructor() {
        this.display = document.getElementById('display');
        this.expression = document.getElementById('expression');
        this.currentValue = '';
        this.previousValue = '';
        this.operation = null;
        this.shouldResetDisplay = false;
        
        this.init();
    }

    init() {
        // Number buttons
        document.querySelectorAll('[data-value]').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleInput(e.target.dataset.value));
        });

        // Function buttons
        document.querySelectorAll('[data-action]').forEach(btn => {
            if (btn.dataset.action === 'clear') {
                btn.addEventListener('click', () => this.clear());
            } else if (btn.dataset.action === 'delete') {
                btn.addEventListener('click', () => this.deleteLastChar());
            } else if (btn.dataset.action === 'calculate') {
                btn.addEventListener('click', () => this.calculate());
            }
        });

        // Keyboard support
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
    }

    handleInput(value) {
        // Handle decimal point
        if (value === '.') {
            if (this.currentValue.includes('.')) return;
            if (this.currentValue === '') this.currentValue = '0';
        }

        // Handle operators
        if (['+', '-', '*', '/'].includes(value)) {
            if (this.currentValue === '') return;
            
            if (this.previousValue !== '' && this.operation) {
                this.calculate();
            }
            
            this.previousValue = this.currentValue;
            this.operation = value;
            this.currentValue = '';
            this.shouldResetDisplay = true;
        } else {
            // Handle numbers
            if (this.shouldResetDisplay) {
                this.currentValue = value;
                this.shouldResetDisplay = false;
            } else {
                this.currentValue += value;
            }
        }

        this.updateDisplay();
    }

    calculate() {
        if (!this.previousValue || !this.currentValue || !this.operation) return;

        let result;
        const prev = parseFloat(this.previousValue);
        const current = parseFloat(this.currentValue);

        try {
            switch (this.operation) {
                case '+':
                    result = prev + current;
                    break;
                case '-':
                    result = prev - current;
                    break;
                case '*':
                    result = prev * current;
                    break;
                case '/':
                    if (current === 0) {
                        this.showError('Cannot divide by zero');
                        return;
                    }
                    result = prev / current;
                    break;
                case '%':
                    result = prev % current;
                    break;
                default:
                    return;
            }

            // Round to avoid floating point errors
            result = Math.round(result * 100000000) / 100000000;
            
            this.currentValue = result.toString();
            this.previousValue = '';
            this.operation = null;
            this.shouldResetDisplay = true;
        } catch (error) {
            this.showError('Calculation error');
        }

        this.updateDisplay();
    }

    deleteLastChar() {
        this.currentValue = this.currentValue.slice(0, -1);
        this.updateDisplay();
    }

    clear() {
        this.currentValue = '';
        this.previousValue = '';
        this.operation = null;
        this.shouldResetDisplay = false;
        this.updateDisplay();
    }

    updateDisplay() {
        this.display.value = this.currentValue || '0';
        
        // Show expression
        if (this.operation && this.previousValue) {
            this.expression.textContent = `${this.previousValue} ${this.operation} ${this.currentValue}`;
        } else if (this.previousValue && this.operation) {
            this.expression.textContent = `${this.previousValue} ${this.operation}`;
        } else {
            this.expression.textContent = '';
        }
    }

    showError(message) {
        this.display.value = message;
        setTimeout(() => this.clear(), 2000);
    }

    handleKeyboard(e) {
        if (e.key.match(/[0-9.]/)) {
            this.handleInput(e.key);
        } else if (e.key === 'Enter' || e.key === '=') {
            e.preventDefault();
            this.calculate();
        } else if (e.key === 'Backspace') {
            e.preventDefault();
            this.deleteLastChar();
        } else if (e.key === 'Escape') {
            e.preventDefault();
            this.clear();
        } else if (['+', '-', '*', '/'].includes(e.key)) {
            e.preventDefault();
            this.handleInput(e.key);
        } else if (e.key === '%') {
            e.preventDefault();
            this.handleInput('%');
        }
    }
}

// Initialize calculator when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new Calculator();
});