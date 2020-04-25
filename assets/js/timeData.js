var timeTaken = 0;

// function to convert normal integer to time format and display every second
function timeManage () {
    // increment every second
    timeTaken++;
    // if times is less than 60 format
    if(timeTaken < 60){
        var secondFormatter = ("0" + timeTaken).slice(-2);
        document.getElementById('stats').innerHTML = '00:'+secondFormatter;
    // if time is more than 1 mintues format
    } else if (timeTaken >= 60) {
        var secondFormatter = ("0" + (timeTaken%60)).slice(-2);
        var minutesFormatter = ("0" + Math.floor(timeTaken/60)).slice(-2);
        document.getElementById('stats').innerHTML = minutesFormatter+':'+secondFormatter;
    }
    return timeTaken;
}

// attempt to capture the best time of the user

// Sesssion storage was taught during the course but I have used it to show best score
// on final overlay in the chart
// Attempted to do it with time as well below
function bestTimeInit () {

    // if storage available
    if (typeof(Storage) !== "undefined") {
        // if no time has been stored already
        if(sessionStorage.getItem("easyBestTime") === null) {
            let easyBest = 3600;
            sessionStorage.setItem('easyBestTime', easyBest.toString());
        } 
        // if no time has been stored already
        if(sessionStorage.getItem("medBestTime") === null) {
            let mediumBest = 3600;
            sessionStorage.setItem('medBestTime', mediumBest.toString());
        }
        // if no time has been stored already
        if(sessionStorage.getItem("difBestTime") === null) {
            let difficultBest = 3600;
            sessionStorage.setItem('difBestTime', difficultBest.toString());
        }
        // if no time has been stored already
        if(sessionStorage.getItem("advBestTime") === null) {
            let advBest = 3600;
            sessionStorage.setItem('advBestTime', advBest.toString());
        }
    }
}

// attemp to funtion to set the time as string
function bestTimeSet (levelForBestScore) {
    
    if(levelForBestScore == 1 && timeTaken < parseInt(sessionStorage.getItem('easyBestTime')) ) {
        let easyBest = timeTaken;
        sessionStorage.setItem('easyBestTime', easyBest.toString());
        console.log(sessionStorage.getItem('easyBestTime'));
    }

    if(levelForBestScore == 2 && timeTaken < parseInt(sessionStorage.getItem('medBestTime')) ) {
        let mediumBest = timeTaken;
        sessionStorage.setItem('medBestTime', mediumBest.toString());
        console.log(sessionStorage.getItem('medBestTime'));

    }

    if(levelForBestScore == 3 && timeTaken < parseInt(sessionStorage.getItem('difBestTime')) ) {
        let difficultBest = timeTaken;
        sessionStorage.setItem('difBestTime', difficultBest.toString()); // only strings are allowed to be saved
        console.log(sessionStorage.getItem('difBestTime'));

        
    }

    if(levelForBestScore == 4 && timeTaken < parseInt(sessionStorage.getItem('advBestTime')) ) {
        let advBest = timeTaken;
        sessionStorage.setItem('advBestTime', advBest.toString());
        console.log(sessionStorage.getItem('advBestTime'));

        
    }

}