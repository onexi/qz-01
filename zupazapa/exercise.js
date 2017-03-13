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
    return [1, 2, 3, 4, 5];
};

exercise.nameAndAge = function(){
    // ----------------------------------------
    //   QUESTION 03
    //   Return an object with
    //   a 'name' and 'age' property
    // ----------------------------------------
    return {'name': 'Tim', 'age': 32};
};

exercise.objectArray = function(){
    // ----------------------------------------
    //   QUESTION 04
    //   Return an array of empty objects
    //   The array can have any length you like.
    // ----------------------------------------
    return [{ }, { }, { }];
};

exercise.addProperty = function(someObject){
    // ----------------------------------------
    //   QUESTION 05
    //   Add the property 'name' to someObject
    //   Give 'name' any value you like.
    // ----------------------------------------
    var someObject = {};
    var name = {'name': 'tim'};
    return someObject = name;
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
    return string1+string2+string3;
};

exercise.greaterThanSix = function(someNumbers){
    // ----------------------------------------
    //   QUESTION 08
    //   Filter array for values greater than 6
    //   Return the filtered array
    // ----------------------------------------
    var newArr = someNumbers.filter(function(number){
        if (number>6) return true;
        else return false;
    });
    return newArr;
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

    var peter = people[0];
    var bruce = people[1];
    var clark = people[2];
    var diana = people[3];
    return (peter.name) +' '+ (bruce.name) +' '+ (clark.name) +' '+ (diana.name);
    // var name = function(obj){
    //     return obj.name;
    // };

    // var newArr = [];
    // for (var i=0; i<people.length; i++){
    //     return newArr.push(name);
    // }
    // return newArr;

    // var newArr = people.forEach(name);
    // return newArr;

 
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
    var peter = people[0];
    var bruce = people[1];
    var clark = people[2];
    var diana = people[3];
    return Number(peter.salary) + Number(bruce.salary) + Number(clark.salary) + Number(diana.salary);

};

exercise.sortNumbers = function(someNumbers){
    // ----------------------------------------
    //   QUESTION 11
    //   Sort numbers in array,
    //   return the sorted array
    //   Ascending or descenging.
    // ----------------------------------------
    return someNumbers.sort();
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
    return 'Error: Question 13 not implemented';
};

exercise.getTotalPayroll = function(payroll){
    // ----------------------------------------
    //   QUESTION 14
    //   Return the total payroll
    //   as an integer, use reduce
    // ----------------------------------------
    var getPayroll = function (row){
        return row[3]; 
    };
    var payrolls = []; 

    var buildPayrollArray = function(x) {
        var y = getPayroll(x);
        payrolls.push(Number(y)); 
    };
    payroll.forEach(buildPayrollArray); 
    
    var rounded = function(number){
        return number; 
    };
    var roundedPayroll = payrolls.map(rounded); 

    var total = roundedPayroll.reduce(function(previous, current){
        return previous + current;
    }, 0); 
    return Math.floor(total); 
};

exercise.getEarningsAbove = function(payroll,target){
    // ----------------------------------------
    //   QUESTION 15
    //   Return the number of people with
    //   earnings above target
    // ----------------------------------------
    var getSalary = function (row){
        return row[3]; 
    };
    var salaries = []; 

    var buildSalaryArray = function(x) {
        var y = getSalary(x);
        salaries.push(Number(y)); 
    };
    payroll.forEach(buildSalaryArray); 

    var filtered = salaries.filter(function(number){
        return number > target; 
    });
    return filtered.length; 
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
