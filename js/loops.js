// While loop
var vinay = {};
vinay.job = "web developer";

var makeWebsite = function() {
	console.log("Made a website");
}

var websites = 0;
while (vinay.job === "web developer") {
	makeWebsite();
	websites = websites + 1;
	if (websites === 10) {
	  vinay.job = "web specialist";
	}
}

console.log(vinay.job);

// For loop
for ( var i=0; i<9; i++ ) {
	console.log(i);
}

// For (index in array)
var countries = ["germany", "argentina", "brazil", "netherlands"];

for (country in countries) {
	console.log(countries[country]);
}