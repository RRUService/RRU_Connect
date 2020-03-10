
const db = firebase.firestore();
var TopicData = {};
var TopicData1 = {};
TopicData['Registration'] = ['กรุณาเลือกหัวข้อ', 'การเพิ่มรายวิชา', 'การถอนรายวิชา', 'การยกเลิกรายวิชา', 'การลืมรหัสผ่าน', 'ลงทะเบียนไม่ได้', 'หน่วยกิตที่ต้องสะสม',
    'การขอเปิดรายวิชาเพิ่ม', 'การลงทะเบียนซ้ำ', 'การลงทะเบียนเรียน', 'ระยะเวลาการศึกษาระดับปริญญาตรี'];
TopicData['Taking_leave_from_studies'] = ['กรุณาเลือกหัวข่้อ', 'การยื่นคำร้องลาพักการศึกษา', 'ค่าธรรมเนียมการลาพักการศึกษา', 'ระเบียบการลาพักการศึกษา'];
TopicData['Student_Card'] = ['กรุณาเลือกหัวข้อ', 'บัตรหายหรือชำรุด', 'เปลี่ยนแปลงข้อมูลในบัตร'];
TopicData['Student_Retirement'] = ['กรุณาเลือกหัวข้อ', 'กรณีการพ้นสภาพการเป็นนักศึกษา', 'การดำเนินการเมื่อพ้นสภาพการเป็นนักศึกษา', 'เกรดเฉลี่ยขั้นต่ำ'];
TopicData['Graduation'] = ['กรุณาเลือกหัวข้อ', 'การขอแก้ไขข้อมูลเอกสารจบ', 'การอนุมัติจบ', 'การแจ้งขอสำเร็จการศึกษา', 'การได้รับเกียรตินิยม', 'เกรดเฉลี่ยสะสม'];
TopicData['Resignation'] = ['กรุณาเลือกหัวข้อ', 'การขอย้ายสถานศึกษา', 'การยกเลิกการลาออก', 'ขั้นตอนการลาออก'];
TopicData['Measurement'] = ['กรุณาเลือกหัวข้อ', 'เกรดไม่ออก', 'การแก้ I'];
TopicData['Education_Documentary'] = ['กรุณาเลือกหัวข้อ', 'ปัญหาในการขอรับเอกสารการศึกษา', 'ระยะเวลาการขอเอกสาร', 'การแจ้งขอสำเร็จการศึกษา', 'ใบขอรับปริญญาย้อนหลัง', 'ใบรับรองการเป็นนักศึกษา', 'ใบรับรองผลการเรียน'];
TopicData['Calendar'] = ['กรุณาเลือกหัวข้อ', 'ภาคการศึกษาปกติ', 'ภาคการศึกษาพิเศษ', 'ภาคการศึกษาฤดูร้อน'];
TopicData['Application_study'] = ['กรุณาเลือกหัวข้อ', 'ภาคการศึกษาปกติ', 'ภาคการศึกษาพิเศษ', 'ภาคการศึกษาฤดูร้อน'];
TopicData['Leave'] = ['กรุณาเลือกหัวข้อ', 'ลากิจ', 'ลาป่วย'];

TopicData['Tuition_fee'] = ['กรุณาเลือกคณะ', 'คณะครุศาสตร์', 'คณะเทคโนโลยีอุตสาหกรรม', 'คณะมนุษยศาสตร์และสังคมศาสตร์', 'คณะวิทยาการจัดการ', 'คณะวิทยาศาสตร์และเทคโนโลยี'];

