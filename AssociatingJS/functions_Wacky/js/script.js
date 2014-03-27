/**
 * Created by Jeremy Suika on 3/25/14.
 * functions_wacky
 */


//alert("I bought a cool designer rug and don't any new furniture (sofa or chairs) to touch the new rug. \n\nNot sure of what new furniture can fit with the new rug.");

//alert("Room is 20X30 ft or 600 square ft.");

//alert("Designer rug is 10X15 ft or 150 sq ft. ");

var sofaLenght =prompt("What is the length of the large sofa?");
var sofaWidth  =prompt("What is the width of the large sofa?");

var sofa =prompt("Do you want the large or small sofa in the room?");

var totalSofa =largeSofa(sofaLenght,sofaWidth);

function largeSofa (sofaLenght,sofaWidth){
    var largeSofa = sofaLenght*sofaWidth;
    console.log("The area of the large sofa is "+ largeSofa+ " square ft.");
    return largeSofa;
}



console.log(totalSofa);


