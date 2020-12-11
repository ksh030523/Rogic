var date = new Date();

var year =  date.getFullYear();
var month =  (date.getMonth() + 1 );
var day =  date.getDate();

console.log(year+""+month+""+day);

// $.ajax({
//     url:
// })

// let year = today.getFullYear(); // 년도
// let month = today.getMonth() + 1;  // 월
// let date = today.getDate();  // 날짜


// function Xml(){

//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.open("GET","http://apis.data.go.kr/B090041/openapi/service/RiseSetInfoService/getAreaRiseSetInfo?location=%EC%84%9C%EC%9A%B8&locdate="+year+month+date+"&ServiceKey=e%2FZcj1njkGtbyWaWDyjoX242mVW8581Rwg%2B0MXSgteUEret3Xb3FYYHHkCaS8QiYSvpIIgAES8EEJ40IasVdnQ%3D%3D",false);
//     xmlHttp.send(null);
//     console.log("XML",xmlHttp);

//     }

var xhr = new XMLHttpRequest();
var url = 'https://apis.data.go.kr/B090041/openapi/service/RiseSetInfoService/getAreaRiseSetInfo'; /*URL*/
var queryParams = '?' + encodeURIComponent('ServiceKey') + '='+'e%2FZcj1njkGtbyWaWDyjoX242mVW8581Rwg%2B0MXSgteUEret3Xb3FYYHHkCaS8QiYSvpIIgAES8EEJ40IasVdnQ%3D%3D'; /*Service Key*/
queryParams += '&' + encodeURIComponent('locdate') + '=' + encodeURIComponent(year+""+month+""+day); /**/
queryParams += '&' + encodeURIComponent('location') + '=' + encodeURIComponent('안양'); /**/
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
    }
};

xhr.send('');

// $ .find("moonrise")

// document.querySelector('#moonRise').innerHTML = moonrise;
// document.querySelector('#moonTransit').innerHTML = moontransit;
// document.querySelector('#moonSet').innerHTML = moonset;
