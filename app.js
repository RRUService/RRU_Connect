
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
TopicData['Registration'] = ['กรุณาเลือกหมวดหมู่', 'การเพิ่มรายวิชา', 'การถอนรายวิชา', 'การยกเลิกรายวิชา', 'การลืมรหัสผ่าน', 'ลงทะเบียนไม่ได้', 'หน่วยกิตที่ต้องสะสม',
	'การขอเปิดรายวิชาเพิ่ม', 'การลงทะเบียนซ้ำ', 'การลงทะเบียนเรียน', 'ระยะเวลาการศึกษาระดับปริญญาตรี'];

TopicData['Student_Card'] = ['-', 'd[d'];
TopicData['Tuition_fee'] = ['เลือกหมู่', 'คณะครุศาสตร์'];


TopicData1['คณะครุศาสตร์'] = ['M6', 'X5', 'Z3'];
var DataList = document.getElementById("category");// get id value
var SubDataList = document.getElementById("subcategory");//get id value
var SubDataList_1 = document.getElementById("subcategory_1");



function ChangeSelectList() {

	document.getElementById('display').style.display = 'none';
	var DataCategory = DataList.options[DataList.selectedIndex].value; //ดึงค่าของ value หมวดหมู

	console.log(DataCategory);
	while (SubDataList.options.length) {
		SubDataList.remove(0);
	}

	var Head = TopicData[DataCategory];

	console.log(Head);
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

	console.log(Value_SubCategory);
	while (SubDataList_1.options.length) {
		SubDataList_1.remove(0);
	}
	var x1 = document.getElementById("category"); //get id
	var Index_Category1 = x1.selectedIndex;
	Value_Category1 = x1[Index_Category1].value;
	console.log(Value_Category1);
//ค่าธรรมเนียมการศึกษา
if(Value_Category1 === 'Tuition_fee'){
	if (TopicData['Tuition_fee'][Value_SubCategory] === "คณะครุศาสตร์") {
		document.getElementById('display').style.display = 'block';

		for (i = 0; i < TopicData1['คณะครุศาสตร์'].length; i++) {
			var Add_Sub1 = new Option(TopicData1['คณะครุศาสตร์'][i], i);// เพิ่มข้อมูลลงใน id subcategory
			SubDataList_1.options.add(Add_Sub1);

		}

	}
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



	console.log(Value_Category);
	console.log(Value_SubCategory);
	console.log(Index_Subcategoy_1); //Topic 1
	if (Index_Subcategoy > 0 && Index_Category > 0) {
		location.href = "Showtable.html?id1=" + Value_SubCategory + "&id2=" + Value_Category + "&id3=" + Index_Subcategoy_1 ;

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

//ค่าธรรมเนียมการศึกษา
var Tuition_fee = TopicData[Category_URL][SubCategory_URL];
var Faculty_of_Education = TopicData1[Tuition_fee][SubCategory_1_URL]; //คณะครุศาสตร์

console.log(Faculty_of_Education);
// console.log(Category_URL);


db.collection(Category_URL).doc('Topic').collection(Data_Subcategory).orderBy("date", "desc").get().then((snapshot) => {
	snapshot.forEach(doc => {
		showData(doc);

	});
});





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


	cell1.innerHTML = d;
	cell1.setAttribute('class', 'tend');
	cell2.innerHTML = Data_Subcategory;
	cell2.setAttribute('class', 'tend');
	cell4.innerHTML = doc.data().description;


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
