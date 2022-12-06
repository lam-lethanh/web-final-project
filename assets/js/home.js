// Load select item
fetch("assets/data/list-start-location.json")
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

fetch("assets/data/list-end-location.json")
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

const favoriteIcon = document.querySelector(".favorite-icon");
const favoriteIconYes = document.querySelector(".favorite-icon-yes");

favoriteIcon.onclick = function () {
	favoriteIconYes.classList.toggle("active");
	favoriteIconYes.style.display = "inline-block";
	favoriteIcon.style.display = "none";
};

favoriteIconYes.onclick = function () {
	favoriteIconYes.classList.toggle("active");
	favoriteIconYes.style.display = "none";
	favoriteIcon.style.display = "inline-block";
};

// Load favorite destination
fetch("assets/data/favorite-destination.json")
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
					<a href="">
						<img
							src="assets/image/favorite-destination/${item.thumb}"
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
fetch("assets/data/choose-us.json")
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
				<img src="assets/image/choose-us/${item.thumb}" alt="" />
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
