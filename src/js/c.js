var countriesId = document.querySelector('input')
var btn = document.querySelector('button')
btn.onclick = function(){
    var id = countriesId.value
    var myApi = `https://corona.lmao.ninja/v2/countries/${id}`
    fetch(myApi)
    .then(function(response){
    return response.json()
})
    .then(function(data){
        var country = document.querySelector('#country')
        var cases = document.querySelector('#case')
        var todayCases = document.querySelector('#todayCases')
        var deaths = document.querySelector('#deaths')
        var todayDeaths = document.querySelector('#todayDeaths')
        var recovered = document.querySelector('#recovered')
        var active = document.querySelector('#active')
        country.innerHTML = `<span>${data.country}</span>
        <img style="width: 50px;" src="${data.countryInfo.flag}">`
        cases.innerHTML = data.cases
        todayCases.innerHTML = data.todayCases
        deaths.innerHTML = data.deaths
        todayDeaths.innerHTML = data.todayDeaths
        recovered.innerHTML = data.recovered
        active.innerHTML = data.active
    })
}


var btnMore = document.querySelector('.see_more')
btnMore.onclick = function(){
    var myApi = 'https://corona.lmao.ninja/v2/countries/'
    fetch(myApi)
    .then(function(response){
    return response.json()
})
    .then(function(data){
        html=`<tr style="background-color: #3d486c;">
                <th>Quốc gia</th>
                <th>Số ca nhiễm</th>
                <th>Số ca nhiễm hôm nay</th>
                <th>Số ca chết</th>
                <th>Số ca chết hôm nay</th>
                <th>Số ca hồi phục</th>
                <th>Đang điều trị</th>
            </tr>`
        var table2 = document.querySelector('#tb-2')
        data.forEach(function(country){
            return html+= `<tr style="background-color: #364061;">
                                <td  id="country"><span>${country.country}</span> <img style="width: 50px;" src="${country.countryInfo.flag}"></td>
                                <td style="color:#ff9d00;" id="case">${country.cases}</td>
                                <td id="todayCases">${country.todayCases}</td>
                                <td style="color:#f64e63" id="deaths">${country.deaths}</tdid>
                                <td id="todayDeaths">${country.todayDeaths}</td>
                                <td style="color: #65dd9b;" id="recovered">${country.todayDeaths}</td>
                                <td id="active">${country.active}</td>
                            </tr>`
        })
        table2.innerHTML=html;
    })
}
