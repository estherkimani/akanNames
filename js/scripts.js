function fetchAkanName(){

  //declare all the names
  let edays = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let mDays = ['Kwasi', 'Kwadwo','Kwabena','Kwaku','Yaw', 'Kofi', 'Kwame'];
  let fDays = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua', 'Ama'];


//pass values from html to javascript
var date = document.getElementById("date").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;

//convert the user input to integers
var DD = parseInt(date);
var MM = parseInt(month);
var YY = parseInt(year.toString().slice(2, 4));
var C = parseInt(year);
var CC = Math.ceil(C/100);//rounds the number to the nearest integers
//Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
//substitute values
var day = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
var dayOfWeek = Math.ceil(day);
alert(dayOfWeek);
//condition with the Gender
if(document.getElementById('Gender').checked) {
  //Male radio button is checked
  var gender = "male";
}else {
  //Female radio button is checked
  var gender = "female";
}

//to test the conditions that assign the akan names



};
