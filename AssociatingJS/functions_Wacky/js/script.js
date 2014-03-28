/**
 * Created by Jeremy Suika on 3/25/14.
 * functions_wacky
 */


alert("I bought a cool designer rug and don't want any new furniture (sofa or chairs) to touch the new rug. \n\nHave to see what furniture can fit with the new rug.");
//this describes the formula.

alert("I have 90 sq ft of available space for either furniture combination");  //this alert sets the limit of free space I have to devote to the furniture.

var sofa =prompt("Do you want the large sofa in the room?",("yes or no"));  //I can not include the sofa and its own fuction if the PROMPT says NO; the other prompts will not be displayed.

if (sofa=="yes"||sofa=="Yes"){                                                  //If Yes, thren it will give the data for the arguments for the function
    var sofaLenght =prompt("What is the length of the large sofa? (in Ft.)");   //this is to find the Area of the sofa
    var sofaWidth  =prompt("What is the width of the large sofa? (in Ft.)");    //this is to find the area of the sofa
}else{
    var sofaLenght=0;           //I was getting a NAna without this, it took alot of time to figure this one, but I believe it puts into real numbers without the function
    var sofaWidth=0;            //Same as above.
}

var chair =prompt("How many chairs do you want in the room?\nChairs are 12 sq. ft",(""));  //this prompt will give me the paramaters to store the data in for the function.


var totalChairs =amountChairs(chair);   //able to return the fuction and re-use it outside mt fuction.

function amountChairs(chair){         //chair is the parameters
    var amountChairs =chair*12;         //the 12 is the square ft for each chair,
    return amountChairs;                //this lets it get pushed into the other parts

}

var totalLargeSofa =largeSofa(sofaLenght,sofaWidth);    //able to return the fuction and re-use it outside mt fuction.

function largeSofa (sofaLenght,sofaWidth){      //the lenght and width are the paramenters
   var largeSofa = sofaLenght*sofaWidth;
    console.log("One type of your furniture covers " +amountChairs(chair)+" ft squared" );  //to display the outcome of the function
    return largeSofa;
}

//console.log("The other type of your furniture covers " +largeSofa(sofaLenght,sofaWidth)+ " ft squared" );


if (totalChairs+totalLargeSofa>90){      //if the total sq. ft of the two fuctions are above 90, then the statment is true.
    console.log("The furniture covers a total of "+(totalChairs+totalLargeSofa)+ "sq ft, which is to big for the room, look at a different size sofa or amount of chairs");  //this is displayed if TRUE.
}else{
    console.log("You have enough room for your furniture and the brand new rug.");      //If False, then the statment is displayed, showing that you have enough room for the furniture.
}



