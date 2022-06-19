// // --------------------------------- //
// // -------- Bài tập Array ---------- //
// // --------------------------------- //
function validateArray(array) {
    if (Array.isArray(array)) {
        if (array.length > 0) {
            return array;
        }
        return;
    }
    return;
}

function validateNumber(number) {
    if (typeof number === "number") {
        return number;
    }
    return;
}
// Bài 1. Viết hàm tìm ra số nhỏ nhất trong mảng các số. Ví dụ:
// minNumbers([2, 1, 3]) => Kết quả trả về là 1
function minNumbers(array) {
    const arrNum = validateArray(array);
    arrNum.forEach(number => validateNumber(number));
    // return Math.min(...array); // bind apply call
    arrNum.sort((a,b) => a - b);
    return arrNum.shift(); // arrNum[0]
}
console.log(minNumbers([2, 1, 3]))
// Bài 2. Viết hàm tìm ra số lớn thứ nhì trong mảng các số. Ví dụ:
// max2Numbers([2, 1, 3, 4]) => Kết quả trả về là 3
function removeDuplicateNumber(array) {
    const arrNum = validateArray(array);
    arrNum.forEach(number => validateNumber(number));
    return arrNum.filter((el,index, array) => array.indexOf(el) === index);
}

function max2Numbers(array) {
    const arrNum = removeDuplicateNumber(array);
    arrNum.sort((a,b) => b - a);
    return arrNum[1];
}
console.log(max2Numbers([2, 1, 3,4 ,4]))
// Bài 3. Viết hàm truyền vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái. Ví dụ:
// sortStudents(['Nam', 'Hoa', 'Tuấn']) => Kết quả trả về là ['Tuấn', 'Nam', 'Hoa']
function sortStudents(array) {
    array.sort((a,b) => b.localeCompare(a));
    return array;
}
console.log(sortStudents(['Nam', 'Hoa', 'Tuấn']))
console.log(sortStudents(["1", "2", "10", "100"]))
// Bài 4. Tính tổng các số chia hết cho 5 từ 0 -> 100
// [0,1,2,3,4,5,6,....100].reduce((total, number) => total +=number, 0)
function Total() {
    const array100 = [...Array(101)].map((_,index) => +index);
    const result = array100.reduce((total, number) => {
        return number % 5 === 0 ? total += number : total
    },0);
    return result;
}
console.log(Total())
// Bài 5. Viết hàm cho phép truyền vào 1 mảng các số, 
//kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2

// Bài 6. Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất. 
//Ví dụ với tham số ['aba', 'aa', 'ad', 'c', 'vcd'] thì kết quả trả về ['aba', 'vcd'].
function longString(array) {
    const arrLength = array.map(s => s.length);
    const max = Math.max(...arrLength);
    const result = array.filter(s => s.length === max);
    return result;
}
console.log(longString(['aba', 'aa', 'ad', 'c', 'vcdd']))
// Bài 7: Viết chương trình JavaScript để lấy một phần tử ngẫu nhiên từ một mảng
// sample([3, 7, 9, 11]) => 3
// sample([3, 7, 9, 11]) => 9
function sample(array) {
    const index = Math.trunc(Math.random() * array.length);
    return array[index];
}
console.log(sample([3, 7, 9, 11]))

// Bài 8: Viết chương trình đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng
function swapPosition(array) {
    const indexA = Math.trunc(Math.random() * array.length);
    const indexB = Math.trunc(Math.random() * array.length);
    if (indexA !== indexB) {
        [array[indexA], array[indexB]] = [array[indexB], array[indexA]] //Destructuring
    }
    return array;
}
//console.log(swapPosition([3, 7, 9, 11]))
// Bài 9: Viết chương trình JavaScript để lấy một mảng các phần tử xuất hiện trong cả hai mảng
// similarity([1, 2, 3], [1, 2, 4]) => [1,2]
function similarity(arrA, arrB) {
    // const result = [];
    // arrA.forEach(elA => {
    //     arrB.forEach(elB => {
    //         if (elA === elB) result.push(elA)
    //     })
    // })
    // return result;
    return arrA.filter(elA => arrB.indexOf(elA) !== -1);
}
console.log(similarity([1, 2, 3], [1, 2, 4]))
// Bài 10: Viết một chương trình JavaScript để lấy sự phần tử không xuất hiện ở cả 2 mảng
// symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4]
function symmetricDifference(arrA, arrB) {
    const A_diff_B = arrA.filter(elA => !arrB.includes(elA));
    const B_diff_A = arrB.filter(elB => !arrA.includes(elB));
    // return A_diff_B.concat(B_diff_A);
    return [...A_diff_B, ...B_diff_A]
}
console.log(symmetricDifference([1, 2, 3], [1, 2, 4]))

