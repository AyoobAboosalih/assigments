function Palindrome() {

    var text = document.getElementById("T").value;
    var num = Number(document.getElementById("N").value);
    if (text) {
        var textReverse = text.split("").reverse().join("");
        if (text == textReverse) {
            alert("The string " + text + " is a valid palindrome")
        }
        else {
            alert("The string " + text + " is not a valid palindrome")
        }

    } else {
        num = num.toString();
        var numReverse = num.split("").reverse().join("");
        if (num == numReverse) {
            alert("The number " + num + " is a valid palindrome")
        }
        else {
            alert("The number " + num + " is not a valid palindrome")
        }
    }



}


// // var x = document.forms["stringPal"]["text"].value;
// var y = x.split("").reverse().join("");

// if (x == y) {
//     alert(x + " is a valid palindrome")
// }
// else {
//     alert(x + " is not a valid palindrome")
// }

// }

// function numPalindrome() {

//     var num = document.forms["numPal"]["number"].value;
//     var original = num.toString();
//     var reverse = original.split("").reverse().join("");

//     if (original == reverse) {
//         alert(original + " is a palindrome")
//     }
//     else {
//         alert(original + " is not a palindrome")
//     }


// }




// function Palindrome() { 
//     var rem, temp, final = 0; 
//     var number = Number(document.getElementById("N").value); 
//     temp = number; 
//     while (number > 0) { 
//         rem = number % 10;
//          number = parseInt(number / 10); 
//          final = final * 10 + rem;
//          } 
//          if (final == temp) { 
//              window.alert("The inputed number is Palindrome");
//              } else { window.alert("The inputted number is not palindrome"); } }