function City_Function() {
  var City_Output;
  var City = document.getElementById("City_Input").value; 
  var City_String = " is a great city to visit.";
  switch (City) {
      case "Seattle":
        City_Output = "Seattle" + City_String;
    break;
        case "Portland":
          City_Output = "Portland" + City_String;
    break;
        case "Atlanta":
          City_Output = "Atlanta" + City_String;
    break;
        case "Miami":
          City_Output = "Miami" + City_String;
    break;
        case "Phoenix":
          City_Output = "Phoenix" + City_String;
    break;
        case "Los Angelas":
          City_Output = "Los Angelas" + City_String;
    break;
        case "San Fransisco":
          City_Output = "San Fransisco" + City_String;
    break;
        case "Philadelphia":
          City_Output = "Philadelphia" + City_String;
    break;
        case "Chicago":
          City_Output = "Chicago" + City_String;
    break;
        case "Boston":
          City_Output = "Boston" + City_String;
    break;
    default:
        City_Output = "Please enter a city exactly how it is writen in the above list.";
    }
    document.getElementById("Output").innerHTML = City_Output;
}

function GEB_CN() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "Goose!";
}

var c = document.getElementById("canvas_test");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 500, 250);
grd.addColorStop(0, "black");
grd.addColorStop(.25, "red");
grd.addColorStop(.5, "blue");
grd.addColorStop(.75, "green");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(0, 0, 500, 250);

var c = document.getElementById("canvas_test");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(250, 125, 100, 0, 2 * Math.PI);
ctx.stroke();
