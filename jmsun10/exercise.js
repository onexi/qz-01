var exercise = {};

exercise.hello = function(){
    // ----------------------------------------
    //   QUESTION 01
    //   Return a string that says "Hello!"
    // ----------------------------------------
    var str = 'Hello!';
    return str;
};

exercise.numberArray = function(){
    // ----------------------------------------
    //   QUESTION 02
    //   Return an array of numbers
    // ----------------------------------------
    var arr = [1, 2, 3];
    return arr;
};

exercise.nameAndAge = function(){
    // ----------------------------------------
    //   QUESTION 03
    //   Return an object with
    //   a 'name' and 'age' property
    // ----------------------------------------
    var obj = {name:'Amy',age:'10'};
    return obj;
};

exercise.objectArray = function(){
    // ----------------------------------------
    //   QUESTION 04
    //   Return an array of empty objects
    //   The array can have any length you like.
    // ----------------------------------------
    var obj_1 = {};
    var obj_2 = {};
    var arr = [obj_1, obj_2];
    return arr;
};

exercise.addProperty = function(someObject){
    // ----------------------------------------
    //   QUESTION 05
    //   Add the property 'name' to someObject
    //   Give 'name' any value you like.
    // ----------------------------------------

    someObject['name'] = 'Jasmine';

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

    return string1+string2+string3;
};

exercise.greaterThanSix = function(someNumbers){
    // ----------------------------------------
    //   QUESTION 08
    //   Filter array for values greater than 6
    //   Return the filtered array
    // ----------------------------------------
    var above = function(x){
        if(x>6){
            return true;
        }
    }
    var filtered = someNumbers.filter(above);
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
    var getname = function(obj){
        // console.log(obj.name);
        return obj.name;
    }
    var arr = people.map(getname);
    return arr;
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
    var salary = people.map(function(obj){
        return obj.salary;
    })
    // console.log(salary);
    var sum = 0;
    for(i=0;i<salary.length;i++){
        sum += salary[i];
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
    return someNumbers.sort();
};

exercise.executeCallback = function(callback){
    // ----------------------------------------
    //   QUESTION 12
    //   Execute callback
    // ----------------------------------------
    callback('Hello');
};

exercise.getPersonAndJob = function(payroll){
    // ----------------------------------------
    //   QUESTION 13
    //   Return an array of people and jobs
    //  [['person', 'job'], ['person,job'];
    // ----------------------------------------
    var getpeople = function(list){
        return [list[1],list[2]];
    }
    var newlist = payroll.map(getpeople);
    return newlist;
};

exercise.getTotalPayroll = function(payroll){
    // ----------------------------------------
    //   QUESTION 14
    //   Return the total payroll
    //   as an integer, use reduce
    // ----------------------------------------
    var getpay = function(list){
        // console.log(list[3]);
        return Number(list[3]);
    }
    var newlist = payroll.map(getpay);
    // console.log(newlist);
    var sum = 0;
    for(var i = 1;i<newlist.length;i++){
        sum += newlist[i];
    }
    return sum;
};

exercise.getEarningsAbove = function(payroll,target){
    // ----------------------------------------
    //   QUESTION 15
    //   Return the number of people with
    //   earnings above target
    // ----------------------------------------
      var above = function(list){
        if(Number(list[1])>target){
            return list[0];
        }
    }

    var getpeoplepay = function(list){
        
        return [list[1],list[3]];
    }
    var peoplepay = payroll.map(getpeoplepay);
    var newlist = peoplepay.filter(above);
    // console.log(peoplepay);

    // var filtered = getpeoplepay.filter(above);
    // return filtered;
    return newlist.length;
};

exercise.getNumberOfZipCodesWith = function(payroll,num){
    // ----------------------------------------
    //   QUESTION 16
    //   Return the number of zip codes
    //   with 'num' anywhere in them
    // ----------------------------------------
    var getzip = function(list){
        
        return (list[4]);
    };
    var zip = payroll.map(getzip);
    // console.log(zip);
    var filterzip = function(item){
        var list = item.split('');
        if(list.includes(num)){
            return true;
        }
    }
    var newzip = zip.filter(filterzip);
    return newzip.length;
};


module.exports = exercise;
