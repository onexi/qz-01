var exercise = {};

exercise.hello = function(){
    // ----------------------------------------
    //   QUESTION 01
    //   Return a string that says "Hello!"
    // ----------------------------------------
    return 'Hello';
};

exercise.numberArray = function(){
    // ----------------------------------------
    //   QUESTION 02
    //   Return an array of numbers
    // ----------------------------------------
    var num = [1,2,3,4,5,6];
    return num;
};

exercise.nameAndAge = function(){
    // ----------------------------------------
    //   QUESTION 03
    //   Return an object with
    //   a 'name' and 'age' property
    // ----------------------------------------
   
    var person = {
        name: 'Lee',
        age: 35
    };

    return person; 
};

exercise.objectArray = function(){
    // ----------------------------------------
    //   QUESTION 04
    //   Return an array of empty objects
    //   The array can have any length you like.
    // ----------------------------------------
    var person = {
        name: 'Lee',
        age: 35
    };

    var animals = {
        name: 'tiger',
        age: 5
    };
   
    var arr = [person, animals];

    return arr;
};

exercise.addProperty = function(someObject){
    // ----------------------------------------
    //   QUESTION 05
    //   Add the property 'name' to someObject
    //   Give 'name' any value you like.
    // ----------------------------------------
 // ;  var name = 'Lee';

    someObject.name= 'Lee';


    return someObject;
};

exercise.thirdElement = function(someArray){
    // ----------------------------------------
    //   QUESTION 06
    //   Return the third element of array
    // ----------------------------------------
    return someArray[2];
};

exercise.concatenate = function(string1, string2, string3){
    // ----------------------------------------
    //   QUESTION 07
    //   Return the concatenation of
    //   string1, string2, string3
    // ----------------------------------------
    var newStr = string1.concat(string2, string3);

    return newStr;
};

exercise.greaterThanSix = function(someNumbers){
    // ----------------------------------------
    //   QUESTION 08
    //   Filter array for values greater than 6
    //   Return the filtered array
    // ----------------------------------------

    return someNumbers.filter ( function (num){
        return num>6;
    });
};

exercise.getNames = function(people){
    // ----------------------------------------
    //   QUESTION 09
    //   Return a new array with
    //   the "name" property values.
    //
    //   Example, for:
    //   people = [
    //         {name:'peter', age:18},
    //         {name:'bruce', age:22},
    //         {name:'clark', age:25},
    //         {name:'diana', age:29}
    //   ];
    //
    //   You should return
    //     ['peter','bruce','clark','diana']
    // ----------------------------------------


    return people.map(function(obj) {
        return obj.name;

    });
    
};

exercise.getSalaryTotal = function(people){
    // ----------------------------------------
    //   QUESTION 10
    //   Return the sum of all the
    //   salaries in array.
    //
    //   Example, for:
    //   people = [
    //         {name:'peter', salary:1000},
    //         {name:'bruce', salary:2000},
    //         {name:'clark', salary:3000},
    //         {name:'diana', salary:4000}
    //     ];
    //
    //   you should return
    //     10000
    // ----------------------------------------

    var total = 0;

    return people.forEach(function (num) {
       // var a = Number(prev.salary);
       // var b = Number(curr.salary);
       // console.log(num.salary);
       // console.log(b);
        return total+Number(num.salary);
        
    },0);
};

exercise.sortNumbers = function(someNumbers){
    // ----------------------------------------
    //   QUESTION 11
    //   Sort numbers in array,
    //   return the sorted array
    //   Ascending or descenging.
    // ----------------------------------------
    function compare(a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        if (a === b) return 0;      
    };

    return someNumbers.sort(compare);
};

exercise.executeCallback = function(callback){
    // ----------------------------------------
    //   QUESTION 12
    //   Execute callback
    // ----------------------------------------
    return callback ();
};

exercise.getPersonAndJob = function(payroll){
    // ----------------------------------------
    //   QUESTION 13
    //   Return an array of people and jobs
    //  [['person', 'job'], ['person,job'];
    // ----------------------------------------

    var arr = [];
    arr = payroll.map(function(obj){
        var arr1 = [];
        arr1.push(obj[1]);
        arr1.push(obj[2]);
        return arr1;
    });
    return arr;
};

exercise.getTotalPayroll = function(payroll){
    // ----------------------------------------
    //   QUESTION 14
    //   Return the total payroll
    //   as an integer, use reduce
    // ----------------------------------------


   var tot =  payroll.reduce(function(previous,current) {
     //   console.log(current[3]);
     //   console.log(previous[3]);
        var total = Number(previous[3]) + Number(current [3]);
        return Number(total);

    },0);  
return tot;
};

exercise.getEarningsAbove = function(payroll,target){

function isBigEnough(element) {
    var sal = Number(payroll[3]);
    var comparison =sal >=target;
    return comparison;
}
    return payroll.filter(isBigEnough);
};

exercise.getNumberOfZipCodesWith = function(payroll,num){
    // ----------------------------------------
    //   QUESTION 16
    //   Return the number of zip codes
    //   with 'num' anywhere in them
    // ----------------------------------------
    return 'Error: Question 16 not implemented';
};


module.exports = exercise;
