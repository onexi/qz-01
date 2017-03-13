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
    var numArray = [0,1,2,3,4,5];
    return numArray;
};

exercise.nameAndAge = function(){
    // ----------------------------------------
    //   QUESTION 03
    //   Return an object with
    //   a 'name' and 'age' property
    // ----------------------------------------
    var theObj = {
        'name': 'jonathan',
        'age': 30
    };
    return theObj;
};

exercise.objectArray = function(){
    // ----------------------------------------
    //   QUESTION 04
    //   Return an array of empty objects
    //   The array can have any length you like.
    // ----------------------------------------
    var emptyObject1 = {};
    var emptyObject2 = {};
    var emptyObject3 = {};
    var emptyArray = [emptyObject1,emptyObject2, emptyObject3]
    return emptyArray;
};

exercise.addProperty = function(someObject){
    // ----------------------------------------
    //   QUESTION 05
    //   Add the property 'name' to someObject
    //   Give 'name' any value you like.
    // ----------------------------------------
    someObject['name'] = 'jonathan';
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
    })
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
    var peoplenames = [];
    people.forEach(function(element,i){peoplenames.push(people[i].name);});
    return peoplenames;
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
    var sumsalaries = 0;
    people.map(function(element,i){sumsalaries += people[i].salary;})
    return sumsalaries;
};

exercise.sortNumbers = function(someNumbers){
    // ----------------------------------------
    //   QUESTION 11
    //   Sort numbers in array,
    //   return the sorted array
    //   Ascending or descenging.
    // ----------------------------------------
    var sortedArray = someNumbers.slice();
    function sortNumber(a,b) {
        return a - b;
    };
    return sortedArray.sort(sortNumber);
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
    var peoplejobs = [];
    payroll.forEach(function(element,i){
        peoplejobs.push(
            [payroll[i][1],payroll[i][2]]);
    });
    return peoplejobs;
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
    var numTarg = payroll.filter(function(element,i){
        return Number(payroll[i][3]) > target;});
    return numTarg.length;
};

exercise.getNumberOfZipCodesWith = function(payroll,num){
    // ----------------------------------------
    //   QUESTION 16
    //   Return the number of zip codes
    //   with 'num' anywhere in them
    // ----------------------------------------
    var zipcount = 0;
    // payroll.forEach(function(element,i){
    //     if (payroll[i][4].indexOf(num) > -1){
    //         zipcount+= 1;
    //     };
    // };);

    return zipcount;
};


module.exports = exercise;
