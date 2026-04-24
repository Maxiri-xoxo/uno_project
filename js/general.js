let error_1 = document.getElementById("1_error").innerHTML;
error_1 = "";
let error_2 = document.getElementById("2_error").innerHTML;
error_2 = "";
let error_3 = document.getElementById("3_error").innerHTML;
error_3 = "";
let error_4 = document.getElementById("4_error").innerHTML;
error_4 = "";
let error_5 = document.getElementById("5_error").innerHTML;
error_5 = "";

function green(x) {
    document.getElementById(x).style.color = "green";
}

function red(x) {
    document.getElementById(x).style.color = "red";
}

function question_1a() {
    let input_1 = document.getElementById("input_1").value;
    input_1 = input_1.toLowerCase();
    if (input_1 == "love") {
        green("error_1");
        document.getElementById("error_1").innerHTML = "Correct <br> Sorry you don't get a gift for this question, hehe :).";
    }
    else {
        red("error_1");
        document.getElementById("error_1").innerHTML = "Incorrect, try again Mamaa.";
    }
}

function question_2a() {
    let input_2 = document.getElementById("input_2").value;
    input_2 = input_2.toLowerCase();
    if (input_2 == "m") {
        green("error_2");
        document.getElementById("error_2").innerHTML = "Correct <br> Check in the black bag ontop your table for the first gift.";
    }
    else {
        red("error_2");
        document.getElementById("error_2").innerHTML = "Incorrect, try again smallie.";
    }
    
}

function question_3a() {
    let input_3 = document.getElementById("input_3").value;
    input_3 = input_3.toLowerCase();
    if (input_3 == "cupid") {
        green("error_3");
        document.getElementById("error_3").innerHTML = "Correct <br> You don't get a gift with this question unfortunately.";
    }
    else {
        red("error_3");
        document.getElementById("error_3").innerHTML = "Incorrect, try again pookie.";
    }
    
}

function question_1() {
    let input_1 = document.getElementById("1_input").value;
    input_1 = input_1.toLowerCase();
    if (input_1 == "white") {
        green("1_error")
        document.getElementById("1_error").innerHTML = "Correct! <br> You have unlocked your next present. <br> Check inside the white bucket with a blue lid in the kitchen, there, you shall find your gift.";
    }

    else {
        red("1_error");
        document.getElementById("1_error").innerHTML = "Incorrect, try again lovely."
    }
}

function question_2() {
    let input_2 = (document.getElementById("2_input").value);
    input_2 = input_2.toLowerCase();
    if (input_2 == "power rangers" || input_2 == "laughing") {
        green("2_error");
        document.getElementById("2_error").innerHTML = "Correct! <br> No gift this time unfortunately.";
    }

    else {
        red("2_error");
        document.getElementById("2_error").innerHTML = "Incorrect, try again big head."
    }
}

function question_3() {
    let input_3 = (document.getElementById("3_input").value);
    input_3 = input_3.toLowerCase();
    if (input_3 == "walking behind people" || input_3 == "tissue facing the wrong way" || input_3 == "tissue paper facing the wrong way" || input_3 == "toilet roll facing th3e wrong way") {
        green("3_error")
        document.getElementById("3_error").innerHTML = "Correct! <br> You have unlocked your next present. <br> Check ontop your wardrope, behind the green towel, there, you shall find your next gift.";
    }

    else {
        red("3_error");
        document.getElementById("3_error").innerHTML = "Incorrect, try again my love."
    }
}

function question_4() {
    let input_4 = (document.getElementById("4_input").value);
    input_4 = input_4.toLowerCase();
    if (input_4 == "dont stress myself" || input_4 == "dont stress yourself" || input_4 == "don't stress myself" || input_4 == "don't stress yourself") {
        green("4_error")
        document.getElementById("4_error").innerHTML = "Correct <br>But no gifts this time love, sorry ;).";
    }

    else {
        red("4_error")
        document.getElementById("4_error").innerHTML = "Incorrect, try again baby."
    }
}

function question_5() {
    let input_5 = (document.getElementById("5_input").value);
    if (input_5) {
        green("5_error");
        document.getElementById("5_error").innerHTML = "Correct! <br> There's actually no right answer to this, all of our memories are a favourite. <br> For that, you win 2 gifts!!! <br> Check the bags at the top of the small cupboard in your mum's room for the rest of your gifts.";
    }

    else {
        red("5_error");
        document.getElementById("5_error").innerHTML = "You have to enter something.";
    }
}