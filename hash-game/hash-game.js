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

    console.log(positionGame);
    // for (i = 0; i < 9; i += 3) {
    //     if (positionGame[i].innerHTML === positionGame[i + 1].innerHTML && positionGame[i + 2].innerHTML){
    //         console.log(i);
    //         console.log(positionGame[i].innerHTML +' - ' + i);
    //         console.log(positionGame[i + 1].innerHTML +' - ' + (i + 1));
    //         console.log(positionGame[i + 2].innerHTML +' - ' + (i + 2));
    //         alert(positionGame[i].innerHTML + " Ganhou 1")
    //         clearHashGame();
    //         return;
    //     }
    // }
    // for (i = 0; i < 3; i ++){
    //     if (positionGame[i].innerHTML === positionGame[i + 3].innerHTML && positionGame[i + 6].innerHTML){

    //             console.log(positionGame[i].innerHTML +' - ' + i);
    //             console.log(positionGame[i + 3].innerHTML +' - ' + (i + 3));
    //             console.log(positionGame[i + 6].innerHTML +' - ' + (i + 6));
    //             alert(positionGame[i].innerHTML + " Ganhou 2")
    //             clearHashGame();
    //             return;
    //         }
    // }
    // for (i = 0; i < 3; i +=2){
    //     if ((positionGame[i].innerHTML === positionGame[i + 4].innerHTML && positionGame[i + 8].innerHTML) || (positionGame[i].innerHTML === positionGame[i + 2].innerHTML && positionGame[i + 4].innerHTML)){
    //         // console.log(positionGame[i].innerHTML);
    //         // console.log(positionGame[i + 1].innerHTML);
    //         // console.log(positionGame[i + 2].innerHTML);
    //         console.log(i);
    //         alert(positionGame[i].innerHTML + " Ganhou 3")
    //         clearHashGame();
    //         return;
    //     }
    // }
    
        
    
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