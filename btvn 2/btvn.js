//Bài tập Array

//Bài 1.
function minNumbers(myArray)
{
    let minElement = myArray[0];
    myArray.forEach(element => {
        if(element < minElement)
        {
            minElement = element;
        }
    });
    return minElement;
}
minNumbers([2, 1, 3]);

//Bài 2.
function max2Numbers(inputArray)
{
    let maxElement = inputArray[0];
    inputArray.forEach(element => {
        if(element > maxElement)
        {
            maxElement = element;
        }
    });
    let max2Element = inputArray[0];
    inputArray.forEach(element => {
        if(element < maxElement && element > max2Element)
        {
            max2Element = element;
        }
    })
    return max2Element;
}
max2Numbers([2, 1, 3, 4]);

//Bài 3.
function sortStudents(studentArray)
{
    let result = studentArray.sort().reverse();
    return result;
}
sortStudents(['Nam', 'Hoa', 'Tuấn']);

//Bài 4.
function sumFive()
{
    let sum = 0;
    for(let i = 0; i <= 100; i++)
    {
        if(i % 5 === 0)
        {
            sum += i;
        }
    }
    return sum;
}
sumFive();

//Bài 5.
function remainderArray(newArray)
{
    let result = newArray.map(element => {
        return element % 2;
    });
    return result;
}
remainderArray([5, 4, 3, 11]);

//Bài 6.
function maxLengthElement(stringArray)
{
    let maxLength = 0;
    stringArray.forEach(element =>{
        if(element.length > maxLength)
        {
            maxLength = element.length;
        }
    })
    let result = [];
    stringArray.forEach(element =>{
        if(element.length === maxLength)
        {
            result.push(element);
        }
    })
    return result;
}
maxLengthElement(['aba', 'aa', 'ad', 'c', 'vcd']);

//Bài 7.
function sample(numberArray)
{
    let result = numberArray[Math.floor(Math.random()*numberArray.length)];
    return result;
}
sample([3, 7, 9, 11]);

//Bài 9.
function sameElement(arrayOne, arrayTwo)
{
    let result = [];
    arrayOne.forEach(element1 =>{
        arrayTwo.forEach(element2 =>{
            if(element1 === element2)
            {
                result.push(element1);
            }
        });
    });
    return result;
}
sameElement([1, 2, 3], [1, 2, 4]);

//Bài 10.
function symmetricDifference(firstArray, secondArray)
{
    let firstDifference = firstArray.filter(element => !secondArray.includes(element));
    let secondDifference = secondArray.filter(element => !firstArray.includes(element));
    let result = firstDifference.concat(secondDifference);
    return result;
}
symmetricDifference([1, 2, 3], [1, 2, 4]);

//Bài 12.
function checkArray(arrayCheck)
{
    let result = true;
    for(let i = 0; i < arrayCheck.length - 1; i++)
    {
        if(arrayCheck[i] > arrayCheck[i + 1])
        {
            result = false;
        }
    }
    return result;
}
checkArray([1, 4, 2, 5]);
checkArray([1, 2, 3, 4]);

//Bài 13.
function oddAndDecrease(arrayInput)
{
    let result = true;
    for(let i = 0; i < arrayInput.length - 1; i++)
    {
        if(arrayInput[i] < arrayInput[i + 1] || arrayInput[i] % 2 === 0)
        {
            result = false;
        }
    }
    return result;
}
oddAndDecrease([9, 3, 1]);
oddAndDecrease([10, 6, 2]);
oddAndDecrease([7, 13, 3]);