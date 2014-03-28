/**
 * Created by Jeremy Suika on 3/25/14
 * functions_personal.
 */


alert("I have leaves to rake up and put in trash bags. \n\nI tell neighborhood kids to fill up as many trash bags with leaves, but only 60 bags in container of bags. \n\nWill pay them a fixed amount per bag. Have to see how much it will cost me. ")
//This is explaining the entire expression, I am paying kids money to rake up yard work.

var lukeBags =prompt("How many trash bags did Luke fill up?");  //prompt used to see how much each kid filled up, used later in the parameters.

var jacobBags =prompt ("How many trash bags did Jacob fill up?");  //prompt used to see how much each kid filled up, used later in the parameters.

var moneyPerBag =prompt("How you paying the kids per trash bag? (don't use $ sign)"); //prompt used to see how much paying each kid used later in the parameters.


var lawnAmount=totalSpent2(lukeBags,jacobBags,moneyPerBag);    //calling the function into variable, to be plugged in later.

function totalSpent2(lukeBags,jacobBags,moneyPerBag){                    //the parameters are the prompts from above,
    var totalSpent2=(moneyPerBag*lukeBags)+(moneyPerBag*jacobBags);   //I add up the total bags collected for each kid, and I multiply that by the amount paid each kid.
    return totalSpent2;                                             //this makes it so I can plug it in, without it there is no call to action.
}

//Else IF condition used with the function data
if (Number(lukeBags)+Number(jacobBags)<=60 && Number(lawnAmount)<=30){        //If the kids collected under 60 bags (the limit) AND (&&) I did not pay them over $30 the statement is TRUE
    console.log("You can pay Luke $"+(lukeBags*moneyPerBag)+" and Jacob $"+(jacobBags*moneyPerBag)+".");   //The true statement PROMPT in console.
}else if(Number(lawnAmount)>30){                //If the Promt was too high for money for the boys, like $6.00 a bag, this would come up.
    console.log("$"+lawnAmount+" is too much to pay them, I was thinking of spending no more then $30.00 total for both of them.");  //the prompt for this display.
}else{                                                  //I could of paid them a low amount but the prompts for TOTAL BAGS COLLECTED was over 60, then this statemnet is true.
    console.log(("In the original box of trash bags three was only a total of 60 bags, so I only paying for work for 60 trash bags worth.")); //the prompt for the over condition
}




