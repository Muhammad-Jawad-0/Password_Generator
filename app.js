const passwordInput = document.getElementById("password");
const copyText = document.getElementById("copyText");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+-*/<>?/=.,:;~";

const allChars = upperCase + lowerCase + number + symbol;

const createPassword = () => {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordInput.value = password
};

const copyPassword = () => {
    console.log(passwordInput.value)
    if (passwordInput.value == "") {
        swal("Error!", "Please Generate a Password", "error");
    } else {

        passwordInput.select();
        document.execCommand("copy")
        swal("Good job!", "Your Text is Copied!", "success");
    }
}

