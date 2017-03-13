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
    return [1,2,3,4,5];
};

exercise.nameAndAge = function(){
    // ----------------------------------------
    //   QUESTION 03
    //   Return an object with
    //   a 'name' and 'age' property
    // ----------------------------------------
    //return 'Error: Question 03 not implemented';
    return {name:'Tim', age:29};
};

exercise.objectArray = function(){
    // ----------------------------------------
    //   QUESTION 04
    //   Return an array of empty objects
    //   The array can have any length you like.
    // ----------------------------------------


    //var emptyArr=[]
    var emptyObj={}
    return [emptyObj,emptyObj];    
    //return 'Error: Question 04 not implemented';
};

exercise.addProperty = function(someObject){
    // ----------------------------------------
    //   QUESTION 05
    //   Add the property 'name' to someObject
    //   Give 'name' any value you like.
    // ----------------------------------------
    
    //return 'Error: Question 05 not implemented';
    someObject.name='Tim';
    return someObject;
};

exercise.thirdElement = function(someArray){
    // ----------------------------------------
    //   QUESTION 06
    //   Return the third element of array
    // ----------------------------------------
    
    return someArray[2];
    //return 'Error: Question 06 not implemented';
};

exercise.concatenate = function(string1, string2, string3){
    // ----------------------------------------
    //   QUESTION 07
    //   Return the concatenation of
    //   string1, string2, string3
    // ----------------------------------------
    //return 'Error: Question 07 not implemented';

    return string1.concat(string2,string3);

};

exercise.greaterThanSix = function(someNumbers){
    // ----------------------------------------
    //   QUESTION 08
    //   Filter array for values greater than 6
    //   Return the filtered array
    // ----------------------------------------
    //return 'Error: Question 08 not implemented';

    var filtered = someNumbers.filter(function(item){
        return (item>6);
    });
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
    //return 'Error: Question 09 not implemented';
    // for(var i=0;i<people.length;i++){
    //     console.log(people.name[i]);
    // }
    var peopleArray=people.map(function(item){
        return item.name;
    });
    return peopleArray;
    // for (var i in people){
    //     peopleArray.push(people[name]);
    // }
    // return peopleArray;



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

    var totalSal=people.reduce(function(total,item){
        total=total+item.salary;
        return total;
    },0);
    return totalSal;
};

exercise.sortNumbers = function(someNumbers){
    // ----------------------------------------
    //   QUESTION 11
    //   Sort numbers in array,
    //   return the sorted array
    //   Ascending or descenging.
    // ----------------------------------------
    //return 'Error: Question 11 not implemented';
    return someNumbers.sort(function(a, b){return a-b;});
    //someNumbers.sort()

};

exercise.executeCallback = function(callback){
    // ----------------------------------------
    //   QUESTION 12
    //   Execute callback
    // ----------------------------------------
    //return 'Error: Question 12 not implemented';
    //var ans=function(){callback;};
    return callback();
};

exercise.getPersonAndJob = function(payroll){
    // ----------------------------------------
    //   QUESTION 13
    //   Return an array of people and jobs
    //  [['person', 'job'], ['person,job'];
    // ----------------------------------------
    //return 'Error: Question 13 not implemented';

    var smaller=payroll.map(function(item){
        return [item[1],item[2]];
    })
    return smaller;
};

exercise.getTotalPayroll = function(payroll){
    // ----------------------------------------
    //   QUESTION 14
    //   Return the total payroll
    //   as an integer, use reduce
    // ----------------------------------------
    var totSal=payroll.reduce(function(total,item){
        total=total+Number(item[3]);
        return total;
    },0);
    return totSal;
    //return 'Error: Question 14 not implemented';
};

exercise.getEarningsAbove = function(payroll,target){
    // ----------------------------------------
    //   QUESTION 15
    //   Return the number of people with
    //   earnings above target
    // ----------------------------------------
    //return 'Error: Question 15 not implemented';
    var filtered=payroll.filter(function(item){
        return (Number(item[3])>target);
    });
    return filtered.length;
};

exercise.getNumberOfZipCodesWith = function(payroll,num){
    // ----------------------------------------
    //   QUESTION 16
    //   Return the number of zip codes
    //   with 'num' anywhere in them
    // ----------------------------------------
    //return 'Error: Question 16 not implemented';
    
    var zips=payroll.map(function(item){
        return item[4];
    });
    var filtered=zips.filter(function(item){
        return item.includes(num);
    });
    return filtered.length;

};


module.exports = exercise;
