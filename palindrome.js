function stringPalindrome() {

    var x = document.forms["stringPal"]["text"].value;
    var y = x.split("").reverse().join("");

    if (x == y) {
        alert(x + " is a valid palindrome")
    }
    else {
        alert(x + " is not a valid palindrome")
    }

}

function numPalindrome() {

    var num = document.forms["numPal"]["number"].value;
    var original = num.toString();
    var reverse = original.split("").reverse().join("");

    if (original == reverse) {
        alert(original + " is a palindrome")
    }
    else {
        alert(original + " is not a palindrome")
    }


}