fetch("./assets/data/experience.json")
.then(function (response) {
    if (!response.ok) {
      throw new Error("Đã có lỗi xảy ra :" + response.status);
    }
    return response.json();
  })
  .then(function(experience){
    // console.log(experience)

    let listItem = experience;
    let html = "";

    for(let item of listItem){
        // console.log(item.title)
        console.log(item.description)
        html += `
        <div class="item">
            <div class="item__img">
                <a href="#">
                    <img src="./assets/image/experience/${item.image}" alt="">
                </a>          
            </div>
            <div class="item__info">
                <div class="item__info-title"> 
                    <a href="#">Kinh nghiệm du lịch ${item.title}</a>
                </div>
                <div class="content__info-type-date">
                    <a class="content__info-type" href="experience.html">Kinh nghiệm du lịch</a>
                    <span class="item__info-date">${item.date}</span>
                </div>
                <p class="item__info-description">
                    ${item.description}
                </p>
            </div>                                      
        </div>          
        `
    }
    document.getElementById("list-content").innerHTML = html;
  })