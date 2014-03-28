/**
 * Created by Jeremy Suika on 3/25/14
 * functions_Industry.
 */

var grade = prompt ("What was your grade for the assignment ");
var points= prompt ("How many points is the assignment worth");

var finalPoints=assignmentGrade(grade,points);

function assignmentGrade (grade, points){
    var assignmentGrade = (grade/100)*points;
    console.log("If a got a "+grade+"% and that assignment was worth "+ points+ " points, I now have a total of "+assignmentGrade+ " points.");
    return assignmentGrade;
}

assignmentGrade(grade,points);


if (finalPoints<=59){
    console.log("You are failing the class, you have a F.");
}else if (finalPoints<=69){
    console.log("You are not doing well, you have a D.");
}else if (finalPoints<=79){
    console.log("You got an C on the class");
}else if (finalPoints<=89){
    console.log("You got an B in the class, congrats");
}else{
    console.log("You have a A, awesome!");
}


//console.log("Tester 1, not real, If got a "+grade+"% and that assignment was worth "+ points+ " points, I now have a total of " +finalPoints+ " points.");