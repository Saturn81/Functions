/**
 * Created by Jeremy Suika on 3/25/14
 * functions_personal.
 */


alert("I have leaves to rake up and put in trash bags. \n\nI tell neighborhood kids to fill up as many trash bags with leaves, but only 60 bags in container of bags. \n\nWill pay them a fixed amount per bag. Have to see how much it will cost me. ")


var lukeBags =prompt("How many trash bags did Luke fill up?")

var jacobBags =prompt ("How many trash bags did Jacob fill up?")

var moneyPerBag =prompt("How you paying the kids per trash bag?")

var totalSpent = (moneyPerBag*lukeBags)+(moneyPerBag*jacobBags);


if (Number(lukeBags)+Number(jacobBags)<=60 && totalSpent<=30){
    console.log("You can pay Luke $"+(lukeBags*moneyPerBag)+" and Jacob $"+(jacobBags*moneyPerBag)+".");
}else if(totalSpent>30){
    console.log("That's too much money per bag, I was thinking of spending no more then $30.00 total for both of them.")
}else{
    console.log(("In the original box of trash bags three was only a total of 60 bags, so I only paying for work for 60 trash bags worth."))
}



console.log(totalSpent);
