document.addEventListener('DOMContentLoaded' , () => {
    //card options
    const cardArray = [
        {
            name: 'facebook',
            img: 'images/facebook.png'
        },
        {
            name: 'facebook',
            img: 'images/facebook.png'
        },
        {
            name: 'instagram',
            img: 'images/instagram.png'
        },
        {
            name: 'instagram',
            img: 'images/instagram.png'
        },
        {
            name: 'snapchat',
            img: 'images/snapchat.png'
        },
        {
            name: 'snapchat',
            img: 'images/snapchat.png'
        },
        {
            name: 'tiktok',
            img: 'images/tiktok.png'
        },
        {
            name: 'tiktok',
            img: 'images/tiktok.png'
        },
        {
            name: 'tumblr',
            img: 'images/tumblr.png'
        },
        {
            name: 'tumblr',
            img: 'images/tumblr.png'
        },
        {
            name: 'twitter',
            img: 'images/twitter.png'
        },
        {
            name: 'twitter',
            img: 'images/twitter.png'
        }
    ]

    cardArray.sort( () => 0.5 - Math.random())

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = [];
    let cardsChosenID = [];
    let cardsWon = [];

    //Create the board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        var cards =  document.querySelectorAll('img');
        const optionOneID = cardsChosenID[0];
        const optionTwoID = cardsChosenID[1];

        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match');
            cards[optionOneID].setAttribute('src', 'images/finished.png');
            cards[optionTwoID].setAttribute('src', 'images/finished.png');
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneID].setAttribute('src', 'images/blank.png')
            cards[optionTwoID].setAttribute('src', 'images/blank.png')
            alert('Sorry, try again.')
        }

        cardsChosen = [];
        cardsChosenID = [];
        resultDisplay.textContent = cardsWon.length;

        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }

    //flip your card 
    function flipCard(event) {
        var cardID = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardID].name);
        cardsChosenID.push(cardID);
        this.setAttribute('src', cardArray[cardID].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard();
})

