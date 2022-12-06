function getParams() {
  var params = {},
    pairs = document.URL.split("?").pop().split("&");
  for (var i = 0; i < pairs.length; i++) {
    p = pairs[i].split("=");
    params[p[0]] = p[1];
  }
  return params;
}
function loadMethod() {
  fetch("./assets/data/payment-method.json")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("HTTP error, status=" + response.status);
      }
      return response.json();
    })
    .then(function (paymentList) {
      let html = "";
      for (let i = 0; i < paymentList.length; i = i + 2) {
        html += `<div class="row">
        <div class="payment-method__item">
          <img src="./assets/image/payment/${paymentList[i].image}" alt="" />
          <label for="payment-method-${paymentList[i].id}">${
          paymentList[i].name
        }</label>
          <input type="radio" name="payment-method" id="payment-method-${
            paymentList[i].id
          }" />
        </div>
        <div class="payment-method__item">
        <img src="./assets/image/payment/${paymentList[i + 1].image}" alt="" />
        <label for="payment-method-${paymentList[i + 1].id}">${
          paymentList[i + 1].name
        }</label>
        <input type="radio" name="payment-method" id="payment-method-${
          paymentList[i + 1].id
        }" />
      </div>
      </div>`;
      }
      document.getElementById("list-payment-method").innerHTML += html;
    })
    .catch(function (error) {
      alert(error.message);
    });
}

loadMethod();
function getTour() {
  fetch("./assets/data/tours.json")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Đã có lỗi xảy ra :(");
      }
      return response.json();
    })
    .then(function (data) {
      let html = "";
      let html2 = "";
      let idTour = getParams().id;
      for (let tour of data) {
        if (idTour == tour.id) {
          var parts = tour.dateStart.split("/");
          var someDate = new Date(parts[2], parts[1] - 1, parts[0]);
          var numberOfDaysToAdd = parseInt(tour.time.split("-")[0]);
          var myDate = new Date(
            someDate.getTime() + numberOfDaysToAdd * 24 * 60 * 60 * 1000
          );
          var dayEnd =
            myDate.getDate() +
            "/" +
            (myDate.getMonth() + 1) +
            "/" +
            myDate.getFullYear();
          html2 = `<div class="row">
          <div class="payment-info__product row">
            <img src="./assets/image/tours/${tour.image[0]}" alt="" />
            <div class="payment-info__product-title">
            ${tour.name}
            </div>
          </div>
        </div>
        <div class="payment-info__period">
          <div class="payment-info__date-start">
            <span class="icon material-icons-sharp form__title">
              calendar_month
            </span>
            <span class="date"
              >Bắt đầu chuyến đi: <br />
              <b class="form__title">${tour.dateStart}</b>
            </span>
          </div>
          <hr />
          <div class="payment-info__date-end">
            <span class="icon material-icons-sharp form__title">
              calendar_month
            </span>
            <span class="date"
              >Kết thúc chuyến đi: <br />
              <b class="form__title">${dayEnd}</b></span
            >
          </div>
        </div>`;
          document.getElementById("payment-product").innerHTML = html2;
        }
      }
    })
    .catch(function (error) {
      alert(error.message);
    });
}
getTour();
