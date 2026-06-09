# Calculator - Modern & Responsive

A sleek, minimalist calculator application with a beautiful gradient UI and full keyboard support.

## Features

✨ **Modern Design**
- Beautiful gradient background and UI elements
- Smooth animations and transitions
- Responsive layout that works on all devices
- Professional color scheme

🔢 **Functionality**
- Basic arithmetic operations (addition, subtraction, multiplication, division)
- Decimal point support
- Percentage calculations
- Delete last character functionality
- Clear all button
- Live expression display

⌨️ **Keyboard Support**
- Numbers: 0-9
- Operations: +, -, *, /
- Enter or = to calculate
- Backspace or DEL to remove last digit
- Escape to clear all

🛡️ **Robust**
- No unsafe `eval()` function - uses safe mathematical operations
- Error handling for division by zero
- Floating point precision handling
- Input validation

## Installation

Simply open `index.html` in your web browser. No installation or dependencies required!

## Usage

### Mouse/Touch
1. Click number buttons to enter digits
2. Click operator buttons (+, -, ×, ÷) to select operation
3. Click = to calculate result
4. Click DEL to remove last digit
5. Click Clear to reset everything

### Keyboard
- Type numbers: 0-9
- Type operators: +, -, *, /
- Press Enter or = to calculate
- Press Backspace to delete last digit
- Press Escape to clear

## Project Structure

```
Calculator/
├── index.html      # HTML structure
├── style.css       # Modern styling with gradient and animations
├── main.js         # JavaScript calculator logic (object-oriented)
└── README.md       # This file
```

## Technical Details

### HTML
- Semantic structure
- Data attributes for event handling
- Font Awesome icons integration

### CSS
- CSS Variables for easy theming
- Grid layout for button arrangement
- Flexbox for responsive design
- Smooth transitions and animations
- Mobile-first responsive design

### JavaScript
- Object-oriented Calculator class
- Safe mathematical operations (no eval)
- Event-driven architecture
- Comprehensive keyboard event handling
- Floating-point precision handling

## Browser Support

Works on all modern browsers:
- Chrome/Chromium
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Color Scheme

- **Primary**: #667eea (Blue-Purple)
- **Secondary**: #f093fb (Pink)
- **Success**: #4ecca3 (Green)
- **Warning**: #ffd93d (Yellow)
- **Danger**: #ff6b6b (Red)

## Customization

To change the color scheme, modify the CSS variables in `:root`:

```css
:root {
    --primary: #667eea;
    --secondary: #f093fb;
    --success: #4ecca3;
    /* ... etc */
}
```

## Performance

- Lightweight and fast
- No external dependencies (except Font Awesome icons)
- Minimal CSS and JavaScript
- Optimized animations

## Code Quality

- Object-oriented design
- Clean, readable code
- Proper error handling
- Security-focused (no eval)
- Well-commented

## License

Free to use and modify.

