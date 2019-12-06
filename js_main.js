let weekDays = [
  "Sunday", "Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday"
];

let date = 1;

function generateButtons(data, date) {
  let date_temp = date;
  var more=document.getElementById("week_list");
  for (let i = 0; i < data.length; i++) {
    var btn=document.createElement("button");
    btn.innerHTML=data[i] + " Dec " +date_temp;
    date_temp += 1;
    more.appendChild(btn);
  }
}

function generateTopButtons(){
  var location = document.getElementById("top_buttons");
  var lbtn=document.createElement("button");
  lbtn.id = "bL";
  var rbtn=document.createElement("button");
  rbtn.id = "bR";
  location.appendChild(lbtn);
  location.appendChild(rbtn);
  var buttonL = document.getElementById("bL");
  buttonL.innerHTML = '<img id="img" src="arrowL.jpg" />';
  var buttonR = document.getElementById("bR");
  buttonR.innerHTML = '<img id="img" src="arrowR.jpg" />';
}

function leftArrowClicked(){

}






generateTopButtons();
generateButtons(weekDays, date);
