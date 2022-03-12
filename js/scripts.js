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

//condition with the Gender
if(document.getElementById('Gender').checked) {
  //Male radio button is checked
  var gender = "male";
}else {
  //Female radio button is checked
  var gender = "female";
}

//to test the conditions that assign the akan names(validation)
if (DD <=0|| DD >31){
  alert("Enter a valid date!");
} else if(MM <= 0 || MM > 12)){
  alert("Enter a valid date!");
}


  else if (calculatedDate == 0 && gender === 'male') {
  alert(document.getElementById("display").innerHTML = ("You were born on " + days[0] + " your Akan Name is " + maleNames[0]));
  }
  else if (calculatedDate == 1 || intergeredDate == -1 && gender === 'male') {
    alert(document.getElementById("display").innerHTML = ("You were born on " + days[1] + "your Akan Name is " + maleNames[1]));
  }
  else if (calculatedDate == 2 || intergeredDate == -2 && gender === 'male') {
    alert(document.getElementById("display").innerHTML = ("You were born on" + days[2] + "your Akan Name is " + maleNames[2]));
  }
  else if (calculatedDate == 3 || intergeredDate == -3 && gender === 'male') {
    alert(document.getElementById("display").innerHTML = ("You were born on" + days[3] + "your Akan Name is " + maleNames[3]));
  }
  else if (calculatedDate == 4 || intergeredDate == -4 && gender === 'male') {
    alert(document.getElementById("display").innerHTML = ("You were born on" + days[4] + "your Akan Name is " + maleNames[4]));
  }
  else if (calculatedDate == 5 || intergeredDate == -5 && gender === 'male') {
    alert(document.getElementById("display").innerHTML = ("You were born on" + days[5] + "your Akan Name is " + maleNames[5]));
  }
  else if (calculatedDate == 6 || intergeredDate == -6 && gender === 'male') {
    alert(document.getElementById("display").innerHTML = ("You were born on" + days[6] + "your Akan Name is " + maleNames[6]));
  }
  else if (calculatedDate == 0 && gender === 'female') {
  alert(document.getElementById("display").innerHTML = ("You were born on" + days[0] + "your Akan name is " + femaleNames[0]));
  }
  else if (calculatedDate == 1 || intergeredDate == -1 && gender === 'female') {
    alert(document.getElementById("display").innerHTML = ("You were born on" + days[1] + "your Akan Name is " + femaleNames[1]));
  }
  else if (calculatedDate == 2 || intergeredDate == -2 && gender === 'female') {
    alert(document.getElementById("display").innerHTML = ("You were born on" + days[2] + "your Akan Name is " + femaleNames[2]));
  }
  else if (calculatedDate == 3 || intergeredDate == -3 && gender === 'female') {
    alert(document.getElementById("display").innerHTML = ("You were born on" + days[3] + "your Akan Name is " + femaleNames[3]));
  }
  else if (calculatedDate == 4 || intergeredDate == -4 && gender === 'female') {
    alert(document.getElementById("display").innerHTML = ("You were born on" + days[4] + "your Akan Name is " + femaleNames[4]));
  }
  else if (calculatedDate == 5 || intergeredDate == -5 && gender === 'female') {
    alert(document.getElementById("display").innerHTML = ("You were born on" + days[5] + "your Akan Name is " + femaleNames[5]));
  }
  else if (calculatedDate == 6 || intergeredDate == -6 && gender === 'female') {
    alert(document.getElementById("display").innerHTML = ("You were born on" + days[6] + "your Akan Name is " + femaleNames[6]));
  }
  else {
    alert("Check if you inputted the correct data!");
  }

};


  //else if(MM <=0 || MM > 12) {
    //alert("Enter a valid month");
  //} else {
  //  alert("GOOD");
//  }
  //else if(YY <1900 || YY>2022){
  //  alert("Enter a valid year");
