var exercise = {};

exercise.hello = function(){
    // ----------------------------------------
    //   QUESTION 01
    //   Return a string that says "Hello!"
    // ----------------------------------------
    return console.log('Hello');
};

exercise.numberArray = function(){
    // ----------------------------------------
    //   QUESTION 02
    //   Return an array of numbers
    // ----------------------------------------
    var arrayNum = [1, 2, 3, 4];
    return arrayNum;
};

exercise.nameAndAge = function(){
    // ----------------------------------------
    //   QUESTION 03
    //   Return an object with
    //   a 'name' and 'age' property
    // ----------------------------------------
    var myObj = {'name': 'Rachel', 'age': 26};
    return myObj;
};

exercise.objectArray = function(){
    // ----------------------------------------
    //   QUESTION 04
    //   Return an array of empty objects
    //   The array can have any length you like.
    // ----------------------------------------
    var arrayObjs = [{}, {}, {}, {}];
    return arrayObjs;
};

exercise.addProperty = function(someObject){
    // ----------------------------------------
    //   QUESTION 05
    //   Add the property 'name' to someObject
    //   Give 'name' any value you like.
    // ----------------------------------------
    someObject.name = 'Peter';
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
    // ----------------------------------------
    //   QUESTION 07
    //   Return the concatenation of
    //   string1, string2, string3
    // ----------------------------------------
    var concatted = string1 + string2 + string3
    return concatted;
};

// CHECK ON THIS ONE


exercise.greaterThanSix = function(someNumbers){
    // ----------------------------------------
    //   QUESTION 08
    //   Filter array for values greater than 6
    //   Return the filtered array
    // ----------------------------------------
    function bigger(value){return value>6};
    var filteredArray = someNumbers.filter(bigger);
    return filteredArray;
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
    namesArray = [];
    people
    return 'Error: Question 09 not implemented';
};


exercise.getSal = function(people){
    var salary = people.salary;
    return salary;
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
    var totalSal = people.salary.reduce(function(previous, current){
        return previous + current;
    }, 0);
    return totalSal;
};

exercise.sortNumbers = function(someNumbers){
    // ----------------------------------------
    //   QUESTION 11
    //   Sort numbers in array,
    //   return the sorted array
    //   Ascending or descenging.
    // ----------------------------------------
    someNumbersCopy = someNumbers.slice();
    function compare (a, b){
        if (a<b) return -1;
        if (a>b) return 1;
        if (a===b) return 0;
    };
    var sorted = numbersCopy.sort(compare);
    return sorted;
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
    var length = payroll.length;
    var peopleJobArray = [];
    var subArray = [];
    for (var j = 0; j <length; j++){
        for (var i = 0; i <length; i++){
            var person = payroll[i][1];
            var job = payroll[i][2];
            subArray = [person, job];
        };
    peopleJobArray.push(subArray[j])
    return peopleJobArray;
    };

exercise.getTotalPayroll = function(payroll){
    // ----------------------------------------
    //   QUESTION 14
    //   Return the total payroll
    //   as an integer, use reduce
    // ----------------------------------------
    return 'Error: Question 14 not implemented';
};

var abovetarget = function(item){
        return item > 84000;

exercise.getEarningsAbove = function(payroll,target){
    // ----------------------------------------
    //   QUESTION 15
    //   Return the number of people with
    //   earnings above target
    // ----------------------------------------
    var earnings = []
    for (var i = 0; i <length; i++){
        var earningsi = payroll[i][3];
        earnings.push(earningsi);
    };
    // filter out the elements that are above the target
    var arraySalariesAbove = earnings.filter(abovetarget);
    // calculate the length of the new array
    var numSalariesAbove = arraySalariesAbove.length;
    return numSalariesAbove;
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
