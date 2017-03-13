var exercise = {};

exercise.hello = function(){
    // ----------------------------------------
    //   QUESTION 01
    //   Return a string that says "Hello!"
    // ----------------------------------------
    return 'Hello!';
};

exercise.numberArray = function(){
    // ----------------------------------------
    //   QUESTION 02
    //   Return an array of numbers
    // ----------------------------------------
    return [0,1,3,4,5];
};

exercise.nameAndAge = function(){
    // ----------------------------------------
    //   QUESTION 03
    //   Return an object with
    //   a 'name' and 'age' property
    // ----------------------------------------

    var myObject = {};
    myObject.name = 'Jose';
    myObject.age = 27;

    return myObject;
};

exercise.objectArray = function(){
    // ----------------------------------------
    //   QUESTION 04
    //   Return an array of empty objects
    //   The array can have any length you like.
    // ----------------------------------------

    var myObjectArray = [];
    myObjectArray.push({});
    myObjectArray.push({});
    myObjectArray.push({});

    return myObjectArray;
};

exercise.addProperty = function(someObject){
    // ----------------------------------------
    //   QUESTION 05
    //   Add the property 'name' to someObject
    //   Give 'name' any value you like.
    // ----------------------------------------

    someObject.name = 'Raul';

    // Question doesn't ask for a return value, but run.js wants to log one to console, so I am returning the property
    return someObject.name; 
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
    return string1 + string2 + string3;
};

exercise.greaterThanSix = function(someNumbers){
    // ----------------------------------------
    //   QUESTION 08
    //   Filter array for values greater than 6
    //   Return the filtered array
    // ----------------------------------------

    var filteredArray = someNumbers.filter(function(element){
        return element > 6;
    });

    return filteredArray;
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

    var nameArray = people.map(function(element){
        return element.name;
    });

    return nameArray;
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

    var salaries = people.map(function(element){
        return element.salary;
    });

    var salaryTotal = salaries.reduce(function(total, element){
        return total + element;
    });

    return salaryTotal;
};

exercise.sortNumbers = function(someNumbers){
    // ----------------------------------------
    //   QUESTION 11
    //   Sort numbers in array,
    //   return the sorted array
    //   Ascending or descenging.
    // ----------------------------------------

    var sorted = [];
    sorted.push(someNumbers[0]);

    for(var i = 1; i < someNumbers.length; i++){
        if (someNumbers[i] > sorted[i-1]){ 
            sorted.push(someNumbers[i]);
        } else {
            sorted.unshift(someNumbers[i]);
        }
    }

    return 'Q11: Not implemented';
};

exercise.executeCallback = function(callback){
    // ----------------------------------------
    //   QUESTION 12
    //   Execute callback
    // ----------------------------------------
    return callback();
};

exercise.getPersonAndJob = function(payroll){
    // ----------------------------------------
    //   QUESTION 13
    //   Return an array of people and jobs
    //  [['person', 'job'], ['person,job'];
    // ----------------------------------------

    var personJobArray = payroll.map(function(element){
        return [element[1], element[2]];
    });
    
    return personJobArray;
};

exercise.getTotalPayroll = function(payroll){
    // ----------------------------------------
    //   QUESTION 14
    //   Return the total payroll
    //   as an integer, use reduce
    // ----------------------------------------

    var payrollArray = payroll.map(function(element){
        return Number(element[3]);
    });

    var totalPayroll = payrollArray.reduce(function(total, element){
         return total + element;
    });

    return totalPayroll;
};

exercise.getEarningsAbove = function(payroll,target){
    // ----------------------------------------
    //   QUESTION 15
    //   Return the number of people with
    //   earnings above target
    // ----------------------------------------

    var payrollArray = payroll.map(function(element){
        return Number(element[3]);
    });

    var filteredArray = payrollArray.filter(function(element){
        return element > target;
    });

    return filteredArray.length;
};

exercise.getNumberOfZipCodesWith = function(payroll,num){
    // ----------------------------------------
    //   QUESTION 16
    //   Return the number of zip codes
    //   with 'num' anywhere in them
    // ----------------------------------------

    var zipCodes = payroll.map(function(element){
        return element[4];
    });

    var filtered = zipCodes.filter(function(element){

        for (var i = 0; i < 5; i++){
            hasNum = element[i] === num;
            if (hasNum) { break; }
        }
    
        return hasNum;

    });

    return filtered.length;
};


module.exports = exercise;
