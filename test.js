function newDayAdd(inputDate,addDay){
    var d = new Date(inputDate);
    d.setDate(d.getDate()-addDay);
    mkMonth=d.getMonth()+1;
    mkMonth=new String(mkMonth);
    if(mkMonth.length==1){
        mkMonth="0"+mkMonth;
    }
    mkDay=d.getDate();
    mkDay=new String(mkDay);
    if(mkDay.length==1){
        mkDay="0"+mkDay;
    }   
    mkYear=d.getFullYear();
//  return mkYear+"-"+newMonth+"-"+newDay; // แสดงผลลัพธ์ในรูปแบบ ปี-เดือน-วัน
    return mkDay+"/"+mkMonth+"/"+mkYear; // แสดงผลลัพธ์ในรูปแบบ เดือน/วัน/ปี    
}
 

var next100day=newDayAdd("5/10/2020",7);
console.log(next100day)