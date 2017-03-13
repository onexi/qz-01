var exercise = {};

exercise.hello = function(){
    // ----------------------------------------
    //   QUESTION 01
    //   Return a string that says "Hello!"
    // ----------------------------------------
    var newString= 'Hello';
    return newString;
    
    //return 'Error: Question 01 not implemented';

    
};

exercise.numberArray = function(){
    // ----------------------------------------
    //   QUESTION 02
    //   Return an array of numbers
    // ----------------------------------------
    var newArray= [1, 2, 3, 4];
    return newArray;
    
    //return 'Error: Question 02 not implemented';
};

exercise.nameAndAge = function(){
    // ----------------------------------------
    //   QUESTION 03
    //   Return an object with
    //   a 'name' and 'age' property
    // ----------------------------------------
    
    var newObject= {name: 'Jon', age: 30};
    return newObject;
    
    //return 'Error: Question 03 not implemented';
};

exercise.objectArray = function(){
    // ----------------------------------------
    //   QUESTION 04
    //   Return an array of empty objects
    //   The array can have any length you like.
    // ----------------------------------------
    
    var newObjectarray= [{},{},{}];
    return newObjectarray;
    
    //return 'Error: Question 04 not implemented';
};

exercise.addProperty = function(someObject){
    // ----------------------------------------
    //   QUESTION 05
    //   Add the property 'name' to someObject
    //   Give 'name' any value you like.
    // ----------------------------------------
    
    someObject.name= 'Dave';
    return someObject.name;
    
    
    //return 'Error: Question 05 not implemented';
};

exercise.thirdElement = function(someArray){
    // ----------------------------------------
    //   QUESTION 06
    //   Return the third element of array
    // ----------------------------------------
    
    return someArray[2];
    
    //return 'Error: Question 06 not implemented';
};

exercise.concatenate = function(string1, string2, string3){
    // ----------------------------------------
    //   QUESTION 07
    //   Return the concatenation of
    //   string1, string2, string3
    // ----------------------------------------
    
    return string1+string2+string3;
    
    
    //return 'Error: Question 07 not implemented';
};

exercise.greaterThanSix = function(someNumbers){
    // ----------------------------------------
    //   QUESTION 08
    //   Filter array for values greater than 6
    //   Return the filtered array
    // ----------------------------------------
    
    var filtered=someNumbers.filter(function(item){
        return item>6;
    });

    return filtered;
    
    //return 'Error: Question 08 not implemented';
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
    
    var nameArray= people.map(function(item){
        return item.name;
    });

    return nameArray;
    //return 'Error: Question 09 not implemented';
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


    var sumOfsalaries = 0;
    
    people.forEach(function(item, i, wholething){
        sumOfsalaries+=item.salary;
    });
 
    return sumOfsalaries;
    
    //return 'Error: Question 10 not implemented';
};

exercise.sortNumbers = function(someNumbers){
    // ----------------------------------------
    //   QUESTION 11
    //   Sort numbers in array,
    //   return the sorted array
    //   Ascending or descenging.
    // ----------------------------------------
    var sortedArray=[];

    function compare(a, b) {
	    if (a < b) return -1;
	    if (a > b) return 1;
	    if (a === b) return 0;  	
    }


    return sortedArray= someNumbers.sort(compare);
    
    
    //return 'Error: Question 11 not implemented';
};

exercise.executeCallback = function(callback){
    // ----------------------------------------
    //   QUESTION 12
    //   Execute callback
    // ----------------------------------------
    
    return callback();
    
    //return 'Error: Question 12 not implemented';
};

exercise.getPersonAndJob = function(payroll){
    // ----------------------------------------
    //   QUESTION 13
    //   Return an array of people and jobs
    //  [['person', 'job'], ['person,job'];
    // ----------------------------------------
    
    var newArray= [];

    newArray= payroll.map(function(item){
        return [item[1], item[2]];

    });
    return newArray;
    //return 'Error: Question 13 not implemented';
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
