/* --------- Start of 12-Hour Clock ---------- */

function Time1(){
    var date1 = new Date();
    var h1 = date1.getHours();
    var m1 = date1.getMinutes();
    var s1 = date1.getSeconds();
    var x1 = "am";

    if (h1 < 10) {
        h1 = "0" + h1
    } else if (h1 > 12 && h1 < 22) {
        h1 = "0" + (h1-12)
    }
    if (m1 < 10) {
        m1 = "0" + m1
    } else if (m1 > 12 && m1 < 22) {
        m1 = "0" + (m1-12)
    }
    if (s1 < 10) {
        s1 = "0" + s1
    } else if (s1 > 12 && s1 < 22) {
        s1 = "0" + (s1-12)
    }

    if (h1 > 12) {
        h1 = h1 - 12;
        x1 = "pm"
    } else {
        x1 = "am"
    }

    var time1 = h1 + ":" + m1 + ":" + s1 + " " + x1;
    document.getElementById("clock1").innerText = time1;
    document.getElementById("clock1").textContent = time1;
    setTimeout(Time1, 1000);
}
Time1();

/* ---------- End of 12-Hour Clock ---------- */

function Time2(){
    var date2 = new Date();
    var h2 = date2.getHours();
    var m2 = date2.getMinutes();
    var s2 = date2.getSeconds();

    if (h2 < 10) {
        h2 = "0" + h2
    }
    if (m2 < 10) {
        m2 = "0" + m2
    }
    if (s2 < 10) {
        s2 = "0" + s2
    }

    var time2 = h2 + ":" + m2 + ":" + s2 + " ";
    document.getElementById("clock2").innerText = time2;
    document.getElementById("clock2").textContent = time2;
    setTimeout(Time2, 1000);
}
Time2();

/* ---------- End of 24-Hour Clock ---------- */

/* ---------- Start of hexColorClock ---------- */

/* ---------- End of hexColorClock ---------- */
