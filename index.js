let m = document.getElementsByClassName('colon')
// m.innerHTML = '<i class="fa-solid fa-colon"></i>'

setInterval(() => {
    let d = new Date().getHours()
    let e = new Date().getMinutes()
    let f = new Date().getSeconds()
    console.log(d) // prints the current hour every second
    hours.innerHTML = d + '<br>';
    // hours.prepend(d)
    // hours.setattribute('display', 'flex')
    let a = document.createTextNode("\n \t Hours")
    hours.appendChild(a)
    minutes.innerHTML = ("0" + e).slice(-2) + '<br>';
    // minutes.prepend(e)
    let b = document.createTextNode("\n \t Minutes")
    minutes.appendChild(b)
    seconds.innerHTML = ("0" + f).slice(-2) + '<br>';
    // seconds.prepend(f) 
    let c = document.createTextNode("\n \t Seconds")
    seconds.appendChild(c)
    // colon.classList.toggle("animate");

}, 1000);