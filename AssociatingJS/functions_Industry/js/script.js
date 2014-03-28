/**
 * Created by Jeremy Suika on 3/25/14
 * functions_Industry.
 */

var grade = prompt ("What was your grade for the assignment ");
var points= prompt ("How many points is the assignment worth");

function assignmentGrade (grade, points){
    var assignmentGrade = (grade/100)*points;
    console.log(assignmentGrade);
}

assignmentGrade(grade,points)