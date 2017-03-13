var exercise = {};

exercise.hello = function(){
    // ----------------------------------------
    //   QUESTION 01
    //   Return a string that says "Hello!"
    // ----------------------------------------
    var hello = 'Hello!';
    return hello;
};

exercise.numberArray = function(){
    // ----------------------------------------
    //   QUESTION 02
    //   Return an array of numbers
    // ----------------------------------------
    var array = [];
    var vanguard = Math.random()*100;
    for (var i =0; i < vanguard; i++){
        array[i] = Math.random() * 100;
    }
    return array;
};

exercise.nameAndAge = function(){
    // ----------------------------------------
    //   QUESTION 03
    //   Return an object with
    //   a 'name' and 'age' property
    // ----------------------------------------
    
    var student = {
        fullName : 'Terrance McGuinness',
        age : '16'
    };
    return student;
};

exercise.objectArray = function(){
    // ----------------------------------------
    //   QUESTION 04
    //   Return an array of empty objects
    //   The array can have any length you like.
    // ----------------------------------------
    

    return 'Error: Question 04 not implemented';
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
    // ----------------------------------------
    //   QUESTION 07
    //   Return the concatenation of
    //   string1, string2, string3
    // ----------------------------------------
    var fullString = '';
    fullString = string1 + string2 + string3;
    
    return fullString;
};

exercise.greaterThanSix = function(someNumbers){
    // ----------------------------------------
    //   QUESTION 08
    //   Filter array for values greater than 6
    //   Return the filtered array
    // ----------------------------------------
    function biggerThanSix(element){
        return 6 < element;
    }
    var filteredForSix = someNumbers.filter(biggerThanSix);
    return filteredForSix;

    
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
    function getAlterEgo(element){
        return element.name;
    }

    var alterEgoArray = people.map(getAlterEgo);

    return alterEgoArray;
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
    function theirMoney (people){
        var personEarnings = people.salary;
        return personEarnings;
    }
    var earnings = people.map(theirMoney);
    var salaryTotal = earnings.reduce(function(a,b) {
        return a + b;
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
    var sortedNumbers = someNumbers.sort(function(a, b){return b-a}); 
    return sortedNumbers;
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
    function nameAndJob (payroll) {
        var list = '';
        list = payroll[1] + ' , ' + payroll[2];
        return list;
    }
    var newArray = payroll.map(nameAndJob);
    
    return newArray;
};

exercise.getTotalPayroll = function(payroll){
    // ----------------------------------------
    //   QUESTION 14
    //   Return the total payroll
    //   as an integer, use reduce
    // ----------------------------------------
    function theirMoney (payroll){
        var earnings = payroll[3];
        return earnings;
    }
    var earningsString = payroll.map(theirMoney);
    var earnings = earningsString.map(Number);
    var totalPayroll = earnings.reduce(function(a,b) {
        return a + b;
    });
    return totalPayroll;

   
};

exercise.getEarningsAbove = function(payroll,target){
    // ----------------------------------------
    //   QUESTION 15
    //   Return the number of people with
    //   earnings above target
    // ----------------------------------------
    function theirMoney (payroll){
        var personEarnings = payroll[3];
        return personEarnings;
    }
    var earningsString = payroll.map(theirMoney);
    var earnings = earningsString.map(Number);

    function isBigEnough(element) {
        return target <= element;  
    }
    
    var aboveEarnings = earnings.filter(isBigEnough);
    var amountOfSalaraies = aboveEarnings.length;
    return amountOfSalaraies; 

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
