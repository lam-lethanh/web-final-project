function loadXML() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "./assets/data/header.xml", false);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Xử lý dữ liệu
      updateUI(this);
    } else {
      alert("Không lấy được dữ liệu");
    }
  };
  xhr.send();
}

function updateUI(xhr) {
  // console.log("Lấy đc dữ liệu");
  let doc = xhr.responseXML;
  let header = doc.querySelector("header");
  document.getElementById("header").innerHTML = header.innerHTML;

  // Popup login
  const accountIcon = document.querySelector(".account-icon");
  const popupLogin = document.querySelector(".popup-login");
  // const modal = document.querySelector(".modal");
  accountIcon.onclick = function () {
    popupLogin.classList.toggle("active");
    // modal.classList.toggle("active");
  };

  // Click menu-btn
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector("nav");
  menuBtn.onclick = function () {
    nav.classList.toggle("active");
  };
}

loadXML();
