// Dom elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');


    // Options 
    const showAmPm = true;

    // show time (current time)
function showTime () {
    let today = new Date(),
    // let today = new Date(2019, 06, 10, 04, 33, 30),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds()


    // Set AM or PM 
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12 hour format 
    hour = hour % 12 || 12;

    // output the time 
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000);
}

// Add zero
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n; 
}


// Set Background and Greeting 
function setBgGreet() {
    let today = new Date(),
    // let today = new Date(2019, 06, 10, 04, 33, 30),
        hour = today.getHours();
    
    if(hour < 12) {
        // Morning
        document.body.style.backgroundImage = "url('../img/Morning.jpg')"
        greeting.textContent = 'Good Morning';
        document.body.style.color = 'white'
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundSize = 'cover'
        document.body.style.backgroundPosition = 'center'

    } else if (hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('../img/Noon.jpg')"
        greeting.textContent = 'Good Afternoon';
        document.body.style.color = 'black'
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundSize = 'cover'
        document.body.style.backgroundPosition = 'center'

    } else {
        // Evening
        document.body.style.backgroundImage = "url('../img/Night.jpg')"
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white'
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundSize = 'cover'
        document.body.style.backgroundPosition = 'center'
    }
}

// set name
function setName(e){
    if(e.type === 'keypress') {
        // make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
        localStorage.setItem('name', e.target.innerText); 
        name.blur();
        } 

    }   else {
        // Allows you to take care of the blur(clicking on an outer space)
        localStorage.setItem('name', e.target.innerText); 
        }
}


// set focus
function setFocus(e){
    if(e.type === 'keypress') {
        // make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
        localStorage.setItem('focus', e.target.innerText); 
        focus.blur();
        } 

    }   else {
        // Allows you to take care of the blur(clicking on an outer space)
        localStorage.setItem('focus', e.target.innerText); 
        }
}

// Get Name 
function getName(){
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name')
    }
}

// Get Focus 
function getFocus(){
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus')
    }
}

// To make the name and focus stay
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName); 
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


// Run  
showTime();
setBgGreet(); 
getName();
getFocus();
setName();
setFocus();


