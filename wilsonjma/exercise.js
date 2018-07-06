var exercise = {};

exercise.hello = function(){
    var hello = 'Hello';
    return hello;

    // ----------------------------------------
    //   QUESTION 01
    //   Return a string that says "Hello!"
    // ----------------------------------------
    return 'Error: Question 01 not implemented';
};

exercise.numberArray = function(){
    var arrayOfNumbers = [0,1,2,3,4,5];
    return arrayOfNumbers;
    // ----------------------------------------
    //   QUESTION 02
    //   Return an array of numbers
    // ----------------------------------------
    return 'Error: Question 02 not implemented';
};

exercise.nameAndAge = function(){
    var nameage = new Object();
    nameage.age  = 'age';
    nameage.name = 'name';
    return nameage;
    // ----------------------------------------
    //   QUESTION 03
    //   Return an object with
    //   a 'name' and 'age' property
    // ----------------------------------------
    return 'Error: Question 03 not implemented';
};

exercise.objectArray = function(){
    var empty1 = {};
    var empty2 = {};
    var emptyArray = [empty1, empty2];
    return emptyArray;
    // ----------------------------------------
    //   QUESTION 04
    //   Return an array of empty objects
    //   The array can have any length you like.
    // ----------------------------------------
    return 'Error: Question 04 not implemented';
};

exercise.addProperty = function(someObject){
    return someObject.name = 'Josh!'
    
    // ----------------------------------------
    //   QUESTION 05
    //   Add the property 'name' to someObject
    //   Give 'name' any value you like.
    // ----------------------------------------
    return 'Error: Question 05 not implemented';
};

exercise.thirdElement = function(someArray){
    return someArray[2];
    // ----------------------------------------
    //   QUESTION 06
    //   Return the third element of array
    // ----------------------------------------
    return 'Error: Question 06 not implemented';
};

exercise.concatenate = function(string1, string2, string3){
    var concatentation = string1.concat(string2, string3);
    return concatentation;
    // ----------------------------------------
    //   QUESTION 07
    //   Return the concatenation of
    //   string1, string2, string3
    // ----------------------------------------
    return 'Error: Question 07 not implemented';
};

exercise.greaterThanSix = function(someNumbers){
    
    aboveSix = function(item){
        return item > 6;
    }
    return someNumbers.filter(aboveSix);
    // ----------------------------------------
    //   QUESTION 08
    //   Filter array for values greater than 6
    //   Return the filtered array
    // ----------------------------------------
    return 'Error: Question 08 not implemented';
};

exercise.getNames = function(people){
    var row = function(row){
        [row] = [0]; 
    }
    people = [
    {name:'peter', age:18},
    {name:'bruce', age:22},
    {name:'clark', age:25},
    {name:'diana', age:29}
    ];
    return [people.name.map]
    
    
     
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
    return 'Error: Question 09 not implemented';
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
    return 'Error: Question 10 not implemented';
};

exercise.sortNumbers = function(someNumbers){
    var someNumbers = [1,2,3,4,5,4,3,2,1];
    return someNumbers.sort();
    // ----------------------------------------
    //   QUESTION 11
    //   Sort numbers in array,
    //   return the sorted array
    //   Ascending or descenging.
    // ----------------------------------------
    return 'Error: Question 11 not implemented';
};

exercise.executeCallback = function(callback){
    // ----------------------------------------
    //   QUESTION 12
    //   Execute callback
    // ----------------------------------------
    return 'Error: Question 12 not implemented';
};

exercise.getPersonAndJob = function(payroll){
    // ----------------------------------------
    //   QUESTION 13
    //   Return an array of people and jobs
    //  [['person', 'job'], ['person,job'];
    // ----------------------------------------
    return 'Error: Question 13 not implemented';
};

exercise.getTotalPayroll = function(payroll){
    // ----------------------------------------
    //   QUESTION 14
    //   Return the total payroll
    //   as an integer, use reduce
    // ----------------------------------------
    return 'Error: Question 14 not implemented';
};

exercise.getEarningsAbove = function(payroll,target){
    var aboveTarget = function(item){
        return item > target;
    }
    return payroll.filter(aboveTarget);
    // ----------------------------------------
    //   QUESTION 15
    //   Return the number of people with
    //   earnings above target
    // ----------------------------------------
    return 'Error: Question 15 not implemented';
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
