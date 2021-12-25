const btnSeeMore = document.querySelector(".see_more");
const API = "https://corona.lmao.ninja/v2/countries/";
btnSeeMore.addEventListener("click", function () {
  // call API
  fetch(API)
    .then(function (response) {
      return response.json(); // javascrip object
    })
    .then(function (data) {
      renderUI(data);
    });

  // render UI
  function renderUI(data) {
    let html=`<tr style="background-color: #3d486c;">
                <th>Quốc gia</th>
                <th>Số ca nhiễm</th>
                <th>Số ca nhiễm hôm nay</th>
                <th>Số ca chết</th>
                <th>Số ca chết hôm nay</th>
                <th>Số ca hồi phục</th>
                <th>Đang điều trị</th>
            </tr>`
            let table2 = document.querySelector('#tb-2');
        data.map(function (country) {
            return html += `<tr>
                <td id="country"><span>${country.country}</span> <img style="width: 50px;" src="${country.countryInfo.flag}"></td>
                <td id="case">${country.cases}</td>
                <td id="todayCases">${country.todayCases}</td>
                <td id="deaths">${country.deaths}</tdid>
                <td id="todayDeaths">${country.todayDeaths}</td>
                <td id="recovered">${country.todayDeaths}</td>
                <td id="active">${country.active}</td>
             </tr>`;
    });
    table2.innerHTML=html;
  }
});
