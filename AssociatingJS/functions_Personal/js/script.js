/**
 * Created by Jeremy Suika on 3/25/14
 * functions_personal.
 */


alert("I have a lot of leaves to rake up and put in trash bags. \n\nI will pay some neighborhood kids a fixed amount per bag. Have to see how much it will cost me. ")


var lukeBags =prompt("How many trash bags did Luke fill up?")

var jacobBags =prompt ("How many trash bags did Jacob fill up?")

var moneyPerBag =prompt("How you paying the kids per trash bag?")



function lawnMoney (lukeBags,jacobBags,moneyPerBag){
    var lawnMoney =(Number(lukeBags)+Number(jacobBags))*moneyPerBag;
    console.log("Hello there this is the answer "+ lawnMoney)
}

lawnMoney (2,3,4);



console.log(Number(lukeBags)+Number(jacobBags));  //a test prompt




//alert("Test2 for personal ");