//ค่าเทอม
TopicData1['คณะครุศาสตร์'] = ['กรุณาเลือกสาขา', 'การศึกษาปฐมวัย', 'การสอนภาษาจีน', 'การสอนภาษาอังกฤษ', 'การสอนภาษาไทย', 'การสอนวิทยาศาสตร์ทั่วไป', 'การสอนสังคมศึกษา', 'คณิตศาสตร์', 'คอมพิวเตอร์ศึกษา', 'จิตวิทยาการปรึกษาและแนะแนว-การสอนภาษาไทย', 'เทคโนโลยีสารสนเทศทางการศึกษา-การสอนภาษาไทย'];
TopicData1['คณะเทคโนโลยีอุตสาหกรรม'] = ['กรุณาเลือกสาขา', 'เทคโนโลยีอุตสาหกรรม', 'วิศวกรรมการจัดการอุตสาหกรรม', 'วิศวกรรมเครื่องกลยานยนต์', 'วิศวกรรมไฟฟ้า', 'ออกแบบผลิตภัณฑ์'];
TopicData1['คณะมนุษยศาสตร์และสังคมศาสตร์'] = ['กรุณาเลือกสาขา', 'การพัฒนาสังคม', 'ภาษาอังกฤษ', 'ดนตรีสากล', 'ทัศนศิลป์', 'รัฐศาสตร์', 'รัฐประศาสนศาสตร์', 'นิติศาสตร์บัณฑิต', 'ภาษาญี่ปุ่น', 'ศิลปกรรม', 'สารสนเทศศาสตร์และบรรณารักษศาสตร์', 'นาฎดุริยางคศิลป์ไทย'];
TopicData1['คณะวิทยาการจัดการ'] = ['กรุณาเลือกสาขา', 'การบัญชี', 'การจัดการทรัพยากรมนุษย์', 'การตลาด', 'คอมพิวเตอร์ธุรกิจ', 'การจัดการ', 'นิเทศศาสตร์', 'การท่องเที่ยว'];
TopicData1['คณะวิทยาศาสตร์และเทคโนโลยี'] = ['กรุณาเลือกสาขา', 'อาชีวอนามัยและความปลอดภัย', 'วิทยาศาสตร์สิ่งแวดล้อม', 'เทคโนโลยีสารสนเทศ', 'การอาหารและธุรกิจบริการ', 'เทคโนโลยีการเกษตร', 'วิชาเคมี', 'ชีววิทยาประยุกต์', 'ฟิสิกส์ประยุกต์', 'วิทยาการคอมพิวเตอร์', 'สาธารณสุขศาสตร์', 'คณิตศาสตร์และสถิติประยุกต์'];

//การลงทะเบียน
TopicData1['ระยะเวลาการศึกษาระดับปริญญาตรี'] = ['กรุณาเลือกหลักสูตร', 'หลักสูตรปริญญาตรี 4 ปี', 'หลักสูตรปริญญาตรี 5 ปี', 'หลักสูตรปริญญาต่อเนื่อง'];

//การพ้นสภาพการเป็นนักศึกษา
TopicData1['เกรดเฉลี่ยขั้นต่ำ'] = ['กรุณาเลือกภาคการศึกษา', 'ภาคปกติ', 'ภาคพิเศษ'];




function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

var Document = getUrlVars()["id1"];
var Category_URL = getUrlVars()["id2"];//หมวดหมู่
var index_Subcate = getUrlVars()["id3"];
var index_Subcate1 = getUrlVars()["id4"];
var Data_Subcategory = TopicData[Category_URL][index_Subcate]; //หัวข้อ

var Category1;
if (Category_URL == "Registration") {
    Category1 = "การลงทะเบียน";
} else if (Category_URL == "Taking_leave_from_studies") {
    Category1 = "การลาพักการศึกษา";


} else if (Category_URL == "Student_Retirement") {
    Category1 = " การพ้นสภาพการเป็นนักศึกษา";

} else if (Category_URL == "Graduation") {
    Category1 = "การสำเร็จการศึกษา";

} else if (Category_URL == "Resignation") {
    Category1 = "การลาออก";

} else if (Category_URL == "Measurement") {
    Category1 = "การวัดและการประเมินผล";

} else if (Category_URL == "Education_Documentary") {
    Category1 = "การขอรับเอกสารการศึกษา";

} else if (Category_URL == "Calendar") {
    Category1 = "ปฏิทินการศึกษา";

} else if (Category_URL == "Application_study") {
    Category1 = "การสมัครเรียน";

} else if (Category_URL == "Leave") {
    Category1 = "การลา";

} else if (Category_URL == "Tuition_fee") {
    Category1 = "ค่าธรรมเนียมการศึกษา";

} else if (Category_URL == "Student_Card") {
    Category1 = "บัตรนักศึกษา";

}




