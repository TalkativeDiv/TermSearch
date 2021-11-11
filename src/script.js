/*
? Info:
? This program will change the window location to google.com with their search
? When the button is clicked
* Code Summary:
* We add an event listener to the button with an anonymous function 
* We create a variable called searcnTerm and set it equal to the value of the input
* Then we set the window.location to google.com with the searchTerm
*/
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {   
     const searchTerm = input.value;
     window.location.href = `https://www.google.com/search?q=${searchTerm}`;
});