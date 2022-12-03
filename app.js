function countdown(ms){    

    let milisecond = ms;
    let second = Math.floor((milisecond / 1000) % 60);
    let minute = Math.floor((milisecond / 1000 / 60) % 60);
    let hour = Math.floor(milisecond / 1000 / 60 / 60); 
    
    let clearHour = hour.toString().length == 1 ? "0" + hour : hour
    let clearMinute = minute.toString().length == 1 ? "0" + minute : minute
    let clearSecond = second.toString().length == 1 ? "0" + second : second

    console.log(clearHour + ':' + clearMinute + ':' + clearSecond)    
    
    if(ms == 0){
        return
    }
    
    
    setTimeout(() => {
        milisecond += -1000
        countdown(milisecond)
    }, 1000);
}
countdown(86400000)
// countdown(70000)
// countdown(10000)