// console.log(SubCategory_1_URL);
document.getElementById("Category").value = Category1; //แสดงหมวดหมู๋ ต้องเปลี่ยนเป็นภาษาไทย
document.getElementById("Sub_category").value = Data_Subcategory; //แสดงหัวข้อ

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
var today = dd + '/' + mm + '/' + yyyy;
console.log(today)
document.getElementById("date").value = today; //แสดงวันที่


if (Data_Subcategory === "ระยะเวลาการศึกษาระดับปริญญาตรี" || Data_Subcategory == "เกรดเฉลี่ยขั้นต่ำ") {
    var Data_Subcategory1 = TopicData1[Data_Subcategory][index_Subcate1];
    document.getElementById("Other").value = Data_Subcategory1;
    db.collection(Category_URL).doc("Topic").collection(Data_Subcategory).doc(Data_Subcategory).collection(Data_Subcategory1).doc(Document).get().then(function (doc) {

        document.getElementById("description").value = doc.data().description; //คำอธิบาย


    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });

}
else if (Category_URL == "Tuition_fee") {
    var Data_Subcategory1 = TopicData1[Data_Subcategory][index_Subcate1];
    document.getElementById("Other").value = Data_Subcategory1;
    db.collection(Category_URL).doc(Data_Subcategory).collection(Data_Subcategory1).doc(Document).get().then(function (doc) {

        document.getElementById("description").value = doc.data().description; //คำอธิบาย


    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });


}
else {
    db.collection(Category_URL).doc("Topic").collection(Data_Subcategory).doc(Document).get().then(function (doc) {

        document.getElementById("description").value = doc.data().description; //คำอธิบาย


    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });

}







function mySubmit() {


    var description = document.getElementById("description").value;
    console.log(description);
    var r = confirm("คุณยืนยันที่จะลบข้อมูล?");

    if (r == true) {
        if (Category_URL == "Tuition_fee") {
            var Data_Subcategory1 = TopicData1[Data_Subcategory][index_Subcate1];

            db.collection(Category_URL).doc(Data_Subcategory).collection(Data_Subcategory1).add({
                date: new Date(),
                description: description
            })
                .then(function () {
                    console.log("Document successfully updated!");
                    location.href = "Menu2.html"
                })
                .catch(function (error) {
                    // The document probably doesn't exist.
                    console.error("Error updating document: ", error);
                });


        }

        else if (Data_Subcategory === "ระยะเวลาการศึกษาระดับปริญญาตรี" || Data_Subcategory == "เกรดเฉลี่ยขั้นต่ำ") {
            var Data_Subcategory1 = TopicData1[Data_Subcategory][index_Subcate1];
            db.collection(Category_URL).doc("Topic").collection(Data_Subcategory).doc(Data_Subcategory).collection(Data_Subcategory1).add({
                date: new Date(),
                description: description
            })
                .then(function () {
                    console.log("Document successfully updated!");
                    location.href = "Menu2.html"
                })
                .catch(function (error) {
                    // The document probably doesn't exist.
                    console.error("Error updating document: ", error);
                });

        }
        else {

            db.collection(Category_URL).doc("Topic").collection(Data_Subcategory).add({
                date: new Date(),
                description: description
            })
                .then(function () {
                    console.log("Document successfully updated!");
                    location.href = "Menu2.html"
                })
                .catch(function (error) {
                    // The document probably doesn't exist.
                    console.error("Error updating document: ", error);
                });

        }

    }

}

