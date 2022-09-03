var hashGame = document.getElementById('hash-game');
var positionGame = Array.from(hashGame.children);
var player = 1;
var play = 0;

positionGame = positionGame.map(element => {
    element.addEventListener('click',mark)
});


function mark(){
    if (this.innerHTML !== ""){
        alert("Espaço já ocupado!");
        return;
    }
    if (player === 1){
        this.innerHTML += 'X';
        player = 2;
        play++;
    } else {
        this.innerHTML += 'O';
        player = 1;
        play++;
    }
    if (play > 4)
        checkTheHashGame();
}

function checkTheHashGame(){
    squares = Array.from(hashGame.children);
    squares = squares.map(square => {
        return [square.id, square.innerHTML];
    });
    for (i = 0; i < 9; i++){
        
        if (squares[i][1] === "") 
            continue;
        
        if (i == 0 || i == 3 || i == 6)
            if (squares[i][1] === squares[i + 1][1] && squares[i][1] === squares[i + 2][1] ){
                alert(squares[i][1] + " Ganhou!");
                clearHashGame();
                return;
            }
        if (i == 0 || i == 1 || i == 2)
            if (squares[i][1] === squares[i + 3][1] && squares[i][1] === squares[i + 6][1] ){
                alert(squares[i][1] + " Ganhou!");
                clearHashGame();
                return;
            }
        if (i == 0)
            if (squares[i][1] === squares[i + 4][1] && squares[i][1] === squares[i + 8][1] ){
                alert(squares[i][1] + " Ganhou!");
                clearHashGame();
                return;
            }
        if (i == 2)
            if (squares[i][1] === squares[i + 2][1] && squares[i][1] === squares[i + 4][1] ){
                alert(squares[i][1] + " Ganhou!");
                clearHashGame();
                return;
            }
    }
    if (play === 9){
        alert("Deu velha!")
        clearHashGame();
    }
}


function clearHashGame(){
    var hashGame = document.getElementById('hash-game');

    var squares = Array.from(hashGame.children);

    for (i = 0; i < 9; i++){
        squares[i].innerHTML = "";
    }
    play = 0;
    player = 1;
}