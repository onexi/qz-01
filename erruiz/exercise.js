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
    return [1,2,3,4];
};

exercise.nameAndAge = function(){
    // ----------------------------------------
    //   QUESTION 03
    //   Return an object with
    //   a 'name' and 'age' property
    // ----------------------------------------
    return {'name': 'Erick','age': 26};
};

exercise.objectArray = function(){
    // ----------------------------------------
    //   QUESTION 04
    //   Return an array of empty objects
    //   The array can have any length you like.
    // ----------------------------------------
    return [{},{}];
};

exercise.addProperty = function(someObject){
    // ----------------------------------------
    //   QUESTION 05
    //   Add the property 'name' to someObject
    //   Give 'name' any value you like.
    // ----------------------------------------
    return someObject.name = 'Erick';
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
    var ifGreater = function(element){
        return element > 6;
    };


    return someNumbers.filter(ifGreater);
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
    var getNames = function(obj){
        return obj.name;
    };

    return people.map(getNames);
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
    var getSalary = function(obj){
        return obj.salary;
    };

    var salaries = people.map(getSalary);

    var sum = function(accumulator,element){
        return accumulator + element;
    };

    return salaries.reduce(sum);
};


exercise.sortNumbers = function(someNumbers){
    // ----------------------------------------
    //   QUESTION 11
    //   Sort numbers in array,
    //   return the sorted array
    //   Ascending or descenging.
    // ----------------------------------------
    var compareNumbers = function(a,b){
        return a - b;
    };

    //returns the array in ascending order
    return someNumbers.sort(compareNumbers);
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
    var extractPersonandJob = function(arr){
        return [arr[1],arr[2]];
    };

    return payroll.map(extractPersonandJob);
};

exercise.getTotalPayroll = function(payroll){
    // ----------------------------------------
    //   QUESTION 14
    //   Return the total payroll
    //   as an integer, use reduce
    // ----------------------------------------
    var getSalary = function(arr){
        return Number(arr[3]);
    };

    var salaries = payroll.map(getSalary);

    var sum = function(accumulator,element){
        return accumulator + element;
    };

    return salaries.reduce(sum);
};

exercise.getEarningsAbove = function(payroll,target){
    // ----------------------------------------
    //   QUESTION 15
    //   Return the number of people with
    //   earnings above target
    // ----------------------------------------
    var ifGreater = function(element){
        return element > target;
    };

    var getSalary = function(arr){
        return Number(arr[3]);
    };

    var salaries = payroll.map(getSalary);

    var filteredSalaries = salaries.filter(ifGreater);

    return filteredSalaries.length;
};

exercise.getNumberOfZipCodesWith = function(payroll,num){
    // ----------------------------------------
    //   QUESTION 16
    //   Return the number of zip codes
    //   with 'num' anywhere in them
    // ----------------------------------------
    var getZipCodes = function(arr){
        return arr[4];
    };

    var zipCodes = payroll.map(getZipCodes);

    var splitZip = function(element){
        return element.split('');
    };
    
    //stores the zip codes in an array of arrays, split up into their corresponding digits
    var zipDigits = zipCodes.map(splitZip);
    
    return zipDigits;
};

var payroll = [
 [1, 'abby hall', 'city manager ', '98538', '02132'],
 [2, 'dana bell', 'police chief ', '83942', '02136'],
 [3, 'cora cook', 'city attorney', '98538', '02132'],
 [4, 'judy king', 'fire director', '70073', '02090']
];
var num = '3';

console.log(exercise.getNumberOfZipCodesWith(payroll,num));

module.exports = exercise;
