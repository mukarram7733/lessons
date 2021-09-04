
 function sozlar(a) {
            return [a/2, a/4, a/8];
        }
        console.log(sozlar(2,4,8));
   
    function g(day) {
        var months = ['circle', 'them-circle', 'uchburchak'];
    
        return `${months[day-1]}`;
    }
    
    console.log(g(1));

    var today = new Date();
    var day = today.getDay();
    var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    console.log("Today is : " + daylist[day] + ".");
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    var prepand = (hour >= 12)? " PM ":" AM ";
    hour = (hour >= 12)? hour - 12: hour;
    if (hour===0 && prepand===' PM ') 
    { 
    if (minute===0 && second===0)
    { 
    hour=12;
    prepand=' Noon';
    } 
    else
    { 
    hour=12;
    prepand=' PM';
    } 
    } 
    if (hour===0 && prepand===' AM ') 
    { 
    if (minute===0 && second===0)
    { 
    hour=12;
    prepand=' Midnight';
    } 
    else
    { 
    hour=12;
    prepand=' AM';
    } 
    } 
  console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);
  var today = new Date();
    switch (expr) {
        case "Monday":
          console.log("Today is : " + daylist[day] + ".");
          break;
        case "Apples":
          console.log("Today is : " + daylist[day] + ".");
          break;
        case "Bananas":
          console.log('Today is : " + daylist[day] + "."');
          break;
        case "Cherries":
            console.log('Today is : " + daylist[day] + "."');
            break;
        case "Mangoes":
        case "Papayas":
            console.log('Today is : " + daylist[day] + "."');
            break;
        default:
          console.log("Sorry, we are out of " + expr + ".");
      }
      
// 3-number
// let d=new Date();
// console.log(d);
// // 4-number
// // function m(i,d,c){
// //     let s= (i-d-c)/2
// //     let u=Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)))
// // }
// // console.log(m(u))
// // const time = date.toLocaleTimeString();
// // console.log(time);


// function date(day, month, year) {
//     let weekday = ['Sunday', '', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday'];

//     return day + '-' + weekday[month - 1] + ' ' + year + '-yil';
// }

// console.log(date(15,6,20));
// console.log(date(17,8,2021));
// // 10 PM : 30 : 38