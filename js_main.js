function generateTopButtons(){
  var location = document.getElementById("top_buttons");
  var buttonL=document.createElement("button");
  buttonL.id = "bL";
  buttonL.onclick = leftArrowClicked;
  var buttonR=document.createElement("button");
  buttonR.id = "bR";
  buttonR.onclick = rightArrowClicked;
  location.appendChild(buttonL);
  location.appendChild(buttonR);
  buttonL.innerHTML = '<img id="img" src="arrowL.jpg" />';
  buttonR.innerHTML = '<img id="img" src="arrowR.jpg" />';
}

function generateButtons(data, date) {
  let date_temp = date;
  var more=document.getElementById("week_list");
  for (let i = 0; i < data.length; i++) {
    var btn=document.createElement("button");
    btn.id = "b" + date_temp;
    btn.innerHTML=data[i] + " Dec " +date_temp++;
    more.appendChild(btn);
  }
}

function generateHiddenButtons(data, date) {
  let date_temp = date;
  var more=document.getElementById("week_list");
  for (let i = 0; i < data.length; i++) {
    var btn=document.createElement("button");
    btn.id = "b" + date_temp;
    btn.style.display = "none";
    btn.innerHTML=data[i] + " Dec " +date_temp++;
    more.appendChild(btn);
  }
}

function nextWeek() {
  for (let i = date; i <= date+7; i++){
    let currentButton = document.getElementById("b" + i);
    currentButton.style.display = "none";
  }
  for (let x = date + 7; x < date +14; x++){
    let currentButton = document.getElementById("b" + x);
    currentButton.style.display = "block";
  }

}
function previousWeek() {
  for (let i = date; i <= date+7; i++){
    let currentButton = document.getElementById("b" + i);
    currentButton.style.display = "none";
  }
  for (let x = date - 7; x < date; x++){
    let currentButton = document.getElementById("b" + x);
    currentButton.style.display = "block";
  }

}

function rightArrowClicked(){
  if (date + 7 > 31){

  } else {
    nextWeek();
    date += 7;
  }
}

function leftArrowClicked(){
  if (date - 7 <= 0){

  } else {
    previousWeek();
    date -= 7;
  }
}
function getDate(){

}
function dateClicked(){
  var weekDisplay = document.getElementById("week_List");
  //weekDisplay.
}



//-----------------------on startup--------------------//
let weekDays = [
  "Sunday", "Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday"
];

let date = 1;
let temp_date = date;
generateTopButtons();
generateButtons(weekDays, temp_date);
temp_date +=7;
while (temp_date <= 31){
  generateHiddenButtons(weekDays, temp_date);
  temp_date +=7;
}
