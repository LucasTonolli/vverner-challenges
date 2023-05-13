const ALPHABET = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

const SPECIAL = ['á','à','ã','â','é','ê','í','ó','ô','õ','ú','ç'];

class Dictionary{
    constructor(){
        ALPHABET.forEach(letter => {this.addLetter(letter)});
        SPECIAL.forEach(letter => {this.addLetter(letter)});  
    }  

    addToDictionary(word){
        if(window.localStorage.getItem(word.toLowerCase())){
            alert('Palavra já cadastrada');
            return;
        }
        word = word.charAt(0).toUpperCase() + word.slice(1);

        window.localStorage.setItem(word.toLowerCase(), word);
        TBODY.innerHTML = '';
        let words = this.getWords();
        words.sort()
        let qty = 1;
        words.forEach(function(word){
            let row = TBODY.insertRow();
            let colId = row.insertCell();
            let colWord = row.insertCell();
            colId.innerHTML = qty++;
            colWord.innerHTML = word;
        });
    }

    addLetter(letter){
        window.localStorage.setItem(letter.charCodeAt(0), letter);   
    }

    getWords(){
        let words = Object.values(window.localStorage);
        words = words.filter(word => word.length > 1);
        return words;
    }
}

const DICTIONARY = new Dictionary();

const TABLE = document.getElementById('table-words');
const TBODY = TABLE.getElementsByTagName('tbody')[0];

document.addEventListener('DOMContentLoaded', loadWords)

function loadWords(){
    let words = DICTIONARY.getWords();
    words.sort()
    let qty = 1;

    words.forEach(function(word){
        let row = TBODY.insertRow();
        let colId = row.insertCell();
        let colWord = row.insertCell();
        colId.innerHTML = qty++;
        colWord.innerHTML = word;
    });
}



const saveBtn = document.getElementById('save-btn');
const searchBtn = document.getElementById('search-btn');

saveBtn.addEventListener('click', addToDictionary);
searchBtn.addEventListener('click', search);

function addToDictionary(e){
    e.preventDefault();
    let word = document.getElementById('word');
    
    if(word.value.trim() === '' || word.value.match(/\d+/)){
        alert('É necessário informar uma palavra válida!');
        word.value = '';
        return;
    }
  
    DICTIONARY.addToDictionary(word.value);
    word.value = '';     
}

function search(e){
    e.preventDefault();
    let input = document.getElementById('search-word');

    if(input.value.trim() === '' || input.value.match(/\d+/)){
        alert('Informe uma palavra válida');
        input.value = '';
        return; 
    }
    if(input.value.indexOf(' ') !== -1){
      let letters = input.value.split(' ');
      let interval = [];
      for(i = letters[0].charCodeAt(0); i <= letters[1].charCodeAt(0); i++){
        interval.push(window.localStorage.getItem(i));
      }
      alert(interval);
    } else {
        let validateWord = input.value.toLowerCase();
        const words = DICTIONARY.getWords();
        let matches;

        matches = words.map(word => 
            matchingWord(validateWord.toLowerCase(), word.toLowerCase())        
        );

        matches = matches.filter(match => match.matchingLetter !== 0);
        matches = matches.filter(match => match.matchingLetter >= validateWord.length - 2);
        matches = matches.map(match => match.word);
        
        if (matches.length === 0){
            alert('Nenhuma palavra encontrada')
            return;
        }
        alert('Você quis dizer: ' + matches);         
    }
}

function matchingWord(searchWord, compareWord){
    
    if(searchWord === compareWord){
        return {word : compareWord, matchingLetter : searchWord.length};
    } else{
        let equal = 0;

        for(i = 0; i < searchWord.length; i++){
            if(searchWord[i] === compareWord[i]){
                equal++;
            }
        }
        
        return {word : compareWord, matchingLetter : equal};
    }
}