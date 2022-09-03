player = 1;
play = 0;

function mark(id) {
    var square = document.getElementById(id);

    if (square.innerHTML === "") {
        if (player === 1) {
            square.innerHTML += 'X';
            player = 2;
            play++;
        } else {
            square.innerHTML += 'O';
            player = 1;
            play++;
        }
    } else {
        alert('Clique em um espaço vazio!');
        return;
    }

    if (play >= 5)
        checkTheHashGame();
}


function checkTheHashGame() {
    var hashGame = document.getElementById('hash-game');

    var positionGame = Array.from(hashGame.children);

    positionGame = positionGame.map(element => {
        return [element.id, element.innerHTML];
    });

    // console.log(positionGame);
    for (i = 0; i < 9; i++){
        
        if (positionGame[i][1] === "") 
            continue;
        
        if (i == 0 || i == 3 || i == 6)
            if (positionGame[i][1] === positionGame[i + 1][1] && positionGame[i][1] === positionGame[i + 2][1] ){
                alert(positionGame[i][1] + " Ganhou!");
                clearHashGame();
                return
            }
        if (i == 0 || i == 1 || i == 2)
            if (positionGame[i][1] === positionGame[i + 3][1] && positionGame[i][1] === positionGame[i + 6][1] ){
                alert(positionGame[i][1] + " Ganhou!");
                clearHashGame();
                return
            }
        if (i == 0)
            if (positionGame[i][1] === positionGame[i + 4][1] && positionGame[i][1] === positionGame[i + 8][1] ){
                alert(positionGame[i][1] + " Ganhou!");
                clearHashGame();
                return
            }
        if (i == 2)
            if (positionGame[i][1] === positionGame[i + 2][1] && positionGame[i][1] === positionGame[i + 4][1] ){
                alert(positionGame[i][1] + " Ganhou!");
                clearHashGame();
                return
            }
    }
    if (play === 9){
        alert("Deu velha!")
        clearHashGame();
    }
}

function clearHashGame(){
    var hashGame = document.getElementById('hash-game');

    var positionGame = Array.from(hashGame.children);

    for (i = 0; i < 9; i++){
        positionGame[i].innerHTML = "";
    }
    play = 0
    player = 1
}