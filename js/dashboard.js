//array to store all the images
var images = [];
//variable to specify the amount of the images
var images_amount = 52;
for (var i = 0; i < images_amount; i++) {
    images.push(i + 1);
}
var dom = document.getElementById("cards-images");
var html = '';
var counter = 1;
while (images.length > 0) {
    var newar = [];
    if (images.length == 1) {
        html += '<div class="blocks">' + '<div class="content-block"' + images[0] + '" data-clicked="0" data-cards="' + images[i] + '" data-enc="0" id="' + counter + '" >' + '<img src="cards/' + images[0] + '.gif"/>'
        '</div>' + '</div>';
    } else {
        var index = Math.round(Math.random() * images.length) + 1;
        for (var i = 0; i < images.length; i++) {
            if (i == index) {
                html += '<div class="blocks"true">' + '<div class="content-block"' + images[i] + '" data-clicked="0" data-cards="' + images[i] + '" data-enc="0" id="' + counter + '">' + '<img src="cards/' + images[i] + '.gif">' + '</div>' + '</div>';
            } else {
                newar.push(images[i]);
            }
        }
    }
    images = [];
    images = newar;
    counter++;
}
dom.innerHTML = html;

//class for the players
class Players {
    constructor(firstplayer, secondplayer) {
        this.firstplayer = firstplayer;
        this.secondplayer = secondplayer;
    }
}
const playerone = prompt("Type the first name");
const playertwo = prompt("Type the second name");
const players = new Players(playerone, playertwo)
document.getElementById("playerone").innerHTML = players.firstplayer;
document.getElementById("playertwo").innerHTML = players.secondplayer;


//array to store the players
const playing = document.getElementById("playing");
const turn = [];
turn[0] = players.firstplayer;
turn[1] = players.secondplayer;
let whoseTurn = 0;
playing.innerHTML = "Playing: " + turn[whoseTurn];
playing.addEventListener('click', () => {
    if (whoseTurn == 0) {
        whoseTurn = 1;
        playing.innerHTML = "Playing: " + turn[whoseTurn];
    } else if (whoseTurn == 1) {
        whoseTurn = 0;
        playing.innerHTML = "Playing: " + turn[whoseTurn];
    }
})



const cards = document.getElementsByClassName("blocks");


let id_ant = 0;
let firstcard;
let seconcard;
let clickcard = false;
let isPoint = false;
let score = 0;
let scoreone = 0;
let scoretwo = 0;
const points = document.querySelectorAll("div.score");
let isCard = false;
let cardsPoints = 0; //variable to keep 2 points for all the time that the cards are pairs 
let scoreCards_one = 0; //variable to incrase the div 2 in 2
let scoreCards_two = 0
const pointCard = document.querySelectorAll("div.pointCard");


