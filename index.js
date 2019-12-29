var randomArr = randomDigit();

document.getElementById("check_it").addEventListener("click", function() {
    getNumber();
});

document.getElementById("input").addEventListener("keyup", function(event) {
    if (event.which === 13) {
        getNumber();
    }
});
//To add results to the list
function list(val, res) {
    var li = document.createElement("li");
    var node = document.createTextNode(val + " = " + res);
    li.appendChild(node);
    var ol = document.getElementById("result");
    ol.appendChild(li);
}

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
    var value = document.getElementById("input").value;
    //var value = prompt("Please enter a number");
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
    } else {
        compare(randomArr, formArr(value), value);
    }
    document.getElementById("input").value = '';
    document.getElementById("input").focus();
}
//To compare the input of users and random number. Besides get the input value for adding to list.  
function compare(arr1, arr2, value) {
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
        document.getElementById("par").innerHTML = 0;
        list(value, ("-" + 0));
    } else if (num1 == 0 && num2 != 0) {
        document.getElementById("par").innerHTML = "-" + num2;
        list(value, ("-" + num2));
    } else if (num1 != 0 && num1 != 4 && num2 == 0) {
        document.getElementById("par").innerHTML = "+" + num1;
        list(value, ("+" + num1));
    } else if (num1 != 0 && num2 != 0) {
        document.getElementById("par").innerHTML = "+" + num1 + ", " + "-" + num2;
        list(value, ("+" + num1 + ", " + "-" + num2));
    } else if (num1 == 4) {
        //To define next game
        alert("CONGRATULATIONS! YOU WIN");
        var next_game = confirm("Do you want to play again?");
        if (next_game == true) {
            location.reload();
        } else {
            alert("Thanks for game!");
            location.reload();
        }
    }
}