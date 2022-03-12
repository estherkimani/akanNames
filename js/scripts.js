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
var day = parseInt(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7);
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
} else if(MM <= 0 || MM > 12){
  alert("Enter a valid date!");
} else if (dayOfWeek == 0 && gender === 'male') {
  alert(document.getElementById("myName").innerHTML = ("You were born on " + edays[0] + " your Akan Name is " + mDays[0]));
  }
  else if (dayOfWeek == 1 && gender === 'male') {
    alert(document.getElementById("myName").innerHTML = ("You were born on " + edays[1] + "your Akan Name is " + mDays[1]));
  }
  else if (dayOfWeek == 2 && gender === 'male') {
    alert(document.getElementById("myName").innerHTML = ("You were born on" + edays[2] + "your Akan Name is " + mDays[2]));
  }
  else if (dayOfWeek == 3 && gender === 'male') {
    alert(document.getElementById("myName").innerHTML = ("You were born on" + edays[3] + "your Akan Name is " + mDays[3]));
  }
  else if (dayOfWeek == 4 && gender === 'male') {
    alert(document.getElementById("myName").innerHTML = ("You were born on" + edays[4] + "your Akan Name is " + mDays[4]));
  }
  else if (dayOfWeek == 5 && gender === 'male') {
    alert(document.getElementById("myName").innerHTML = ("You were born on" + edays[5] + "your Akan Name is " + mDays[5]));
  }
  else if (dayOfWeek == 6 && gender === 'male') {
    alert(document.getElementById("myName").innerHTML = ("You were born on" + edays[6] + "your Akan Name is " + mDays[6]));
  }
  else if (dayOfWeek == 0 && gender === 'female') {
  alert(document.getElementById("myName").innerHTML = ("You were born on" + edays[0] + "your Akan name is " + fDays[0]));
  }
  else if (dayOfWeek == 1  && gender === 'female') {
    alert(document.getElementById("myName").innerHTML = ("You were born on" + edays[1] + "your Akan Name is " + fDays[1]));
  }
  else if (dayOfWeek == 2  && gender === 'female') {
    alert(document.getElementById("myName").innerHTML = ("You were born on" + edays[2] + "your Akan Name is " + fDays[2]));
  }
  else if (dayOfWeek == 3  && gender === 'female') {
    alert(document.getElementById("myName").innerHTML = ("You were born on" + edays[3] + "your Akan Name is " + fDays[3]));
  }
  else if (dayOfWeek == 4 && gender === 'female') {
    alert(document.getElementById("myName").innerHTML = ("You were born on" + edays[4] + "your Akan Name is " + fDays[4]));
  }
  else if (dayOfWeek == 5 && gender === 'female') {
    alert(document.getElementById("myName").innerHTML = ("You were born on" + edays[5] + "your Akan Name is " + fDays[5]));
  }
  else if (dayOfWeek == 6 && gender === 'female') {
    alert(document.getElementById("myName").innerHTML = ("You were born on" + edays[6] + "your Akan Name is " + fDays[6]));
  }
  else {
    alert("Ensure you input correct data!");
  }

};
