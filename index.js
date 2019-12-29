var randomArr = randomDigit();
//To get random number
function randomDigit() {
    while (true) {
        var number = Math.floor((Math.random() * 10000) + 1000);
        let thousands = Math.floor(number / 1000);
        let hundreds = Math.floor((number / 100) % 10);
        let tens = Math.floor((number / 10) % 10);
        let units = Math.floor(number % 10);
        if (number > 9999 || number < 999) {
            continue;
        } else if (thousands == hundreds || thousands == tens || thousands == units || hundreds == tens || hundreds == units || tens == units) {
            continue;
        } else
            return formArr(number);
    }
}

//Turn the number to Array
function formArr(number) {
    let thousands = Math.floor(number / 1000);
    let hundreds = Math.floor((number / 100) % 10);
    let tens = Math.floor((number / 10) % 10);
    let units = Math.floor(number % 10);
    let arr = [];
    arr[0] = thousands;
    arr[1] = hundreds;
    arr[2] = tens;
    arr[3] = units;
    return arr;
}

//To get number from users
function getNumber() {
    var value = prompt("Please enter a number");
    let thousands = Math.floor(value / 1000);
    let hundreds = Math.floor((value / 100) % 10);
    let tens = Math.floor((value / 10) % 10);
    let units = Math.floor(value % 10);
    if (!Number.isInteger(Number(value))) {
        alert("The number must be natural number")
    } else if (value > 9999 || value < 999) {
        alert("The number must be between 1000 and 9999")
    } else if (thousands == hundreds || thousands == tens || thousands == units || hundreds == tens || hundreds == units || tens == units) {
        alert("All the digits must be different");
    } else
        compare(randomArr, formArr(value));
}
//To compare the input of users and random number
function compare(arr1, arr2) {
    var num1 = 0;
    var num2 = 0;

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                if (i == j) {
                    num1++;
                } else
                    num2++;
            }
        }
    }
    if (num1 == 0 && num2 == 0) {
        document.getElementById("demo").innerHTML = 0;
    } else if (num1 == 0 && num2 != 0) {
        document.getElementById("demo").innerHTML = "-" + num2;
    } else if (num1 != 0 && num1 != 4 && num2 == 0) {
        document.getElementById("demo").innerHTML = "+" + num1;
    } else if (num1 != 0 && num2 != 0) {
        document.getElementById("demo").innerHTML = "+" + num1 + ", " + "-" + num2;
    } else if (num1 == 4) {
        document.getElementById("demo").innerHTML = "CONGRATULATIONS!<br>YOU WIN";
    }
}