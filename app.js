
let Value_Category;
let Value_SubCategory;
const db = firebase.firestore();

const table = document.querySelector('#retable');
// const ss = db.collection('Registration').doc('Topic').collection('Additional_Credit_Registration');

// let first = db.collection('Registration').doc('Topic').collection('Additional_Credit_Registration')
// 	.orderBy('date');

// let result = ss.orderBy("date", "desc").get().then((snapshot) => {
// 	snapshot.forEach(doc => {
// 		showData(doc);

// 	});
// });
// document.getElementById('display').style.display = 'block';
// var ds = document.getElementById("display");//get id


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






TopicData['Tuition_fee'] = ['กรุณาเลือกคณะ', 'คณะครุศาสตร์'];



//การลงทะเบียน
TopicData1['ระยะเวลาการศึกษาระดับปริญญาตรี'] = ['กรุณาเลือกหลักสูตร', 'หลักสูตรปริญญาตรี 4 ปี', 'หลักสูตรปริญญาตรี 5 ปี', 'หลักสูตรปริญญาต่อเนื่อง'];

//การพ้นสภาพการเป็นนักศึกษา
TopicData1['เกรดเฉลี่ยขั้นต่ำ'] = ['กรุณาเลือกภาคการศึกษา', 'ภาคปกติ', 'ภาคพิเศษ'];




TopicData1['คณะครุศาสตร์'] = ['การศึกษาปฐมวัย', 'การสอนภาษาจีน', 'การสอนภาษาอังกฤษ', 'การสอนภาษาไทย', 'การสอนวิทยาศาสตร์ทั่วไป', 'การสอนสังคมศึกษา', 'คณิตศาสตร์', 'คอมพิวเตอร์ศึกษา', 'จิตวิทยาการปรึกษาและแนะแนว-การสอนภาษาไทย', 'เทคโนโลยีสารสนเทศทางการศึกษา-การสอนภาษาไทย'];
var DataList = document.getElementById("category");// get id value
var SubDataList = document.getElementById("subcategory");//get id value
var SubDataList_1 = document.getElementById("subcategory_1");



function ChangeSelectList() {

	document.getElementById('display').style.display = 'none';
	var DataCategory = DataList.options[DataList.selectedIndex].value; //ดึงค่าของ value หมวดหมู

	console.log(DataCategory + "15");
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









}

function ChangeSelectList_1() {




	var y = document.getElementById("subcategory");//get id
	var Index_Subcategoy = y.selectedIndex;

	Value_SubCategory = y.options[Index_Subcategoy].value;

	var DataCategory = DataList.options[DataList.selectedIndex].value;

	console.log(Value_SubCategory + "11");
	while (SubDataList_1.options.length) {
		SubDataList_1.remove(0);
	}
	var x1 = document.getElementById("category"); //get id
	var Index_Category1 = x1.selectedIndex;
	Value_Category1 = x1[Index_Category1].value;
	console.log(Value_Category1 + "12");

	//ค่าธรรมเนียมการศึกษา
	if (Value_Category1 === 'Tuition_fee') {
		if (TopicData['Tuition_fee'][Value_SubCategory] === "คณะครุศาสตร์") {
			document.getElementById('display').style.display = 'block';

			for (i = 0; i < TopicData1['คณะครุศาสตร์'].length; i++) {
				var Add_Sub1 = new Option(TopicData1['คณะครุศาสตร์'][i], i);// เพิ่มข้อมูลลงใน id subcategory
				SubDataList_1.options.add(Add_Sub1);

			}

		} else { document.getElementById('display').style.display = 'none'; }
	}


	//การลงทะเบียน
	if (Value_Category1 === 'Registration') {
		if (TopicData['Registration'][Value_SubCategory] === "ระยะเวลาการศึกษาระดับปริญญาตรี") {
			document.getElementById('display').style.display = 'block';

			for (i = 0; i < TopicData1['ระยะเวลาการศึกษาระดับปริญญาตรี'].length; i++) {
				var Add_Sub1 = new Option(TopicData1['ระยะเวลาการศึกษาระดับปริญญาตรี'][i], i);// เพิ่มข้อมูลลงใน id subcategory
				SubDataList_1.options.add(Add_Sub1);

			}

		} else { document.getElementById('display').style.display = 'none'; }
	}

	//การพ้นสภาพการเป็นนักศึกษา
	if (Value_Category1 === 'Student_Retirement') {
		if (TopicData['Student_Retirement'][Value_SubCategory] === "เกรดเฉลี่ยขั้นต่ำ") {
			document.getElementById('display').style.display = 'block';

			for (i = 0; i < TopicData1['เกรดเฉลี่ยขั้นต่ำ'].length; i++) {
				var Add_Sub1 = new Option(TopicData1['เกรดเฉลี่ยขั้นต่ำ'][i], i);// เพิ่มข้อมูลลงใน id subcategory
				SubDataList_1.options.add(Add_Sub1);

			}

		} else { document.getElementById('display').style.display = 'none'; }
	}




}






