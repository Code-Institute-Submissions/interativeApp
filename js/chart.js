var timeTaken = 00;

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
    
}