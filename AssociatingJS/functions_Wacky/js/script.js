/**
 * Created by Jeremy Suika on 3/25/14.
 * functions_wacky
 */


//alert("I bought a cool designer rug and don't any new furniture (sofa or chairs) to touch the new rug. \n\nNot sure of what furniture can fit with the new rug.");

//alert("Room is 10360 square ft.");

//alert("Designer rug is 10X15 ft or 150 sq ft. ");

var sofa =prompt("Do you want the large sofa in the room?",("yes or no"));

if (sofa=="yes"||sofa=="Yes"){
    var sofaLenght =prompt("What is the length of the large sofa?");
    var sofaWidth  =prompt("What is the width of the large sofa?");
}


var chair =prompt("How many chairs do you want in the room?\nChairs are 12 sq. ft",(""));

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



var allfurniture= totalChairs+totalLargeSofa

if (totalChairs+totalLargeSofa>260){
    console.log("The furniture covers "+(totalChairs+totalLargeSofa)+ "sq ft, which is to big for the room, look at a different size sofa or amount of chairs");
}else{
    console.log("The new rug is not covered by any of the furniture.");
}


console.log(allfurniture);

