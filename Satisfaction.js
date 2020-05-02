/------------------------------ ตั้งค่า firebase ------------------------------/

const db = firebase.firestore();//สร้าตัวแปร object สำหรับอ้างอิง firestore
var intent = new Array("น้อยที่สุด", "น้อย", "ปานกลาง", "มาก", "มากที่สุด");

function myFunction_1() {
  document.getElementById("submit1").style.backgroundColor = "#736060";
  document.getElementById("submit2").style.backgroundColor = "#145a9d";
  document.getElementById("submit3").style.backgroundColor = "#145a9d";
 
  document.getElementById('select_1').style.display = 'none';
  var element1 = document.getElementById("content");
  if (element1 != null) {
    element1.parentNode.removeChild(element1);
  }
  var element2 = document.getElementById("pp");
  if (element2 != null) {
    element2.parentNode.removeChild(element2);
  }

  var element_chart1 = document.getElementById("chart1");

  if (element_chart1 != null) {
    element_chart1.parentNode.removeChild(element_chart1);
  }
  //สร้างกราฟ
  var iDiv = document.createElement('div');
  iDiv.id = 'chart';
  iDiv.className = 'block1';
  document.getElementById('ps').appendChild(iDiv);
  document.getElementById('day').style.display = 'block';

}
function myFunction() {
    var username = document.getElementById("start").value;

    var element = document.getElementById("chart");

    

  if(element != null){
    element.parentNode.removeChild(element);
  }
    var element1 = document.getElementById("content");
  if(element1 != null){
    element1.parentNode.removeChild(element1);
  }

    //format วันที่ เป็น yyyy/m/d
    var today = new Date(username);
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!

    var yyyy = today.getFullYear();

    var today = yyyy + '-' + mm + '-' + dd;
    console.log(today);
    if(today === "NaN-NaN-NaN"){
      window.alert("กรุณาเลือกวันที่ด้วยค่ะ");
    }


    //ดึงค่า นับหมวดหมู่ที่มากที่สุดออกมาดู
    //ก่อกำเนิดกราฟ
    var report_day = [];
    var report = [];
    var key_array = []; //
    var raw_data = [];
    var docRef = db.collection("Rate").doc(today);
    
    docRef.get().then(function (doc) {

            console.log("Document data:", doc.data());
            let key = Object.keys(doc.data());
            let data = Object.values(doc.data()).sort(function(a, b){return b - a});

            console.log("key = " + key)
            console.log("data =" + data )
           graph(key,data);
   
            // report.push(doc.data());//เก็บ ข้อมูล key และ ค่าของข้อมูล 
            
        
    });
 
    function graph(key,data){

       //สร้างกราฟ
    var iDiv = document.createElement('div');
    iDiv.id = 'chart';
    iDiv.className = 'block1';
    document.getElementById('ps').appendChild(iDiv);

      //สร้างตาราง
      var iDiv1 = document.createElement('div');
    iDiv1.id = 'content';
    iDiv1.className = 'block2';
    document.getElementById('ps').appendChild(iDiv1);

        var options = {
            series: [{
            name:"จำนวน",
            data: data,
           
          }],
            chart: {
            type: 'bar',
            height: 350,
            width:750
            
          },
          plotOptions: {
            bar: {
              horizontal: true,
              
            }
          },
          dataLabels: {
            enabled: false
          },
          colors: ['#FF4560'
          ],
          xaxis: {
            categories: key
          },
          title: {
            text: 'แบบประเมินความพึงพอใจหลังการใช้งาน'
          }
        
          };
          
          var chart = new ApexCharts(document.querySelector("#chart"), options);
          chart.render();
          chart.resetSeries()
        showData(key,data);

    }


    function showData(report_month, number) {

  
  
      var MOUNTAINS = [];
      // เตรียมข้อมูล
      for (var i = 0; i < report_month.length; i++) {
    
        MOUNTAINS.push({ "name": report_month[i], "ถูก": number[i]});
        
    
      }
      
    
      //draw table
      var table = document.createElement("table");
      table.className = "gridtable";
      var thead = document.createElement("thead");
      var tbody = document.createElement("tbody");
      var headRow = document.createElement("tr");
      ["ความพึงพอใจ", "จำนวน"].forEach(function (el) {
        var th = document.createElement("th");
        th.appendChild(document.createTextNode(el));
        headRow.appendChild(th);
      });
      thead.appendChild(headRow);
      table.appendChild(thead);
      MOUNTAINS.forEach(function (el) {
      
        var tr = document.createElement("tr");
        for (var o in el) {
          var td = document.createElement("td");
          td.appendChild(document.createTextNode(el[o]))
          tr.appendChild(td);
        }
        tbody.appendChild(tr);
      });
      table.appendChild(tbody);
    
      document.getElementById("content").appendChild(table);
    }

    
}

