/* Add description text on the picture */

  var photos = []; //Declare an empty array to store image element
  var fileNames = []; //Declare an empty element to store image file names
  var imageList = []; //Declare an empty array to store html list that contain an image
  var image; //Declare an empty variable to store the assembled image list codes
  var openList1 = "<li id='photo"
  var openList2 = "'>"; //Declare a variable to contain open list tag
  var closeList = "</li>"; //Declare a variable to contain an close list tag
  var openCaption = "<p class='caption'>";
  var closeCaption = "</p>";
  var captionText = [
    "Winter Resort Bridge",      // winterland1
    "Snowy Mountain Town",       // winterland2
    "Winter City Lights",        // winterland3
    "Holiday Express",           // winterland4
    "Winter Capitol",            // winterland5
    "Mountain Village at Night", // winterland6
    "Snowy Castle",              // winterland7
    "Snowy Village",             // winterland8
    "Snowy Town Square",         // winterland9
    "Winter Cathedral"           // winterland10
  ];  
  var openDesc = "<div class='description'>";
  var closeDesc = "</div>";
  var descText = [
    "A snowy bridge leading into a beautiful winter resort.",
    "A mountain town surrounded by snow-covered peaks.",
    "A city glowing with lights on a winter evening.",
    "A festive train traveling through a snowy park.",
    "The U.S. Capitol surrounded by fresh snow.",
    "A mountain village shining under the night sky.",
    "A grand castle standing in a snowy landscape.",
    "A peaceful village nestled in the winter mountains.",
    "A quiet town square on a snowy winter night.",
    "A beautiful cathedral on a bright winter day."
  ];  
  for (var i=0; i<10; i++) {
    fileNames.push("winterland"+(i+1)); //Create image file name and store in the array
    photos.push("<img src='images/"+fileNames[i]+".jpg'>"); //Assemble file name into image element and store in an array
    
    //Assemble the image element from the array with list element stored in variables
    image = openList1 + (i+1) + openList2 + photos[i] + "<br>" + openCaption + captionText[i] + closeCaption + openDesc + descText[i] + closeDesc + closeList; 
    imageList.push(image); //Store(push) the assembled list codes into an array
    
  }
  
  //Display all six image codes stored in the array

/* Add Information Box */
var infoBox = "<div id='infoBox'>" + "<h2 id='infoTitle'></h2>" + "<p id='infoText'></p>" + "<a href='#' id='closeBox'>Click To Close</a>" + "</div>";

document.getElementById("album").innerHTML = imageList.join("") + infoBox;

var descriptions = document.querySelectorAll(".description");

for (var i = 0; i < descriptions.length; i++) {
    descriptions[i].addEventListener("click", showInfo);
    descriptions[i].setAttribute("data-index", i);
}

function showInfo() {
    var index = this.getAttribute("data-index");

    document.getElementById("infoTitle").innerHTML = captionText[index];
    document.getElementById("infoText").innerHTML = this.innerHTML;
    document.getElementById("infoBox").style.visibility = "visible";
}

document.getElementById("closeBox").addEventListener("click", closeInfo);

function closeInfo() {
    document.getElementById("infoBox").style.visibility = "hidden";
}