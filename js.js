var data = [["apples", 5], ["bananas", 10], ["coconuts", 6], ["oranges", 200]];

var toDisplay = "";

//toDisplay is currently an empty string.  
//You need to build up this string from the data array
//This is what should be displayed on the page on seperate lines:
// I have 5 apples
//I have 10 bananas
//I have 6 coconuts
//I have 200 oranges
//each line should be a div, and should have it's own unique id
//the id should be the index number 
//for example : 
//<div id="0"> I have 5 apples</div>
//<div id="1"> I have 10 bananas</div>
//<div id="2"> I have 6 coconuts</div>
//<div id="3"> I have 200 oranges</div>
data.forEach( () => {
  //write your code here
}) 

document.getElementById('display').innerHTML = toDisplay;
