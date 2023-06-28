const message = 'Hello world' // Try edit me]
function add0(x){return x<10 ? '0' +x: '' + x;}
function segundos(){
// Update header text
setInterval(function()
{
  let data = new Date();
document.querySelector('#segundos').innerHTML = add0(data.getSeconds());
}, 1000);
}

function minutos(){
// Update header text
setInterval(function()
{
  let data = new Date();
document.querySelector('#minutos').innerHTML = add0(data.getMinutes());
}, 1000);
}
function horas(){
// Update header text
setInterval(function()
{
  let data = new Date();
document.querySelector('#Horas').innerHTML = add0(data.getHours());
}, 1000);
}
horas();
minutos();
segundos();


// Log to console
console.log(message)
