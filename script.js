let dateNow = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let daysNum = new Date().getDate();

let Ynaw = dateNow.getFullYear();
let Dnaw = dateNow.getDay();
let Mnaw = dateNow.getMonth(); 



const mon = document.querySelector('.p1')
const day = document.querySelector('.p2')
const dayN = document.querySelector('.p3')
const year  = document.querySelector('.p4')


mon.innerHTML =  months[Mnaw]

day.innerHTML = days[Dnaw]

dayN.innerHTML = daysNum

year.innerHTML = Ynaw