var exercise = {};

exercise.hello = function () {
    var string = "hello";
    return string;
    //    return 'Error: Question 01 not implemented';
};

exercise.numberArray = function () {


    return [1, 2, 3];
};

exercise.nameAndAge = function () {

    var x = {
        name: 'Shai',
        Age: 31
    };
    return x;

};

exercise.objectArray = function () {
    var x = [];
    for (var i = 0; i < 5; i++) {
        var obj = {};
        x.push(obj);
    };

    return x;
};

exercise.addProperty = function (someObject) {

    // ----------------------------------------
    //   QUESTION 05
    //   Add the property 'name' to someObject
    //   Give 'name' any value you like.
    // ----------------------------------------


    return someObject.name = 'Shai';
};


exercise.thirdElement = function (someArray) {
    return someArray[2];
};

exercise.concatenate = function (string1, string2, string3) {
    var string = string1 + string2 + string3;
    return string;
};

exercise.greaterThanSix = function (someNumbers) {

    var num = someNumbers.filter(function (num) {
        return num > 6;
    });

    // ----------------------------------------
    //   QUESTION 08
    //   Filter array for values greater than 6
    //   Return the filtered array
    // ----------------------------------------
    return num;
};

exercise.getNames = function (people) { //check

    var names = people.map(function (person) {
        return person.name;
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
    return names;
};


exercise.getSalaryTotal = function (people) {

    var salaries = people.map(function (person) {
        return person.salary;
    });

    var totalsal = salaries.reduce(function (total, salary) {
        return Number(total) + Number(salary);
    });
    return totalsal;

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

exercise.sortNumbers = function (someNumbers) { // doesnt work return!!!

    var sortedArray = someNumbers.sort(function (a, b) {
        return a - b
    });
    // ----------------------------------------
    //   QUESTION 11
    //   Sort numbers in array,
    //   return the sorted array
    //   Ascending or descenging.
    // ----------------------------------------
    return sortedArray;
};

exercise.executeCallback = function (callback) { //?? check i the callback is executed;

    //var x = callback({});

    // ----------------------------------------
    //   QUESTION 12
    //   Execute callback
    // ----------------------------------------
    return callback;
};

exercise.getPersonAndJob = function (payroll) {

    var genarray = [];
    for (var i = 0; i < payroll.length; i++) {
        var x = [];
        x.push(payroll[1]);
        x.push(payroll[2]);
        genarray.push(x);
    };
    // ----------------------------------------
    //   QUESTION 13
    //   Return an array of people and jobs
    //  [['person', 'job'], ['person,job'];
    // ----------------------------------------
    return genarray;
};

exercise.getTotalPayroll = function (payroll) {
    var totalsal;
    for (var i = 0; i < payroll.length; i++) {
        totalsal = Number(payroll[i][3]);
    };
   
    // ----------------------------------------
    //   QUESTION 14
    //   Return the total payroll
    //   as an integer, use reduce
    // ----------------------------------------
    return totalsal;
};
exercise.getEarningsAbove = function (payroll, target) {
    // ----------------------------------------
    //   QUESTION 15
    //   Return the number of people with
    //   earnings above target
    // ----------------------------------------
    return 'Error: Question 15 not implemented';
};

exercise.getNumberOfZipCodesWith = function (payroll, num) {
    // ----------------------------------------
    //   QUESTION 16
    //   Return the number of zip codes
    //   with 'num' anywhere in them
    // ----------------------------------------
    return 'Error: Question 16 not implemented';
};


module.exports = exercise;
