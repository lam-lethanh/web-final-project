// Load select item
fetch("./assets/data/list-start-location.json")
	.then(function (response) {
		if (!response.ok) {
			throw new Error("HTTP error, status = " + response.status);
		}
		return response.json();
	})
	.then(function (data) {
		let html = "";
		for (let i in data) {
			html += `
				<option value="${i}">${data[i]}</option>
			`;
		}

		document.getElementById("start-location").innerHTML = html;
	});

fetch("./assets/data/list-end-location.json")
	.then(function (response) {
		if (!response.ok) {
			throw new Error("HTTP error, status = " + response.status);
		}
		return response.json();
	})
	.then(function (data) {
		let html = "";
		for (let i in data) {
			html += `
				<option value="${i}">${data[i]}</option>
			`;
		}

		document.getElementById("end-location").innerHTML = html;
	});

// Tab item
const tabItems = document.querySelectorAll(".tab-item");
for (let i = 0; i < tabItems.length; i++) {
	tabItems[i].onclick = function () {
		for (let i = 0; i < tabItems.length; i++) {
			if (tabItems[i].classList.contains("active")) {
				tabItems[i].classList.remove("active");
			}
		}
		tabItems[i].classList.add("active");
	};
}

const favoriteIcon = document.querySelector(".favorite-icon");
const favoriteIconYes = document.querySelector(".favorite-icon-yes");

// Load sales
fetch("./assets/data/sales.json")
	.then(function (response) {
		if (!response.ok) {
			throw new Error("HTTP error, status = " + response.status);
		}
		return response.json();
	})
	.then(function (data) {
		let htmlSales = "";
		for (let i = 0; i < 3; i++) {
			tourSale = data[i];
			let newPrice =
				(Number(tourSale.priceTicket.adult.split(".").join("")) *
					(100 - Number(tourSale.discount))) /
				100;
			newPrice = Intl.NumberFormat().format(newPrice);
			htmlSales += `
			<div class="col">
			<div class="sale-item">
				<div class="thumb">
					<a href="tour_detail.html?id=${tourSale.id}">
						<img src="./assets/image/tours/${tourSale.image[0]}" alt="" />
					</a>
					<span class="material-icons-sharp favorite-icon">
						favorite_border
					</span>
					<span class="material-icons-sharp favorite-icon-yes">
						favorite
					</span>
					<div class="rate">
						<span class="material-icons-sharp rate__icon"> star </span>
						<span class="rate__point">${tourSale.ratePoint}</span>
					</div>
				</div>
				<div class="info">
					<span class="info__date">${tourSale.dateStart} - ${
				tourSale.time.split("-")[0]
			} ngày </span>
					<div class="info__name">
						<a href="${tourSale.id}">
							${tourSale.name}
						</a>
					</div>
					<div class="info__code">
						Mã tour
						<br />
						<div>
							<span class="material-icons-sharp ticket-icon">
								confirmation_number
							</span>
							<span>${tourSale.code}</span>
						</div>
					</div>
					<div class="info__start">Nơi khởi hành: ${tourSale.startLocation}</div>
					<div class="info__old-price">Giá <span>${
						tourSale.priceTicket.adult
					}đ</span></div>
					<div class="info__new-price">
						<span class="price">${newPrice}đ</span>
						<span class="discount">${tourSale.discount}% giảm giá</span>
					</div>

					<div class="info__remaining-seats">
						Số chỗ còn lại: <span>${tourSale.leftSlot}</span>
					</div>
				</div>
			</div>
		</div>
			`;

			document.querySelector(".list-sales").innerHTML = htmlSales;
		}
	});

// Load favorite destination
fetch("./assets/data/favorite-destination.json")
	.then(function (response) {
		if (!response.ok) {
			throw new Error("HTTP error, status = " + response.status);
		}
		return response.json();
	})
	.then(function (data) {
		let list = data;
		let html = "";
		for (item of list) {
			html += `
			<div class="favorite-destination-item">
				<div class="thumb">
					<a href="tour-results.html?location=${item.id}">
						<img
							src="./assets/image/favorite-destination/${item.thumb}"
							alt="" />
					</a>
				</div>
				<div class="info">
					<span class="info__name">${item.name}</span>
					<span class="info__number-visitors"
						>Đã có ${item.numberVisitors} lượt khách</span
					>
				</div>
			</div>
			`;
		}
		document.querySelector(".favorite-destination-list").innerHTML = html;
	});

// Load choose us
fetch("./assets/data/choose-us.json")
	.then(function (response) {
		if (!response.ok) {
			throw new Error("HTTP error, status = " + response.status);
		}
		return response.json();
	})
	.then(function (data) {
		let list = data;
		let html = "";
		for (item of list) {
			html += `
		<div class="choose-us-item">
			<div class="thumb">
				<img src="./assets/image/choose-us/${item.thumb}" alt="" />
			</div>
			<div class="info">
				<div class="info__name">${item.name}</div>
				<p class="info__desc">
					${item.desc}
				</p>
			</div>
		</div>
		`;
		}
		document.querySelector(".choose-us-list").innerHTML = html;
	});
