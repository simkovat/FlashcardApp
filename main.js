// ----------Array for storing the words
let wordList = [
    { czech: 'pivo', spanish: 'cerveza', english: 'beer'},
    { czech: 'jidlo', spanish: 'la comida', english: 'food'},
    { czech: 'laska', spanish: 'amor', english: 'love'},
    { czech: 'les', spanish: 'el bosque', english: 'forest'},
    { czech: 'prochazka', spanish: 'el paseo', english: 'a walk'},
    { czech: 'husty', spanish: 'chevere', english: 'cool'},
    { czech: 'děda', spanish: 'abuelo', english: 'grandfather'},
    { czech: 'voda', spanish: 'agua', english: 'water'},
    { czech: 'vesnice', spanish: 'pueblo', english: 'village'},
    { czech: 'večírek', spanish: 'fiesta', english: 'party'},
    { czech: 'auto', spanish: 'coche', english: 'car'},
    { czech: 'cestovat', spanish: 'viajar', english: 'to travel'},
    { czech: 'tančit', spanish: 'bailar', english: 'to dance'},
    { czech: 'pít', spanish: 'beber', english: 'to drink'},
    { czech: 'krásná', spanish: 'bonita', english: 'beautiful'},
    { czech: 'pěkná', spanish: 'guapa', english: 'pretty'},
    { czech: 'boty', spanish: 'zapatos', english: 'shoes'}
]

//----------Vanilla JS
let card = document.getElementById('card');
let flipBtn = document.getElementById('flip-btn');
let nextBtn = document.getElementById('next-btn');



// dealing with language selection
let selectLang1 = document.getElementById('language1-select'); // first dropdown menu
let selectLang2 = document.getElementById('language2-select'); // second dropdown menu

// first language dropdown listener
selectLang1.addEventListener('change', () => {
    let language1 = selectLang1.options[selectLang1.selectedIndex].value; // value of first selected language
    let language2 = selectLang2.options[selectLang2.selectedIndex].value; // value of second selected language
    
    card.dataset.lang1 = language1; // the selected value gets saved as a new attribute of card "lang1"
    selectLang2.style.display = 'inline-block'; // dropdown menu for second language appears
 /* 
 SOMEHOW LIMIT THE OPTIONS IN THE SECOND DROPDOWN. IT SHOULD NOT SHOW THE LANGUAGE THAT IS ALREADY SELECTED
 .appendChild to select element?*/
    }
    
)
selectLang2.addEventListener('change', () => {
    let language1 = selectLang1.options[selectLang1.selectedIndex].value;
    let language2 = selectLang2.options[selectLang2.selectedIndex].value;
    card.dataset.lang2 = language2; // the selected value gets saved as a new attribute of card "lang2"
    
    console.log(card.dataset.lang2);
})



// randomization
let getRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * (wordList.length));
    console.log(randomNumber);
    return randomNumber
};


let getRandomPair = (randomCallback) => {
    let randomPairObject = wordList[randomCallback()];
    return randomPairObject; // returns an object of a random idex from the array that containes matched words
}


// button events
nextBtn.addEventListener('click', (e) => {
    let randomPair = getRandomPair(getRandomNumber); //get random pair of words
    console.log(randomPair);

    let selectedLang1 = card.dataset.lang1; // get the attributed created when dropdowns were changed
    let selectedLang2 = card.dataset.lang2;
    
    card.dataset.currentWord1 = randomPair[selectedLang1]; //add attribute to card with the value of the word in language 2 from the current pair
    card.dataset.currentWord2 = randomPair[selectedLang2]; //add attribute to card with the value of the word in language 2 from the current pair
    if (selectedLang1 && selectedLang2) {
    card.innerHTML = randomPair[selectedLang1]; //display the word in language 1
    } else {
        alert('Please select language 1 and language 2 ;-)'); // alert pops up in case 2 languages are not selected
    }

});

flipBtn.addEventListener('click', () => {
    let word1 = card.dataset.currentWord1; //get word of language 1 with the attribute assigned when Next btn was clicked
    let word2 = card.dataset.currentWord2; //get word of language 2 with the attribute assigned when Next btn was clicked
    let selectedLang1 = card.dataset.lang1; // get the attributed created when dropdowns were changed
    let selectedLang2 = card.dataset.lang2;

    if (!selectedLang1 || !selectedLang2){
        alert('Please select language 1 and language 2 ;-)');
    } else if (card.innerHTML === word1) {
        card.innerHTML = word2; //display word in language 1
    } else {
        card.innerHTML = word1; //display word in language 2
    }


});

// -----------jQuery
