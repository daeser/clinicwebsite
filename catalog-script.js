
function tambahData() {
  var linkTambahData = document.getElementsByClassName("tambahData");
  // var clickedIndex = parseInt(tambahData.target.index);
  // var nama = "";
  // var harga = 0;
  // var prodimg="";

  // var tabel = document.getElementById("tabelData");
  // var rowCount = tabel.rows.length;
  // var dataExists = false;

  

  // for (var i = 0; i < linkTambahData.length; i++) {
  //   var element = linkTambahData[i];
  //   element.addEventListener('click', handleClick);
    
  // }
  
  // for (var i = 0; i < linkTambahData.length; i++) {
  //   var element = linkTambahData[i];
  //   var ids = element.id;
  //   console.log("Element ID:", ids);
  // }

  for (var i = 0; i < linkTambahData.length; i++) {
    var coba = linkTambahData[i];
    coba.addEventListener('click',handleClick);

    console.log(coba);
    var id = linkTambahData[i].id;
    console.log (id);
  }
  
  
  // var id = console.log(handleClick);

  // if (id =="obh") {
  //   var nama = "OBH";
  //   var harga = 20000;
  //   var prodimg ='<img src="img/OBH combi.jpg" alt="">';
    
  // } else if(id =="tolakangin") {
  //   var nama = "Tolak Angin";
  //   var harga = 40000;
  //   var prodimg ='<img src="img/Tolak Angin.jpg" alt="">';
  // }
  
  // // Pengecekan apakah data sudah ada dalam tabel
  // for (var i = 1; i < rowCount; i++) { // Mulai dari baris ke-1 untuk melewati header
  //   var rowData = tabel.rows[i].cells[1].innerHTML; // Mengambil data pada kolom "Nama"

  //   if (rowData === nama) {
  //     // Jika data sudah ada, tingkatkan nilai kolom "Quantity" dan ubah status ke true
  //     var quantityCell = tabel.rows[i].cells[3];
  //     quantityCell.innerHTML = parseInt(quantityCell.innerHTML) + 1;
  //     dataExists = true;
  //     break;
  //   }
  // }



  // // Jika data belum ada, tambahkan sebagai baris baru dalam tabel
  // if (!dataExists) {
  //   var row = tabel.insertRow();
  //   var cellImg = row.insertCell();
  //   var cellNama = row.insertCell();
  //   var cellHarga = row.insertCell();
  //   var cellQuantity = row.insertCell();

  //   cellImg.innerHTML= prodimg;
  //   cellNama.innerHTML = nama;
  //   cellHarga.innerHTML = harga;
  //   cellQuantity.innerHTML = 1;
    
  // }
};



function handleClick(event) {
  // Access the clicked element using event.target
  var clickedElement = event.target;
  console.log(clickedElement.id);
  var subtotal = [];

  var nama = "";
  var harga = 0;
  var prodimg="";

  var tabel = document.getElementById("tabelData");
  var rowCount = tabel.rows.length;
  var dataExists = false;

  if (clickedElement.id =="obh") {
    var nama = "OBH";
    var harga = 13500;
    var prodimg ='<img src="img/OBH combi.jpg" alt="">';
    
  } else if(clickedElement.id =="tolakangin") {
    var nama = "Tolak Angin";
    var harga = 40000;
    var prodimg ='<img src="img/Tolak Angin.jpg" alt="">';

  }else if(clickedElement.id =="decolgen") {
    var nama = "Decolgen";
    var harga = 13000;
    var prodimg ='<img src="img/decolgen.jpg" alt="">';

  }else if(clickedElement.id =="lansoprazole") {
    var nama = "Lansoprazole";
    var harga = 24000;
    var prodimg ='<img src="img/lansoprazole.jpg" alt="">';
  }
  else if(clickedElement.id =="paracetamol") {
    var nama = "Paracetamol";
    var harga = 13000;
    var prodimg ='<img src="img/paracetamol.jpg" alt="">';
  }
  else if(clickedElement.id =="amoxicillin") {
    var nama = "Amoxicillin";
    var harga = 10000;
    var prodimg ='<img src="img/amoxicillin.jpg" alt="">';
  }
  else if(clickedElement.id =="ibuprofen") {
    var nama = "Ibuprofen";
    var harga = 5000;
    var prodimg ='<img src="img/ibuprofen.jpg" alt="">';
  }
  else if(clickedElement.id =="loratadin") {
    var nama = "Loratadin";
    var harga = 10000;
    var prodimg ='<img src="img/loratadin.jpg" alt="">';
  }
  else if(clickedElement.id =="asamfolat") {
    var nama = "Asam Folat";
    var harga = 2000;
    var prodimg ='<img src="img/Asam Folat.jpg" alt="">';
  }
  
  // Pengecekan apakah data sudah ada dalam tabel
  for (var i = 1; i < rowCount; i++) { // Mulai dari baris ke-1 untuk melewati header
    var rowData = tabel.rows[i].cells[1].innerHTML; // Mengambil data pada kolom "Nama"

    if (rowData === nama) {
      // Jika data sudah ada, tingkatkan nilai kolom "Quantity" dan ubah status ke true
      var quantityCell = tabel.rows[i].cells[3];
      quantityCell.innerHTML = parseInt(quantityCell.innerHTML) + 1;
      dataExists = true;
      break;
    }
  }
  

 

  // Jika data belum ada, tambahkan sebagai baris baru dalam tabel
  if (!dataExists) {
    var row = tabel.insertRow();
    var cellImg = row.insertCell();
    var cellNama = row.insertCell();
    var cellHarga = row.insertCell();
    var cellQuantity = row.insertCell();

    cellImg.innerHTML= prodimg;
    cellNama.innerHTML = nama;
    cellHarga.innerHTML = harga;
    cellQuantity.innerHTML = 1;
    
  }

  for (var i = 1; i < tabel.rows.length; i++) {
    
    var cellPrice = parseFloat(tabel.rows[i].cells[2].innerHTML);
    var cellJumlah = parseFloat(tabel.rows[i].cells[3].innerHTML);
    
    
    var result = cellPrice * cellJumlah;

    subtotal.push(result);
  }

  //hitung total 
  var total = 0;
  for (var i = 0; i < subtotal.length; i++) {
      total += subtotal[i];
  }

  var resultHeading = document.getElementById('totalPrice');
  resultHeading.innerHTML = "Total: " + total;

}


function handleCheckout() {

var cartTable = document.getElementById('tabelData');
console.log(cartTable)
var cartTableBody = cartTable.getElementsByTagName('tr');
console.log(cartTableBody)


var checkoutButton = document.getElementById('checkout-btn');


checkoutButton.addEventListener('click', handleCheckout);

  if (cartTableBody.length>1) {
    // cartTableBody.removeChild(cartTableBody.firstChild);
    alert("Successfully Checked Out !");
    location.reload();
    cartTable.innerHTML = "";
  }else{
    alert("Please add an item !");
    location.reload();
  }
}


