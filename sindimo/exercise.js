var exercise = {};

exercise.hello = function(){
    // ----------------------------------------
    //   QUESTION 01
    //   Return a string that says "Hello!"
    // ----------------------------------------
    //return 'Error: Question 01 not implemented';

    return 'Hello!';
};

exercise.numberArray = function(){
    // ----------------------------------------
    //   QUESTION 02
    //   Return an array of numbers
    // ----------------------------------------
    //return 'Error: Question 02 not implemented';
    var my_array = [1,2,3,4,5,6];

    return my_array;
};

exercise.nameAndAge = function(){
    // ----------------------------------------
    //   QUESTION 03
    //   Return an object with
    //   a 'name' and 'age' property
    // ----------------------------------------
    //return 'Error: Question 03 not implemented';

    var person = {name:"Mohamad", age:37};

    return person;
};

exercise.objectArray = function(){
    // ----------------------------------------
    //   QUESTION 04
    //   Return an array of empty objects
    //   The array can have any length you like.
    // ----------------------------------------
    //return 'Error: Question 04 not implemented';

    var emptyArray = [{},{},{}];

    return emptyArray;
};

exercise.addProperty = function(someObject){
    // ----------------------------------------
    //   QUESTION 05
    //   Add the property 'name' to someObject
    //   Give 'name' any value you like.
    // ----------------------------------------
    //return 'Error: Question 05 not implemented';
    someObject.name = 'Mike';

    return someObject;
};

exercise.thirdElement = function(someArray){
    // ----------------------------------------
    //   QUESTION 06
    //   Return the third element of array
    // ----------------------------------------
    //return 'Error: Question 06 not implemented';
    return someArray[2];
};

exercise.concatenate = function(string1, string2, string3){
    // ----------------------------------------
    //   QUESTION 07
    //   Return the concatenation of
    //   string1, string2, string3
    // ----------------------------------------
    //return 'Error: Question 07 not implemented';

    return (string1 + string2 + string3);
};

exercise.greaterThanSix = function(someNumbers){
    // ----------------------------------------
    //   QUESTION 08
    //   Filter array for values greater than 6
    //   Return the filtered array
    // ----------------------------------------
    //return 'Error: Question 08 not implemented';

    var size = someNumbers.length;
    var results = [];

    for (var i=0; i<size; i++){

        if (someNumbers[i] > 6){

            results.push(someNumbers[i]);

        }
    }

    /*
    var result = someNumbers.filter(moreThanSix);

    function moreThanSix(element){

        var comparison = element > 6;

        return comparison;
    }
*/
    return results;


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
    //return 'Error: Question 09 not implemented';

    var size = people.length;
    var names = [];

    for (var i=0; i<size; i++){

        var name = people[i].name;

        names.push(name);

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
    //return 'Error: Question 10 not implemented';

    var size = people.length;
    var sum = 0;

    for (var i=0; i<size; i++){

        sum = sum + people[i].salary;

    }

    return sum;
};

exercise.sortNumbers = function(someNumbers){
    // ----------------------------------------
    //   QUESTION 11
    //   Sort numbers in array,
    //   return the sorted array
    //   Ascending or descenging.
    // ----------------------------------------
    //return 'Error: Question 11 not implemented';

    var sorted = someNumbers.sort(mySort);

    function mySort(a,b){
        return a-b;
    }

    return sorted;
};

exercise.executeCallback = function(callback){
    // ----------------------------------------
    //   QUESTION 12
    //   Execute callback
    // ----------------------------------------
    //return 'Error: Question 12 not implemented';

    callback();
};

exercise.getPersonAndJob = function(payroll){
    // ----------------------------------------
    //   QUESTION 13
    //   Return an array of people and jobs
    //  [['person', 'job'], ['person,job'];
    // ----------------------------------------
/*

var payroll = [
 [1, 'abby hall', 'city manager ', '98538', '02132'],
 [2, 'dana bell', 'police chief ', '83942', '02136'],
 [3, 'cora cook', 'city attorney', '98538', '02132'],
 [4, 'judy king', 'fire director', '70073', '02090']
];

*/
    var result = [];
    var size = payroll.length;

    for (var i=0; i<size; i++){

      var person = payroll[i][1];
      var job = payroll[i][2];

      var item = [person,job];

      result.push(item);

    }

    return result;

    //return 'Error: Question 13 not implemented';
};

exercise.getTotalPayroll = function(payroll){
    // ----------------------------------------
    //   QUESTION 14
    //   Return the total payroll
    //   as an integer, use reduce
    // ----------------------------------------
    //return 'Error: Question 14 not implemented';

    /*

var payroll = [
 [1, 'abby hall', 'city manager ', '98538', '02132'],
 [2, 'dana bell', 'police chief ', '83942', '02136'],
 [3, 'cora cook', 'city attorney', '98538', '02132'],
 [4, 'judy king', 'fire director', '70073', '02090']
];

*/

    var total = payroll.reduce(sumUp, [0, '0', '0', '0', '0']);

    function sumUp(previous, current){

        previous[3] = Number(previous[3]) + Number(current[3]);
        return previous;

   }



    return Number(total[3]);
    
};

exercise.getEarningsAbove = function(payroll,target){
    // ----------------------------------------
    //   QUESTION 15
    //   Return the number of people with
    //   earnings above target
    // ----------------------------------------
    //return 'Error: Question 15 not implemented';

    var result = [];
    var size = payroll.length;
    var counter = 0;

    for (var i=0; i<size; i++){

      var salary = Number(payroll[i][3]);

      if (salary > target){
          counter++;
      }


    }

    return counter;
     

};

exercise.getNumberOfZipCodesWith = function(payroll,num){
    // ----------------------------------------
    //   QUESTION 16
    //   Return the number of zip codes
    //   with 'num' anywhere in them
    // ----------------------------------------
    //return 'Error: Question 16 not implemented';

    var result = [];
    var size = payroll.length;
    var counter = 0;

    for (var i=0; i<size; i++){

      var zip = payroll[i][4];

      if (zip.includes(num)){
          counter++;
      }

    }

    return counter;
};


module.exports = exercise;
