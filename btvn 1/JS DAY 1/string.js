// // --------------------------------- //
// // -------- Bài tập String --------- //
// // --------------------------------- //
function ValidateString(string) {
    if (typeof string === "string") {
        return string;
    }
    return;
}

function ValidateNumber(n) {
    if (typeof n === "number" && n > 0) {
        return n;
    }
    return;
}
// Bài 1. Viết 1 function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không. Nếu có trả về true, nếu không trả về false
// - Đầu vào có 2 tham số : Tham số 1 là chuỗi ban đầu, tham số 2 là chuỗi cần kiểm tra
// Ví dụ: checkStringExist("i love you", "you") => true
function checkStringExist(strParent, strChild) {
    const strP = ValidateString(strParent);
    const strC = ValidateString(strChild);
    return strP.includes(strC);
}
console.log(checkStringExist("i love you", "you"))
// checkStringExist("i love you", "hate") => false

// Bài 2. Viết hàm rút ngắn chuỗi bằng cách cắt ra 
//8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi. 
// Ví dụ: shortenString('Xin chào các bạn') 
// => Kết quả trả về là 'Xin chào...'

// Bài 3. Viết hàm có tác dụng biến 1 chuỗi thành chỉ 
// viết hoa từ đầu tiên. 
// Ví dụ: capitalizeString('chÀo MừnG đẾn với xTP') => 
// Kết quả trả về là 'Chào Mừng Đến Với XTP'
// map, filter, forEach
function capitalizeString(string) {
    const str = ValidateString(string);
    const arrString = str.toLowerCase().split(" ");
    const result = arrString.map(str => {
        return str[0].toUpperCase() + str.slice(1);
    })
    return result.join(" ");
}
console.log(capitalizeString('chÀo MừnG đẾn với xTP'))
// Bài 4. Cho 1 chuỗi, hãy viết hàm có 
//tác dụng sao chép đó chuỗi lên 10 lần.
// Bài 5. Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang. 
// Ví dụ: repeatString('a') 
//=> Kết quả trả về là 'a-a-a-a-a-a-a-a-a-a'
// Bài 6. Cho 1 chuỗi và 1 số nguyên n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang. 
// Ví dụ: repeatString('a', 5) 
//=> Kết quả trả về là 'a-a-a-a-a'
function repeatString(string, number, option) {
    const str = ValidateString(string);
    const opt = ValidateString(option);
    const n = ValidateNumber(number);
    let result = "";
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            result = str;
        } else {
            result += opt + str;
        }
    }
    return result;
}
//console.log(repeatString("aaa", 5, "-"))
// Bài 7. Viết hàm đảo ngược chuỗi. Viết dunction với đầu vào là 1 chuỗi string. Trả về chuỗi đảo ngược của chuỗi đó
// Ví dụ: reverseStrin('Hello') => Kết quả trả về là 'olleH'

// Bài 8. Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc false. 
// Ví dụ 'Race car' trả về true, 'hello world' trả về false.

// Bài 9: Kiểm tra 1 chuỗi có phải là chuỗi viết hoa hay không?
