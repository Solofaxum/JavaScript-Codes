
//Find min and max sum of the array
let arr = [1, 2, 3, 4]
const sum = (array) => {
    let min = Math.min.apply(null, array)
    let max = Math.max.apply(null, array)

    let sumMin = 0;
    let sumMax = 0;

    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== min) {
            sumMin += array[i]
        }
        if (array[i] !== max) {
            sumMax += array[i]
        }

    }
    result.push(sumMin)
    result.push(sumMax)

    return result;


}
console.log(sum(arr))


// Application of class in JS
class Person {
    constructor(name, age) {
        (this.fname = name), (this.ages = age);
    }
    sayhi(ages) {
        return "Hello I am " + this.fname + " I am " + ages + " years old.";
    }
}

const a1 = new Person("Kim", 34);
console.log(a1.sayhi("solomon"));
a1.fname = "John"
console.log(a1.sayhi("emili"));

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    let sorted = arr.sort();

    let maxArr = sorted.slice(1, 5);
    let minArr = sorted.slice(0, 4)


    let sumMax = maxArr.reduce((a, b) => a + b, 0)

    let sumMin = minArr.reduce((a, b) => a + b, 0)


    console.log(sumMin + " " + sumMax)
}

/*
* Complete the 'birthdayCakeCandles' function below.
*
* The function is expected to return an INTEGER.
* The function accepts INTEGER_ARRAY candles as parameter.
*/

function birthdayCakeCandles(candles) {
    // Write your code here
    let max = Math.max(...candles);
    let result = candles.filter(a => a === max)
    return result.length;

}

/*
 * Complete the timeConversion function below.
 * Given a time in -hour AM/PM format, convert it to military (24-hour) time.
* Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
    const arr = s.slice(0, 8).split(':');
    arr[0] = (s.indexOf('PM') > -1) ?
        (arr[0] == 12 ? '12' : Number(arr[0]) + 12) :
        (arr[0] == 12 ? '00' : arr[0]);
    return arr.join(':');
}



/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    // Write your code here
    var index = 0;
    while (index < grades.length) {
        if (grades[index] % 5 >= 3 && grades[index] > 37) {
            grades[index] = grades[index] - grades[index] % 5 + 5;
        }

        ++index;
    }
    return grades;

}

function main() {
    var n = parseInt(readLine());
    var grades = [];
    for (var grades_i = 0; grades_i < n; grades_i++) {
        grades[grades_i] = parseInt(readLine());
    }
    var result = solve(grades);
    result.forEach(e => console.log(e))
}


// my solution using easy to refactor methods (in case you wanted to either share logic or compare new types of fruit)
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const fLoc = function (treeLoc, arr2d) {
        return arr2d.map(fruitLoc => (treeLoc + fruitLoc));
    }
    const fRange = function (s, t, arr2d) {
        let a, b;
        a = 0; b = 0;
        arr2d.forEach((f, i) => {
            if (i === 0) { // apple count
                f.forEach(loc => s <= loc && loc <= t ? a++ : null);
            }
            if (i === 1) { // orange count
                f.forEach(loc => s <= loc && loc <= t ? b++ : null);
            }
        });
        return [a, b];
    }
    console.log(fRange(s, t, [fLoc(a, apples), fLoc(b, oranges)]).join('\n'));
}

// shorter solutions...

// using filter
function countApplesAndOranges2(s, t, a, b, apples, oranges) {
    console.log(apples.filter(d => s - a <= d && d <= t - a).length);
    console.log(oranges.filter(d => s - b <= d && d <= t - b).length);
}

// using reduce
function countApplesAndOranges3(s, t, a, b, apples, oranges) {
    console.log(apple.reduce((sum, d) => sum + (s - a <= d && d <= t - a), 0));
    console.log(orange.reduce((sum, d) => sum + (s - b <= d && d <= t - b), 0));
}

// using filter and map
function countApplesAndOranges4() {
    function addBy(num) {
        return (d) => d + num;
    }
    function isScored(d) {
        return s <= d && d <= t;
    }
    const larry = apples.map(addBy(a)).filter(isScored).length;
    const rob = oranges.map(addBy(b)).filter(isScored).length;
    console.log(larry, rob);
}

// using Array.prototype (bad because a new version of ECMA could come out with a 'sum' helper for arrays)
function countApplesAndOranges5() {
    Array.prototype.sum = function (f) {
        return this.reduce((s, v) => s + f(v), 0);
    }
    console.log(apple.sum(d => s - a <= d && d <= t - a));
    console.log(orange.sum(d => s - b <= d && d <= t - b));
}

// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {

    let n = (x2 - x1) / (v1 - v2);
    return ((n >= 0) && Math.floor(n) === n && n != Infinity) ? 'YES' : 'NO';
}


/*
* Complete the 'getTotalX' function below.
*
* The function is expected to return an INTEGER.
* The function accepts following parameters:
*  1. INTEGER_ARRAY a
*  2. INTEGER_ARRAY b
*/

function getTotalX(a, b) {
    // Write your code here

    let validCount = 0;

    for (let x = 1; x <= 100; x++) {
        if (a.every(int => (x % int == 0))) {
            if (b.every(int => (int % x == 0))) {
                validCount++;
            }
        }
    }

    return validCount;

}

let find_missing = function (input) {
    //  calculate sum of all integers
    //  in input list

    let actual_sum = 0;
    for (let i in input) {
        actual_sum += input[i];
    }
    //  There is exactly 1 number missing
    let n = input.length + 1;
    let sum_of_n = Math.floor((n * (n + 1)) / 2);
    return sum_of_n - actual_sum;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Find Missing Number");
console.log("---------------------------------------");

let random_array = [19, 14, 2, 17, 4, 12, 20, 7, 16, 9, 13, 8, 11, 18, 3, 6, 10, 1, 15];
let actual_missing = find_missing(random_array);
console.log("actual missing is " + actual_missing);

// find missing 

let closest_indices = function (input) {
    let str = input.split("");
    console.log(str);
    let i;
    let closest;
    for (i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            closest = i;
        }
    }
    console.log("clse-index" , closest);
    return closest
};
let data = "babab"
console.log(closest_indices(data));

function closest(s, queries) {
 
    let target = s[queries];
    let result = [];
    // let result = [0,4];

    for (let i = 0; i < s.length; i++) {
      if (i < queries && s[i] === target) {
        result.push(i);
      } else if (i > queries && s[i] === target) {
        result.push(i);
      }
    }

    let closest;
    let closest1;
    let target1;
    let target2;

    for (let i = 0; i < result.length; i++) {
      if (result[i] < queries) {
        closest = queries - result[i];
        target1 = result[i];
      } else if (result[i] > queries) {
        closest1 = result[i] - queries;
        target2 = result[i];
      }
    }
    if (closest > closest1) {
      return target2;
    } else if(closest < closest1){
      return target1;
    }else{
        return target1
    }
  }
  console.log(closest("baaaabaab", 2));