var exercise = {};

exercise.hello = function(){
    // ----------------------------------------
    //   QUESTION 01
    //   Return a string that says "Hello!"
    // ----------------------------------------
    //return 'Error: Question 01 not implemented';
    var hello1 = 'Hello';
    return hello1;
};

exercise.numberArray = function(){
    // ----------------------------------------
    //   QUESTION 02
    //   Return an array of numbers
    // ----------------------------------------
    //return 'Error: Question 02 not implemented';

    return [0,1,6];
};

exercise.nameAndAge = function(){
    // ----------------------------------------
    //   QUESTION 03
    //   Return an object with
    //   a 'name' and 'age' property
    // ----------------------------------------
    //return 'Error: Question 03 not implemented';

    return {name: 'Ben', age: 29};
};

exercise.objectArray = function(){
    // ----------------------------------------
    //   QUESTION 04
    //   Return an array of empty objects
    //   The array can have any length you like.
    // ----------------------------------------
    //return 'Error: Question 04 not implemented';
    return [{},{},{},{}];
};

exercise.addProperty = function(someObject){
    // ----------------------------------------
    //   QUESTION 05
    //   Add the property 'name' to someObject
    //   Give 'name' any value you like.
    // ----------------------------------------
    //return 'Error: Question 05 not implemented';
    someObject.name = 'Jeff';
    return someObject;
};

exercise.thirdElement = function(someArray){
    // ----------------------------------------
    //   QUESTION 06
    //   Return the third element of array
    // ----------------------------------------
    //return 'Error: Question 06 not implemented';

    return someArray[2];
};

exercise.concatenate = function(string1, string2, string3){
    // ----------------------------------------
    //   QUESTION 07
    //   Return the concatenation of
    //   string1, string2, string3
    // ----------------------------------------
    //return 'Error: Question 07 not implemented';
    var newString7 = '';
    return newString7.concat(string1, string2, string3);
};

exercise.greaterThanSix = function(someNumbers){
    // ----------------------------------------
    //   QUESTION 08
    //   Filter array for values greater than 6
    //   Return the filtered array
    // ----------------------------------------
    //return 'Error: Question 08 not implemented';

    var newArray8 = someNumbers.filter(function(item, index, array){
        return item>6;
    });
    return newArray8;
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
    //return 'Error: Question 09 not implemented';
    var peopleArray9 = [];

    people.forEach(function(item, index, array){
        peopleArray9.push(item.name);
    });
    return peopleArray9;
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
    //return 'Error: Question 10 not implemented';

    var salaryArray10 = [];

    people.forEach(function(item, index, array){
        salaryArray10.push(Number(item.salary));
    });

    var salarySum10 = salaryArray10.reduce(function(prev, curr){
        return prev+curr;
    });
    return salarySum10;
};

exercise.sortNumbers = function(someNumbers){
    // ----------------------------------------
    //   QUESTION 11
    //   Sort numbers in array,
    //   return the sorted array
    //   Ascending or descenging.
    // ----------------------------------------
    //return 'Error: Question 11 not implemented';
    var newArray11 = someNumbers.sort(function(a,b){
        if(a<b) return -1;
        if(a>b) return 1;
        if(a===b) return 0;
    });
    return newArray11;
};

exercise.executeCallback = function(callback){
    // ----------------------------------------
    //   QUESTION 12
    //   Execute callback
    // ----------------------------------------
    //return 'Error: Question 12 not implemented';
    callback();
};

exercise.getPersonAndJob = function(payroll){
    // ----------------------------------------
    //   QUESTION 13
    //   Return an array of people and jobs
    //  [['person', 'job'], ['person,job'];
    // ----------------------------------------
    return 'Error: Question 13 not implemented';
    /*
    var peopleArray = [];
    payroll.forEach(function(item, index, array){
        peopleArray.push(item[1]);
        peopleArray.push(item[2]);
    });
        
    return peopleArray;
    */

};

exercise.getTotalPayroll = function(payroll){
    // ----------------------------------------
    //   QUESTION 14
    //   Return the total payroll
    //   as an integer, use reduce
    // ----------------------------------------
    //return 'Error: Question 14 not implemented';
    var payrollTotal = payroll.reduce(function(previous, current){
        return previous+Number(current[3]);
    },0);
    return payrollTotal;
};

exercise.getEarningsAbove = function(payroll,target){
    // ----------------------------------------
    //   QUESTION 15
    //   Return the number of people with
    //   earnings above target
    // ----------------------------------------
    //return 'Error: Question 15 not implemented';
    var earnings15 = [];

    payroll.forEach(function(item, index, array){
        earnings15.push(Number(item[3]));
    });

    var higherEarnings15 = earnings15.filter(function(item,index,array){
        return item > target;
    });

    return higherEarnings15.length;
};

exercise.getNumberOfZipCodesWith = function(payroll,num){
    // ----------------------------------------
    //   QUESTION 16
    //   Return the number of zip codes
    //   with 'num' anywhere in them
    // ----------------------------------------
    //return 'Error: Question 16 not implemented';

    var zipCodes = [];

    payroll.forEach(function(item, index, array){
        zipCodes.push(item[4]);
    });

    var numCodes = [];

    zipCodes.forEach(function(item, index, array){
        if(item.includes(Number(num))) numCodes.push(item);
    });

    return numCodes.length;

};


module.exports = exercise;
