const hrmin = document.getElementsByClassName("hrmin")[0];
const sec = document.getElementsByClassName("sec")[0];
const starttag = document.getElementsByClassName("start")[0];
const pausetag = document.getElementsByClassName("pause")[0];
const continuetag = document.getElementsByClassName("continue")[0];
const restarttag = document.getElementsByClassName("restart")[0];



let seconds = 0 ; minutes = 0 ; hours = 0 ;

const count = () => {
    seconds += 1 ;
    if (seconds===60){
        seconds=0;
        minutes+=1;
        if (minutes===60){
            minutes=0;
            hours+=1;
        }
    }
    let presec = seconds<10 ? "0"+seconds.toString() :seconds ;
    let prehr = hours<10 ? "0"+hours.toString() :hours ;
    let premin = minutes<10 ? "0"+minutes.toString() :minutes ;
    
    hrmin.textContent = prehr + ":" + premin  ;
    sec.textContent = presec
}
let counting ;
starttag.addEventListener("click",()=>{
    counting = setInterval(count, 1000)
})

pausetag.addEventListener("click",()=>{
    clearInterval(counting)
})

continuetag.addEventListener("click",()=>{
    clearInterval(counting);
    counting = setInterval(count, 1000)
})

restarttag.addEventListener("click",()=>{
    clearInterval(counting);
    seconds = 0 ; minutes = 0 ; hours = 0 ;
    counting = setInterval(count, 1000)

})