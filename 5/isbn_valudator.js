function validISBN10(isbn) {
    isbn = isbn.toString();

    let number = isbn.slice(0, -1);
    number = number.split('').map(Number);
    
    const last = isbn.slice(-1);
    const last_digit = (last != 'X') ? parseInt(last, 10) : 'X';

    number = number.map((digit, index) => {
        return digit * (index + 1);
    });

    const sum = number.reduce((a, b) => a + b, 0);

    const control_digit = sum % 11;

    return last_digit === (control_digit !== 10 ? control_digit: 'X');

}