function myFunction_2() {
  document.getElementById("submit1").style.backgroundColor = "#145a9d";
  document.getElementById("submit2").style.backgroundColor = "#145a9d";
  document.getElementById("submit3").style.backgroundColor = "#736060";
  document.getElementById('select_1').style.display = 'block';
  var element_chart1 = document.getElementById("chart1");

  if (element_chart1 != null) {
    element_chart1.parentNode.removeChild(element_chart1);
  }

  var element2 = document.getElementById("pp");
  if (element2 != null) {
    element2.parentNode.removeChild(element2);
  }

  var element = document.getElementById("chart");

  if (element != null) {
    element.parentNode.removeChild(element);
  }
  var element1 = document.getElementById("content");
  if (element1 != null) {
    element1.parentNode.removeChild(element1);
  }


  document.getElementById('day').style.display = 'none';




}
function month() {
  var element_chart1 = document.getElementById("chart1");

  if (element_chart1 != null) {
    element_chart1.parentNode.removeChild(element_chart1);
  }
  var element1 = document.getElementById("content");
  if (element1 != null) {
    element1.parentNode.removeChild(element1);
  }

  const db = firebase.firestore();//สร้าตัวแปร object สำหรับอ้างอิง firestore
  
  var list_1 = [];// น้อยที่สุด
  var list_2 = [];//น้อย
  var list_3 = [];//ปานกลาง
  var list_4 = [];//มาก
  var list_5 = [];//มากที่สุด



  //สร้างกราฟ
  var iDiv = document.createElement('div');
  iDiv.id = 'chart1';
  iDiv.className = 'block1';
  document.getElementById('ps').appendChild(iDiv);
  //สร้าง div สำหรับตาราง
  var iDiv1 = document.createElement('div');
  iDiv1.id = 'content';
  iDiv1.className = 'block2';
  document.getElementById('ps').appendChild(iDiv1);



  var x = document.getElementById("select_m").value;
  var y = document.getElementById("mySelect").value;
  db.collection("Rate")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        var today = new Date(doc.id);
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear(); // ต้องรับค่า จาก input
        if (yyyy == Number(y)) {
          if (mm == Number(x)) {

            if (doc.data().น้อยที่สุด !== undefined) {
              list_1.push({ "เดือน": mm, "น้อยที่สุด": doc.data().น้อยที่สุด });
            }
            if (doc.data().น้อย !== undefined) {
              list_2.push({ "เดือน": mm, "น้อย": doc.data().น้อย });
            }
            if (doc.data().ปานกลาง !== undefined) {
              list_3.push({ "เดือน": mm, "ปานกลาง": doc.data().ปานกลาง });
            }
            if (doc.data().มาก !== undefined) {
              list_4.push({ "เดือน": mm, "มาก": doc.data().มาก });
            }
            if (doc.data().มากที่สุด !== undefined) {
              list_5.push({ "เดือน": mm, "มากที่สุด": doc.data().มากที่สุด });
              console.log(doc.data().มากที่สุด);
            }
          }
        }

      });


      list_count = [];

      var count_1 = 0, count_2 = 0, count_3 = 0, count_4 = 0, count_5 = 0;
      //เชคข้อมูล
      list_1.filter((docs) => {
        if (docs.เดือน === 1) {
          count_1 += docs.น้อยที่สุด;
        } if (docs.เดือน === 2) {
          count_1 += docs.น้อยที่สุด;
        } if (docs.เดือน === 3) {
          count_1 += docs.น้อยที่สุด;
        } if (docs.เดือน === 4) {
          count_1 += docs.น้อยที่สุด;
        } if (docs.เดือน === 5) {
          count_1 += docs.น้อยที่สุด;
        } if (docs.เดือน === 6) {
          count_1 += docs.น้อยที่สุด;
        } if (docs.เดือน === 7) {
          count_1 += docs.น้อยที่สุด;
        } if (docs.เดือน === 8) {
          count_1 += docs.น้อยที่สุด;
        } if (docs.เดือน === 9) {
          count_1 += docs.น้อยที่สุด;
        } if (docs.เดือน === 10) {
          count_1 += docs.น้อยที่สุด;
        } if (docs.เดือน === 11) {
          count_1 += docs.น้อยที่สุด;
        } if (docs.เดือน === 12) {
          count_1 += docs.น้อยที่สุด;
        }


      });

      list_2.filter((docs) => {
        if (docs.เดือน === 1) {
          count_2 += docs.น้อย;
        } if (docs.เดือน === 2) {
          count_2 += docs.น้อย;
        } if (docs.เดือน === 3) {
          count_2 += docs.น้อย;
        } if (docs.เดือน === 4) {
          count_2 += docs.น้อย;
        } if (docs.เดือน === 5) {
          count_2 += docs.น้อย;
        } if (docs.เดือน === 6) {
          count_2 += docs.น้อย;
        } if (docs.เดือน === 7) {
          count_2 += docs.น้อย;
        } if (docs.เดือน === 8) {
          count_2 += docs.น้อย;
        } if (docs.เดือน === 9) {
          count_2 += docs.น้อย;
        } if (docs.เดือน === 10) {
          count_2 += docs.น้อย;
        } if (docs.เดือน === 11) {
          count_2 += docs.น้อย;
        } if (docs.เดือน === 12) {
          count_2 += docs.น้อย;
        }


      });
      list_3.filter((docs) => {
        if (docs.เดือน === 1) {
          count_3 += docs.ปานกลาง;
        } if (docs.เดือน === 2) {
          count_3 += docs.ปานกลาง;
        } if (docs.เดือน === 3) {
          count_3 += docs.ปานกลาง;
        } if (docs.เดือน === 4) {
          count_3 += docs.ปานกลาง;
        } if (docs.เดือน === 5) {
          count_3 += docs.ปานกลาง;
        } if (docs.เดือน === 6) {
          count_3 += docs.ปานกลาง;
        } if (docs.เดือน === 7) {
          count_3 += docs.ปานกลาง;
        } if (docs.เดือน === 8) {
          count_3 += docs.ปานกลาง;
        } if (docs.เดือน === 9) {
          count_3 += docs.ปานกลาง;
        } if (docs.เดือน === 10) {
          count_3 += docs.ปานกลาง;
        } if (docs.เดือน === 11) {
          count_3 += docs.ปานกลาง;
        } if (docs.เดือน === 12) {
          count_3 += docs.ปานกลาง;
        }


      });
      list_4.filter((docs) => {
        if (docs.เดือน === 1) {
          count_4 += docs.มาก;
        } if (docs.เดือน === 2) {
          count_4 += docs.มาก;
        } if (docs.เดือน === 3) {
          count_4 += docs.มาก;
        } if (docs.เดือน === 4) {
          count_4 += docs.มาก;
        } if (docs.เดือน === 5) {
          count_4 += docs.มาก;
        } if (docs.เดือน === 6) {
          count_4 += docs.มาก;
        } if (docs.เดือน === 7) {
          count_4 += docs.มาก;
        } if (docs.เดือน === 8) {
          count_4 += docs.มาก;
        } if (docs.เดือน === 9) {
          count_4 += docs.มาก;
        } if (docs.เดือน === 10) {
          count_4 += docs.มาก;
        } if (docs.เดือน === 11) {
          count_4 += docs.มาก;
        } if (docs.เดือน === 12) {
          count_4 += docs.มาก;
        }


      });
      list_5.filter((docs) => {
        if (docs.เดือน === 1) {
          count_5 += docs.มากที่สุด;
        } if (docs.เดือน === 2) {
          count_5 += docs.มากที่สุด;
        } if (docs.เดือน === 3) {
          count_5 += docs.มากที่สุด;
        } if (docs.เดือน === 4) {
          count_5 += docs.มากที่สุด;
        } if (docs.เดือน === 5) {
          count_5 += docs.มากที่สุด;
        } if (docs.เดือน === 6) {
          count_5 += docs.มากที่สุด;
        } if (docs.เดือน === 7) {
          count_5 += docs.มากที่สุด;
        } if (docs.เดือน === 8) {
          count_5 += docs.มากที่สุด;
        } if (docs.เดือน === 9) {
          count_5 += docs.มากที่สุด;
        } if (docs.เดือน === 10) {
          count_5 += docs.มากที่สุด;
        } if (docs.เดือน === 11) {
          count_5 += docs.มากที่สุด;
        } if (docs.เดือน === 12) {
          count_5 += docs.มากที่สุด;
        }

      });





      list_count = [{ "ชื่อ": intent[0], "จำนวน": count_1 }, { "ชื่อ": intent[1], "จำนวน": count_2 }, { "ชื่อ": intent[2], "จำนวน": count_3 },
      { "ชื่อ": intent[3], "จำนวน": count_4 }, { "ชื่อ": intent[4], "จำนวน": count_5 }];

      list_count.sort((a, b) => (a.จำนวน > b.จำนวน) ? -1 : 1)
      console.log(list_count);
      //  list_count = [{"" : count_1},{"" : count_2}, {"" : count_3},{"" : count_4},{"" : count_5},count_6,count_7,count_8,count_9,count_10,count_11,count_12];

      //ข้อมูลทำกราฟ
      list_name = [];
      list_num = [];
      list_count.filter((docs) => {
        list_name.push(docs.ชื่อ);
        list_num.push(docs.จำนวน);

      });


      // console.log(list_count_Calender)

      //สร้างกราฟ
      var options = {
        series: [{
          name: "จำนวน",
          data: list_num
        }],
        chart: {
          type: 'bar',
          height: 350,
          width: 750
        },
        plotOptions: {
          bar: {
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: true
        },
        colors: ['#FF4560'
        ],
        xaxis: {
          categories: list_name

        },
        title: {
          text: 'ประเมินความพึงพอใจหลังการใช้งานระบบ'
        }
      };

      var chart = new ApexCharts(document.querySelector("#chart1"), options);
      chart.render();
      chart.resetSeries();



      //draw table
      var table = document.createElement("table");
      table.className = "gridtable";
      var thead = document.createElement("thead");
      var tbody = document.createElement("tbody");
      var headRow = document.createElement("tr");
      ["ความพึงพอใจ", "จำนวน"].forEach(function (el) {
        var th = document.createElement("th");
        th.appendChild(document.createTextNode(el));
        headRow.appendChild(th);
      });
      thead.appendChild(headRow);
      table.appendChild(thead);
      list_count.forEach(function (el) {
        var tr = document.createElement("tr");
        for (var o in el) {
          var td = document.createElement("td");
          td.appendChild(document.createTextNode(el[o]))
          tr.appendChild(td);
        }
        tbody.appendChild(tr);
      });
      table.appendChild(tbody);

      document.getElementById("content").appendChild(table);




    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
}

