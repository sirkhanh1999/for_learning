// aler after click buy button............................................
function buyIt(){
    alert("Added to cart!")
}

// slide show product images...............................................

                    // đầu tiên, truyền index vào 1 hàm mồi - curentSlides()

var Index = 1;      // khai báo biến Index có giá trị ban đầu là 1
showbig(Index);     // khai báo hàm showBig() có sử dụng tham số là Index

function currentSlide(n) {          // define hàm currentSlides() sử dụng tham số n - đây là chỉ số lấy từ DOM html
  showbig(Index = n);               // hàm này gọi hàm showBig bên trong, gán Index = n vào để thực thi
}

function showbig(n) {       
  var big = document.getElementsByClassName("big_prd");         // đoạn này gán .big_prd cho 1 biến là big

  for (var i = 0; i < big.length; i++) {                        // bước này chạy vòng lặp để ẩn hết các phần tử trong class .big_prd
      big[i].style.display = "none";
  }

  big[Index-1].style.display = "block";                         // Hiển thị thằng ảnh .Big có index tương ứng với n get được từ hàm currentSlides()
                                                                // big[Index - 1] có nghĩa là phần tử big thứ Index, 
                                                                // tại vì là phần tử mảng lên index sẽ bắt đầu từ 0, nên phải -1
}



// show dropdown ...........................................................

var Number = 1;
showDrop(Number);
function currentDrop(j){
  showDrop(Number = j);
}

function showDrop(j) {
  var drop = document.getElementsByClassName("drop_menu");
  var overlay = document.getElementsByClassName("drop_overlay");
  var x = document.getElementsByClassName("close_menu");

  for(var i = 0; i < drop.length; i++){
    drop[i].style.display = "none";
  }
  for(var i = 0; i < overlay.length; i++){
    overlay[i].style.display = "none";
  }  

  drop[Number - 1].style.display = "flex";
  overlay[Number - 1].style.display = "flex";
  x[Number - 1].style.display = "flex";
}



function closeMenu(){
  var menu = document.getElementsByClassName("drop_menu");
  var overlay = document.getElementsByClassName("drop_overlay");
  var x = document.getElementsByClassName("close_menu");

  for(var i = 0; i < menu.length; i++){
    menu[i].style.display = "none";
  }
  for(var i = 0; i < overlay.length; i++){
    overlay[i].style.display = "none";
  }
  for(var i = 0; i < x.length; i++){
    x[i].style.display = "none";
  }
}



// show subscribe infor .........................

function showSub(){
  var email = document.getElementById("emailSub").elements["email_sub"].value;
  alert(email + " is subscribed! Thankyou!");
}


// show & hide term detail section :V ............................

function showUnder1(){
  document.getElementById("term1").style.display = "block";
  document.getElementById("show1").style.display = "none";
  document.getElementById("hide1").style.display = "block";
}
function showUnder2(){
  document.getElementById("term2").style.display = "block";
  document.getElementById("show2").style.display = "none";
  document.getElementById("hide2").style.display = "block";
}
function hideUnder1(){
  document.getElementById("term1").style.display = "none";
  document.getElementById("hide1").style.display = "none";
  document.getElementById("show1").style.display = "block";
}
function hideUnder2(){
  document.getElementById("term2").style.display = "none";
  document.getElementById("hide2").style.display = "none";
  document.getElementById("show2").style.display = "block";
}

