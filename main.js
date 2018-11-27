// ----------Array for storing the words
let wordList = [
    { czech: 'pivo', spanish: 'cerveza' },
    { czech: 'jidlo', spanish: 'la comida' },
    { czech: 'laska', spanish: 'amor' },
    { czech: 'les', spanish: 'el bosque' },
    { czech: 'prochazka', spanish: 'el paseo' },
    { czech: 'husty', spanish: 'chevere' },
    { czech: 'děda', spanish: 'abuelo' },
    { czech: 'voda', spanish: 'agua' },
    { czech: 'vesnice', spanish: 'pueblo' },
    { czech: 'večírek', spanish: 'fiesta' },
    { czech: 'auto', spanish: 'coche' },
    { czech: 'cestovat', spanish: 'viajar' },
    { czech: 'tančit', spanish: 'bailar' },
    { czech: 'pít', spanish: 'beber' },
    { czech: 'krásná', spanish: 'bonita' },
    { czech: 'pěkná', spanish: 'guapa' },
    { czech: 'boty', spanish: 'zapatos' },
]

//----------Vanilla JS
let card = document.getElementById('card');
let flipBtn = document.getElementById('flip-btn');
let nextBtn = document.getElementById('next-btn');


let getRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * (wordList.length));
    console.log(randomNumber);
    return randomNumber
};


let getRandomPair = (randomCallback) => {
    let randomPairObject = wordList[randomCallback()];
    return randomPairObject;
}


// events
nextBtn.addEventListener('click', (e) => {
    let randomPair = getRandomPair(getRandomNumber); //get random pair of words
    card.innerHTML = randomPair.czech; //display the czech word
    card.dataset.currentSpanish = randomPair.spanish; //add an attribute to the card with the value of the spanish word from the current pair
    card.dataset.currentCzech = randomPair.czech;
    console.log(randomPair);

});

flipBtn.addEventListener('click', () => {
    let spanishWord = card.dataset.currentSpanish; //get the spanish word with the attribute assigned when Next btn was clicked
    let czechWord = card.dataset.currentCzech; //get the spanish word with the attribute assigned when Next btn was clicked
    if (card.innerHTML === czechWord) {
        card.innerHTML = spanishWord; //display the czech word
    } else {
        card.innerHTML = czechWord; //display the czech word
    }


});




// -----------jQuery
