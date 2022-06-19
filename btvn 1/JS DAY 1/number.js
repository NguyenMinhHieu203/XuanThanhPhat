// // --------------------------------- //
// // -------- Bài tập Number --------- //
// // --------------------------------- //
// Bài 1: Viết hàm tính thể tích hình cầu, 
// với tham số truyền vào là bán kính của hình cầu.

// Bài 2: Viết hàm truyền vào 2 số nguyên, 
// tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với 
// tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).

// Bài 3: Cho 1 số, kiểm tra xem số đó có phải 
// là số nguyên tố hay không, kết quả trả về true hoặc false. 

// Bài 4: Cho 1 số nguyên dương bất kỳ. 
// Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham 
// số truyền vào.

// Bài 5: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.

// Bài 6: Cho 1 số nguyên, hãy viết hàm sắp xếp 
// lại các chữ số trong số nguyên đó sao cho ra 
// 1 số nhỏ nhất có thể (không tính số 0 đầu tiên). 
// Ví dụ với tham số 53751 thì kết quả là 13557.
function ValidateNumber(n) {
    if (typeof n === "number" && n > 0) {
        return n;
    }
    return;
}

function minNumber(number) {
    const n = ValidateNumber(number);
    //200715 ---> 100257
    //B1 : [2,0,0,7,1,5] 
    const array = `${n}`.split("");
    array.sort();
    for (let i = 0; i < array.length ; i++) {
        let temp = "";
        if (array[i] != 0) {
            temp = array[0];
            array[0] = array[i];
            array[i] = temp;
            break;
        }
    }
    return +array.join("");
    //B2 : sort -> [0,0,1,2,5,7]

    //B3 : [0,0] + [1,2,5,7] --> [1,[0,0],2,5,7]
    //[1,0,0,2,5,7]
}
console.log(minNumber(200715))