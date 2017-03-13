var exercise = {};

exercise.hello = function(){
    var a = 'Hello';// ----------------------------------------
    //   QUESTION 01
    //   Return a string that says "Hello!"
    // ----------------------------------------
    return a;
};

exercise.numberArray = function(){
    var a = [1,2,3];
    // ----------------------------------------
    //   QUESTION 02
    //   Return an array of numbers
    // ----------------------------------------
    return a;
};

exercise.nameAndAge = function(){
    var a = {
        name : 'Peter',
        age : '23'
    };
    // ----------------------------------------
    //   QUESTION 03
    //   Return an object with
    //   a 'name' and 'age' property
    // ----------------------------------------
    return a;
};

exercise.objectArray = function(){
    var a = [{},{}];
    // ----------------------------------------
    //   QUESTION 04
    //   Return an array of empty objects
    //   The array can have any length you like.
    // ----------------------------------------
    return a;
};

exercise.addProperty = function(someObject){
    // ----------------------------------------
    //   QUESTION 05
    //   Add the property 'name' to someObject
    //   Give 'name' any value you like.
    // ----------------------------------------
    return 'Error: Question 05 not implemented';
};

exercise.thirdElement = function(someArray){
    // ----------------------------------------
    //   QUESTION 06
    //   Return the third element of array
    // ----------------------------------------
    return someArray[2];
};

exercise.concatenate = function(string1, string2, string3){
    var str = string1.concat(string2);
    var newStr = str.concat(string3);
    // ----------------------------------------
    //   QUESTION 07
    //   Return the concatenation of
    //   string1, string2, string3
    // ----------------------------------------
    return newStr;
};

exercise.greaterThanSix = function(someNumbers){
    var newArr = [];
    someNumbers.forEach(function(element){
        if(element > 6){
            newArr.push(element);
        }
    });
    // ----------------------------------------
    //   QUESTION 08
    //   Filter array for values greater than 6
    //   Return the filtered array
    // ----------------------------------------
    return newArr;
};

exercise.getNames = function(people){
    var name = [];
    people.forEach(function(){
        name.push(people.name);
    });
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
    return name;
};

exercise.getSalaryTotal = function(people){
    var sum = 0;
    people.forEach(function(){
        sum += Number(people.salary);
    });
    var sumArry = [];
    return sumArry.push(JSON.stringify(sum));
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
};

// exercise.sortNumbers = function(someNumbers){
//     // ----------------------------------------
//     //   QUESTION 11
//     //   Sort numbers in array,
//     //   return the sorted array
//     //   Ascending or descenging.
//     // ----------------------------------------
//     return 'Error: Question 11 not implemented';
// };

// exercise.executeCallback = function(callback){
//     // ----------------------------------------
//     //   QUESTION 12
//     //   Execute callback
//     // ----------------------------------------
//     return 'Error: Question 12 not implemented';
// };

exercise.getPersonAndJob = function(payroll){
    var a = [];
    payroll.forEach(function(element){
        a.push(element.slice(1,3));
    });
    // ----------------------------------------
    //   QUESTION 13
    //   Return an array of people and jobs
    //  ['person', 'job'], ['person,job'];
    // ----------------------------------------
    return 'Error: Question 13 not implemented';
};

exercise.getTotalPayroll = function(payroll){
    var total = 0;
    var pay = [];
    payroll.forEach(function(element){
        payroll.push(element[3]);
    });
    pay.reduce(function(previous,current){
        total = Number(previous) + Number(current);
    });
    // ----------------------------------------
    //   QUESTION 14
    //   Return the total payroll
    //   as an integer, use reduce
    // ----------------------------------------
    return total;
};

exercise.getEarningsAbove = function(payroll,target){   
    var people = [];
    payroll.forEach(function(element){
        if(element[3]>target){
            people.push(element);
        }
    });
    // ----------------------------------------
    //   QUESTION 15
    //   Return the number of people with
    //   earnings above target
    // ----------------------------------------
    return people.length;
};

exercise.getNumberOfZipCodesWith = function(payroll,num){
    var zipCodes = [];
    payroll.forEach(function(element){
        zipCodes.push = element[4];
    });
    var newzip = [];
    zipCodes.forEach(function(element){
        if (!zipCodes.includes(element){
            new.push(element);
        }
    });
    return newzip.length;
    // ----------------------------------------
    //   QUESTION 16
    //   Return the number of zip codes
    //   with 'num' anywhere in them
    // ----------------------------------------
};


module.exports = exercise;
