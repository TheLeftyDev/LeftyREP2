clockjs = document.querySelector('.clock')

setInterval(() => {
    const x = new Date()
    let hour = x.getHours()
    let minute = x.getMinutes()
    let second = x.getSeconds()
    if(second<10) {second = '0' + second}
    if(minute<10) {minute = '0' + minute}
    if(hour<10) {hour = '0' + hour}
    clockjs.innerText = `${hour}:${minute}:${second}`}, 1000);