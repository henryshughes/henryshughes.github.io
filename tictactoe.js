/* Game 2 */

// Track whose turn it is
const turn = "Computer";

// Track the player's turns
turn_list = [];

// Track the whole board, what squares are occupied by who
var board = {
    block1: "",
    block2: "",
    block3: "",
    block4: "",
    block5: "",
    block6: "",
    block7: "",
    block8: "",
    block9: ""
};

// Variable to track if the game has been started and ended
var activated = false;
var over = false;
var optimal = false;
var chosen = '';

// Different combinations to win the game
combinations = [['block1', 'block2', 'block3'], ['block4', 
                'block5', 'block6'], ['block7', 
                'block8', 'block9'], ['block1', 'block4', 
                'block7'],   ['block2', 'block5', 'block8'],
                 ['block3', 'block6', 'block9'], ['block1', 
                 'block5', 'block9'], ['block3', 'block5', 
                 'block7']];


// Onclick functions, which trigger computer's turn as well
function block1(){
    if (activated == true && over == false) {
        if ((document.getElementById("block-1").innerHTML).length == 0) {
            document.getElementById("block-1").innerHTML = "O";
            document.getElementById("turn").innerHTML = "It is the computer's turn";
            board.block1 = "O";
            turn_list[(turn_list.length)] = "block1";
            document.getElementById("turn").innerHTML = "It is your turn";
            check();
            computer_turn();
            const turn = "Computer";
        }
        else {
            alert('Invalid move, please try again');
        }
    }
    else if (activated == true && over == true) {
        alert('This game is over. Please click the "Reset" button to begin a new game');
    }
    else {
        alert('Please click the "Play!" button to begin the game');
    }

}

function block2(){
    if (activated == true && over == false) {
        if ((document.getElementById("block-2").innerHTML).length == 0) {
            document.getElementById("block-2").innerHTML = "O";
            document.getElementById("turn").innerHTML = "It is the computer's turn";
            board.block2 = "O";
            turn_list[(turn_list.length)] = "block2";
            document.getElementById("turn").innerHTML = "It is your turn";
            check();
            computer_turn();
            const turn = "Computer";
        }
        else {
            alert('Invalid move, please try again');
        }
    }
    else if (activated == true && over == true) {
        alert('This game is over. Please click the "Reset" button to begin a new game');
    }
    else {
        alert('Please click the "Play!" button to begin the game');
    }
}

function block3(){
    if (activated == true && over == false) {
        if ((document.getElementById("block-3").innerHTML).length == 0) {
            document.getElementById("block-3").innerHTML = "O";
            document.getElementById("turn").innerHTML = "It is the computer's turn";
            board.block3 = "O";
            turn_list[(turn_list.length)] = "block3";
            document.getElementById("turn").innerHTML = "It is your turn";
            check();
            computer_turn();
            const turn = "Computer";
        }
        else {
            alert('Invalid move, please try again');
        }
    }
    else if (activated == true && over == true) {
        alert('This game is over. Please click the "Reset" button to begin a new game');
    }
    else {
        alert('Please click the "Play!" button to begin the game');
    }

    
}

function block4(){
    if (activated == true && over == false) {
        if ((document.getElementById("block-4").innerHTML).length == 0) {
            document.getElementById("block-4").innerHTML = "O";
            document.getElementById("turn").innerHTML = "It is the computer's turn";
            board.block4 = "O";
            turn_list[(turn_list.length)] = "block4";
            document.getElementById("turn").innerHTML = "It is your turn";
            check();
            computer_turn();
            const turn = "Computer";
        }
        else {
            alert('Invalid move, please try again');
        }
    }
    else if (activated == true && over == true) {
        alert('This game is over. Please click the "Reset" button to begin a new game');
    }
    else {
        alert('Please click the "Play!" button to begin the game');
    }

    
}

function block5(){
    if (activated == true && over == false) {
        if ((document.getElementById("block-5").innerHTML).length == 0) {
            document.getElementById("block-5").innerHTML = "O";
            document.getElementById("turn").innerHTML = "It is the computer's turn";
            board.block5 = "O";
            turn_list[(turn_list.length)] = "block5";
            document.getElementById("turn").innerHTML = "It is your turn";
            check();
            computer_turn();
            const turn = "Computer";
        }
        else {
            alert('Invalid move, please try again');
        }
    }
    else if (activated == true && over == true) {
        alert('This game is over. Please click the "Reset" button to begin a new game');
    }
    else {
        alert('Please click the "Play!" button to begin the game');
    }

}

