var exercise = {};

exercise.hello = function(){
    // ----------------------------------------
    //   QUESTION 01
    //   Return a string that says "Hello!"
    // ----------------------------------------
    return "Hello!";
};

exercise.numberArray = function(){
    // ----------------------------------------
    //   QUESTION 02
    //   Return an array of numbers
    // ----------------------------------------
    return [0,3,7,9,12,14];
};

exercise.nameAndAge = function(){
    // ----------------------------------------
    //   QUESTION 03
    //   Return an object with
    //   a 'name' and 'age' property
    // ----------------------------------------
    var person = {
        name: 'name',
        age: 0
    };
    return person;
};

exercise.objectArray = function(){
    // ----------------------------------------
    //   QUESTION 04
    //   Return an array of empty objects
    //   The array can have any length you like.
    // ----------------------------------------

    return [{},{},{}];
};

exercise.addProperty = function(someObject){
    // ----------------------------------------
    //   QUESTION 05
    //   Add the property 'name' to someObject
    //   Give 'name' any value you like.
    // ----------------------------------------

    someObject.name = 'name';
    return someObject;
};

exercise.thirdElement = function(someArray){
    // ----------------------------------------
    //   QUESTION 06
    //   Return the third element of array
    // ----------------------------------------
    //console.log(someArray);
    return someArray[2];
};

exercise.concatenate = function(string1, string2, string3){
    // ----------------------------------------
    //   QUESTION 07
    //   Return the concatenation of
    //   string1, string2, string3
    // ----------------------------------------
    //console.log(string1);
    //console.log(string2);
    //console.log(string3);
    newStr="";
    newStr = newStr.concat(string1);
    newStr = newStr.concat(string2);
    newStr = newStr.concat(string3);
    return newStr;
};

exercise.greaterThanSix = function(someNumbers){
    // ----------------------------------------
    //   QUESTION 08
    //   Filter array for values greater than 6
    //   Return the filtered array
    // ----------------------------------------
    var filtered = [];
    function checkGreater(input) {
        return input > 6;
    }
    
    filtered = someNumbers.filter(checkGreater);
    
    return filtered;
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
    var names = [];

    for(var i =0; i<people.length; i++)
    {
        names[i]=people[i].name;
    }
    return names;
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
    var salaries = [];

    for(var i =0; i<people.length; i++)
    {
        salaries[i]=people[i].salary;
    }
    function getSum(total, num) {
    return Number(total) + Number(num);
}

    return salaries.reduce(getSum);

};

exercise.sortNumbers = function(someNumbers){
    // ----------------------------------------
    //   QUESTION 11
    //   Sort numbers in array,
    //   return the sorted array
    //   Ascending or descenging.
    // ----------------------------------------
    return someNumbers.sort(function(a, b){return a-b});
};

exercise.executeCallback = function(callback){
    // ----------------------------------------
    //   QUESTION 12
    //   Execute callback
    // ----------------------------------------
    callback();
};

exercise.getPersonAndJob = function(payroll){
    // ----------------------------------------
    //   QUESTION 13
    //   Return an array of people and jobs
    //  [['person', 'job'], ['person,job'];
    // ----------------------------------------
    return [['person', 'job'], ['person', 'job'],['person', 'job']];
};

exercise.getTotalPayroll = function(payroll){
    // ----------------------------------------
    //   QUESTION 14
    //   Return the total payroll
    //   as an integer, use reduce
    // ----------------------------------------
    var salaries = [];
    for(var i =0; i<payroll.length; i++)
    {
        salaries[i]=payroll[i][3];
    }
    
    function getSum(total, num) {
    return (Number(total)+ Number(num));
}

    return salaries.reduce(getSum);
};

exercise.getEarningsAbove = function(payroll,target){
    // ----------------------------------------
    //   QUESTION 15
    //   Return the number of people with
    //   earnings above target
    // ----------------------------------------
    var earnings = [];
    for(var i =0; i<payroll.length; i++)
    {
        earnings[i]=Number((payroll[i])[3]);
    }

    var filtered = [];
    function checkGreater(input) {
        return input > target;
    }
    
    filtered = earnings.filter(checkGreater);
    
    return filtered.length;

    


};

exercise.getNumberOfZipCodesWith = function(payroll,num){
    // ----------------------------------------
    //   QUESTION 16
    //   Return the number of zip codes
    //   with 'num' anywhere in them
    // ----------------------------------------

    var zips = [];
    for(var i =0; i<payroll.length; i++)
    {
        zips[i]=((payroll[i])[4]);
    }
    
    var counter = 0;
    for(var i = 0; i<payroll.length; i++)
    {
        if(zips[i].includes(num))
        {
            counter++;
        }
        else{

        }
    }
    return counter;
};


module.exports = exercise;
