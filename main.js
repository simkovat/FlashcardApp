// ----------Array for storing the words
const wordList = [
    { czech: 'pivo', spanish: 'cerveza', english: 'beer' },
    { czech: 'jidlo', spanish: 'la comida', english: 'food' },
    { czech: 'laska', spanish: 'amor', english: 'love' },
    { czech: 'les', spanish: 'el bosque', english: 'forest' },
    { czech: 'prochazka', spanish: 'el paseo', english: 'a walk' },
    { czech: 'husty', spanish: 'chevere', english: 'cool' },
    { czech: 'děda', spanish: 'abuelo', english: 'grandfather' },
    { czech: 'voda', spanish: 'agua', english: 'water' },
    { czech: 'vesnice', spanish: 'pueblo', english: 'village' },
    { czech: 'večírek', spanish: 'fiesta', english: 'party' },
    { czech: 'auto', spanish: 'coche', english: 'car' },
    { czech: 'cestovat', spanish: 'viajar', english: 'to travel' },
    { czech: 'tančit', spanish: 'bailar', english: 'to dance' },
    { czech: 'pít', spanish: 'beber', english: 'to drink' },
    { czech: 'krásná', spanish: 'bonita', english: 'beautiful' },
    { czech: 'pěkná', spanish: 'guapa', english: 'pretty' },
    { czech: 'boty', spanish: 'zapatos', english: 'shoes' }
]

// SELECT THE HTML ELEMENTS
const cardFront = document.getElementById('card-front');
const cardBack = document.getElementById('card-back');
const submitBtn = document.getElementById('submitBtn');
const flipBtn = document.getElementById('flip-btn');
const nextBtn = document.getElementById('next-btn');
const selectLang1 = document.getElementById('language1-select'); // first dropdown menu
const selectLang2 = document.getElementById('language2-select'); // second dropdown menu

//--------------FUNCTIONS---------------
//get random number
const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * (wordList.length));
    console.log('random number ' + randomNumber); //test
    return randomNumber
};
//get random set of words based on random number
const getRandomSet = (randomCallback) => {
    const randomSetObject = wordList[randomCallback()];
    return randomSetObject;
}

//------------EVENT LISTENERS--------------
//first language dropdown listener
selectLang1.addEventListener('change', () => {
    //display dropdown menu for sedond language
    selectLang2.style.display = 'inline-block';
});

//second language dropdown listener
selectLang2.addEventListener('change', () => {
    //display submit button
    submitBtn.style.display = 'inline-block';
});

//SUBMIT button listener
submitBtn.addEventListener('click', () => {
    //save values of selected languages into variables
    const language1 = selectLang1.options[selectLang1.selectedIndex].value;
    const language2 = selectLang2.options[selectLang2.selectedIndex].value;

    //send the language values to the card dataset
    cardFront.dataset.currentLang = language1;
    cardBack.dataset.currentLang = language2;
    console.log('cardFront' + cardFront); //test
    console.log('cardBack' + cardBack); //test

    //generate first set of words
    const randomSet = getRandomSet(getRandomNumber);
    console.log('first set' + randomSet);

    //display the first pair of words on the card front and back
    cardFront.innerHTML = randomSet[language1];
    cardBack.innerHTML = randomSet[language2];
});

//NEXT button listener
nextBtn.addEventListener('click', (e) => {
    //generate new random set of words
    const randomSet = getRandomSet(getRandomNumber);
    console.log('new random set from next button is' + randomSet); //test

    //get the languages from the card dataset
    //(they were saved thee when the submit button was clicked)
    const currentLang1 = cardFront.dataset.currentLang;
    console.log('language 1 is ' + currentLang1) //test
    const currentLang2 = cardBack.dataset.currentLang;
    console.log('language 2 is ' + currentLang2) //test

    //display new pair of words
    cardFront.innerHTML = randomSet[currentLang1];
    cardBack.innerHTML = randomSet[currentLang2];

    // let selectedLang1 = card.dataset.lang1; // get the attributed created when dropdowns were changed
    // let selectedLang2 = card.dataset.lang2;

    // card.dataset.currentWord1 = randomSet[selectedLang1]; //add attribute to card with the value of the word in language 2 from the current pair
    // card.dataset.currentWord2 = randomSet[selectedLang2]; //add attribute to card with the value of the word in language 2 from the current pair
    // if (selectedLang1 && selectedLang2) {
    // card.innerHTML = randomSet[selectedLang1]; //display the word in language 1
    // } else {
    //     alert('Please select language 1 and language 2 ;-)'); // alert pops up in case 2 languages are not selected
    // }

});

flipBtn.addEventListener('click', () => {
    const word1 = card.dataset.currentWord1; //get word of language 1 with the attribute assigned when Next btn was clicked
    const word2 = card.dataset.currentWord2; //get word of language 2 with the attribute assigned when Next btn was clicked
    const selectedLang1 = card.dataset.lang1; // get the attributed created when dropdowns were changed
    const selectedLang2 = card.dataset.lang2;

    if (!selectedLang1 || !selectedLang2) {
        alert('Please select language 1 and language 2 ;-)');
    } else if (card.innerHTML === word1) {
        card.classList.toggle('flex-card-rotate');
        card.innerHTML = word2; //display word in language 1

    } else {
        card.classList.toggle('flex-card-rotate-back');
        card.innerHTML = word1; //display word in language 2

    }


});
