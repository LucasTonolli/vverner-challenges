const alphaPontuation = [
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
  ];

window.addEventListener('load', () =>{
    const infoTableBody = document.querySelector('#info-table tbody');

    alphaPontuation.forEach((letter, index) => {
        let row = document.createElement('tr');
        let colLetter = document.createElement('td');
        let colPontuation = document.createElement('td');
        let colLetterUppercase = document.createElement('td');  
        let colPontuationUppercase = document.createElement('td');

        let letterText = document.createTextNode(letter);
        let pontuationText = document.createTextNode(++index);
        let letterUppercaseText = document.createTextNode(letter.toUpperCase());
        let pontuationUppercaseText = document.createTextNode((index) * 2);

        colLetter.append(letterText);
        colPontuation.append(pontuationText);
        colLetterUppercase.append(letterUppercaseText);
        colPontuationUppercase.append(pontuationUppercaseText);

        row.appendChild(colLetter);
        row.appendChild(colPontuation);
        row.appendChild(colLetterUppercase);
        row.appendChild(colPontuationUppercase);

        infoTableBody.appendChild(row);
    });

})


const $form = document.querySelector('#check-words-pontuation');

$form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearResultTableBody();
    
    
    let pontuations = {};


    let words = document.querySelector('#words').value.split(',');

    console.log(words);

    words = words.map(word => {
        return word.normalize('NFD').replace(/[\u0300-\u036f]|[0-9]|[^a-zA-Z]/g, '').trim();
    });

    console.log(words);


    words.forEach(word => {
        let pontuation = 0;

        for (const letter of word) {
            pontuation += letter.toUpperCase() === letter ? (alphaPontuation.indexOf(letter.toLowerCase()) + 1) * 2 : alphaPontuation.indexOf(letter) + 1;
        }
        pontuations[word] = pontuation;
    });

    let orderedPontuation = [];

    for (let pontuation in pontuations) {
        orderedPontuation.push([pontuation, pontuations[pontuation]]);
    }
    
    orderedPontuation.sort(function(a, b) {
        if(a[1] === b[1]){
            let order;
            let lettersA = a[0].split('');
            let lettersB = b[0].split('');
           

            for(let i = 0; i < a[0].length; i++){
                if(lettersA[i] !== lettersB[i]){
                    if(alphaPontuation.indexOf(lettersA[i].toLowerCase()) < alphaPontuation.indexOf(lettersB[i].toLowerCase())){
                        console.log('A menor que B');
                        order = 1;
                    } else if(alphaPontuation.indexOf(lettersA[i].toLowerCase()) > alphaPontuation.indexOf(lettersB[i].toLowerCase())){
                        console.log('A maior que B');
                        order = -1;
                    } else {
                        console.log('Iguais');
                        order = 0;
                    }
                    break;
                }
            }

            return order;
        }
        return  b[1] - a[1];
    });

    const resultsTableBody = document.querySelector('#result-table tbody');
    const rowResults = document.querySelector('#result-container');
    

    orderedPontuation.forEach((element, index) => {
        let row = document.createElement('tr');
        let colPosition = document.createElement('th');
        let colWord = document.createElement('td');
        let colPontuation = document.createElement('td');
        let colComposition = document.createElement('td');

        let positionText = document.createTextNode(++index);
        let word = document.createTextNode(element[0]);
        let score = document.createTextNode(element[1]);
        let composition = getWordComposition(element[0]);
    

        colPosition.append(positionText);
        colWord.append(word);
        colPontuation.append(score);
        colComposition.innerHTML = composition ;

        colPontuation.scope = 'row';

        row.appendChild(colPosition);
        row.appendChild(colWord);
        row.appendChild(colComposition);
        row.appendChild(colPontuation);

        resultsTableBody.appendChild(row);
    });

    rowResults.classList.remove('d-none');
    console.log(orderedPontuation);

    
});

function getWordComposition(word){
    let letters = word.split('');
    let result = {};
    letters.forEach(letter => {
        if(result.hasOwnProperty(letter)){
            result[letter].repeat++;
        } else {
            result[letter] = { 
                value : letter.toUpperCase() === letter ? (alphaPontuation.indexOf(letter.toLowerCase()) + 1) * 2 : alphaPontuation.indexOf(letter.toLowerCase()) + 1,
                repeat: 1
            };
        }    
    });
    console.log(result);

    let resultText = '';
    console.log('Aqui');
    for (const letter in result){
        
        resultText += '<span class="text-primary fw-bold">' + letter + '</span> <span class="fw-bold">' + ' - ' + result[letter].value + ' x ' + result[letter].repeat+ '</span>'  +' | ';
    }
    return resultText.trim();
}

function clearResultTableBody(){
    const resultsTableBody = document.querySelector('#result-table tbody');
    resultsTableBody.innerHTML = "";
}