function block6(){
    if (activated == true && over == false) {
        if ((document.getElementById("block-6").innerHTML).length == 0) {
            document.getElementById("block-6").innerHTML = "O";
            document.getElementById("turn").innerHTML = "It is the computer's turn";
            board.block6 = "O";
            turn_list[(turn_list.length)] = "block6";
            document.getElementById("turn").innerHTML = "It is your turn";
            check();
            computer_turn();
            const turn = "Computer";
        }
        else {
            alert('Invalid move, please try again');
        }
    }
    else if (activated == true && over == true) {
        alert('This game is over. Please click the "Reset" button to begin a new game');
    }
    else {
        alert('Please click the "Play!" button to begin the game');
    }

}

function block7(){
    if (activated == true && over == false) {
        if ((document.getElementById("block-7").innerHTML).length == 0) {
            document.getElementById("block-7").innerHTML = "O";
            document.getElementById("turn").innerHTML = "It is the computer's turn";
            board.block7 = "O";
            turn_list[(turn_list.length)] = "block7";
            document.getElementById("turn").innerHTML = "It is your turn";
            check();
            computer_turn();
            const turn = "Computer";
        }
        else {
            alert('Invalid move, please try again');
        }
    }
    else if (activated == true && over == true) {
        alert('This game is over. Please click the "Reset" button to begin a new game');
    }
    else {
        alert('Please click the "Play!" button to begin the game');
    }
}

function block8(){
    if (activated == true && over == false) {
        if ((document.getElementById("block-8").innerHTML).length == 0) {
            document.getElementById("block-8").innerHTML = "O";
            document.getElementById("turn").innerHTML = "It is the computer's turn";
            board.block8 = "O";
            turn_list[(turn_list.length)] = "block8";
            document.getElementById("turn").innerHTML = "It is your turn";
            check();
            computer_turn();
            const turn = "Computer";
        }
        else {
            alert('Invalid move, please try again');
        }
    }

    else if (activated == true && over == true) {
        alert('This game is over. Please click the "Reset" button to begin a new game');
    }

    else {
        alert('Please click the "Play!" button to begin the game');
    }

}

function block9(){

    if(activated == true && over == false) {
        if ((document.getElementById("block-9").innerHTML).length == 0) {
            document.getElementById("block-9").innerHTML = "O";
            document.getElementById("turn").innerHTML = "It is the computer's turn";
            board.block9 = "O";
            turn_list[(turn_list.length)] = "block9";
            document.getElementById("turn").innerHTML = "It is your turn";
            check();
            computer_turn();
            const turn = "Computer";
        }
        else {
            alert('Invalid move, please try again');
        }
    }

    else if (activated == true && over == true) {
        alert('This game is over. Please click the "Reset" button to begin a new game');
    }

    else {
        alert('Please click the "Play!" button to begin the game');
    }
    
}

// Computer AI to generate a computer's move

function win(board, combinations) {
    var move = false;
    for(k = 0; k < combinations.length; k++) {
        var count = 0;
        var x = false;
        for(j = 0; j < combinations[k].length; j++) {
            
            if (board[combinations[k][j]] == 'O') {
                count -= 1;
            }
            if (board[combinations[k][j]] == 'X') {
                count += 1;
            }
            if (count == 2) { 
                if (board[combinations[k][j+1]] == 'O'){
                    continue;
                }    
                else {
                    x = true;
                    move = true;
                    break;
                }
            }
        }
        if (x != true) {
            continue;
        }
        else {
            break;
        }
    }
    return [k, j, move];
}

function stop(board, combinations) {
    var move = false;

    for(k = 0; k < combinations.length; k++) {
        var count = 0;
        var x = false;
 
        for(j = 0; j < combinations[k].length; j++) {
            if (board[combinations[k][j]] == 'O') {
                count += 1;
            }
            if (board[combinations[k][j]] == 'X') {
                count -= 1;
            }
            if (count == 2) { 
                if (count == 2) { 
                    if (board[combinations[k][j+1]] == 'X'){
                        continue;
                    }    
                    else {
                        x = true;
                        move = true;
                        break;
                    }
                }
            }
        }
        if (x != true) {
            continue;
        }
        else {
            break;
        }
    }
    return [k, j, move];
}

