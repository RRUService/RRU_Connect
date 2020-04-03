/------------------------------ ตั้งค่า firebase ------------------------------/

const db = firebase.firestore();//สร้าตัวแปร object สำหรับอ้างอิง firestore
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
            width:600
            
          },
          plotOptions: {
            bar: {
              horizontal: true,
              
            }
          },
          dataLabels: {
            enabled: false
          },
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
      ["หัวข้อ", "จำนวน"].forEach(function (el) {
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

