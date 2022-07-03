//bài 1
/**
 * INPUT: ngay thang nam 
 * PROCESS:
 *      1.lấy input là ngày tháng năm
 *      2.dùng switch case kiểm tra ngày tháng năm hợp lệ hay không và đó có phải là năm nhuận hay không nếu đúng thì tháng 2 có 29 ngày , ngày tháng năm trước đó=ngày tháng năm trừ đi 1 , ngày tháng năm tiếp theo =ngày tháng năm cộng 1
        3.log ra màn hình kết quả ngày tháng năm trước và sau
OUTPUT:in ra màn hinh kết quả ngày tháng năm trước và sau
 */

var day=29;
var month=2;
var year=2016;
switch(month){
    case 1: case 3: case 5: case 7: case 8: case 10: case 12://31 ngày
        {
            if(month==1&&day===1)
            {
                console.log("ngày trước đó",31,12,year-1)
            }
            else if(month==1&&day!=1)
            {
                console.log("ngày trước đó",day-1,month,year)
            }
            else if(month==3&&day==1){
            if((year%4==0 && year%100!=0) || year%400==0){
                console.log("ngày trước đó",29,month-1,year)
            }
            else {
                console.log("ngày trước đó", 28,month-1,year)
            }
            }
            else if(month!=1&&day==1)
            {
                if(month==1||month==3||month==5||month==7||month==8||month==10||month==12){
                console.log("ngày trước đó",30,month-1,year)
                }
                else
                {
                    console.log("ngày trước đó",31,month-1,year)
                }
            }
            else{
                console.log("ngày trước đó",day-1,month,year)
            }
            break;
        }
    case 2:
        if(day==1)
        console.log("ngày trước đó",31,month-1,year)
       else {
        console.log("ngày trước đó",day-1,month,year)
       }
       break;
    case 4: case 6: case 9: case 11:
        if(day==1)
        {
            console.log("ngày trước đó",31,month-1,year)
        }
        else {
            console.log("ngày trước đó",day-1,month,year)
        }
            break;
    }
    switch(month)
    {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12://31 ngày
        {
            if(month==12&&day==31)
            {
                console.log("ngày sau đó",1,1,year+1)
            }
            else if(month!=1&&day==31)
            {
               console.log("ngày sau đó",1,month+1,year)
            }
            else{
                console.log("ngày sau đó",day+1,month,year)
            }
        }
        break;
        case 2:
            if((year%4==0 && year%100!=0) || year%400==0){
                if(day==29){
                    console.log("ngày sau đó",1,month+1,year)
                }
                else{
                    console.log("ngày sau đó",day+1,month,year)
                }
            }
            else{
                if(day==28){
                  console.log("ngày sau đó",1,month+1,year)  
                }
            }
    }

//bài 2
/**
 * INPUT:tháng năm
 * PROCESS:
 *      1.lấy input là tháng ,năm
 *      2.dùng swtich case như bài 1
 *      3.log ra màn hình có bao nhiêu ngày trong tháng đó
 * OUTPUT:kết quả ngày trong tháng đó có bao nhiêu ngày
 */
var monthh=2;
var yearr=2016;
switch(monthh){
    case 1: case 3: case 5: case 7: case 8: case 10: case 12://31 ngày
    {
        console.log("có 31 ngày")
    }
    break;
    case 2:
        if((year%4==0 && year%100!=0) || year%400==0){
         console.log("tháng có 29 ngày")   
        }
        else{
            console.log("tháng có 28 ngày")
        }
    break;
    case 4:case 6:case 9:case 11:
        console.log("có 30 ngày")
    }


//bài 3
/**
 * INPUT:số nguyên có 3 chữ số
 *OUTPUT:
        1.lấy input là số nguyên có 3 chữ số 
        2.hàng đơn vị = số %10, số/=10; hàng chục = số%10, hàng trăm=so/10
        3.log ra màn hình kết quả đọc của số nguyên có 3 chữ số
*INPUT:in ra màn hình cách đọc của số nguyên có 3 chữ số
 */
var num=321;
var unit=num%10
num=Math.floor(num/10)
var dozen= num%10;
var hundred=Math.floor(num/10)
// replace(/r? n/g, '') ;
switch(hundred)
{
    case 1:
        hundred='một trăm'
        break;
    case 2:
        hundred='hai trăm'
        break
    case 3:
        hundred='ba trăm'
        break
    case 4:
        hundred='bốn trăm'
        break
    case 5:
        hundred='năm trăm'
        break
    case 6:
        hundred='sáu trăm'
        break
    case 7:
        hundred='bảy trăm'
        break
    case 8:
        hundred='tám trăm'
        break
    case 9:
        hundred='chín trăm'
        break
}

switch(dozen){
    case 1:
        dozen=' mười' 
        break
    case 2:
        dozen=' hai mươi' 
        break
    case 3:
        dozen=' ba mươi' 
        break
    case 4:
        dozen=' bốn mươi' 
        break
    case 5:
        console.log("năm mươi")
        dozen=' năm mươi' 
        break
    case 6:
        dozen=' sáu mươi' 
        break
    case 7:
        dozen=' bảy mươi' 
        break
    case 8:
        dozen=' tám mươi' 
        break
    case 9:
        dozen=' chín mươi' 
        break
}
switch(unit){
    case 1:
        unit=' mốt'
        break
    case 2:
        unit=' hai'
        break
    case 3:
        unit=' ba' 
        break
    case 4:
        unit=' bốn' 
        break
    case 5:
        unit=' năm' 
        break
    case 6:
        unit=' sáu' 
        break
    case 7:
        unit=' bảy' 
        break
    case 8:
        unit=' tám' 
        break
    case 9:
        unit=' chín'
        break
}
console.log(hundred+dozen+unit)
//bài 4
/**
 * INPUT:tọa độ của trường và của 3 sinh viên
 * PROCESS:
 *      1.lấy input là tọa độ của trường và của 3 sinh viên
 *      2.tính khoảng cách từ trường đến mỗi sinh viên bằng công thức KC=sqrt((x2-x2)^2+(y2-y1)^2)
 *      3.in ra màn hình kết quả sinh viên gần trường nhất
 *OUTPUT:in ra màn hihf kết quả sinh viên gần trường nhất
 */

 var xStudent1=2;
 var yStudent1=4;
 var xStudent2=3;
 var yStudent2=5;
 var xStudent3=4;
 var yStudent3=6;
 var xSchool=4;
 var ySchool=5;
 var distance1=Math.sqrt(Math.pow((xSchool-xStudent1),2)+Math.pow((ySchool-yStudent1),2))
 var distance2=Math.sqrt(Math.pow((xSchool-xStudent2),2)+Math.pow((ySchool-yStudent2),2))
 var distance3=Math.sqrt(Math.pow((xSchool-xStudent3),2)+Math.pow((ySchool-yStudent3),2))
//  var max=distance1;
 if(distance1>distance2&&distance1>distance3)
 {
    console.log("sinh viên thứ nhất gần trường nhất")
 }
 if(distance2>distance1&&distance2>distance3)
 {
    console.log("sinh viên thứ hai gần trường nhất")
 }
 if(distance3>distance2&&distance3>distance1)
 {
    console.log("sinh viên thứ ba gần trường nhất")
 }