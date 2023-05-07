
class Word{
    constructor(word, meaning){
        this.write = word;
        this.meaning = meaning;
    }   
}

class Dictionary{
    constructor(){
        let id = window.localStorage.getItem('word');

        if(!id){
            window.localStorage.setItem('word', '');
        }
    }

    addToDictionary(word){
        let meaning = window.localStorage.getItem(word.write.toUpperCase());
        if(meaning){
            let update = confirm('Palavra ' + word.write + ' já está cadastrada \n' + 'Atualizar?');
            if(update){
                window.localStorage.setItem(word.write.toUpperCase(),word.meaning);
            } else{
                return;
            }
        }
        window.localStorage.setItem(word.write.toUpperCase(),word.meaning);
    }

    search(word){
        console.log(word);
        let meaning = window.localStorage.getItem(word.toUpperCase());
        if(meaning){
            alert('Palavra ' + word + '\n' + 'Significado: ' + meaning);
            return;
        } else{
            alert('Palavra não cadastrada');

        }
    }
}

const DICTIONARY = new Dictionary();

const saveBtn = document.getElementById('save-btn');
const searchBtn = document.getElementById('search-btn');

saveBtn.addEventListener('click', addToDictionary);
searchBtn.addEventListener('click', searchWord);

function addToDictionary(e){
    e.preventDefault();
    let word = document.getElementById('word');
    let meaning = document.getElementById('meaning');

    if(word.value === '' || meaning.value === ''){
        alert('É necessário preencher os dois campos!');
        return;
    }
  
    let newWord = new Word(word.value, meaning.value); 
    DICTIONARY.addToDictionary(newWord);
    word.value = '';   
    meaning.value = '';   
}


function searchWord(e){
    e.preventDefault();
    let word = document.getElementById('search-word');
    DICTIONARY.search(word.value);
    word.value = '';
}