// Bài 12: Viết một chương trình JavaScript trả về một tập hợp con của một chuỗi.
// sub_String("dog") => ["d","do","dog","o","og","g"] //fuzzy search(tim kiem mo)
// fuzzy_search : tim kiem gan dung
function sub_String(string) {
    const result = [];
    for (let i = 0; i <= string.length ; i++) {
        for(let j = 0; j < i ;j++) {
            result.push(string.substring(j,i))
        }
    }
    return result;
}
//console.log(sub_String("dog"))
// Bài 13: Kiểm tra mảng xem có phải mảng tăng dần hay không
function compareArray(arrA, arrB) {
    const result = arrA.every((el,index) => el === arrB[index]);
    return result;
}

function checkArray(array) {
    // let isCheck = false;
    // for (let i = 1; i < array.length ; i++) {
    //     if (array[i] > array[i-1]) {
    //         isCheck = true;
    //     } else {
    //         isCheck = false;
    //         break;
    //     }
    // }
    // return isCheck;
    const arrSort = [...array].sort((a,b) => b-a);
    return compareArray(arrSort,array)
}
console.log(checkArray([5,4,3,2,1]))
// Bài 14: Kiểm tra mảng xem có phải mảng sô lẻ giảm dần hay không
function checkAscArray(array) {
    const isCheck = array.some(el => el % 2 === 0);
    //const isCheck = array.every(el => el % 2 === 1)
    if (isCheck) {
        return false;
    }
    const arrSort = [...array].sort((a,b) => b-a);
    return compareArray(arrSort,array)
}
console.log(checkAscArray([11,9,7,5]))
// // --------------------------------- //
// // -------- Bài tập Object --------- //
// // --------------------------------- //
// Bài 1. Viết hàm để lấy danh sách các key của object
// vd :
const user = {
    name : "Nguyễn Tiến Đạt",
    age : 25,
    email : 'support@xtp.vn'
};
// => name,age,email
function getKeys(object) {
    // return Object.keys(object);
    const result = [];
    for (let k in object) {
        result.push(k)
    }
    return result;
}

console.log(getKeys([2,1,3,4,5]))
// Bài 2. Viết hàm để lấy danh sách các value của object
// vd :
// var user = {
//     name : "Nguyễn Tiến Đạt",
//     age : 25,
//     email : 'support@xtp.vn'
// };
// => 'Nguyễn Tiến Đạt',25,'support@xtp.vn'
function getValues(object) {
    // return Object.values(object);
    const result = [];
    for (let k in object) {
        result.push(object[k])
    }
    return result;
}
//console.log(getValues(user))

// bài 3. Viết hàm kiểm tra key có tồn tại trong Object không
// vd :
// var user = {
//     name : "Nguyễn Tiến Đạt",
//     age : 25,
//     email : 'support@xtp.vn'
// };
// => checkKey('name') => true
// checkKey('study') => false
function checkKeys(object, key) {
    // const arrKeys = getKeys(object);
    // return arrKeys.includes(key)
    // return object.hasOwnProperty(key)
    // return key in object;
}
console.log(checkKeys(user, "name"))
// bài 4. Viết hàm kiểm tra Object có độ dài bao nhiêu
// vd :
// var user = {
//     name : "Nguyễn Tiến Đạt",
//     age : 25,
//     email : 'support@xtp.vn'
// };
// => getLengthObject(user) => 3

// Bài 5. Cho mảng các user
// mỗi user có cấu trúc như sau

// user = {
//     name : string,
//     age : number,
//     isStatus : bool
// }
// Viết function lấy ra những user có tuổi > 25 và isStatus = true // tinh trang hon nhan
const users = [
    {
        name : "Van",
        age : 28,
        isStatus : false
    },
    {
        name : "Nam",
        age : 24,
        isStatus : true
    },
    { 
        name : "Duc",
        age : 26,
        isStatus : true
    }
]
function filterUser(array) {
    const result = array.filter(obj => {
        if (obj.age > 25 && obj.isStatus) {
            return obj;
        }
    })
    return result;
}
console.log(filterUser(users))
// Bài 6. Tương tự bài 5
// Viết function sắp xếp các user theo tuổi tăng dần
function sortUser(array) {
    array.sort((a,b) => a.age - b.age);
    return array;
}

console.log(sortUser(users))