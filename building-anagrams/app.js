const $form = document.querySelector('#anagram-form');
const $input = document.querySelector('#word');

$form.addEventListener('submit', (e) => {
    e.preventDefault();

    let word = $input.value;
    word = word.normalize('NFD').replace(/[\u0300-\u036f]|[0-9]|[^a-zA-Z]/g, '').trim();
    let letters = word.split('');
    
    const combinations = getPossibleCombination(letters);
    let anagramArray = [];
    for(rounds = 0 ; rounds < combinations; rounds++){
        let anagram = [];
        let lettersAux = letters.map(letter => letter);
       
        for(index = 0; index < letters.length; index++ ){
            let randomIndex = lettersAux.length > 1 ? Math.ceil(Math.random() * lettersAux.length) - 1 : 0;
            let letter = lettersAux[randomIndex];
            console.log(letter);
            anagram.push(letter);
            lettersAux.splice(lettersAux.indexOf(letter), 1);
        }  
        
        if(anagramArray.indexOf(anagram.join('')) !== -1) {
            rounds === 0 ? 0 : rounds--;
        } else {
            anagramArray.push(anagram.join(''));    
        }       
    }

    const $modalResultRow = document.querySelector('#modal-anagrams-results .modal-body .row');
    $modalResultRow.innerHTML = '';

    for (let index in anagramArray){       
        let col = document.createElement('div');
        col.classList.add('col-3');
        col.classList.add('text-center');
        let span = document.createElement('span');
        let anagram = document.createTextNode(anagramArray[index]);

        span.append(anagram);
        col.append(span);
        $modalResultRow.appendChild(col);
    }
    document.querySelector('#anagram-count').innerHTML = anagramArray.length;
    const $modal =  new bootstrap.Modal(document.querySelector('#modal-anagrams-results'));
    $modal.show();

});


function getPossibleCombination(arrayLetters){
    let maxOcorrences = 1;
    let repeated = {};
    arrayLetters.map((item)=>{
        if (item !== "") {
            let ocorrence = arrayLetters.filter((letter)=>letter === item).length;
            repeated[item] = ocorrence;
        }
    });

    if (Object.keys(repeated).length > 1) {
        let values = Object.values(repeated);
        let totalRepeated = 1;
        values.map((item,index)=>{
            totalRepeated *= fatorial(item);
        });

        maxOcorrences = fatorial(arrayLetters.length) / totalRepeated;
    }

    return maxOcorrences;

}

function fatorial(number){
    return number === 1 ? 1 : (number * fatorial(number - 1));
}