/**
 * Created by Jeremy Suika on 3/25/14
 * functions_Industry.
 */

var grade = prompt ("What was your grade for 1st assignment? ");
var points= prompt ("How many points is the 1st assignment worth?");

var finalPoints=assignmentGrade(grade,points);

function assignmentGrade (grade, points){
    var assignmentGrade = (grade/100)*points;
   // console.log("If a got a "+grade+"% and that assignment was worth "+ points+ " points, I now have a total of "+assignmentGrade+ " points.");
    return assignmentGrade;
}

assignmentGrade(grade,points);


var grade2 = prompt ("What was your grade for the 2nd assignment? ");
var points2= prompt ("How many points is the 2nd assignment worth?");

var finalPoints2=assignmentGrade2(grade2,points2);

function assignmentGrade2 (grade2, points2){
    var assignmentGrade2 = (grade2/100)*points2;
   //console.log("If a got a "+grade2+"% and the 2nd assignment was worth "+ points2+ " points, I now have a total of "+assignmentGrade2+ " points.");
    return assignmentGrade2;
}

assignmentGrade2(grade,points);



var completeGrades= (finalPoints+finalPoints2) / (Number(points)+Number(points2));


if (completeGrades<=.59){
    console.log("With the two assignments graded,you are failing the class, you have a F.");
}else if (completeGrades<=.69){
    console.log("With the two assignments graded,you are not doing well, you have a D.");
}else if (completeGrades<=.79){
    console.log("With the two assignments graded,you got an C on the class");
}else if (completeGrades<=.89){
    console.log("With the two assignments graded,you got an B in the class, congrats");
}else{
    console.log("With the two assignments graded, You have a A, awesome!");
}


//console.log("Tester 1, not real, If got a "+grade+"% and that assignment was worth "+ points+ " points, I now have a total of " +finalPoints+ " points.");