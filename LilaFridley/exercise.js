var exercise = {};

exercise.hello = function(){

    return 'Hello!';

};

exercise.numberArray = function(){

    return [0,1,2,3,4,5,6,7,8,9];
};

exercise.nameAndAge = function(){

    var data = {};
    data.name = 'Lila';
    data.age = '25';

    return data;
};

exercise.objectArray = function(){

    var newArray = [[],[],[]];
    return newArray;
};

exercise.addProperty = function(someObject){

    someObject.name = 'Lila';
    return someObject;

};

exercise.thirdElement = function(someArray){

    return someArray[2];
};

exercise.concatenate = function(string1, string2, string3){

    var newArray = [string1, string2, string3];
    // var flatArray = newArray.reduce(function(prev,curr){
    //     return prev.concat(curr);
    // },[]);
    // console.log(flatArray);

    return newArray;
};

exercise.greaterThanSix = function(someNumbers){

    var filteredArray = someNumbers.filter(function(item){
        if(item>6){
            return item;
        }
    });

    return filteredArray;
};

exercise.getNames = function(people){


    var names = people.reduce(function(prev, curr){
        return prev.concat(curr.name);
    }, []);
 
    return names;
};

exercise.getSalaryTotal = function(people){

    var salaries = people.reduce(function(prev, curr){
        return prev.concat(curr.salary);
    },[]);

    var totSalary = salaries.reduce(function(prev, curr){
        return prev+curr;
    },0);

    return totSalary;
};

exercise.sortNumbers = function(someNumbers){

    var sortedArray = someNumbers.sort(function(a,b){
        return a - b;
    });


    return sortedArray;
};

exercise.executeCallback = function(callback){

    var greetingresponse = callback();

    return greetingresponse;
};

exercise.getPersonAndJob = function(payroll){

    var jobs = payroll.map(function(item){
        return item.slice(1,3);
    });


    return jobs;
};

exercise.getTotalPayroll = function(payroll){
    // ----------------------------------------
    //   QUESTION 14
    //   Return the total payroll
    //   as an integer, use reduce
    // ----------------------------------------
    return 'Error: Question 14 not implemented';
};

exercise.getEarningsAbove = function(payroll,target){
    // ----------------------------------------
    //   QUESTION 15
    //   Return the number of people with
    //   earnings above target
    // ----------------------------------------
    return 'Error: Question 15 not implemented';
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
