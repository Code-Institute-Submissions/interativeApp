// icons to be used a tiles
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

// Initiating variables
var cardIconMatcher = []; // to store the matched icons
var cardIDHolder = []; // 
var tries = 0; // total tries to solve the game
var totalCardsDone = 0; // Total cards matched
var level; // to store level selected by user
var timer; // to store time taken to solve
var totalTries = 0; // total tries
var chartDiv = document.createElement('div'); // for chart creation at end of game



// Learnt to use audio from https://stackoverflow.com/questions/9419263/playing-audio-with-javascript
var flip = new Audio('assets/audio/flip.mp3'); // first click sound on tile
var rollback = new Audio('assets/audio/rollback.mp3'); // rollback sound of tile
var match = new Audio('assets/audio/match.mp3'); // when matched 2 tiles


// this function is trigerred when player starts game
function start() {
    // timer for clock
    timer = setInterval(timeManage, 1000);
    var gameContainer = $("#game-actual"); // container to show the game in
    
    var gameActual = $("#game-actual>.centered"); // the actual div where game is inserted
    // reload button creation
    var reloadButton = document.createElement('button'); 
    reloadButton.setAttribute('class','btn btn-primary-outline my-2');
    reloadButton.setAttribute('onClick','reloadGame();');
    reloadButton.innerHTML = 'Select Difficulty';

    // Initial timer creation
    var timerClock = document.createElement('div');
    timerClock.setAttribute('id', 'stats');
    timerClock.innerHTML = '00:00';

    // appending the created elements in javascript
    gameActual.append(reloadButton);
    gameActual.append(timerClock);
    var gameStart = $("#game-start");
    gameContainer.hide(); // hiding the initial screen
    
    // saving the option selected by user for difficulty
    var difficulty = document.getElementById("difficulty");
    var difficultyOption = difficulty.options[difficulty.selectedIndex].text;
    
    // converting the selection to an integer and resizing container divs
    // according to the screen size. Media queries could not be used due to different levels
    switch (difficultyOption) {
        case "Easy":
            level = 1;
            break;
        case "Medium":
            level = 2;
            resizeGame(900,0); // resizindg according to screen size
            break;
        case "Difficult":
            level = 3;
            resizeGame(1100,800); // resizindg according to screen size
            break;
        case "Advanced":
            level = 4;
            resizeGame(1400,1000); // resizindg according to screen size
            break;
    }

    // shuffle method for a different game each time
    shuffle(icons);
    var iconToUse = icons.slice(0,(level*3));
    var doubledIcons = secondIconMake(iconToUse, 2);
    shuffle(doubledIcons);
    
    // hide start screen
    gameStart.hide();

    // to track the icon tiles
    var iconCount = 0;

    // generating the required tiles according to difficulty level
    for(i = 0; i<level; i++){
        var cardRows =  document.createElement('div');
        cardRows.setAttribute('class', 'row justify-content-center');

        // inner loop to geenrate tiles on each row
        for(j=0; j<6; j++){

            var container = document.createElement('section');
            container.setAttribute('class', 'cardMain');
            
            // generating card elements
            var card = document.createElement('div');
            card.setAttribute('class', 'cardCustom capture');
            card.setAttribute('id', 'card_'+iconCount);

            // creating front of cards sections to hide the actual icon
            var front = document.createElement('div');
            front.setAttribute('class', 'front');
            front.innerHTML = '<i class="fa fa-cubes" aria-hidden="true"></i>';
            
            // div section to hold the actual icon tile
            var back = document.createElement('div');
            back.setAttribute('class', 'back');
            back.innerHTML = doubledIcons[iconCount];
            iconCount++; // changing icon tracker on each loop

            // appending front and back to the div while holds icon tiles
            card.appendChild(front);
            card.appendChild(back);

            //appending card rows to container
            container.appendChild(card);
            cardRows.appendChild(container);
        }
        gameActual.append(cardRows);
    }
    
    // showing the prepared game 
    gameContainer.show();
    
    // on each click on the icon tiles gameLogic function is triggered
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


// resize funtion to resize game div according to screen width
function resizeGame(smallScreenInput, bigScreenInput){
    if (screen.width <= 320) {
        document.getElementById("game").style.minHeight = smallScreenInput+"px";
    } else if (screen.width >= 321 && screen.width <= 400 && bigScreenInput != 0){
        document.getElementById("game").style.minHeight = bigScreenInput+"px";
    }
}

// after shuffling icons, duplicate icons are created to be matched
function secondIconMake(array, n){
    var doubleIcons = [];
    for(var i = 0; i < n; i++) {
        doubleIcons = doubleIcons.concat(array);
    }
    return doubleIcons;
} 

// reaload game function
function reloadGame() {
    location.reload();
}

// game logic handler when user clicks on the tiles
function gameLogic() {
    // playing the flip sound if clicked on a tile
    flip.play();

    // checking if there are two elements matched already
    if(cardIconMatcher.length < 2){

        // checking if this the first tiles clicked
        if(cardIconMatcher.length == 0){
            // selecting the first tile and adding it in cardIconeMatcher array
            var firstCard = $(this);
            cardIconMatcher.push(firstCard.find('.back').html());
            console.log(cardIconMatcher[0]);

            // capturing the id of that card and keeping it match for next click
            var cardID = firstCard.attr('id');
            cardIDHolder.push(cardID);
            console.log(cardIDHolder[0]);

            // changing the class of card
            firstCard.addClass('flipped');

        // if there is already one card clicked then
        } else if(cardIconMatcher.length == 1){
            // saving the second tile in the second card and matching it first card clicked
            var secondCard = $(this);
            var cardID = secondCard.attr('id');
            cardIDHolder.push(cardID);

            //if both cards clicked are the same card then re initialize everything 
            if(cardIDHolder[0] == cardIDHolder[1]){
                secondCard.removeClass('flipped');
                cardIconMatcher = [];
                cardIDHolder = [];
                totalTries++;
            
            // if both cases above are not true then
            } else {
                // get the name of that icon from html
                cardIconMatcher.push(secondCard.find('.back').html());
                console.log(cardIconMatcher[1]);
                
                console.log(cardIDHolder[1]);
                secondCard.addClass('flipped');
                // if both cards match then
                if(cardIconMatcher[0] == cardIconMatcher[1]){

                    // change the state of the tiles and play appropirate music
                    $('#'+cardIDHolder[0]).addClass('boxShine').off("click");
                    $('#'+cardIDHolder[1]).addClass('boxShine').off("click");
                    match.play();
                    // re initialize variables for next match 
                    cardIconMatcher = [];
                    cardIDHolder = [];
                    totalCardsDone += 2; // tracking card matched already
                    console.log(totalCardsDone);
                    totalTries++; // increase the number of tries after every attempt
                    
                    // checking if all the cards have matched and game finished
                    if(totalCardsDone == (level*6)) {

                        // creating the final statistics overlay chart to store best score
                        // for each difficulty level
                        var overlay = document.createElement('div');
                        overlay.setAttribute('id', 'overlay');
                        overlay.setAttribute('class', 'min-vw-100 min-vh-100');
                        overlay.setAttribute('onClick', 'overlayOff();');
                        
                        var startAgain = document.createElement('button');
                        startAgain.setAttribute('class','btn btn-primary my-2');
                        startAgain.setAttribute('onClick','reloadGame();');
                        startAgain.innerHTML = 'Start Again!';

                        var note = document.createElement('h2');
                        note.innerHTML = 'Well Done! Total Attempts: '+totalTries;
                        var contentHolder = document.createElement('div');
                        contentHolder.setAttribute('id', 'endNote');
                        contentHolder.setAttribute('class', 'text-center col-12');

                        //appending all the elemnts on the overlay one by one
                        contentHolder.appendChild(note);
                        contentHolder.append(chartDiv);
                        
                        contentHolder.appendChild(startAgain);
                        overlay.appendChild(contentHolder);
                        document.body.appendChild(overlay);

                        // setTimeout used to allow the overlay to complete following steps
                        setTimeout(function() {
                            overlayOn();
                        }, 600);
                        // these functions are defined timedata.js
                        // Save the best time
                        bestTimeInit();
                        clearInterval(timer);
                        // setting the best time for appropriate level of deifficulty only
                        bestTimeSet (level);
                        // load the chart with the data in session storage
                        loadChart();

                    }  
                    
                // if game is not over but only two cards matched
                } else {

                    // flip both cards back and re initialize variables
                    function flipBothCards() {
                        $('#' + cardIDHolder[0]).removeClass('flipped');
                        $('#' + cardIDHolder[1]).removeClass('flipped');
                        rollback.play();
                        totalTries++;
                        cardIconMatcher = [];
                        cardIDHolder = [];
                    }
                    
                    // allowing the animations to happen and flipping
                    setTimeout(flipBothCards, 700);
                    
                    
                }
            }
        }    
    } else {

    }
}

// turning overlay off
function overlayOff() {
    document.getElementById("overlay").style.display = "none";
    
}

// turning overlay on
function overlayOn() {
    document.getElementById("overlay").style.display = "block";
}