function computer_turn() {
    activated = true;
    document.getElementById("turn").innerHTML = "It is your turn";
    if (turn_list.length == 0) {
        document.getElementById("block-7").innerHTML = "X";
        board.block7 = "X";
    }

    else if (((turn_list.length) == 1) && (((document.getElementById("block-2").innerHTML) == "O")
    || ((document.getElementById("block-4").innerHTML) == "O") || ((document.getElementById("block-6").innerHTML) == "O")
    || ((document.getElementById("block-8").innerHTML) == "O"))) {
        chosen = turn_list[0];
        optimal = true;
        document.getElementById("block-5").innerHTML = "X";
        board.block5 = "X";
    }

    else if (((document.getElementById("block-3").innerHTML).length == 0) && (turn_list.length <= 1)) {
        document.getElementById("block-3").innerHTML = "X";
        board.block3 = "X";
    }

    else if (((document.getElementById("block-3").innerHTML).length == 1) && (turn_list.length == 2) && ((document.getElementById("block-8").innerHTML).length == 1)) {
        document.getElementById("block-1").innerHTML = "X";
        board.block1 = "X";
    }

    else if (((document.getElementById("block-9").innerHTML).length == 0) && (turn_list.length <= 1)) {
        document.getElementById("block-9").innerHTML = "X";
        board.block9 = "X";
    }
    else if (turn_list.length >= 2) {
        var values = stop(board, combinations);
        var k = values[0];
        var j = values[1];
        var x = values[2];

        var values_2 = win(board, combinations);
        var a = values_2[0];
        var z = values_2[1];
        var x_2 = values_2[2];

        if (x_2 == true) {
            for (r = 0; r < combinations[a].length; r++) {
                if (board[combinations[a][r]].length == 0) {
                    board[combinations[a][r]] = "X";
                    var temp = (combinations[a][r]);            
                    temp = temp.replace("block", "block-");
                    document.getElementById(temp).innerHTML = "X";

                }
            }
        }
        else if (x == true) {
            for (w = 0; w < combinations[k].length; w++) {
                if (board[combinations[k][w]].length == 0) {
                    if (board[combinations[k][w]] == "X") {
                    }
                    board[combinations[k][w]] = "X";
                    var temp = (combinations[k][w]);
                    temp = temp.replace("block", "block-");
                    document.getElementById(temp).innerHTML = "X";
                }
            }
        }

        else if (optimal == true) {
            if (chosen == "block8") {
                board.block1 = "X";
                document.getElementById("block-1").innerHTML = "X";
            }

            else if (chosen == "block4"){
                board.block9 = "X";
                document.getElementById("block-9").innerHTML = "X";
            }
        }

        else {
            if (board.block1 == "") {
                board.block1 = "X";
                document.getElementById("block-1").innerHTML = "X";
            }

            else if (board.block3 == "") {
                board.block3 = "X";
                document.getElementById("block-3").innerHTML = "X";
            }
            if (board.block7 == "") {
                board.block7 = "X";
                document.getElementById("block-7").innerHTML = "X";
            }

            else if (board.block9 == "") {
                board.block9 = "X";
                document.getElementById("block-9").innerHTML = "X";
            }
        }
    }
    check();

}

