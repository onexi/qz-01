var exercise = {};

exercise.hello = function(){
    return 'Hello!';
    // ----------------------------------------
    //   QUESTION 01
    //   Return a string that says "Hello!"
    // ----------------------------------------
    //return 'Error: Question 01 not implemented';
};

exercise.numberArray = function(){
    return [1,2,3];
    // ----------------------------------------
    //   QUESTION 02
    //   Return an array of numbers
    // ----------------------------------------
    //return 'Error: Question 02 not implemented';
};

exercise.nameAndAge = function(){
    return {name:'Ann',age:33};
    // ----------------------------------------
    //   QUESTION 03
    //   Return an object with
    //   a 'name' and 'age' property
    // ----------------------------------------
    //return 'Error: Question 03 not implemented';
};

exercise.objectArray = function(){
    var emptyArray = new Array(10);
    return emptyArray;
    // ----------------------------------------
    //   QUESTION 04
    //   Return an array of empty objects
    //   The array can have any length you like.
    // ----------------------------------------
    //return 'Error: Question 04 not implemented';
};

exercise.addProperty = function(someObject){
    someObject.name = 'ann';
    return someObject;

    
    // ----------------------------------------
    //   QUESTION 05
    //   Add the property 'name' to someObject
    //   Give 'name' any value you like.
    // ----------------------------------------
    //return 'Error: Question 05 not implemented';
};

exercise.thirdElement = function(someArray){
    return someArray[2];
    // ----------------------------------------
    //   QUESTION 06
    //   Return the third element of array
    // ----------------------------------------
    //return 'Error: Question 06 not implemented';
};

exercise.concatenate = function(string1, string2, string3){
    var res = string1.concat(string2);
    var all = res.concat(string3);
    return all;
    // ----------------------------------------
    //   QUESTION 07
    //   Return the concatenation of
    //   string1, string2, string3
    // ----------------------------------------
    //return 'Error: Question 07 not implemented';
};

exercise.greaterThanSix = function(someNumbers){
    function isBigEnough(element) {
	
        var comparison = element >6;
        return comparison;

    }
 
    var filtered = someNumbers.filter(isBigEnough);
    return JSON.stringify(filtered);
    // ----------------------------------------
    //   QUESTION 08
    //   Filter array for values greater than 6
    //   Return the filtered array
    // ----------------------------------------
    //return 'Error: Question 08 not implemented';
};

exercise.getNames = function(people){
    var name = [];
    for (var i=0;i<people.length;i++){
        name.push(people[i].name);
    }
    return name;
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
};

exercise.getSalaryTotal = function(people){
    var salaries = 0;
    for (var i=0;i<people.length;i++){
        salaries +=people[i].salary;
    }
    return salaries;


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
};

exercise.sortNumbers = function(someNumbers){
    function compare(a, b) {
	if (a < b) return -1;
	if (a > b) return 1;
	if (a === b) return 0;  	
}

// sort array
    someNumbers.sort(compare);

// write sorted array to console
    return JSON.stringify(someNumbers);
    // ----------------------------------------
    //   QUESTION 11
    //   Sort numbers in array,
    //   return the sorted array
    //   Ascending or descenging.
    // ----------------------------------------
    //return 'Error: Question 11 not implemented';
};

exercise.executeCallback = function(callback){
   // return callback;
    // ----------------------------------------
    //   QUESTION 12
    //   Execute callback
    // ----------------------------------------
    return 'Error: Question 12 not implemented';
};

exercise.getPersonAndJob = function(payroll){
    var personjob1 = [payroll[0][1],payroll[0][2]];
    var personjob2 = [payroll[1][1],payroll[1][2]];
    var personjob3 = [payroll[2][1],payroll[2][2]];
    var personjob4 = [payroll[3][1],payroll[3][2]];

    var arr =[];
    arr.push(personjob1);
    arr.push(personjob2);
    arr.push(personjob3);
    arr.push(personjob4);
    return arr;
    // ----------------------------------------
    //   QUESTION 13
    //   Return an array of people and jobs
    //  [['person', 'job'], ['person,job'];
    // ----------------------------------------
   // return 'Error: Question 13 not implemented';
};

exercise.getTotalPayroll = function(payroll){
    var salaries= [];
    salaries.push(Number(payroll[0][3]));
    salaries.push(Number(payroll[1][3]));
    salaries.push(Number(payroll[2][3]));
    salaries.push(Number(payroll[3][3]));
     
    var total = salaries.reduce(function(previous, current) {
        
        return previous+current;

    }, 0);


    return total;
    // ----------------------------------------
    //   QUESTION 14
    //   Return the total payroll
    //   as an integer, use reduce
    // ----------------------------------------
    //return 'Error: Question 14 not implemented';
};

exercise.getEarningsAbove = function(payroll,target){
    function isBigEnough(element) {
	
        var comparison = element[3] > target;
        return comparison;

    }
 
    var filtered = payroll.filter(isBigEnough);
    return JSON.stringify(filtered.length);
    // ----------------------------------------
    //   QUESTION 15
    //   Return the number of people with
    //   earnings above target
    // ----------------------------------------
    //return 'Error: Question 15 not implemented';
};

exercise.getNumberOfZipCodesWith = function(payroll,num){
    var arr=[];
    for (var i=0;i<payroll.length;i++){
        if (payroll[i][4].includes(num)){
            arr.push(payroll[i][4]);
        }
         
    }
    return arr;
    // ----------------------------------------
    //   QUESTION 16
    //   Return the number of zip codes
    //   with 'num' anywhere in them
    // ----------------------------------------
    //return 'Error: Question 16 not implemented';
};


module.exports = exercise;
