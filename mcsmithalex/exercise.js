var exercise = {};

exercise.hello = function(){
    
    
    // ----------------------------------------
    //   QUESTION 01
    //   Return a string that says "Hello!"
    // ----------------------------------------
    return 'Hello';
};

exercise.numberArray = function(){
    
    var numbers = [1,2,3,4];
    // ----------------------------------------
    //   QUESTION 02
    //   Return an array of numbers
    // ----------------------------------------
    return numbers;
};

exercise.nameAndAge = function(){
    
    var info = {
        name: 'Alex',
        age: 21,
    };
    // ----------------------------------------
    //   QUESTION 03
    //   Return an object with
    //   a 'name' and 'age' property
    // ----------------------------------------
    return info;
};

exercise.objectArray = function(){
    var object1 = {};
    var object2 = {};
    var objectArray = [object1, object2];
    // ----------------------------------------
    //   QUESTION 04
    //   Return an array of empty objects
    //   The array can have any length you like.
    // ----------------------------------------
    return objectArray;
};

exercise.addProperty = function(someObject){
    
    someObject = {};
    someObject.name = 'Alex';
    // ----------------------------------------
    //   QUESTION 05
    //   Add the property 'name' to someObject
    //   Give 'name' any value you like.
    // ----------------------------------------
    return someObject;
};

exercise.thirdElement = function(someArray){
    
    var someArray = [1,2,3,4];
    var answer = someArray[2];
    // ----------------------------------------
    //   QUESTION 06
    //   Return the third element of array
    // ----------------------------------------
    return answer;
};

exercise.concatenate = function(string1, string2, string3){
    
    string1 = 'one';
    string2 = 'two';
    string3 = 'three';

    var concat = string1 + string2 + string3
    // ----------------------------------------
    //   QUESTION 07
    //   Return the concatenation of
    //   string1, string2, string3
    // ----------------------------------------
    return concat;
};

exercise.greaterThanSix = function(someNumbers){
    var someNumbers = [1,2,3,4,5,6,7,8,9,10];
    function isbigenough(value){
        return value > 6
    };
    var filtered = someNumbers.filter(isbigenough);
    
    
    // ----------------------------------------
    //   QUESTION 08
    //   Filter array for values greater than 6
    //   Return the filtered array
    // ----------------------------------------
    return filtered;
};

exercise.getNames = function(people){
    people = [
             {name:'peter', salary:1000},
             {name:'bruce', salary:2000},
             {name:'clark', salary:3000},
             {name:'diana', salary:4000}
         ];
    var getnames = function(people){for (i=0; i < 4; i++){
       return people[i].name
    };
};
var names = getnames(people);

/* also tried this as a map
 people = [
             {name:'peter', salary:1000},
             {name:'bruce', salary:2000},
             {name:'clark', salary:3000},
             {name:'diana', salary:4000}
         ];
   
   var getsalaries = function(people){
        return people.name;
    }; 

    salaries = people.map(getsalaries);
    */
    
    return names;
};
exercise.getSalaryTotal = function(people){
   
   people = [
             {name:'peter', salary:1000},
             {name:'bruce', salary:2000},
             {name:'clark', salary:3000},
             {name:'diana', salary:4000}
         ];
   
   var getsalaries = function(people){
        return people.name;
    };

    salaries = people.map(getsalaries);
    
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
    return salaries;
};

exercise.sortNumbers = function(someNumbers){
    
    var someNumbers = [3,6,2,8,5];

    var sorted = someNumbers.sort();
    
    // ----------------------------------------
    //   QUESTION 11
    //   Sort numbers in array,
    //   return the sorted array
    //   Ascending or descenging.
    // ----------------------------------------
    return sorted;
};

exercise.executeCallback = function(callback){
    somearray = [];
    var callback = function(){
        return 'someresult';
    
    };

    result = somearray.callback();
    
    // ----------------------------------------
    //   QUESTION 12
    //   Execute callback
    // ----------------------------------------
    return result;
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
