function generatePassword(length, includeNumbers = true, includeSpecialChars = false) {
    const lowercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const specialChars = "@#$%^&*()_+!";

    let allChars = lowercaseChars;
    if (includeNumbers) allChars += numberChars;
    if (includeSpecialChars) allChars += specialChars;

    let password = "";
    let hasNumber = false;
    let hasSpecial = false;

    while (password.length < length) {
        const randomChar = allChars[Math.floor(Math.random() * allChars.length)];
        if (includeNumbers && numberChars.includes(randomChar)) hasNumber = true;
        if (includeSpecialChars && specialChars.includes(randomChar)) hasSpecial = true;

        password += randomChar;
    }

    if ( (includeNumbers && !hasNumber) || (includeSpecialChars && !hasSpecial)) {
        return generatePassword(length, includeNumbers, includeSpecialChars);
    }

    return password;
}
console.log(generatePassword(10, true, true));
