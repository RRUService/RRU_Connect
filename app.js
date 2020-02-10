
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



var TopicData = {};
TopicData['Registration'] = ['กรุณาเลือกหมวดหมู่', 'การเพิ่มรายวิชา', 'การถอนรายวิชา',  'การยกเลิกรายวิชา', 'การลืมรหัสผ่าน', 'ลงทะเบียนไม่ได้', 'หน่วยกิตที่ต้องสะสม',
	'การขอเปิดรายวิชาเพิ่ม', 'การลงทะเบียนซ้ำ', 'การลงทะเบียนเรียน'];

TopicData['Education'] = ['Golf', 'Polo', 'Scirocco', 'Touareg'];
TopicData['BMW'] = ['M6', 'X5', 'Z3'];

function ChangeSelectList() {
	var DataList = document.getElementById("category");// get id value
	var SubDataList = document.getElementById("subcategory");//get id value
	var DataCategory = DataList.options[DataList.selectedIndex].value; //ดึงค่าของ value หมวดหมู
	console.log(DataCategory);
	while (SubDataList.options.length) {
		SubDataList.remove(0);
	}

	var Head = TopicData[DataCategory];
	if (Head) {
		var i;
		for (i = 0; i < Head.length; i++) {
			var Add_Sub = new Option(Head[i], i);// เพิ่มข้อมูลลงใน id subcategory
			SubDataList.options.add(Add_Sub);


		}

		// document.getElementById("demo").innerHTML = cars[i].options[i].text;



	}




}

function myFunction1() {
	var x = document.getElementById("category"); //get id
	var y = document.getElementById("subcategory");//get id

	var Index_Category = x.selectedIndex;
	var Index_Subcategoy = y.selectedIndex;

	Value_Category = x[Index_Category].value;
	Value_SubCategory = y.options[Index_Subcategoy].value;

	console.log(Value_SubCategory);
	if (Index_Subcategoy > 0 && Index_Category > 0) {
		location.href = "Showtable.html?id1=" + Value_SubCategory + "&id2=" + Value_Category;

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


var Data_Subcategory = TopicData[Category_URL][SubCategory_URL];
console.log(Data_Subcategory);
console.log(Category_URL);


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
