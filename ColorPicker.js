var colorThief = new ColorThief();

var sourceImage = document.createElement("img");
sourceImage.src = "sample-teal.png"

var image = document.getElementById("image");
image.appendChild(sourceImage)

//get dominant colour from image
var dominantColour = colorThief.getColor(sourceImage);

//RGB colours to match images to, which will then correspond to SKU's
var teal = [7,101,110];
var grey = [62,71,87];

if (_.isEqual (teal, dominantColour)) {
	document.getElementById("outPutColour").innerHTML = "Teal - SKU7101110";
}
else if(_.isEqual (grey, dominantColour)){
	document.getElementById("outPutColour").innerHTML = "Grey - SKU627187";
}
else {console.log("The colour is not recognised")}

