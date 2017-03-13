var exercise = {};

exercise.hello = function(){
    var hello = 'Hello!';
    // ----------------------------------------
    //   QUESTION 01
    //   Return a string that says "Hello!"
    // ----------------------------------------
    return hello;
    // return 'Hello!'
};

exercise.numberArray = function(){
    var arr=[1,2,3];
    // ----------------------------------------
    //   QUESTION 02
    //   Return an array of numbers
    // ----------------------------------------
    return arr;
};

exercise.nameAndAge = function(){
    var stats={name: 'Fahad', age: 27};
    // ----------------------------------------
    //   QUESTION 03
    //   Return an object with
    //   a 'name' and 'age' property
    // ----------------------------------------
    return stats;
};

exercise.objectArray = function(){
    var empty_arr=[{},{},{}];
    // ----------------------------------------
    //   QUESTION 04
    //   Return an array of empty objects
    //   The array can have any length you like.
    // ----------------------------------------
    return empty_arr;
};

exercise.addProperty = function(someObject){
    someObject.name='Fahad';
    // ----------------------------------------
    //   QUESTION 05
    //   Add the property 'name' to someObject
    //   Give 'name' any value you like.
    // ----------------------------------------
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
    var concat=string1+string2+string3;
    // ----------------------------------------
    //   QUESTION 07
    //   Return the concatenation of
    //   string1, string2, string3
    // ----------------------------------------
    return concat;
};

exercise.greaterThanSix = function(someNumbers){
    var fil_array=someNumbers.filter(function(element){
        return element>6;

    });
    // ----------------------------------------
    //   QUESTION 08
    //   Filter array for values greater than 6
    //   Return the filtered array
    // ----------------------------------------
    return fil_array;
};

exercise.getNames = function(people){
    var final_arr=[];
    for (var i=0; i<people.length; i++){
        final_arr.push(people[i].name);
    }
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
    return final_arr;
};

exercise.getSalaryTotal = function(people){
    var final_sum=[];
    for (var i=0; i<people.length; i++){
        return final_sum.push(people[i].salary);
    }
    final_sum.reduce(function(tracker, current){
        return Number(tracker)+Number(current);
    });
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
    return final_sum;
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
    return callback();
};

exercise.getPersonAndJob = function(payroll){
    for (var i=0; i<payroll.length; i++){
        i[1];
    }
    // ----------------------------------------
    //   QUESTION 13
    //   Return an array of people and jobs
    //  [['person', 'job'], ['person,job'];
    // ----------------------------------------
    return 'Error: Question 13 not implemented';
};

exercise.getTotalPayroll = function(payroll){
    var payrolls=[];
    for (var i=0; i<payroll.length; i++){
        payrolls.push(Number(payroll[i][3]));
    }
    var total_payroll=payrolls.reduce(function(a,b){
        return a+b;
    });
    // ----------------------------------------
    //   QUESTION 14
    //   Return the total payroll
    //   as an integer, use reduce
    // ----------------------------------------
    return total_payroll;
};

exercise.getEarningsAbove = function(payroll,target){
    var payrolls=[];
    for (var i=0; i<payroll.length; i++){
        payrolls.push(Number(payroll[i][3]));
    }
    var above=payrolls.filter(function(element){
        return element>target;
    });
    // ----------------------------------------
    //   QUESTION 15
    //   Return the number of people with
    //   earnings above target
    // ----------------------------------------
    return above.length;
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
