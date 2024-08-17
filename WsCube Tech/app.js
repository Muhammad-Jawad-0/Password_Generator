const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+-*/<>?/=.,:;~";

// selector
const passBox = document.getElementById("pass-box")
const totalchar = document.getElementById("total-char")
const upperInput = document.getElementById("Uppercase")
const lowerInput = document.getElementById("lowercase")
const numberInput = document.getElementById("number")
const symbolInput = document.getElementById("symbol")

const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const truncateString = (str, num) => {
    if (str.length > num) {
        let substr = str.substring(0, num);
        return substr
    } else {
        return str
    }
}

const generatePassword = (password = "") => {
    if (upperInput.checked) {
        password += getRandomData(upperCase)
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerCase)
    }
    if (numberInput.checked) {
        password += getRandomData(number)
    }
    if (symbolInput.checked) {
        password += getRandomData(symbol)
    }

    if (password.length < totalchar.value) {
        return generatePassword(password)
    }
    passBox.innerText = truncateString(password, totalchar.value)
}

generatePassword()

document.getElementById("btn").addEventListener("click", () => {
    generatePassword()
})