function myFunction1() {
	var x = document.getElementById("category"); //get id
	var y = document.getElementById("subcategory");//get id

	var z = document.getElementById("subcategory_1");
	var Index_Category = x.selectedIndex;
	var Index_Subcategoy = y.selectedIndex;
	var Index_Subcategoy_1 = z.selectedIndex;

	Value_Category = x[Index_Category].value;
	Value_SubCategory = y.options[Index_Subcategoy].value;
	// Value_SubCategory_1 = z[Index_Subcategoy_1];



	console.log(Value_Category + "22");
	console.log(Value_SubCategory + "23");
	console.log(Index_Subcategoy_1 + "24"); //Topic 1

	//เป็นการทำให้กดปุ่มไม่ได้ กรณีที่ บอกว่า กรุณาเลือกหัวข้อ
	if (Index_Subcategoy > 0 && Index_Category > 0) {
		location.href = "Showtable.html?id1=" + Value_SubCategory + "&id2=" + Value_Category + "&id3=" + Index_Subcategoy_1;

	}




	//document.getElementById('retable').style.display = 'block';


}


function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
		vars[key] = value;
	});
	return vars;
}


var SubCategory_URL = getUrlVars()["id1"];
var Category_URL = getUrlVars()["id2"];
var SubCategory_1_URL = getUrlVars()["id3"];
var Data_Subcategory = TopicData[Category_URL][SubCategory_URL];
if (SubCategory_1_URL == -1) {


	db.collection(Category_URL).doc('Topic').collection(Data_Subcategory).orderBy("date", "desc").get().then((snapshot) => {
		snapshot.forEach(doc => {
			showData(doc);

		});
	});


} else {
	//กรณีที่มี collection หลายๆๆ
	var head_1 = TopicData[Category_URL][SubCategory_URL]; //หัวข้อ

	var Data_Head = TopicData1[head_1][SubCategory_1_URL];

	if (Category_URL == 'Tuition_fee') {
		db.collection(Category_URL).doc(Data_Subcategory).collection(Data_Head).orderBy("date", "desc").get().then((snapshot) => {
			snapshot.forEach(doc => {
				showData(doc);

			});
		});

	} else {
		db.collection(Category_URL).doc('Topic').collection(Data_Subcategory).doc(Data_Subcategory).collection(Data_Head).orderBy("date", "desc").get().then((snapshot) => {
			snapshot.forEach(doc => {
				showData(doc);

			});
		});
	}





	console.log(Data_Head);
	console.log("....." + Category_URL);
	console.log(head_1 + "11");
	console.log(Data_Subcategory);


}












function showData(doc) {
	var row = table.insertRow(-1);//ให้ข้อมูลต่อหลังเพื่อน
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);



	var d = doc.data().date.toDate().toDateString();

	console.log(Data_Head + "33");
	cell1.innerHTML = d;
	cell1.setAttribute('class', 'tend');



	cell2.innerHTML = Data_Subcategory;
	cell2.setAttribute('class', 'tend');
	if (Data_Head != undefined) {
		cell3.innerHTML = Data_Head
		cell3.setAttribute('class', 'tend');

	} else {

		cell3.innerHTML = "-"
		cell3.setAttribute('class', 'tend');

	}

	cell4.innerHTML = doc.data().description;



	if (Category_URL == 'Tuition_fee') {
		db.collection(Category_URL).doc('Topic').collection(Data_Subcategory).doc(Data_Subcategory).collection(Data_Head).orderBy("date", "desc").get().then
			((snapshot) => {
				let last = snapshot.docs[snapshot.docs.length - 1];
				if (last.data().date.toDate().toDateString() == d) {
					cell5.innerHTML = "กำลังใช้งาน";
				} else {
					cell5.innerHTML = "ไม่ถูกใช้งาน";
				}

				console.log(last.data().date.toDate() + "dtaddd" + d);

			});



	}else{



		
	}

	db.collection(Category_URL).doc('Topic').collection(Data_Subcategory).orderBy('date').get().then((snapshot) => {
		let last = snapshot.docs[snapshot.docs.length - 1];
		if (last.data().date.toDate().toDateString() == d) {
			cell5.innerHTML = "กำลังใช้งาน";
		} else {
			cell5.innerHTML = "ไม่ถูกใช้งาน";
		}

		console.log(last.data().date.toDate() + "dtaddd" + d);

	});
	cell5.setAttribute('class', 'tend');

	//ลบข้อมูล
	let btn_delete = document.createElement('button');
	btn_delete.textContent = 'X';
	btn_delete.setAttribute('class', 'w3-button w3-red');
	btn_delete.setAttribute('data-id', doc.id);
	cell7.appendChild(btn_delete);
	btn_delete.addEventListener('click', (e) => {



		var r = confirm("คุณยืนยันที่จะลบข้อมูล?");
		let a = 0;
		if (r == true) {


			let id = e.target.getAttribute('data-id');
			//  db.collection('Registration').doc('Topic').collection('Additional_Credit_Registration').doc(id);
			db.collection('Registration').doc('Topic').collection('Additional_Credit_Registration').doc(id).delete().then(function () {

				console.log("Document successfully deleted!");
				window.location.reload();
			}).catch(function (error) {
				console.error("Error removing document: ", error);
			});

		}

		else {
			// window.location("Menu2.html"); // Redirecting to other page.
		}



	});

	//คัดลอกข้อมูล
	let btn_copy = document.createElement('button');
	btn_copy.textContent = 'คัดลอกข้อมูล';
	btn_copy.setAttribute('id-data', doc.id);
	btn_copy.setAttribute('class', 'w3-button w3-green');
	cell6.appendChild(btn_copy);
	btn_copy.addEventListener('click', (e) => {
		let id_copy = e.target.getAttribute('id-data');
		location.href = "Copy.html?id=" + id_copy;
	});
}
