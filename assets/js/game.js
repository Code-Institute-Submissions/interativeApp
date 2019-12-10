
var icons = [
    '<i class="fa fa-bath" aria-hidden="true"></i>',
    '<i class="fa fa-grav" aria-hidden="true"></i>',
    '<i class="fa fa-ravelry" aria-hidden="true"></i>',
    '<i class="fa fa-user-circle-o" aria-hidden="true"></i>',
    '<i class="fa fa-handshake-o" aria-hidden="true"></i>',
    '<i class="fa fa-podcast" aria-hidden="true"></i>',
    '<i class="fa fa-window-maximize" aria-hidden="true"></i>',
    '<i class="fa fa-wpexplorer" aria-hidden="true"></i>',
    '<i class="fa fa-snowflake-o" aria-hidden="true"></i>',
    '<i class="fa fa-bandcamp" aria-hidden="true"></i>',
    '<i class="fa fa-eercast" aria-hidden="true"></i>',
    '<i class="fa fa-linode" aria-hidden="true"></i>'
];

var cardIconMatcher = [];
var cardIDHolder = [];
var tries = 0;
var totalCardsDone = 0;
var level;
var timer;
var totalTries = 0;
var chartDiv = document.createElement('section');

// https://stackoverflow.com/questions/9419263/playing-audio-with-javascript
var flip = new Audio('assets/audio/flip.mp3');
var rollback = new Audio('assets/audio/rollback.mp3');
var match = new Audio('assets/audio/match.mp3');

function start() {
    timer = setInterval(timeManage, 1000);
    var gameContainer = $("#game-actual");

    var gameActual = $("#game-actual>.centered");
    var reloadButton = document.createElement('button');
    reloadButton.setAttribute('class','btn btn-primary-outline my-2');
    reloadButton.setAttribute('onClick','reloadGame();');
    reloadButton.innerHTML = 'Select Difficulty';

    var timerClock = document.createElement('div');
    timerClock.setAttribute('id', 'stats');
    timerClock.innerHTML = '00:00';

    gameActual.append(reloadButton);
    gameActual.append(timerClock);
    var gameStart = $("#game-start");
    gameContainer.hide();
    
    var difficulty = document.getElementById("difficulty");
    var difficultyOption = difficulty.options[difficulty.selectedIndex].text;
    
    switch (difficultyOption) {
        case "Easy":
            level = 1;
            break;
        case "Medium":
            level = 2;
            break;
        case "Difficult":
            level = 3;
            break;
        case "Advanced":
            level = 4;
            break;
    }

    shuffle(icons);
    var iconToUse = icons.slice(0,(level*3));
    var doubledIcons = secondIconMake(iconToUse, 2);
    shuffle(doubledIcons);
    
    gameStart.hide();
    var iconCount = 0;

    for(i = 0; i<level; i++){
        var cardRows =  document.createElement('div');
        cardRows.setAttribute('class', 'row justify-content-center');

        for(j=0; j<6; j++){

            var container = document.createElement('section');
            container.setAttribute('class', 'cardMain');

            var card = document.createElement('div');
            card.setAttribute('class', 'cardCustom capture');
            card.setAttribute('id', 'card_'+iconCount);

            var front = document.createElement('div');
            front.setAttribute('class', 'front');
            front.innerHTML = '<i class="fa fa-cubes" aria-hidden="true"></i>';

            var back = document.createElement('div');
            back.setAttribute('class', 'back');
            back.innerHTML = doubledIcons[iconCount];
            iconCount++;

            card.appendChild(front);
            card.appendChild(back);

            container.appendChild(card);
            cardRows.appendChild(container);
        }
        gameActual.append(cardRows);
    }

    gameContainer.show();
    
    $(".capture").click(gameLogic);

}

/**
 * Durstenfeld shuffle algorithm to shuffle the array values.
 */
function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function secondIconMake(array, n){
    var doubleIcons = [];
    for(var i = 0; i < n; i++) {
        doubleIcons = doubleIcons.concat(array);
    }
    return doubleIcons;
} 

function reloadGame() {
    location.reload();
}

function gameLogic() {
    flip.play();
    if(cardIconMatcher.length < 2){
        if(cardIconMatcher.length == 0){
            var firstCard = $(this);
            cardIconMatcher.push(firstCard.find('.back').html());
            console.log(cardIconMatcher[0]);
            var cardID = firstCard.attr('id');
            cardIDHolder.push(cardID);
            console.log(cardIDHolder[0]);
            firstCard.addClass('flipped');

        } else if(cardIconMatcher.length == 1){
            var secondCard = $(this);
            var cardID = secondCard.attr('id');
            cardIDHolder.push(cardID);
            if(cardIDHolder[0] == cardIDHolder[1]){
                secondCard.removeClass('flipped');
                cardIconMatcher = [];
                cardIDHolder = [];
                totalTries++;
                
            } else {
                cardIconMatcher.push(secondCard.find('.back').html());
                console.log(cardIconMatcher[1]);
                
                console.log(cardIDHolder[1]);
                secondCard.addClass('flipped');
                if(cardIconMatcher[0] == cardIconMatcher[1]){
                    $('#'+cardIDHolder[0]).addClass('boxShine').off("click");
                    $('#'+cardIDHolder[1]).addClass('boxShine').off("click");
                    match.play();
                    cardIconMatcher = [];
                    cardIDHolder = [];
                    totalCardsDone += 2;
                    console.log(totalCardsDone);
                    totalTries++;
                    if(totalCardsDone == (level*6)) {
                        var overlay = document.createElement('div');
                        overlay.setAttribute('id', 'overlay');
                        overlay.setAttribute('class', 'min-vw-100 min-vh-100');
                        overlay.setAttribute('onClick', 'overlayOff();');
                        
                        var startAgain = document.createElement('button');
                        startAgain.setAttribute('class','btn btn-primary my-2');
                        startAgain.setAttribute('onClick','reloadGame();');
                        startAgain.innerHTML = 'Start Again!';

                        var performance = document.createElement('a');
                        performance.setAttribute('class','btn btn-primary my-2');
                        performance.href = '#stats';
                        performance.innerHTML = 'Check your Performance!';

                        var note = document.createElement('h2');
                        note.innerHTML = 'Well Done! Total Attempts: '+totalTries;
                        var contentHolder = document.createElement('div');
                        contentHolder.setAttribute('id', 'endNote');
                        contentHolder.appendChild(note);
                        contentHolder.appendChild(chartDiv);
                        contentHolder.appendChild(startAgain);
                        contentHolder.appendChild(performance);
                        overlay.appendChild(contentHolder);
                        document.body.appendChild(overlay);
                        setTimeout(function() {
                            overlayOn();
                        }, 600);
                        bestTimeInit();
                        clearInterval(timer);
                        bestTimeSet (level);
                        loadChart();

                    }       
                } else {
                    function flipBothCards() {
                        $('#' + cardIDHolder[0]).removeClass('flipped');
                        $('#' + cardIDHolder[1]).removeClass('flipped');
                        rollback.play();
                        totalTries++;
                        cardIconMatcher = [];
                        cardIDHolder = [];
                    }
                    
                    setTimeout(flipBothCards, 700);
                    
                    
                }
            }
        }    
    } else {

    }
}

function overlayOff() {
    document.getElementById("overlay").style.display = "none";
    
}

function overlayOn() {
    document.getElementById("overlay").style.display = "block";
}

