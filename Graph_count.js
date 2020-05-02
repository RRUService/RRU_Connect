/------------------------------ ตั้งค่า firebase ------------------------------/

const db = firebase.firestore();//สร้าตัวแปร object สำหรับอ้างอิง firestore
var intent = new Array("การลงทะเบียน", "ปฏิทินการศึกษา", "การพ้นสภาพการเป็นนักศึกษา", "บัตรนักศึกษา", "การขอรับเอกสารการศึกษา", "การสมัครเรียน", "การลาพักการศึกษา", "การสำเร็จการศึกษา", "การลาออก", "การลา", "ค่าธรรมเนียมการศึกษา", "การวัดและประเมินผล")

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
  
  var list_registration = [];// การลงทะเบียน
  var list_Calender = [];//ปฏิทินการศึกษา
  var list_Student_Retirement = [];//การพ้นสภาพการเป็นนักศึกษา
  var list_Student_Card = [];//บัตรนักศึกษา
  var list_Education_Documentary = [];//การขอรับเอกสารการศึกษา
  var list_Application_study = []; //การสมัครเรียน
  var list_Taking_leave_from_studies = [];//การลาพักการศึกษา
  var list_Graduation = [];//การสำเร็จการศึกษา
  var list_Resignation = [];//การลาออก
  var list_Leave = [];//การลา
  var list_Tuition_fee = [];//ค่าธรรมเนียมการศึกษา
  var list_Measurement = [];//การวัดและประเมินผล


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
  db.collection("Count_Intent")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        var today = new Date(doc.id);
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear(); // ต้องรับค่า จาก input
        if (yyyy == Number(y)) {
          if (mm == Number(x)) {

            if (doc.data().การลงทะเบียน !== undefined) {
              list_registration.push({ "เดือน": mm, "การลงทะเบียน": doc.data().การลงทะเบียน });
            }
            if (doc.data().ปฎิทินการศึกษา !== undefined) {
              list_Calender.push({ "เดือน": mm, "ปฎิทินการศึกษา": doc.data().ปฎิทินการศึกษา });
            }
            if (doc.data().การพ้นสภาพการเป็นนักศึกษา !== undefined) {
              list_Student_Retirement.push({ "เดือน": mm, "การพ้นสภาพการเป็นนักศึกษา": doc.data().การพ้นสภาพการเป็นนักศึกษา });
            }
            if (doc.data().บัตรนักศึกษา !== undefined) {
              list_Student_Card.push({ "เดือน": mm, "บัตรนักศึกษา": doc.data().บัตรนักศึกษา });
            }
            if (doc.data().การสำเร็จการศึกษา !== undefined) {
              list_Graduation.push({ "เดือน": mm, "การสำเร็จการศึกษา": doc.data().การสำเร็จการศึกษา });
            }
            if (doc.data().การลาออก !== undefined) {
              list_Resignation.push({ "เดือน": mm, "การลาออก": doc.data().การลาออก });
            }
            if (doc.data().การลา !== undefined) {
              list_Leave.push({ "เดือน": mm, "การลา": doc.data().การลา });
            }
            if (doc.data().ค่าธรรมเนียมการศึกษา !== undefined) {
              list_Tuition_fee.push({ "เดือน": mm, "ค่าธรรมเนียมการศึกษา": doc.data().ค่าธรรมเนียมการศึกษา });
            }
            if (doc.data().การลาพักการศึกษา !== undefined) {
              list_Taking_leave_from_studies.push({ "เดือน": mm, "การลาพักการศึกษา": doc.data().การลาพักการศึกษา });
            }
            if (doc.data().การขอรับเอกสารการศึกษา !== undefined) {
              list_Education_Documentary.push({ "เดือน": mm, "การขอรับเอกสารการศึกษา": doc.data().การขอรับเอกสารการศึกษา });
            }
            if (doc.data().การสมัครเรียน !== undefined) {
              list_Application_study.push({ "เดือน": mm, "การสมัครเรียน": doc.data().การสมัครเรียน });
            }
            if (doc.data().การวัดและการประเมินผล !== undefined) {
              list_Measurement.push({ "เดือน": mm, "การวัดและการประเมินผล": doc.data().การวัดและการประเมินผล });
            }

          }
        }

      });

      console.log(list_registration)
      // console.log(month_fir)

      list_count = [];

      var count_1 = 0, count_2 = 0, count_3 = 0, count_4 = 0, count_5 = 0, count_6 = 0, count_7 = 0, count_8 = 0, count_9 = 0, count_10 = 0, count_11 = 0, count_12 = 0;
      //เชคข้อมูล
      list_registration.filter((docs) => {
        if (docs.เดือน === 1) {
          count_1 += docs.การลงทะเบียน;
        } if (docs.เดือน === 2) {
          count_1 += docs.การลงทะเบียน;
        } if (docs.เดือน === 3) {
          count_1 += docs.การลงทะเบียน;
        } if (docs.เดือน === 4) {
          count_1 += docs.การลงทะเบียน;
        } if (docs.เดือน === 5) {
          count_1 += docs.การลงทะเบียน;
        } if (docs.เดือน === 6) {
          count_1 += docs.การลงทะเบียน;
        } if (docs.เดือน === 7) {
          count_1 += docs.การลงทะเบียน;
        } if (docs.เดือน === 8) {
          count_1 += docs.การลงทะเบียน;
        } if (docs.เดือน === 9) {
          count_1 += docs.การลงทะเบียน;
        } if (docs.เดือน === 10) {
          count_1 += docs.การลงทะเบียน;
        } if (docs.เดือน === 11) {
          count_1 += docs.การลงทะเบียน;
        } if (docs.เดือน === 12) {
          count_1 += docs.การลงทะเบียน;
        }


      });

      list_Calender.filter((docs) => {
        if (docs.เดือน === 1) {
          count_2 += docs.ปฎิทินการศึกษา;
        } if (docs.เดือน === 2) {
          count_2 += docs.ปฎิทินการศึกษา;
        } if (docs.เดือน === 3) {
          count_2 += docs.ปฎิทินการศึกษา;
        } if (docs.เดือน === 4) {
          count_2 += docs.ปฎิทินการศึกษา;
        } if (docs.เดือน === 5) {
          count_2 += docs.ปฎิทินการศึกษา;
        } if (docs.เดือน === 6) {
          count_2 += docs.ปฎิทินการศึกษา;
        } if (docs.เดือน === 7) {
          count_2 += docs.ปฎิทินการศึกษา;
        } if (docs.เดือน === 8) {
          count_2 += docs.ปฎิทินการศึกษา;
        } if (docs.เดือน === 9) {
          count_2 += docs.ปฎิทินการศึกษา;
        } if (docs.เดือน === 10) {
          count_2 += docs.ปฎิทินการศึกษา;
        } if (docs.เดือน === 11) {
          count_2 += docs.ปฎิทินการศึกษา;
        } if (docs.เดือน === 12) {
          count_2 += docs.ปฎิทินการศึกษา;
        }


      });
      list_Student_Retirement.filter((docs) => {
        if (docs.เดือน === 1) {
          count_3 += docs.การพ้นสภาพการเป็นนักศึกษา;
        } if (docs.เดือน === 2) {
          count_3 += docs.การพ้นสภาพการเป็นนักศึกษา;
        } if (docs.เดือน === 3) {
          count_3 += docs.การพ้นสภาพการเป็นนักศึกษา;
        } if (docs.เดือน === 4) {
          count_3 += docs.การพ้นสภาพการเป็นนักศึกษา;
        } if (docs.เดือน === 5) {
          count_3 += docs.การพ้นสภาพการเป็นนักศึกษา;
        } if (docs.เดือน === 6) {
          count_3 += docs.การพ้นสภาพการเป็นนักศึกษา;
        } if (docs.เดือน === 7) {
          count_3 += docs.การพ้นสภาพการเป็นนักศึกษา;
        } if (docs.เดือน === 8) {
          count_3 += docs.การพ้นสภาพการเป็นนักศึกษา;
        } if (docs.เดือน === 9) {
          count_3 += docs.การพ้นสภาพการเป็นนักศึกษา;
        } if (docs.เดือน === 10) {
          count_3 += docs.การพ้นสภาพการเป็นนักศึกษา;
        } if (docs.เดือน === 11) {
          count_3 += docs.การพ้นสภาพการเป็นนักศึกษา;
        } if (docs.เดือน === 12) {
          count_3 += docs.การพ้นสภาพการเป็นนักศึกษา;
        }


      });
      list_Student_Card.filter((docs) => {
        if (docs.เดือน === 1) {
          count_4 += docs.บัตรนักศึกษา;
        } if (docs.เดือน === 2) {
          count_4 += docs.บัตรนักศึกษา;
        } if (docs.เดือน === 3) {
          count_4 += docs.บัตรนักศึกษา;
        } if (docs.เดือน === 4) {
          count_4 += docs.บัตรนักศึกษา;
        } if (docs.เดือน === 5) {
          count_4 += docs.บัตรนักศึกษา;
        } if (docs.เดือน === 6) {
          count_4 += docs.บัตรนักศึกษา;
        } if (docs.เดือน === 7) {
          count_4 += docs.บัตรนักศึกษา;
        } if (docs.เดือน === 8) {
          count_4 += docs.บัตรนักศึกษา;
        } if (docs.เดือน === 9) {
          count_4 += docs.บัตรนักศึกษา;
        } if (docs.เดือน === 10) {
          count_4 += docs.บัตรนักศึกษา;
        } if (docs.เดือน === 11) {
          count_4 += docs.บัตรนักศึกษา;
        } if (docs.เดือน === 12) {
          count_4 += docs.บัตรนักศึกษา;
        }


      });
      list_Education_Documentary.filter((docs) => {
        if (docs.เดือน === 1) {
          count_5 += docs.การขอรับเอกสารการศึกษา;
        } if (docs.เดือน === 2) {
          count_5 += docs.การขอรับเอกสารการศึกษา;
        } if (docs.เดือน === 3) {
          count_5 += docs.การขอรับเอกสารการศึกษา;
        } if (docs.เดือน === 4) {
          count_5 += docs.การขอรับเอกสารการศึกษา;
        } if (docs.เดือน === 5) {
          count_5 += docs.การขอรับเอกสารการศึกษา;
        } if (docs.เดือน === 6) {
          count_5 += docs.การขอรับเอกสารการศึกษา;
        } if (docs.เดือน === 7) {
          count_5 += docs.การขอรับเอกสารการศึกษา;
        } if (docs.เดือน === 8) {
          count_5 += docs.การขอรับเอกสารการศึกษา;
        } if (docs.เดือน === 9) {
          count_5 += docs.การขอรับเอกสารการศึกษา;
        } if (docs.เดือน === 10) {
          count_5 += docs.การขอรับเอกสารการศึกษา;
        } if (docs.เดือน === 11) {
          count_5 += docs.การขอรับเอกสารการศึกษา;
        } if (docs.เดือน === 12) {
          count_5 += docs.การขอรับเอกสารการศึกษา;
        }

      });

      list_Application_study.filter((docs) => {
        if (docs.เดือน === 1) {
          count_6 += docs.การสมัครเรียน;
        } if (docs.เดือน === 2) {
          count_6 += docs.การสมัครเรียน;
        } if (docs.เดือน === 3) {
          count_6 += docs.การสมัครเรียน;
        } if (docs.เดือน === 4) {
          count_6 += docs.การสมัครเรียน;
        } if (docs.เดือน === 5) {
          count_6 += docs.การสมัครเรียน;
        } if (docs.เดือน === 6) {
          count_6 += docs.การสมัครเรียน;
        } if (docs.เดือน === 7) {
          count_6 += docs.การสมัครเรียน;
        } if (docs.เดือน === 8) {
          count_6 += docs.การสมัครเรียน;
        } if (docs.เดือน === 9) {
          count_6 += docs.การสมัครเรียน;
        } if (docs.เดือน === 10) {
          count_6 += docs.การสมัครเรียน;
        } if (docs.เดือน === 11) {
          count_6 += docs.การสมัครเรียน;
        } if (docs.เดือน === 12) {
          count_6 += docs.การสมัครเรียน;
        }

      });

      list_Taking_leave_from_studies.filter((docs) => {
        if (docs.เดือน === 1) {
          count_7 += docs.การลาพักการศึกษา;
        } if (docs.เดือน === 2) {
          count_7 += docs.การลาพักการศึกษา;
        } if (docs.เดือน === 3) {
          count_7 += docs.การลาพักการศึกษา;
        } if (docs.เดือน === 4) {
          count_7 += docs.การลาพักการศึกษา;
        } if (docs.เดือน === 5) {
          count_7 += docs.การลาพักการศึกษา;
        } if (docs.เดือน === 6) {
          count_7 += docs.การลาพักการศึกษา;
        } if (docs.เดือน === 7) {
          count_7 += docs.การลาพักการศึกษา;
        } if (docs.เดือน === 8) {
          count_7 += docs.การลาพักการศึกษา;
        } if (docs.เดือน === 9) {
          count_7 += docs.การลาพักการศึกษา;
        } if (docs.เดือน === 10) {
          count_7 += docs.การลาพักการศึกษา;
        } if (docs.เดือน === 11) {
          count_7 += docs.การลาพักการศึกษา;
        } if (docs.เดือน === 12) {
          count_7 += docs.การลาพักการศึกษา;
        }

      });

      list_Graduation.filter((docs) => {
        if (docs.เดือน === 1) {
          count_8 += docs.การสำเร็จการศึกษา;
        } if (docs.เดือน === 2) {
          count_8 += docs.การสำเร็จการศึกษา;
        } if (docs.เดือน === 3) {
          count_8 += docs.การสำเร็จการศึกษา;
        } if (docs.เดือน === 4) {
          count_8 += docs.การสำเร็จการศึกษา;
        } if (docs.เดือน === 5) {
          count_8 += docs.การสำเร็จการศึกษา;
        } if (docs.เดือน === 6) {
          count_8 += docs.การสำเร็จการศึกษา;
        } if (docs.เดือน === 7) {
          count_8 += docs.การสำเร็จการศึกษา;
        } if (docs.เดือน === 8) {
          count_8 += docs.การสำเร็จการศึกษา;
        } if (docs.เดือน === 9) {
          count_8 += docs.การสำเร็จการศึกษา;
        } if (docs.เดือน === 10) {
          count_8 += docs.การสำเร็จการศึกษา;
        } if (docs.เดือน === 11) {
          count_8 += docs.การสำเร็จการศึกษา;
        } if (docs.เดือน === 12) {
          count_8 += docs.การสำเร็จการศึกษา;
        }

      });

      list_Resignation.filter((docs) => {
        if (docs.เดือน === 1) {
          count_9 += docs.การลาออก;
        } if (docs.เดือน === 2) {
          count_9 += docs.การลาออก;
        } if (docs.เดือน === 3) {
          count_9 += docs.การลาออก;
        } if (docs.เดือน === 4) {
          count_9 += docs.การลาออก;
        } if (docs.เดือน === 5) {
          count_9 += docs.การลาออก;
        } if (docs.เดือน === 6) {
          count_9 += docs.การลาออก;
        } if (docs.เดือน === 7) {
          count_9 += docs.การลาออก;
        } if (docs.เดือน === 8) {
          count_9 += docs.การลาออก;
        } if (docs.เดือน === 9) {
          count_9 += docs.การลาออก;
        } if (docs.เดือน === 10) {
          count_9 += docs.การลาออก;
        } if (docs.เดือน === 11) {
          count_9 += docs.การลาออก;
        } if (docs.เดือน === 12) {
          count_9 += docs.การลาออก;
        }

      });

      list_Leave.filter((docs) => {
        if (docs.เดือน === 1) {
          count_10 += docs.การลา;
        } if (docs.เดือน === 2) {
          count_10 += docs.การลา;
        } if (docs.เดือน === 3) {
          count_10 += docs.การลา;
        } if (docs.เดือน === 4) {
          count_10 += docs.การลา;
        } if (docs.เดือน === 5) {
          count_10 += docs.การลา;
        } if (docs.เดือน === 6) {
          count_10 += docs.การลา;
        } if (docs.เดือน === 7) {
          count_10 += docs.การลา;
        } if (docs.เดือน === 8) {
          count_10 += docs.การลา;
        } if (docs.เดือน === 9) {
          count_10 += docs.การลา;
        } if (docs.เดือน === 10) {
          count_10 += docs.การลา;
        } if (docs.เดือน === 11) {
          count_10 += docs.การลา;
        } if (docs.เดือน === 12) {
          count_10 += docs.การลา;
        }

      });

      list_Tuition_fee.filter((docs) => {
        if (docs.เดือน === 1) {
          count_11 += docs.ค่าธรรมเนียมการศึกษา;
        } if (docs.เดือน === 2) {
          count_11 += docs.ค่าธรรมเนียมการศึกษา;
        } if (docs.เดือน === 3) {
          count_11 += docs.ค่าธรรมเนียมการศึกษา;
        } if (docs.เดือน === 4) {
          count_11 += docs.ค่าธรรมเนียมการศึกษา;
        } if (docs.เดือน === 5) {
          count_11 += docs.ค่าธรรมเนียมการศึกษา;
        } if (docs.เดือน === 6) {
          count_11 += docs.ค่าธรรมเนียมการศึกษา;
        } if (docs.เดือน === 7) {
          count_11 += docs.ค่าธรรมเนียมการศึกษา;
        } if (docs.เดือน === 8) {
          count_11 += docs.ค่าธรรมเนียมการศึกษา;
        } if (docs.เดือน === 9) {
          count_11 += docs.ค่าธรรมเนียมการศึกษา;
        } if (docs.เดือน === 10) {
          count_11 += docs.ค่าธรรมเนียมการศึกษา;
        } if (docs.เดือน === 11) {
          count_11 += docs.ค่าธรรมเนียมการศึกษา;
        } if (docs.เดือน === 12) {
          count_11 += docs.ค่าธรรมเนียมการศึกษา;
        }

      });

      list_Measurement.filter((docs) => {
        if (docs.เดือน === 1) {
          count_12 += docs.การวัดและการประเมินผล;
        } if (docs.เดือน === 2) {
          count_12 += docs.การวัดและการประเมินผล;
        } if (docs.เดือน === 3) {
          count_12 += docs.การวัดและการประเมินผล;
        } if (docs.เดือน === 4) {
          count_12 += docs.การวัดและการประเมินผล;
        } if (docs.เดือน === 5) {
          count_12 += docs.การวัดและการประเมินผล;
        } if (docs.เดือน === 6) {
          count_12 += docs.การวัดและการประเมินผล;
        } if (docs.เดือน === 7) {
          count_12 += docs.การวัดและการประเมินผล;
        } if (docs.เดือน === 8) {
          count_12 += docs.การวัดและการประเมินผล;
        } if (docs.เดือน === 9) {
          count_12 += docs.การวัดและการประเมินผล;
        } if (docs.เดือน === 10) {
          count_12 += docs.การวัดและการประเมินผล;
        } if (docs.เดือน === 11) {
          count_12 += docs.การวัดและการประเมินผล;
        } if (docs.เดือน === 12) {
          count_12 += docs.การวัดและการประเมินผล;
        }

      });




      list_count = [{ "ชื่อ": intent[0], "จำนวน": count_1 }, { "ชื่อ": intent[1], "จำนวน": count_2 }, { "ชื่อ": intent[2], "จำนวน": count_3 },
      { "ชื่อ": intent[3], "จำนวน": count_4 }, { "ชื่อ": intent[4], "จำนวน": count_5 }, { "ชื่อ": intent[5], "จำนวน": count_6 }, { "ชื่อ": intent[6], "จำนวน": count_7 }
        , { "ชื่อ": intent[7], "จำนวน": count_8 }, { "ชื่อ": intent[8], "จำนวน": count_9 }, { "ชื่อ": intent[9], "จำนวน": count_10 }, { "ชื่อ": intent[10], "จำนวน": count_11 }
        , { "ชื่อ": intent[11], "จำนวน": count_12 }
      ];

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
          text: 'จำนวนครั้งของการสอบถามในแต่ละหมวดหมู่'
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
      ["หัวข้อ", "จำนวน"].forEach(function (el) {
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






function myFunction() {
  var username = document.getElementById("start").value;
  var element = document.getElementById("chart");
  if (element != null) {
    element.parentNode.removeChild(element);
  }
  var element1 = document.getElementById("content");
  if (element1 != null) {
    element1.parentNode.removeChild(element1);
  }

  //format วันที่ เป็น yyyy/m/d
  var today = new Date(username);
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!

  var yyyy = today.getFullYear();

  var today = yyyy + '-' + mm + '-' + dd;
  console.log(today);
  if (today === "NaN-NaN-NaN") {
    window.alert("กรุณาเลือกวันที่ด้วยค่ะ");
  }


  //ดึงค่า นับหมวดหมู่ที่มากที่สุดออกมาดู
  //ก่อกำเนิดกราฟ
  var report_day = [];
  var report = [];
  var key_array = []; //
  var raw_data = [];
  var docRef = db.collection("Count_Intent").doc(today);

  docRef.get().then(function (doc) {

    console.log("Document data:", doc.data());
    let key = Object.keys(doc.data());
    let data = Object.values(doc.data());

    console.log("key = " + key)
    console.log("data =" + data)


    graph(key, data);

    // report.push(doc.data());//เก็บ ข้อมูล key และ ค่าของข้อมูล 


  });

  function graph(report_month, number) {
    var MOUNTAINS = [];
    // เตรียมข้อมูล
    for (var i = 0; i < report_month.length; i++) {

      MOUNTAINS.push({ "ชื่อ": report_month[i], "จำนวน": number[i] });


    }
    MOUNTAINS.sort((a, b) => (a.จำนวน > b.จำนวน) ? -1 : 1)
    list_name = [];
    list_num = [];
    MOUNTAINS.filter((docs) => {
      list_name.push(docs.ชื่อ);
      list_num.push(docs.จำนวน);

    });

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
        enabled: false
      },
      xaxis: {
        categories: list_name
      },
      title: {
        text: 'จำนวนครั้งของการสอบถามในแต่ละหมวดหมู่'
      }

    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
    chart.resetSeries()
    showData(MOUNTAINS);

  }


  function showData(MOUNTAINS) {




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


 

  var list_registration = [];// การลงทะเบียน
  var list_Calender = [];//ปฏิทินการศึกษา
  var list_Student_Retirement = [];//การพ้นสภาพการเป็นนักศึกษา
  var list_Student_Card = [];//บัตรนักศึกษา
  var list_Education_Documentary = [];//การขอรับเอกสารการศึกษา
  var list_Application_study = []; //การสมัครเรียน
  var list_Taking_leave_from_studies = [];//การลาพักการศึกษา
  var list_Graduation = [];//การสำเร็จการศึกษา
  var list_Resignation = [];//การลาออก
  var list_Leave = [];//การลา
  var list_Tuition_fee = [];//ค่าธรรมเนียมการศึกษา
  var list_Measurement = [];//การวัดและประเมินผล

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
  

   var count_1 = 0, count_2 = 0, count_3 = 0, count_4 = 0, count_5 = 0, count_6 = 0, count_7 = 0, count_8 = 0, count_9 = 0, count_10 = 0, count_11 = 0, count_12 = 0;
  db.collection("Count_Intent")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        
        if (list_d.includes(doc.id) === true) {
          if (doc.data().การลงทะเบียน !== undefined) {
            list_registration.push({ "การลงทะเบียน": doc.data().การลงทะเบียน });
          }
          if (doc.data().ปฎิทินการศึกษา !== undefined) {
            list_Calender.push({ "ปฎิทินการศึกษา": doc.data().ปฎิทินการศึกษา });
          }
          if (doc.data().การพ้นสภาพการเป็นนักศึกษา !== undefined) {
            list_Student_Retirement.push({"การพ้นสภาพการเป็นนักศึกษา": doc.data().การพ้นสภาพการเป็นนักศึกษา });
          }
          if (doc.data().บัตรนักศึกษา !== undefined) {
            list_Student_Card.push({"บัตรนักศึกษา": doc.data().บัตรนักศึกษา });
          }
          if (doc.data().การสำเร็จการศึกษา !== undefined) {
            list_Graduation.push({"การสำเร็จการศึกษา": doc.data().การสำเร็จการศึกษา });
          }
          if (doc.data().การลาออก !== undefined) {
            list_Resignation.push({"การลาออก": doc.data().การลาออก });
          }
          if (doc.data().การลา !== undefined) {
            list_Leave.push({"การลา": doc.data().การลา });
          }
          if (doc.data().ค่าธรรมเนียมการศึกษา !== undefined) {
            list_Tuition_fee.push({"ค่าธรรมเนียมการศึกษา": doc.data().ค่าธรรมเนียมการศึกษา });
          }
          if (doc.data().การลาพักการศึกษา !== undefined) {
            list_Taking_leave_from_studies.push({"การลาพักการศึกษา": doc.data().การลาพักการศึกษา });
          }
          if (doc.data().การขอรับเอกสารการศึกษา !== undefined) {
            list_Education_Documentary.push({"การขอรับเอกสารการศึกษา": doc.data().การขอรับเอกสารการศึกษา });
          }
          if (doc.data().การสมัครเรียน !== undefined) {
            list_Application_study.push({"การสมัครเรียน": doc.data().การสมัครเรียน });
          }
          if (doc.data().การวัดและการประเมินผล !== undefined) {
            list_Measurement.push({"การวัดและการประเมินผล": doc.data().การวัดและการประเมินผล });
          }
        }
      });
      console.log(list_registration);

      list_registration.filter((docs) => {
        count_1 += docs.การลงทะเบียน;
      });
      list_Calender.filter((docs) => {
        count_2 += docs.ปฎิทินการศึกษา;
      });
      list_Student_Retirement.filter((docs) => {
        count_3 += docs.การพ้นสภาพการเป็นนักศึกษา;
      });
     
      list_Student_Card.filter((docs) => {
        count_4 += docs.บัตรนักศึกษา;

      });
      list_Education_Documentary.filter((docs) => {
        count_5 += docs.การขอรับเอกสารการศึกษา;
      });
      list_Application_study.filter((docs) => {
        count_6 += docs.การสมัครเรียน;

      });

      list_Taking_leave_from_studies.filter((docs) => {
        count_7 += docs.การลาพักการศึกษา;
      });

      list_Graduation.filter((docs) => {
        count_8 += docs.การสำเร็จการศึกษา;

      });

      list_Resignation.filter((docs) => {
        count_9 += docs.การลาออก;

      });

      list_Leave.filter((docs) => {
        count_10 += docs.การลา;

      });

      list_Tuition_fee.filter((docs) => {
        count_11 += docs.ค่าธรรมเนียมการศึกษา;

      });

      list_Measurement.filter((docs) => {
        count_12 += docs.การวัดและการประเมินผล;
      });


      list_count = [{ "ชื่อ": intent[0], "จำนวน": count_1 }, { "ชื่อ": intent[1], "จำนวน": count_2 }, { "ชื่อ": intent[2], "จำนวน": count_3 },
      { "ชื่อ": intent[3], "จำนวน": count_4 }, { "ชื่อ": intent[4], "จำนวน": count_5 }, { "ชื่อ": intent[5], "จำนวน": count_6 }, { "ชื่อ": intent[6], "จำนวน": count_7 }
        , { "ชื่อ": intent[7], "จำนวน": count_8 }, { "ชื่อ": intent[8], "จำนวน": count_9 }, { "ชื่อ": intent[9], "จำนวน": count_10 }, { "ชื่อ": intent[10], "จำนวน": count_11 }
        , { "ชื่อ": intent[11], "จำนวน": count_12 }
      ];

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
          text: 'จำนวนครั้งของการสอบถามในแต่ละหมวดหมู่'
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
      ["หัวข้อ", "จำนวน"].forEach(function (el) {
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