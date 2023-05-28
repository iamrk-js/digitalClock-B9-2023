
let cl = console.log;


function setZero(num){
    // if(num < 10){
    //     return '0' + num
    // }else{
    //     return num
    // }
  return  num < 10 ? ('0' + num) : num
}

function createDigitalClock() {
    const digitalClock = document.getElementById("digitalClock")
    let d = new Date(); //it gives a date object of current time

    let hr = d.getHours()

    let min = d.getMinutes();

    let sec = d.getSeconds();

    let session = "AM";

    if (hr > 12) {
        session = "PM";
        hr = hr - 12 // 19 - 12 >> 7
    }

    // if (hr < 10) {
    //     hr = '0' + hr  // 07
    // }else{
    //     hr = hr
    // }

    // (hr < 10) ? (hr = '0' + hr) : hr = hr;
    // hr = setZero(hr)
    // // if (min < 10) {
    // //     min = '0' + min
    // // }
    // // (min < 10) ? (min = '0' + min) : min = min;
    // min = setZero(min)
    // // if (sec < 10) {
    // //     sec = '0' + sec
    // // }
    // // (sec < 10) ? (sec = '0' + sec) : sec = sec;
    // sec = setZero(sec)


    let result = `${setZero(hr)} : ${setZero(min)} : ${setZero(sec)} ${session}`;

    digitalClock.innerHTML = result;
    setTimeout(createDigitalClock, 1000)
}

createDigitalClock()



















































































































































































































































































































































































































































































































var y = 100;