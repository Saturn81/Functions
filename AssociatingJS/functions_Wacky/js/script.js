/**
 * Created by Jeremy Suika on 3/25/14.
 * functions_wacky
 */


alert("I bought a cool designer rug and don't want any new furniture (sofa or chairs) to touch the new rug. \n\nHave to see what furniture can fit with the new rug.");


alert("Designer rug is 10X15 ft or 150 sq ft. I have 260 sq ft of available space for either furniture combination");

var sofa =prompt("Do you want the large sofa in the room?",("yes or no"));

if (sofa=="yes"||sofa=="Yes"){
    var sofaLenght =prompt("What is the length of the large sofa?");
    var sofaWidth  =prompt("What is the width of the large sofa?");
}else{
    var sofaLenght=0;
    var sofaWidth=0;
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



var allfurniture= totalChairs+totalLargeSofa;

if (totalChairs+totalLargeSofa>260){
    console.log("The furniture covers a total of "+(totalChairs+totalLargeSofa)+ "sq ft, which is to big for the room, look at a different size sofa or amount of chairs");
}else{
    console.log("You have enough room for your furniture and the brand new rug.");
}



console.log(allfurniture);