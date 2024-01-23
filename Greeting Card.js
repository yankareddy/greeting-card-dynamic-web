let greeting = '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Rahul","to":"Varakumar"}';

let parsedValue = JSON.parse(greeting);

let greetFromEl = document.getElementById("greetFrom");
let greetToEl = document.getElementById("greetTo");
let greetingtext = document.getElementById("textContent");

greetFromEl.textContent = "From: " + parsedValue.from;
greetToEl.textContent = "To: " + parsedValue.to;
greetingtext.textContent = parsedValue.greetText;