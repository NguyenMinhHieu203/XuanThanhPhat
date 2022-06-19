/*Bài tập String*/

// Bài 1
function checkStringExist(chuoiBanDau, chuoiKiemTra)
{
    if(chuoiBanDau.search(chuoiKiemTra) !== -1)
    {
        return true;  
    }
    else
    {
        return false;
    }
}
checkStringExist("i love you", "you");
checkStringExist("i love you", "hate");

//Bài 2
function shortenString(chuoiDauVao)
{
    var chuoiDaCat = "";
    chuoiDaCat = chuoiDauVao.slice(0, 8) + "...";
    return chuoiDaCat;
}
shortenString("Xin chao cac ban");


//Bài 3
function capitalizeString(chuoiDV)
{
    chuoiDV = chuoiDV.toLowerCase();
    var KQ = chuoiDV.charAt(0).toUpperCase() + chuoiDV.slice(1);
    return KQ;
}
capitalizeString("chÀo MừnG đẾn với xTP");

//Bài 4
function copyString(chuoiCuaToi)
{
    var chuoiSaoChep = "";
    for(var i = 0; i < 10; i++)
    {
        chuoiSaoChep += chuoiCuaToi + " ";
    }
    return chuoiSaoChep;
}
copyString("HelloWorld");

//Bài 5
function repeatStringOne(chuoiSaoChep)
{
    var chuoiKetQua = '';
    for(var i = 0; i < 10; i++)
    {
        if(i == 9)
        {
            chuoiKetQua += chuoiSaoChep;
            break;
        }
        chuoiKetQua += chuoiSaoChep + '-';
    }
    return chuoiKetQua;
}
repeatStringOne("a");

//Bài 6
function repeatStringTwo(chuoiDV, soNguyenN)
{
    var chuoiKQ = "";
    for(var i = 0; i < soNguyenN; i++)
    {
        if(i == soNguyenN - 1)
        {
            chuoiKQ += chuoiDV;
            break;
        }
        chuoiKQ += chuoiDV + "-";
    }
    return chuoiKQ;
}
repeatStringTwo("a", 5);

//Bài 7
function reverseString(chuoiDaoNguoc)
{
    var ketQua = "";
    for(var i = chuoiDaoNguoc.length - 1; i >= 0; i--)
        ketQua += chuoiDaoNguoc.charAt(i);        
    return ketQua;
}
reverseString("Hello");

//Bài 8
function Palidrome(chuoiNhapVao)
{
    var kiemTra = "";
    var chuoiVietThuong = chuoiNhapVao.toLowerCase();
    chuoiVietThuong = chuoiVietThuong.split(" ").join("");
    for(var i = chuoiVietThuong.length - 1; i >= 0; i--)
    {
        kiemTra += chuoiVietThuong.charAt(i);
    }
    if(kiemTra === chuoiVietThuong)
    {
        return true;
    }
    else
    {
        return false;
    }
}
Palidrome("Race car");
Palidrome("hello world");

//Bài 9
function upperCaseString(chuoiKT)
{
    var chuoiVT = chuoiKT.toLowerCase();
    if(chuoiVT === chuoiKT)
    {
        return false;
    }
    else
    {
        return true;
    }
}
upperCaseString("XIN CHAO CAC BAN");

/*Bài tập Number*/

//Bài 1
function sphericalArea(banKinh)
{
    var dienTich = (4*3.14*Math.pow(banKinh, 3))/3;
    return dienTich;
}
sphericalArea(3);

//Bài 2
function sum(soThuNhat, soThuHai)
{
    var sum = 0;
    for(var i = soThuNhat + 1; i < soThuHai; i++)
    {
        sum += i;
    }
    return sum;
}
sum(3, 7);

//Bài 3
function checkPrime(soDauVao)
{
    var flag = 0;
    if(soDauVao < 1)
    {
        return false;
    }
    else if(soDauVao == 2)
    {
        return true;
    }
    else
    {
        for(var i = 2; i < soDauVao; i++)
        {
            if(soDauVao % i === 0)
            {
                flag++;
            }
        }
        if(flag > 0)
        {
            return false;
        }
        else
        {
            return true;
        }
    }

}
checkPrime(13);
checkPrime(9);

//Bài 4
function sumPrime(soDV)
{
    var tong = 0;
    for(var i = 2; i <= soDV; i++)
    {
        if(checkPrime(i) == true)
        {
            tong += i;
        }
        else
        {
            tong += 0;
        }
    }
    return tong;
}
sumPrime(13);

//Bài 5
function divisorOfNumber(soCuaToi)
{
    var ketQua = 0;
    for(var i = 1; i <= soCuaToi; i++)
    {
        if(soCuaToi % i === 0)
        {
            ketQua += i;
        }
        else
        {
            ketQua += 0;
        }
    }
    return ketQua;
}
divisorOfNumber(8);

//Bài 6
function sortNumber(soSapXep)
{
    var chuoiSo = soSapXep.toString().split("");
    var flag = 0;
    for(var i = 0; i < chuoiSo.length; i++)
    {
        for(var i = 0; i < chuoiSo.length; i++)
        {
            for(var j = i + 1; j < chuoiSo.length; j++)
            {
                if(chuoiSo[i] > chuoiSo[j])
                {
                    flag = chuoiSo[i];
                    chuoiSo[i] = chuoiSo[j];
                    chuoiSo[j] = flag;
                }
            }
        }
    }
    chuoiSo = chuoiSo.join("");
    return Number(chuoiSo);
}
sortNumber(53751);

function ValidateNumber(number)
{
    if(typeof(number) === 'number' && number > 0)
    {
        return number;
    }
    return;
}
function minNumber(Number)
{
    const n = ValidateNumber(number);
    //200715 ----> 100257
    //B1: [2, 0, 0, 7, 1, 5]
    const array = `${n}`.split("");
    array.sort();
    for(let i = 0; i < array.length; i++)
    {
        let temp = "";
        if(array[i] !== "0")
        {
            temp = array[0];
            array[0] = array[i];
            array[i] = temp;
            break;
        }
    }
    return +array.join("");
    //B2: sort -> [0,0,1,2,5,7]
}

