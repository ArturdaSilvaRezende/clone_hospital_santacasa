export function validateCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, ''); // Remove non-numeric characters
    if (cpf.length !== 11) return false; // CPF must be 11 digits long

    // Check for repeated digits
    if (/^(\d)\1{10}$/.test(cpf)) return false;

    // Validate first digit
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let remainder = 11 - (sum % 11);
    let digit = remainder > 9 ? 0 : remainder;
    if (digit !== parseInt(cpf.charAt(9))) return false;

    // Validate second digit
    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    remainder = 11 - (sum % 11);
    digit = remainder > 9 ? 0 : remainder;
    if (digit !== parseInt(cpf.charAt(10))) return false;

    return true;
}