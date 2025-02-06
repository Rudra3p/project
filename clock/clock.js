let H = document.getElementById("hour");
let M = document.getElementById("minute");
let S = document.getElementById("second");
let DH = document.getElementById("digi_hour");
let DM = document.getElementById("digi_minute");
let DS = document.getElementById("digi_second");

setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    H.style.transform = `rotate(${hrotation}deg)`
    M.style.transform = `rotate(${mrotation}deg)`
    S.style.transform = `rotate(${srotation}deg)`

    DH.innerText = String(htime).padStart(2, "0");
    DM.innerText = String(mtime).padStart(2, "0");
    DS.innerText = String(stime).padStart(2, "0");

},1000);