/**
 * Created by Jeremy Suika on 3/25/14.
 * functions_wacky
 */


//alert("I bought a cool designer rug and don't any new furniture (sofa or chairs) to touch the new rug. \n\nNot sure of what furniture can fit with the new rug.");

//alert("Room is 10360 square ft.");

//alert("Designer rug is 10X15 ft or 150 sq ft. ");

var sofa =prompt("Do you want the large sofa or a few chairs in the room?",("large sofa or chairs"));

if (sofa=="large sofa"||sofa=="Large Sofa"){
    var sofaLenght =prompt("What is the length of the large sofa?");
    var sofaWidth  =prompt("What is the width of the large sofa?");
}else{
    var chair = prompt("Chairs are 12 square ft, how many chairs you want in the room?")
}

var totalChairs =amountChairs(chair);

function amountChairs(chair){
    var amountChairs =chair*12;
    return amountChairs;
}


var totalLargeSofa =largeSofa(sofaLenght,sofaWidth);

function largeSofa (sofaLenght,sofaWidth){
    var largeSofa = sofaLenght*sofaWidth;
    return largeSofa;
}

if (totalLargeSofa>360){
    console.log("The sofa is to big for the room, look at a different size sofa or get some chairs.");
}else{
    console.log("The sofa fits in the room with the rug.");
}


console.log(totalChairs);

