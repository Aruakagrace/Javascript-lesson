const btn = document.getElementById('button')
const display = document.getElementById('message');

const rainbow =
['red','orange','yellow','green','blue',];
function change() {
document.body.style.background =
rainbow[Math.floor(5*Math.random())];
}
btn.addEventListener('click', change);

const a = [1,2,2,2,3,4,4,];
console.log(a.length);
const now= new Date();
console.log(now);
const temp= 40;
let star= "Weather of nigeria " +temp+ "\u00b0c";
display.textContent = star;
console.log(star);