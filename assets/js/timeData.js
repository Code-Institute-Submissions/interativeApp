var timeTaken = 0;

function timeManage () {
    timeTaken++;
    if(timeTaken < 60){
        var secondFormatter = ("0" + timeTaken).slice(-2);
        document.getElementById('stats').innerHTML = '00:'+secondFormatter;
    } else if (timeTaken >= 60) {
        var secondFormatter = ("0" + (timeTaken%60)).slice(-2);
        var minutesFormatter = ("0" + Math.floor(timeTaken/60)).slice(-2);
        document.getElementById('stats').innerHTML = minutesFormatter+':'+secondFormatter;
    }
    return timeTaken;
}

function bestTimeInit () {
    if (typeof(Storage) !== "undefined") {
        
        if(sessionStorage.getItem("easyBestTime") === null) {
            let easyBest = 3600;
            sessionStorage.setItem('easyBestTime', easyBest.toString());
        } 
        if(sessionStorage.getItem("medBestTime") === null) {
            let mediumBest = 3600;
            sessionStorage.setItem('medBestTime', mediumBest.toString());
        }
        if(sessionStorage.getItem("difBestTime") === null) {
            let difficultBest = 3600;
            sessionStorage.setItem('difBestTime', difficultBest.toString());
        }
        if(sessionStorage.getItem("advBestTime") === null) {
            let advBest = 3600;
            sessionStorage.setItem('advBestTime', advBest.toString());
        }
    }
}


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