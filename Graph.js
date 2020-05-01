/------------------------------ ตั้งค่า firebase ------------------------------/



const db = firebase.firestore();//สร้าตัวแปร object สำหรับอ้างอิง firestore
       


//เฉพาะค่าธรรมเนียมการศึกษา
var TopicData = {};
TopicData['ค่าธรรมเนียมการศึกษา'] = ['กรุณาเลือกคณะ', 'คณะครุศาสตร์', 'คณะเทคโนโลยีอุตสาหกรรม', 'คณะมนุษยศาสตร์และสังคมศาสตร์', 'คณะวิทยาการจัดการ', 'คณะวิทยาศาสตร์และเทคโนโลยี'];
var DataList = document.getElementById("category");// get id value
var SubDataList = document.getElementById("subcategory");//get id value

// //   console.log(row.length)



function ChangeSelectList() {



  // document.getElementById('chart').style.display = 'none';
  // document.getElementById("retable").deleteRow(1);//

 
  var DataCategory = DataList.options[DataList.selectedIndex].value; //ดึงค่าของ value หมวดหมู


  console.log(DataCategory + "15");

  if (DataCategory == "ค่าธรรมเนียมการศึกษา") {

    document.getElementById('display').style.display = 'block';

    while (SubDataList.options.length) {
      SubDataList.remove(0);
    }

    var Head = TopicData[DataCategory];

    console.log(Head + "14");
    if (Head) {

      var i;
      for (i = 0; i < Head.length; i++) {
        var Add_Sub = new Option(Head[i], i);// เพิ่มข้อมูลลงใน id subcategory
        SubDataList.options.add(Add_Sub);

      }

    }

  } else {

    document.getElementById('display').style.display = 'none';
    

  }

  


}

function myFunction() {

  var username = document.getElementById("start").value; //วันที่ document
  var DataList = document.getElementById("category").value;// get id value

 
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
  else if(DataList === "กรุณาเลือกหมวดหมู่"){
    window.alert("กรุณาเลือกหมวดหมู่ด้วยค่ะ");
  }






  if (DataList === "ค่าธรรมเนียมการศึกษา") {
    var y = document.getElementById("subcategory");//get id

    
    var Index_Subcategoy = y.selectedIndex;
    Value_SubCategory = y.options[Index_Subcategoy].value;
    var Subject = TopicData[DataList][Value_SubCategory];
    console.log(TopicData[DataList][Value_SubCategory] + "23"); //คณะ
    console.log(DataList);//หมวดหมู่ค่าธรรมเนียม
    if(Subject === "กรุณาเลือกคณะ"){
      window.alert("กรุณาเลือกคณะด้วยค่ะ");
    }

    // document.getElementById('chart').style.display = 'block';
    db.collection("Count_Accuracy").doc(today).collection(DataList).doc(Subject).collection("Subject").get().then(function (data) { //อ่านข้อมูลจาก collection sale_report

      var report_month = [];
      var report = [];
      var key_array = [];
      var raw_data = [];


    

      data.forEach(function (doc) {
       
        report_month.push(doc.id);//เก็บเดือนของรายงานไว้ในตัวแปร report_month //doc.id
        report.push(doc.data());//เก็บยอดขายของสินค้าแต่ละอันไว้ในตัวแปร report

      });
     
      report.forEach(function (report_item) {

        Object.keys(report_item).forEach(function (key) {

          if (key_array.indexOf(key) == -1) {
            key_array.push(key);//เก็บชื่อ Product ทีมีไว้ในตัวแปร key_array
          }

        });

      });
      key_array.forEach(function (key) {

        number_array = [];

        report.forEach(function (report_item) {

          if (report_item[key] == null) {
            number_array.push(0);
          }
          else {
            number_array.push(report_item[key]);
          }

        });

        raw_data.push({
          "key": key,//ชื่อสินค้า
          "number": number_array//array ยอดขายแต่ละเดือน
        });

      });


      graph(report_month, raw_data);


    });




  } else {

    // document.getElementById('chart').style.display = 'block';
    db.collection("Count_Accuracy").doc(today).collection(DataList).get().then(function (data) { //อ่านข้อมูลจาก collection sale_report

      var report_month = [];
      var report = [];
      var key_array = [];
      var raw_data = [];
    


      data.forEach(function (doc) {

        report_month.push(doc.id);//เก็บเดือนของรายงานไว้ในตัวแปร report_month //doc.id
        report.push(doc.data());//เก็บยอดขายของสินค้าแต่ละอันไว้ในตัวแปร report

      });

      report.forEach(function (report_item) {

        Object.keys(report_item).forEach(function (key) {

          if (key_array.indexOf(key) == -1) {
            key_array.push(key);//เก็บชื่อ Product ทีมีไว้ในตัวแปร key_array
          }

        });

      });
      key_array.forEach(function (key) {

        number_array = [];

        report.forEach(function (report_item) {

          if (report_item[key] == null) {
            number_array.push(0);
          }
          else {
            number_array.push(report_item[key]);
          }

        });

        raw_data.push({
          "key": key,//ชื่อสินค้า
          "number": number_array//array ยอดขายแต่ละเดือน
        });

      });


      graph(report_month, raw_data);


    });






  }






}

function graph(report_month, raw_data) {
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
  var data = [];
  var number = [];


  console.log("report_month" + report_month)
  console.log(raw_data)
  raw_data.forEach(function (raw_data_item, index) {
    data.push(raw_data_item.key);
    number.push(raw_data_item.number);


  });


  var options = {
    series: [{
      name: 'ไม่ช่วย',
      data: number[0]
    }, {
      name: 'ช่วย',
      data: number[1]
    }],
    chart: {
    type: 'bar',
    height: 350,
    width:550,
    stacked: true,
    stackType: '100%'
  },
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  title: {
    text: 'จำนวนความสำเร็จของการให้คำตอบของแช็ตบ็อต'
  },
  xaxis: {
    categories: report_month,
 
  },
  yaxis: {
    title: {
      text: undefined
    },
  },
 
  fill: {
    opacity: 1
  },
  legend: {
    position: 'top',
    horizontalAlign: 'center',
    offsetX: 40
  }
  };




  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
  chart.resetSeries();

  showData(report_month, number);


}

function showData(report_month, number) {

  

  var MOUNTAINS = [];
  // เตรียมข้อมูล
  for (var i = 0; i < report_month.length; i++) {

    MOUNTAINS.push({ "name": report_month[i], "ช่วย": number[0][i], "ไม่ช่วย": number[1][i]})

  }


  
  //draw table
  var table = document.createElement("table");
  table.className = "gridtable";
  var thead = document.createElement("thead");
  var tbody = document.createElement("tbody");
  var headRow = document.createElement("tr");
  ["หัวข้อ", "จำนวนช่วย", "จำนวนไม่ช่วย"].forEach(function (el) {
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












