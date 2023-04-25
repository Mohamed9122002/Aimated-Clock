let hr = document.querySelector("#hr");
let mn = document.querySelector("#mn");
let sc = document.querySelector("#sc");
setInterval(function () {
    let day = new Date();
// console.log(day);
let hh = day.getHours()*30;
// console.log(hh);
    let mm = day.getMinutes() * 6;
    // console.log(mm);
    let ss = day.getSeconds() * 6;
    // console.log(ss);
    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform= `rotateZ(${ss}deg)`;
})