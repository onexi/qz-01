var exercise = {};

exercise.hello = function(){
    // ----------------------------------------
    //   QUESTION 01
    //   Return a string that says "Hello!"
    // ----------------------------------------
    
    return 'Hello!';
    //return 'Error: Question 01 not implemented';
};

exercise.numberArray = function(){
    // ----------------------------------------
    //   QUESTION 02
    //   Return an array of numbers
    // ----------------------------------------
    return [4, 3, 2, 5];
    //return 'Error: Question 02 not implemented';
};

exercise.nameAndAge = function(){
    // ----------------------------------------
    //   QUESTION 03
    //   Return an object with
    //   a 'name' and 'age' property
    // ----------------------------------------
    return {name : 'Sara', age : '26'};
    //return 'Error: Question 03 not implemented';
};

exercise.objectArray = function(){
    // ----------------------------------------
    //   QUESTION 04
    //   Return an array of empty objects
    //   The array can have any length you like.
    // ----------------------------------------
    return [{},{},{}];
    //return 'Error: Question 04 not implemented';
};

exercise.addProperty = function(someObject){
    // ----------------------------------------
    //   QUESTION 05
    //   Add the property 'name' to someObject
    //   Give 'name' any value you like.
    // ----------------------------------------
    
    someObject.name = 'Sara';
    // var name = 'Sara'

    return someObject;
    
    //return 'Error: Question 05 not implemented';
};

exercise.thirdElement = function(someArray){
    // ----------------------------------------
    //   QUESTION 06
    //   Return the third element of array
    // ----------------------------------------

    // arrays start counting at 0
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
    
    return someNumbers.filter(function(i){
        return i > 6;
    });

    
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
    
    return people.map(function(i){
        return i.name;
    });

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

    var salaries = 0;
    function add(item,i,list){
        salaries += Number(item.salary);
    }

    people.forEach(add);
    return salaries;
};

exercise.sortNumbers = function(someNumbers){
    // ----------------------------------------
    //   QUESTION 11
    //   Sort numbers in array,
    //   return the sorted array
    //   Ascending or descenging.
    // ----------------------------------------
   
    function compare(a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        if (a === b) return 0;
    }

    return someNumbers.sort(compare);
    
    //return 'Error: Question 11 not implemented';
};

exercise.executeCallback = function(callback){
    // ----------------------------------------
    //   QUESTION 12
    //   Execute callback
    // ----------------------------------------
    
    //return callback;
    return 'Error: Question 12 not implemented';
};

exercise.getPersonAndJob = function(payroll){
    // ----------------------------------------
    //   QUESTION 13
    //   Return an array of people and jobs
    //  [['person', 'job'], ['person,job'];
    // ----------------------------------------
    // var payroll = [
    // [1, 'abby hall', 'city manager ', '98538', '02132'],
    // [2, 'dana bell', 'police chief ', '83942', '02136'],
    // [3, 'cora cook', 'city attorney', '98538', '02132'],
    // [4, 'judy king', 'fire director', '70073', '02090']
    // ];

    var personAndJob = payroll.map(function(item){
        //console.log(item[1], item[3]);
        return [item[1], item[3]];
    });

    return personAndJob;

    //return 'Error: Question 13 not implemented';
};

exercise.getTotalPayroll = function(payroll){
    // ----------------------------------------
    //   QUESTION 14
    //   Return the total payroll
    //   as an integer, use reduce
    // ----------------------------------------
    
    var earnings = payroll.map(function(item){
        return Number(item[3]);
    });
    return Math.floor(earnings.reduce(function(prev, current){
        return prev + current;
    }, 0));

    //return 'Error: Question 14 not implemented';
};

exercise.getEarningsAbove = function(payroll,target){
    // ----------------------------------------
    //   QUESTION 15
    //   Return the number of people with
    //   earnings above target
    // ----------------------------------------
    var aboveTarget = payroll.filter(function(report){
        return report[3] >= target;
    });

    return aboveTarget.length;
    //return 'Error: Question 15 not implemented';
};

exercise.getNumberOfZipCodesWith = function(payroll,num){
    // ----------------------------------------
    //   QUESTION 16
    //   Return the number of zip codes
    //   with 'num' anywhere in them
    // ----------------------------------------

    // throwing an error (cannot use operator 'in')
    // var result = payroll.reduce(function(previous, current){
    //     if (num in current[4]){
    //         previous += 1;
    //     }
    //     return previous;
    // }, 0);

    return 'Error: Question 16 not implemented';
};


module.exports = exercise;
