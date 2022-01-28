// split the date into days, months, years array
var x = "10/12/2018".split('/') //origen

//Find a Way to translate the NOW to that format
let sputnik = new Date().toISOString();
let hubble = sputnik.split('');
const voyager = hubble.splice(0, 10);
let year = voyager.splice(0,4)
let month = voyager.splice(1,2);
let day = voyager.splice(2,3)

let y = [day.join(''), month.join(''), year.join('')];

// create date objects using year, month, day
var a = new Date(x[2],x[1],x[0])
var b = new Date(y[2],y[1],y[0])

// calculate difference between dayes
var c = ( b - a )

// convert from milliseconds to days
// multiply milliseconds * seconds * minutes * hours
var d = c / (1000 * 60 * 60 * 24)

// show what you got
document.write("Este canal lleva funcionando " + d + " días.");
