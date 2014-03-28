/**
 * Created by Jeremy Suika on 3/25/14
 * functions_Industry.
 */

//This one has to do with Full Sail grades, it is part of my industry. Since I am no working in the industry, it is hard to think of creative formulas for something I have not been in.


var grade = prompt ("What was your grade for 1st assignment? (do not use % sign) ");  //the arguments, This will be used to collect the data for invoking the function, grade X points then X 100
var points= prompt ("How many points is the 1st assignment worth?");                    //This will be used to collect the data for invoking, the points X the grade X100

var finalPoints=assignmentGrade(grade,points);      //defining the function

function assignmentGrade (grade, points){      //the paramaters of the function to figure out how my grades are for web design assignments
    var assignmentGrade = (grade/100)*points;   //same as line 8, and 9
    return assignmentGrade;                    //the return option allows me to use function data in the Else if Statements
}

assignmentGrade(grade,points);  //calling the function, grade and points are the arguments


var grade2 = prompt ("What was your grade for the 2nd assignment? (do not use % sign) ");  //the arguments, This will be used to collect for 2nd assignment
var points2= prompt ("How many points is the 2nd assignment worth?");       ////This will be used to collect the data for invoking,

var finalPoints2=assignmentGrade2(grade2,points2);  //defining the second function

function assignmentGrade2 (grade2, points2){        //the paramaters of the function to figure out how my grades are for the 2nd assignment
    var assignmentGrade2 = (grade2/100)*points2;    //same as line 15
   console.log("If a got a "+grade2+"% and an assignment was worth "+ points2+ " points, I now have a total of "+assignmentGrade2+ " points for that assignment.");  //After the info is called, this is where both data will be displayed, both grades or points
    return assignmentGrade2;    //the second return statement allows me to use the function data elsewhere.
}

assignmentGrade2(grade,points);  ////calling the function, grade and points are the arguments



var completeGrades= (finalPoints+finalPoints2) / (Number(points)+Number(points2));   //This is the points from assignment 1 + assignment 2,
                                                                                           // divided by the total amount of points for both of them


if (completeGrades<=.59){                                                                           //if the grades average was below a .59 ot would be a F so its displayed in the console.
    console.log("With the two assignments graded,you are failing the class, you have a F.");
}else if (completeGrades<=.69){
    console.log("With the two assignments graded,you are not doing well, you have a D.");           //if the grades average was below a .69 ot would be a D so its displayed in the console.
}else if (completeGrades<=.79){
    console.log("With the two assignments graded,you got a C on the class");                        //if the grades average was below a .79 ot would be a C so its displayed in the console.
}else if (completeGrades<=.89){
    console.log("With the two assignments graded,you got a B in the class, congrats");              ////if the grades average was below a .89 ot would be a F so its displayed in the console.
}else{
    console.log("With the two assignments graded, You have an A, awesome!");                        //and anything else it would be an A, for your assignment
}


