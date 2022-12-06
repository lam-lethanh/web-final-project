function getParams() {
	var params = {},
		pairs = document.URL.split("?").pop().split("&");

	for (var i = 0, p; i < pairs.length; i++) {
		p = pairs[i].split("=");
		params[p[0]] = p[1];
	}
	return params;
}

// Define add Day function
Date.prototype.addDays = function (days) {
	var date = new Date(this.valueOf());
	date.setDate(date.getDate() + days);
	return date;
};

// Get tourDetail
fetch("assets/data/tours.json")
	.then(function (response) {
		if (!response.ok) {
			throw new Error("HTTP error, status = " + response.status);
		}
		return response.json();
	})
	.then(function (data) {
		let idTour = getParams().id;
		for (let tour of data) {
			if (tour.id == idTour) {
				let htmlTourDetail = "";
				let htmlContent = "";
				// Load main
				let price;
				if (tour.discount == 0) {
					price = tour.priceTicket.adult;
				} else {
					Price =
						(Number(listTour[i].priceTicket.adult.split(".").join("")) *
							(100 - Number(listTour[i].discount))) /
						100;
					Price = Intl.NumberFormat().format(newPrice);
				}
				let htmlMain = `
            <div class="main">
                <div class="main__code">
                    <span class="material-icons-outlined"> confirmation_number </span>
                    <span>${tour.code}</span>
                </div>
                <div class="main__heading">
                    <div class="main__heading-left">
                        <div class="main__heading-left--title">
                            ${tour.name}
                        </div>
                        <div class="main__heading-left--rating">
                            <span class="material-icons-outlined"> star </span>
                            <span>${tour.ratePoint}</span>
                        </div>
                    </div>
                    <div class="main__heading-right">
                        <div class="main__heading-right-top">
                            <p class="main__heading-right-top--price">
                                ${price}đ<span>/khách</span>
                            </p>
                            <button class="main__heading-right--book">
                                <span class="material-icons-outlined"> shopping_cart </span>
                                Đặt ngay
                            </button>
                        </div>
                        <div class="main__heading-right-bottom">
                            <button>Liên hệ tư vấn</button>
                        </div>
                    </div>
                </div>
                <div class="main__img">
                    <div class="main__img-left">
                        <img src="./assets/image/tours/${
													tour.image[0]
												}" alt="" />
                    </div>
                    <div class="main__img-right">
                        <div class="main__img-right-top">
                            <div class="main__img-right-top--left">
                                <img src="./assets/image/tours/${
																	tour.image[1]
																}" alt="" />
                            </div>
                            <div class="main__img-right-top--right">
                                <img src="./assets/image/tours/${
																	tour.image[2]
																}" alt="" />
                            </div>
                        </div>
                        <div class="main__img-right-bottom">
                            <img src="./assets/image/tours/${
															tour.image[3]
														}" alt="" />
                        </div>
                    </div>
                </div>
                <div class="main__desc">
                    <div class="main__desc-left">
                        <div class="main__desc-left-row">
                            <p>Khởi hành: <span>${tour.dateStart}</span></p>
                        </div>
                        <div class="main__desc-left-row">
                            <p>Thời gian: <span>${
															tour.time.split("-")[0]
														}</span></p>
                        </div>
                        <div class="main__desc-left-row">
                            <p>Nơi khởi hành: <span>${
															tour.startLocation
														}</span></p>
                        </div>
                        <div class="main__desc-left-row">
                            <p>Số chỗ còn nhận: <span>${
															tour.leftSlot
														}</span></p>
                        </div>
                    </div>
                    <div class="main__desc-right">
                        <div class="main__desc-right-top">
                            <div class="main__desc-right-top-item">
                                <div class="main__desc-right-top-item--title">
                                    <span class="material-icons-outlined"> tour </span>
                                    <span>Thời gian</span>
                                </div>
                                <p class="main__desc-right-top-item--desc">${
																	tour.time.split("-")[0]
																} ngày ${tour.time.split("-")[1]} đêm</p>
                            </div>
                            <div class="main__desc-right-top-item">
                                <div class="main__desc-right-top-item--title">
                                    <span class="material-icons-outlined">
                                        directions_car
                                    </span>
                                    <span>Phương tiện</span>
                                </div>
                                <p class="main__desc-right-top-item--desc">${
																	tour.vehicle
																}</p>
                            </div>
                            <div class="main__desc-right-top-item">
                                <div class="main__desc-right-top-item--title">
                                    <span class="material-icons-outlined"> local_library </span>
                                    <span>Điểm du lịch</span>
                                </div>
                                <p class="main__desc-right-top-item--desc">
                                    ${tour.locationVisit}
                                </p>
                            </div>
                            <div class="main__desc-right-top-item">
                                <div class="main__desc-right-top-item--title">
                                    <span class="material-icons-outlined">
                                        restaurant_menu
                                    </span>
                                    <span>Ẩm thực</span>
                                </div>
                                <p class="main__desc-right-top-item--desc">
                                    ${tour.culinary}
                                </p>
                            </div>
                        </div>
                        <div class="main__desc-right-top">
                            <div class="main__desc-right-top-item">
                                <div class="main__desc-right-top-item--title">
                                    <span class="material-icons-outlined"> location_city </span>
                                    <span>Khách sạn</span>
                                </div>
                                <p class="main__desc-right-top-item--desc">Khách sạn ${
																	tour.hotel.numberStar
																} sao</p>
                            </div>
                            <div class="main__desc-right-top-item">
                                <div class="main__desc-right-top-item--title">
                                    <span class="material-icons-outlined"> watch_later </span>
                                    <span>Thời gian lý tưởng</span>
                                </div>
                                <p class="main__desc-right-top-item--desc">${
																	tour.idealTime
																}</p>
                            </div>
                            <div class="main__desc-right-top-item">
                                <div class="main__desc-right-top-item--title">
                                    <span class="material-icons-outlined">
                                        people_outline
                                    </span>
                                    <span>Đối tượng</span>
                                </div>
                                <p class="main__desc-right-top-item--desc">
                                    ${tour.object}
                                </p>
                            </div>
                            <div class="main__desc-right-top-item">
                                <div class="main__desc-right-top-item--title">
                                    <span class="material-icons-outlined"> app_shortcut </span>
                                    <span>Ưu đãi</span>
                                </div>
                                <p class="main__desc-right-top-item--desc">
                                    ${tour.endow}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main__support">
                    <p class="main__support-title">Quý khách cần hỗ trợ?</p>
                    <div class="main__support-choose">
                        <button class="main__support-choose--method">
                            <span class="material-icons-outlined"> call </span>
                            Gọi miễn phí qua internet
                        </button>
                        <button class="main__support-choose--method">
                            <span class="material-icons-outlined"> email </span>
                            Gửi yêu cầu hỗ trợ
                        </button>
                    </div>
                </div>
            </div>
                `;
				// Load time line
				let htmlTimeline = `
                <div class="timeline">
				    <div class="timeline__left">LỊCH TRÌNH</div>
				    <div class="timeline__right">
                `;
				let htmlTimelineDays = `
                    <div class="timeline__right-days">
                `;
				let htmlTimelineDesc = `
                    <div class="timeline__right-desc">
                `;
				var parts = tour.dateStart.split("/");
				var date = new Date(parts[2], parts[1] - 1, parts[0]);
				for (let i in tour.timeline) {
					var numberOfDaysToAdd = i;
					var myDate = new Date(
						date.getTime() + numberOfDaysToAdd * 24 * 60 * 60 * 1000
					);
					var dayTimeline =
						myDate.getDate() +
						"/" +
						(myDate.getMonth() + 1) +
						"/" +
						myDate.getFullYear();
					console.log(dayTimeline);

					htmlTimelineDays += `
                    <div class="timeline__right-days--day">
                        Ngày ${i + 1}
                        <p>${dayTimeline}</p>
                    </div>
                    `;

					htmlTimelineDesc += `
                    <div class="timeline__right-desc--title">
                        ${tour.timeline[i].title}
                        <p>${tour.timeline[i].meal}</p>
                    </div>
                    `;
				}
				htmlTimelineDays += "</div>";
				htmlTimelineDesc += "</div>";

				htmlTimeline += htmlTimelineDays;
				htmlTimeline += htmlTimelineDesc;
				htmlTimeline += "</div>";

				// End timeline

				document.querySelector(".content").innerHTML = htmlMain + htmlTimeline;
			}
		}
	});
