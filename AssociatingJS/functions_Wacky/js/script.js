/**
 * Created by Jeremy Suika on 3/25/14.
 * functions_wacky
 */


//alert("I bought a cool designer rug and don't any new furniture (sofa or chairs) to touch the new rug. \n\nNot sure of what furniture can fit with the new rug.");

//alert("Room is 10 ft360 square ft.");

//alert("Designer rug is 10X15 ft or 150 sq ft. ");

var sofa =prompt("Do you want the large sofa or chairs in the room?",("large or small"));

if (sofa=="large sofa"||sofa=="Large Sofa"){
    var sofaLenght =prompt("What is the length of the large sofa?");
    var sofaWidth  =prompt("What is the width of the large sofa?");
}else{
    var chair = prompt("Chairs are 3X3 ft or 9 square ft, how many chairs you want in the room?")
}






var totalLargeSofa =largeSofa(sofaLenght,sofaWidth);

function largeSofa (sofaLenght,sofaWidth){
    var largeSofa = sofaLenght*sofaWidth;
    return largeSofa;
}

if (totalLargeSofa>360){
    console.log("The sofa is to big for the room, look at a different size sofa.");
}else{
    console.log("The sofa fits in the room with the rug.");
}