//function for the effect of flip for all the cards 
function flip_effect() {
    let element = this.getElementsByClassName("content-block")[0];
    if (element.id != id_ant) {
        element.dataset.clicked = "1";
        element.style.transform = "rotateY(0deg)";

        //
        if (!clickcard) {
            clickcard = true;
            moveFirst = this;
            //option to convert to an integer the value that I get from the dataset.card for the first card
            firstcard = parseInt(element.dataset.cards);

        } else {
            clickcard = false;
            moveSecond = this;
            //option to convert to an integer the value that I get from the dataset.card for the second card
            seconcard = parseInt(element.dataset.cards);

        };

        //function to give the position of the card when both cards are pair 

        function positions() {
            moveFirst.style.left = "80%";
            moveFirst.style.top = "40%";
            moveSecond.style.left = "80%";
            moveSecond.style.top = "40%";
        }



        if (firstcard - seconcard == 13 || seconcard - firstcard == 13) {
            positions()
            cardsPoints += 2;
            isCard = true;



        } else if (firstcard - seconcard == 26 || seconcard - firstcard == 26) {
            positions()
            cardsPoints += 2;
            isCard = true;



        } else if (firstcard - seconcard == 39 || seconcard - firstcard == 39) {
            positions();
            cardsPoints += 2;
            isCard = true;


        }
        if (firstcard == 14 && seconcard == 27 || firstcard == 27 && seconcard == 14) {
            score += 2;

            isPoint = true;
        } else if (firstcard == 14 && seconcard == 40 || firstcard == 40 && seconcard == 14) {
            score += 2;

            isPoint = true;

        } else if (firstcard == 27 && seconcard == 40 || firstcard == 40 && seconcard == 27) {
            score += 2;

            isPoint = true;

        }
        if (firstcard == 41 && seconcard == 2 || firstcard == 2 && seconcard == 41 || firstcard == 41 && seconcard == 15 || firstcard == 15 && seconcard == 41 /* || firstcard 41 && seconcard == 28 || firstcard == 28 && seconcard == 41*/ ) {
            score += 2;

            isPoint = true;
        } else if (firstcard == 23 && seconcard == 10 || firstcard == 10 && seconcard == 23 || firstcard == 23 && seconcard == 36 || firstcard == 36 && seconcard == 23 /* || firstcard == 23 && seconcard == 49 || firstcard == 49 && seconcard == 23*/ ) {
            score += 2;

            isPoint = true;

        } else if (firstcard == 23 && seconcard == 49 || firstcard == 49 && seconcard == 23) {
            score += 2;

            isPoint = true;

        } else if (firstcard == 41 && seconcard == 28 || firstcard == 28 && seconcard == 41) {
            score += 2;

            isPoint = true;

        }
    }

    //blocks of code (if) to assign the points and the amount of cards for each players    
    if (isPoint && whoseTurn == 0 || isCard && whoseTurn == 0) {
        scoreone += score;
        points[whoseTurn].innerHTML = "Score: " + scoreone;
        isPoint = false;
        score = 0;
        scoreCards_one += cardsPoints;
        pointCard[whoseTurn].innerHTML = "Cards: " + scoreCards_one;
        isCard = false;
        cardsPoints = 0;


    } else if (isPoint && whoseTurn == 1 || isCard && whoseTurn == 1) {
        scoretwo += score;
        points[whoseTurn].innerHTML = "Score: " + scoretwo;
        isPoint = false;
        score = 0;

        scoreCards_two += cardsPoints;
        pointCard[whoseTurn].innerHTML = "Cards: " + scoreCards_two;
        isCard = false;
        cardsPoints = 0;

    }

}

//assign 3 points to the player with more cards 
check = document.getElementById("check");
check.addEventListener('click', () => {
    if (scoreCards_one > scoreCards_two) {
        scoreCards_one = scoreCards_one += 3;
        pointCard[whoseTurn].innerHTML = "Cards: " + scoreCards_one;

    } else if (scoreCards_two > scoreCards_one) {
        scoreCards_two = scoreCards_two += 3;
        pointCard[whoseTurn].innerHTML = "Cards: " + scoreCards_two

    }
})

//functions to move the cards with the mouse 
var images;
var moving = false;

function move(e) {
    var newX = e.clientX - 10;
    var newY = e.clientY - 10;
    image.style.left = newX + "px";
    image.style.top = newY + "px";
}

function initialClick(e) {
    if (moving) {
        document.removeEventListener("mousedown", move);
        moving = !moving;
        return;
    }
    moving = !moving;
    image = this;
    document.addEventListener("mousemove", move, false);
}

function moveUp() {
    document.removeEventListener("mousemove", move);
}
for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', flip_effect, false);
    cards[i].addEventListener("mousedown", initialClick, false)
    cards[i].addEventListener("mouseup", moveUp, false);
};


//variable to count the amount of the clicks 
let clicks = 0;

const button = document.querySelector('#button');

//variable to conver the object cards to 1 array 
let new_cards = Array.prototype.slice.call(cards);


//function to deal the first 12 cards to start the game 
function deal() {
    var x = 300;
    var y = 100;
    var space = 67;
    for (var i = 1; i <= 12; i++) {
        new_cards[i].style.top = `${y}px`;
        new_cards[i].style.left = `${x}px`;
        x += space;
        if (i % 4 === 0) {
            y += 150;
            x = 300;
        }
    }
    //option to delete from the array the cards that have been dealt
    new_cards.splice(0, 12);
}


// function to deal 8 cards when the button is clicked  when the amount of click is => 2
function deals() {
    var x = 300;
    var y = 100;
    var space = 67;
    for (var i = 1; i <= 8; i++) {
        new_cards[i].style.top = `${y}px`;
        new_cards[i].style.left = `${x}px`;
        x += space;
        if (i % 4 === 0) {
            y += 200;
            x = 300
        }
    }

    //option to delete from the array the cards that have been dealt

    new_cards.splice(0, 8);
}

//function to call the functions to deal the cards 
function dealCards() {
    clicks++;
    if (clicks === 1) {
        deal();
    } else if (clicks >= 2) {
        deals();
    }
}


//when the button is clicked the cards will be dealt 

button.addEventListener('click', () => {
    dealCards();
});