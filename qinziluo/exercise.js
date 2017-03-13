var exercise = {};

exercise.hello = function () {
    // ----------------------------------------
    //   QUESTION 01
    //   Return a string that says "Hello!"
    // ----------------------------------------
    var str = 'Hello!';
    return str;
};

exercise.numberArray = function () {
    // ----------------------------------------
    //   QUESTION 02
    //   Return an array of numbers
    // ----------------------------------------
    var arr = [1, 1, 2, 3, 4];
    return arr;
};

exercise.nameAndAge = function () {
    // ----------------------------------------
    //   QUESTION 03
    //   Return an object with
    //   a 'name' and 'age' property
    // ----------------------------------------
    var obj = { name: 'qinzi', age: 22 };
    return obj;
};

exercise.objectArray = function () {
    // ----------------------------------------
    //   QUESTION 04
    //   Return an array of empty objects
    //   The array can have any length you like.
    // ----------------------------------------
    var emptyArray = new Array(10);
    return emptyArray;
};

exercise.addProperty = function (someObject) {
    // ----------------------------------------
    //   QUESTION 05
    //   Add the property 'name' to someObject
    //   Give 'name' any value you like.
    // ----------------------------------------
    someObject.name = 'qinziluo';
    return someObject;
};

exercise.thirdElement = function (someArray) {
    // ----------------------------------------
    //   QUESTION 06
    //   Return the third element of array
    // ----------------------------------------
    return someArray[2];
};

exercise.concatenate = function (string1, string2, string3) {
    // ----------------------------------------
    //   QUESTION 07
    //   Return the concatenation of
    //   string1, string2, string3
    // ----------------------------------------
    var str = string1 + string2 + string3;
    return str;
};

exercise.greaterThanSix = function (someNumbers) {
    // ----------------------------------------
    //   QUESTION 08
    //   Filter array for values greater than 6
    //   Return the filtered array
    // ----------------------------------------
    return someNumbers.filter(function (i) { return i > 6; });
};

exercise.getNames = function (people) {
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
    return people.map(function (element) {
        return element.name;
    });
};

exercise.getSalaryTotal = function (people) {
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
    var salaries = people.map(function (element) {
        return element.salary;
    });
    var sum = salaries.reduce(add, 0);
    function add(a, b) {
        return a + b;
    }
    return sum;
};

exercise.sortNumbers = function (someNumbers) {
    // ----------------------------------------
    //   QUESTION 11
    //   Sort numbers in array,
    //   return the sorted array
    //   Ascending or descenging.
    // ----------------------------------------
    function compareNumbers(a, b) {
        return a - b;
    };
    var newArray = someNumbers.sort(compareNumbers);
    return newArray;
};

exercise.executeCallback = function (callback) {
    // ----------------------------------------
    //   QUESTION 12
    //   Execute callback
    // ----------------------------------------
    return callback();
};

exercise.getPersonAndJob = function (payroll) {
    // ----------------------------------------
    //   QUESTION 13
    //   Return an array of people and jobs
    //  [['person', 'job'], ['person,job'];
    // ----------------------------------------
    /*var newArray=[];

    for (var i=0;i<payroll.length;i++){
        newArray.push(payroll[i][1]);
        newArray.push(payroll[i][2]);
    };
    return newArray;*/
    return 'Error: Question 13 not implemented';
};

exercise.getTotalPayroll = function (payroll) {
    // ----------------------------------------
    //   QUESTION 14
    //   Return the total payroll
    //   as an integer, use reduce
    // ----------------------------------------
    var arr = [];
    for (var i = 0; i < payroll.length; i++) {
        arr.push(Number(payroll[i][3]));
    }
    var sum = arr.reduce(add, 0);
    function add(a, b) {
        return a + b;
    }
    return sum;
    //'Error: Question 14 not implemented';
};

exercise.getEarningsAbove = function (payroll, target) {
    // ----------------------------------------
    //   QUESTION 15
    //   Return the number of people with
    //   earnings above target
    // ----------------------------------------
    return  payroll.filter(function (i) { return i[3] > target; }).length;
    //return 'Error: Question 15 not implemented';
};

exercise.getNumberOfZipCodesWith = function (payroll, num) {
    // ----------------------------------------
    //   QUESTION 16
    //   Return the number of zip codes
    //   with 'num' anywhere in them
    // ----------------------------------------
    return  payroll.filter(function (i) { return i[4].includes(num); }).length;
    //return 'Error: Question 16 not implemented';
};


module.exports = exercise;