// Function that checks if someone has won the game
function check() {
    if ((document.getElementById("block-1").innerHTML == document.getElementById("block-2").innerHTML) &&
        (document.getElementById("block-1").innerHTML == document.getElementById("block-3").innerHTML) &&
        (document.getElementById("block-2").innerHTML == document.getElementById("block-3").innerHTML) &&
        (((document.getElementById("block-1").innerHTML).length) != 0)){
        document.getElementById("display-result").innerHTML = ("The computer has won the game");
        document.getElementById("turn").innerHTML = "";
        over = true;
    }

    else if ((document.getElementById("block-4").innerHTML == document.getElementById("block-5").innerHTML) &&
        (document.getElementById("block-4").innerHTML == document.getElementById("block-6").innerHTML) &&
        (document.getElementById("block-5").innerHTML == document.getElementById("block-6").innerHTML) &&
        (((document.getElementById("block-4").innerHTML).length) != 0)){
        document.getElementById("display-result").innerHTML = ("The computer has won the game");
        document.getElementById("turn").innerHTML = "";
        over = true;
    }

    else if ((document.getElementById("block-7").innerHTML == document.getElementById("block-8").innerHTML) &&
        (document.getElementById("block-7").innerHTML == document.getElementById("block-9").innerHTML) &&
        (document.getElementById("block-8").innerHTML == document.getElementById("block-9").innerHTML) &&
        (((document.getElementById("block-7").innerHTML).length) != 0)){
        document.getElementById("display-result").innerHTML = ("The computer has won the game");
        document.getElementById("turn").innerHTML = "";
        over = true;
    }

    else if ((document.getElementById("block-1").innerHTML == document.getElementById("block-4").innerHTML) &&
        (document.getElementById("block-1").innerHTML == document.getElementById("block-7").innerHTML) &&
        (document.getElementById("block-4").innerHTML == document.getElementById("block-7").innerHTML) &&
        (((document.getElementById("block-1").innerHTML).length) != 0)){
        document.getElementById("display-result").innerHTML = ("The computer has won the game");
        document.getElementById("turn").innerHTML = "";
        over = true;
    }

    else if ((document.getElementById("block-2").innerHTML == document.getElementById("block-5").innerHTML) &&
        (document.getElementById("block-2").innerHTML == document.getElementById("block-8").innerHTML) &&
        (document.getElementById("block-5").innerHTML == document.getElementById("block-8").innerHTML) &&
        (((document.getElementById("block-2").innerHTML).length) != 0)){
        document.getElementById("display-result").innerHTML = ("The computer has won the game");
        document.getElementById("turn").innerHTML = "";
        over = true;
    }

    else if ((document.getElementById("block-3").innerHTML == document.getElementById("block-6").innerHTML) &&
        (document.getElementById("block-3").innerHTML == document.getElementById("block-9").innerHTML) &&
        (document.getElementById("block-6").innerHTML == document.getElementById("block-9").innerHTML) &&
        (((document.getElementById("block-3").innerHTML).length) != 0)){
        document.getElementById("display-result").innerHTML = ("The computer has won the game");
        document.getElementById("turn").innerHTML = "";
        over = true;
    }

    else if ((document.getElementById("block-1").innerHTML == document.getElementById("block-4").innerHTML) &&
        (document.getElementById("block-1").innerHTML == document.getElementById("block-7").innerHTML) &&
        (document.getElementById("block-4").innerHTML == document.getElementById("block-7").innerHTML) &&
        (((document.getElementById("block-1").innerHTML).length) != 0)){
        document.getElementById("display-result").innerHTML = ("The computer has won the game");
        document.getElementById("turn").innerHTML = "";
        over = true;
    }

    else if ((document.getElementById("block-1").innerHTML == document.getElementById("block-5").innerHTML) &&
        (document.getElementById("block-1").innerHTML == document.getElementById("block-9").innerHTML) &&
        (document.getElementById("block-5").innerHTML == document.getElementById("block-9").innerHTML) &&
        (((document.getElementById("block-1").innerHTML).length) != 0)){
        document.getElementById("display-result").innerHTML = ("The computer has won the game");
        document.getElementById("turn").innerHTML = "";
        over = true;
    }

    else if ((document.getElementById("block-3").innerHTML == document.getElementById("block-5").innerHTML) &&
        (document.getElementById("block-3").innerHTML == document.getElementById("block-7").innerHTML) &&
        (document.getElementById("block-5").innerHTML == document.getElementById("block-7").innerHTML) &&
        (((document.getElementById("block-3").innerHTML).length) != 0)){
        document.getElementById("display-result").innerHTML = ("The computer has won the game");
        document.getElementById("turn").innerHTML = "";
        over = true;
    }

    else if (((document.getElementById("block-1").innerHTML).length != 0) &&
       ((document.getElementById("block-2").innerHTML).length != 0) &&
       ((document.getElementById("block-3").innerHTML).length != 0) &&
       ((document.getElementById("block-4").innerHTML).length != 0) &&
       ((document.getElementById("block-5").innerHTML).length != 0) &&
       ((document.getElementById("block-6").innerHTML).length != 0) &&
       ((document.getElementById("block-7").innerHTML).length != 0) &&
       ((document.getElementById("block-8").innerHTML).length != 0) &&
       ((document.getElementById("block-9").innerHTML).length != 0)) {
        document.getElementById("display-result").innerHTML = ("It was a tie");
        document.getElementById("turn").innerHTML = "";
        over = true;
    }
}    


// Function that resets the game board

function reset() {
    document.getElementById("block-1").innerHTML = "";
    document.getElementById("block-2").innerHTML = "";
    document.getElementById("block-3").innerHTML = "";
    document.getElementById("block-4").innerHTML = "";
    document.getElementById("block-5").innerHTML = "";
    document.getElementById("block-6").innerHTML = "";
    document.getElementById("block-7").innerHTML = "";
    document.getElementById("block-8").innerHTML = "";
    document.getElementById("block-9").innerHTML = "";

    turn_list = [];

    board = {
        block1: "",
        block2: "",
        block3: "",
        block4: "",
        block5: "",
        block6: "",
        block7: "",
        block8: "",
        block9: ""
    };

    document.getElementById("display-result").innerHTML = "";
    document.getElementById("turn").innerHTML = "";
    over = false;
    activated = false;
    edge = false;

    computer_turn();
}