function myFunction_3() {
  document.getElementById("submit1").style.backgroundColor = "#145a9d";
  document.getElementById("submit2").style.backgroundColor = "#736060";
  document.getElementById("submit3").style.backgroundColor = "#145a9d";
  document.getElementById('select_1').style.display = 'none';
  var element_chart1 = document.getElementById("chart1");

  if (element_chart1 != null) {
    element_chart1.parentNode.removeChild(element_chart1);
  }

  var element = document.getElementById("chart");

  if (element != null) {
    element.parentNode.removeChild(element);
  }
  var element1 = document.getElementById("content");
  if (element1 != null) {
    element1.parentNode.removeChild(element1);
  }


  document.getElementById('day').style.display = 'none';

  function newDayAdd(inputDate, addDay) {
    var d = new Date(inputDate);
    d.setDate(d.getDate() - addDay);
    mkMonth = d.getMonth() + 1;
    mkMonth = new String(mkMonth);
    if (mkMonth.length == 1) {
      mkMonth = mkMonth;
    }
    mkDay = d.getDate();
    mkDay = new String(mkDay);
    if (mkDay.length == 1) {
      mkDay = mkDay;
    }
    mkYear = d.getFullYear();
    //  return mkYear+"-"+newMonth+"-"+newDay; // แสดงผลลัพธ์ในรูปแบบ ปี-เดือน-วัน
    return mkYear + "-" + mkMonth + "-" + mkDay; // แสดงผลลัพธ์ในรูปแบบ เดือน/วัน/ปี    
  }

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear(); // ต้องรับค่า จาก input
  var date = mm + "/" + dd + "/" + yyyy;

  const list_d = Array();//การสร้าง array

  for (var i = 0; i <= 7; i++) {
    var next100day = newDayAdd(date, i);
    list_d.push(next100day);
  }
  
  var min = list_d.reduce(function (a, b) { return a < b ? a : b; }); 
  var max = list_d.reduce(function (a, b) { return a > b ? a : b; });
  list_text = [min , max];
  list_t = [];
  for(var i=0 ;i<list_text.length;i++){
    var today = new Date(list_text[i]);
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear(); // ต้องรับค่า จาก input
    var date = dd + "/" + mm + "/" + yyyy;
    list_t.push(date);

  }
  


  var element2 = document.getElementById("pp");
  if (element2 != null) {
    element2.parentNode.removeChild(element2);
  }

  var iDiv4 = document.createElement('div');
  iDiv4.id = 'pp';
  iDiv4.className = 'block2';
  document.getElementById('div1').appendChild(iDiv4);

 
  var para = document.createElement("h4");
  var node = document.createTextNode("ข้อมูลระหว่างวันที่  " + list_t[0] + " ถึง " + list_t[1]);
  var para1 = document.createElement("p");
  var node1 = document.createTextNode("หมายเหตุ : เป็นการเก็บข้อมูล 7 วัน");
  para.appendChild(node);
  para1.appendChild(node1);
  var element = document.getElementById("pp");
  element.appendChild(para);
  element.appendChild(para1);


 

  var list_1 = [];// น้อยที่สุด
  var list_2 = [];//น้อย
  var list_3 = [];//ปานกลาง
  var list_4 = [];//มาก
  var list_5 = [];//มากที่สุด

    //สร้างกราฟ
    var iDiv = document.createElement('div');
    iDiv.id = 'chart1';
    iDiv.className = 'block1';
    document.getElementById('ps').appendChild(iDiv);
    //สร้าง div สำหรับตาราง
    var iDiv1 = document.createElement('div');
    iDiv1.id = 'content';
    iDiv1.className = 'block2';
    document.getElementById('ps').appendChild(iDiv1);
  

   var count_1 = 0, count_2 = 0, count_3 = 0, count_4 = 0, count_5 = 0;
  db.collection("Rate")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        
        if (list_d.includes(doc.id) === true) {
          if (doc.data().น้อยที่สุด !== undefined) {
            list_1.push({ "เดือน": mm, "น้อยที่สุด": doc.data().น้อยที่สุด });
          }
          if (doc.data().น้อย !== undefined) {
            list_2.push({ "เดือน": mm, "น้อย": doc.data().น้อย });
          }
          if (doc.data().ปานกลาง !== undefined) {
            list_3.push({ "เดือน": mm, "ปานกลาง": doc.data().ปานกลาง });
          }
          if (doc.data().มาก !== undefined) {
            list_4.push({ "เดือน": mm, "มาก": doc.data().มาก });
          }
          if (doc.data().มากที่สุด !== undefined) {
            list_5.push({ "เดือน": mm, "มากที่สุด": doc.data().มากที่สุด });
            console.log(doc.data().มากที่สุด);
          }
        }
      });
      

      list_1.filter((docs) => {
        count_1 += docs.น้อยที่สุด;
      });
      list_2.filter((docs) => {
        count_2 += docs.น้อย;
      });
      list_3.filter((docs) => {
        count_3 += docs.ปานกลาง;
      });
     
      list_4.filter((docs) => {
        count_4 += docs.มาก;

      });
      list_5.filter((docs) => {
        count_5 += docs.มากที่สุด;
      });
      


      list_count = [{ "ชื่อ": intent[0], "จำนวน": count_1 }, { "ชื่อ": intent[1], "จำนวน": count_2 }, { "ชื่อ": intent[2], "จำนวน": count_3 },
      { "ชื่อ": intent[3], "จำนวน": count_4 }, { "ชื่อ": intent[4], "จำนวน": count_5 }];

      list_count.sort((a, b) => (a.จำนวน > b.จำนวน) ? -1 : 1)
      console.log(list_count);
           //ข้อมูลทำกราฟ
           list_name = [];
           list_num = [];
           list_count.filter((docs) => {
             list_name.push(docs.ชื่อ);
             list_num.push(docs.จำนวน);
     
           });
            //สร้างกราฟ
      var options = {
        series: [{
          name: "จำนวน",
          data: list_num
        }],
        chart: {
          type: 'bar',
          height: 350,
          width: 750
        },
        plotOptions: {
          bar: {
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: true
        },
        colors: ['#CC9900'
        ],
        xaxis: {
          categories: list_name

        },
        title: {
          text: 'ประเมินความพึงพอใจหลังการใช้งานระบบ'
        }
      };

      var chart = new ApexCharts(document.querySelector("#chart1"), options);
      chart.render();
      chart.resetSeries();



      //draw table
      var table = document.createElement("table");
      table.className = "gridtable";
      var thead = document.createElement("thead");
      var tbody = document.createElement("tbody");
      var headRow = document.createElement("tr");
      ["ความพึงพอใจ", "จำนวน"].forEach(function (el) {
        var th = document.createElement("th");
        th.appendChild(document.createTextNode(el));
        headRow.appendChild(th);
      });
      thead.appendChild(headRow);
      table.appendChild(thead);
      list_count.forEach(function (el) {
        var tr = document.createElement("tr");
        for (var o in el) {
          var td = document.createElement("td");
          td.appendChild(document.createTextNode(el[o]))
          tr.appendChild(td);
        }
        tbody.appendChild(tr);
      });
      table.appendChild(tbody);

      document.getElementById("content").appendChild(table);
    });


}

