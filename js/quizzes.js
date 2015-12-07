// $("#main").append("Vinay Ankola");
// var firstName = "vinay";
// var age = 41;
// console.log(firstName);

// var email = "vinay@udacity.com";
// var newEmail = email.replace("udacity", "gmail");
// console.log(email);
// console.log(newEmail);

// var awesomeThoughts = "My name is Vinay and I am awesome";
// var funThoughts = awesomeThoughts.replace("awesome", "fun");
// $("#main").append(funThoughts);

var name = "Vinay Ankola";
var role = "full stack web developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skills = ["awesomeness", "programming", "teaching", "JS"];
var skills1 = [];
skills1 = skills.slice(0);
$("#main").append(skills1);

$("#main").append(bio.name);
bio["state"] = "Ohio";
$("#main").append(bio.state);

var work = {};
work.position = "SAP BI Analyst";
work.employer = "Givaudan";
work.years = "8";
work.city = "Cincinnati";

var education = {};
education["name"] = "University of Houston";
education["years"] = "1997-1998";
education["city"] = "Houston, TX";

$("#main").append(work["position"]);
$("#main").append(education.name);

//////////////

var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';

var charEscape = function(_html) {
    var newHTML = _html;

    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    return newHTML;
};

// Did your code work? The line below will tell you!
console.log(charEscape(html));

////    Dot vs Bracket Notation Quiz

var weirdObject = {
    "property": "Time for an astronomy lesson!",
    "property1": "Cameron's minor in college was astronomy",
    "property-2": "The 4 Galilean largest moons of Jupiter are:",
    "property 3": "Io, Ganymede, Callisto, Europa",
    "property$": "Saturn's moon Enceladus has liquid water ocean under its icy surface",
    " property": "The Sun contains 99.87% of the mass of the entire solar system",
    "property()": "There are 5 dwarf planets in our solar system:",
    "property[]": "Pluto, Ceres, Eris, Haumea, Makemake",
    "8property": "Mars has two tiny moons: Phobos and Deimos"
};

// Use console.log() to figure out if dot and/or bracket notation
// will work to access the properties below. Mark true if you can use dot/bracket
// notation to access the property, otherwise mark false.

// For example, uncomment the line below to see if you can use dot notation to access `property1`.
// console.log(weirdObject.property1);

// I'll give you the first answer. The rest are set to false. Try out each property and
// if you can use dot or bracket notation to access it, change the answer to true!

// property
var dotNotation0 = true;
var bracketNotation0 = true;

// property1
var dotNotation1 = true;
var bracketNotation1 = true;

// property-2
var dotNotation2 = false;
var bracketNotation2 = true;

// property 3
var dotNotation3 = false;
var bracketNotation3 = true;

// property$
var dotNotation4 = true;
var bracketNotation4 = true;

// *space*property
var dotNotation5 = false;
var bracketNotation5 = true;

// property()
var dotNotation6 = false;
var bracketNotation6 = true;

// property[]
var dotNotation7 = false;
var bracketNotation7 = true;

// 8property
console.log(weirdObject.8property);
console.log(weirdObject["8property"]);
var dotNotation8 = false;
var bracketNotation8 = true;

/////// X, Y coordinates

$(document).click(function(loc) {
  //logClicks(event.pageX, event.pageY);
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

//////// internationalizeButton

// function inName() {
//  var name = bio.name;
//  console.log(name);
//  name = name.trim().split(" ");
//  console.log(name);
//   console.log(name[0]);
//   console.log(name[1]);  
//  name[1] = name[1].toUpperCase();
//  name[0] = name[0].slice(0,1).toUpperCase() + 
//            name[0].slice(1).toLowerCase();
//  return name[0] + " " + name[1];
// }

// $('#main').prepend(internationalizeButton);