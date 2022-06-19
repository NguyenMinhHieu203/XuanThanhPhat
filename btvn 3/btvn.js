//Bài tập Object


//Bài 1.
var user = {
        name : "Nguyễn Tiến Đạt",
        age : 25,
        email : 'support@xtp.vn'
    };
function getKey(inputObject)
{
    let result = [];
    for(let key in inputObject)
    {
        result.push(key);
    }
    return result;
}
getKey(user);

//Bài 2.
var user = {
        name : "Nguyễn Tiến Đạt",
        age : 25,
        email : 'support@xtp.vn'
    };
function getValue(startObject)
{
    let value = [];
    for(let key in startObject)
    {
        value.push(startObject[key]);
    }
    return value;
}
getValue(user);

//Bài 3.
function checkKey(inputKey)
{
    let result = false;
    for(let i in user)
    {
        if(inputKey === i)
        {
            result = true;
        }
    }
    return result;
}
checkKey('name');
checkKey('study');

//Bài 4.
function getLengthObject(object)
{
    let count = getKey(object);
    return count.length;
}
getLengthObject(user);

//Bài 5.
var users = [
    user1 = {
        name : "Vu Van Hiep",
        age : 24,
        isStatus : true
    }, 
    user2 = {
        name : "Nguyen Nam Phong",
        age : 27,
        isStatus : true
    },
    user3 = {
        name : "Le Dinh Tuong",
        age : 30,
        isStatus : true
    },
    user4 = {
        name : "Hoang Duc Giang",
        age : 26,
        isStatus : false
    }
]
function getUser(array)
{
    let obj = [];
    array.forEach(element =>{
        if(element['age'] > 25 && element['isStatus'] === true)
        {
            obj.push(element);
        }
    })
    return obj;
}
getUser(users);

//Bài 6.
function sortAge(arr)
{
    let result = arr.sort((a, b) => a.age - b.age);
    return result;
}
sortAge(users);

//Bài tập Date

//Bài 1.
function getCurrentDate(string)
{
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    return `${day}${string}${month}${string}${year}`;
}
getCurrentDate("/");

//Bài 2.
function getDaysInMonth(month, year)
{
    let dayOfMonth = new Date(year, month, 0).getDate();
    return dayOfMonth;
}
getDaysInMonth(2, 2022);

//Bài 3.
function checkWeekend(day, month, year)
{
    let today = new Date();
    today.setDate(day);
    today.setMonth(month);
    today.setFullYear(year);
    if(today.getDay() == 6 || today.getDay() == 0)
    {
        return "Weekend";
    }
    return "Not Weekend";
}
checkWeekend(16, 2, 2022);
checkWeekend(19, 2, 2022);

//Bài 4.
function getMinutes()
{
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    return hour*60 + minutes;
}
getMinutes();

//Bài 5.
function getDayPass()
{
    let now = new Date();
    let start = new Date(now.getFullYear(), 0, 0);
    let diff = now - start;
    let oneDay = 24*60*60*1000;
    let dayPass = Math.floor(diff/oneDay);
    return dayPass;
}
getDayPass();

//Bài 6.
function caculateAge(currentDate)
{
    let currentYear = new Date().getFullYear();
    let yearOfBirth = currentDate.getFullYear();
    return `Tuoi cua ban la: ${currentYear - yearOfBirth}`;
}
caculateAge(new Date(1992, 9, 16));

//Bài 7.
function startOfWeek(today)
{
    if(today.getDay() === 1)
    {
        return `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
    }
    else if(today.getDay() == 2)
    {
        today.setDate(today.getDate() - 1);
        return `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
    }
    else if(today.getDay() == 3)
    {
        today.setDate(today.getDate() - 2);
        return `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
    }
    else if(today.getDay() == 4)
    {
        today.setDate(today.getDate() - 3);
        return `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
    }
    else if(today.getDay() == 5)
    {
        today.setDate(today.getDate() - 4);
        return `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
    }
    else if(today.getDay() == 6)
    {
        today.setDate(today.getDate() - 5);
        return `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
    }
    else 
    {
        today.setDate(today.getDate() - 6);
        return `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
    }
}
startOfWeek(new Date());

//Bài 8.
function endOfMonth(input)
{
    let year = input.getFullYear();
    let month = input.getMonth() + 1;
    return new Date(year, month, 0).getDate();
}
endOfMonth(new Date());

//Bài 10.
function getTime(stringTime, numberSecond)
{
    let time = stringTime.split(':');
    let hour = Number(time[0]);
    let minute = Number(time[1]);
    let second = Number(time[2]);
    if(numberSecond + second < 60)
    {
        return `${hour}:${minute}:${numberSecond + second}`;
    }
    else if(numberSecond + second === 60)
    {
        return `${hour}:${minute + 1}:00`;
    }
    else
    {
        let changeMinute = Math.floor((numberSecond + second)/60) + minute;
        let changeSecond = (second + numberSecond)%60;
        return `${hour}:${changeMinute}:${changeSecond}`;
    }
}
getTime("9:20:56", 7);
getTime('10:15:00', 45);
getTime("20:50:30", 30);