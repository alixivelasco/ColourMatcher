var colorThief = new ColorThief();

var sourceImage = document.getElementById("image");

// Display main color
// e.g [125, 189, 193]
console.log(
    colorThief.getColor(sourceImage)
);

// Display palette of colors
// e.g [[55,37,29],[213,193,136],[110,204,223]]
console.log(
    colorThief.getPalette(sourceImage)
);