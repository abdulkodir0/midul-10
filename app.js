
let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = "#FFFFFF"
tg.MainButton.color = "#FC3005"

// -----------------------1--------------------------

let item1 = ""
let n_count1 = 0


let count1 = document.getElementById("count1");
let rbtn1 = document.getElementById("rbtn1");
let abtn1 = document.getElementById("abtn1");

abtn1.addEventListener("click", function () {
    count1.innerText = n_count1 += 1;
    count1.style.display = "inline-block";
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
    item1 = "Victus/1200/" + count1.innerText;

});
rbtn1.addEventListener("click", function () {
    if (n_count1 > 0) {
        count1.innerText = n_count1 -= 1;
    }
    count1.style.display = "inline-block";
    item1 = "Victus/1200/" + count1.innerText;
    tg.MainButton.setText("Tolov");
    tg.MainButton.show();
});
// ------------------2--------------------

count2 = document.getElementById("count2");
rbtn2 = document.getElementById("rbtn2");
abtn2 = document.getElementById("abtn2");
let item2 = "";
let n_count2 = 0;
rbtn2.addEventListener("click", function () {
    if (n_count2 > 0) {
        count2.innerText = n_count2 -= 1;
    }

    count2.style.display = "inline-block";
    item2 = "Lenovo/1200/" + count2.innerText;
    tg.MainButton.setText("Tolov");
    tg.MainButton.show();
});


abtn2.addEventListener("click", function () {
    count2.innerText = n_count2 += 1;
    count2.style.display = "inline-block";
    item2 = "Lenovo/1200/" + count2.innerText;
    tg.MainButton.setText("Tolov");
    tg.MainButton.show();
});

// ------------------3--------------------

count3 = document.getElementById("count3");
rbtn3 = document.getElementById("rbtn3");
abtn3 = document.getElementById("abtn3");
let item3 = "";
let n_count3 = 0;
rbtn3.addEventListener("click", function () {
    if (n_count3 > 0) {
        count3.innerText = n_count3 -= 1;
    }

    count3.style.display = "inline-block";
    item3 = "MacBook/400/" + count3.innerText;

    tg.MainButton.setText("Tolov");
    tg.MainButton.show();
});


abtn3.addEventListener("click", function () {
    count3.innerText = n_count3 += 1;
    count3.style.display = "inline-block";
    item3 = "MacBook/400/" + count3.innerText;
    tg.MainButton.setText("Tolov");
    tg.MainButton.show();
});

// -------------------4-------------------

count4 = document.getElementById("count4");
rbtn4 = document.getElementById("rbtn4");
abtn4 = document.getElementById("abtn4");
let item4 = "";
let n_count4 = 0;
rbtn4.addEventListener("click", function () {
    if (n_count4 > 0) {
        count4.innerText = n_count4 -= 1;
    }

    count4.style.display = "inline-block";
    item4 = "Victus-13/500/" + count4.innerText;

    tg.MainButton.setText("Tolov");
    tg.MainButton.show();
});


abtn4.addEventListener("click", function () {
    count4.innerText = n_count4 += 1;
    count4.style.display = "inline-block";
    item4 = "Victus-13/500/" + count4.innerText;

    tg.MainButton.setText("Tolov");
    tg.MainButton.show();
});

// -------------------5-------------------

count5 = document.getElementById("count5");
rbtn5 = document.getElementById("rbtn5");
abtn5 = document.getElementById("abtn5");
let item5 = "";
let n_count5 = 0;
rbtn5.addEventListener("click", function () {
    if (n_count5 > 0) {
        count5.innerText = n_count5 -= 1;
    }

    count5.style.display = "inline-block";
    item5 = "Lenovo/1300/" + count5.innerText;

    tg.MainButton.setText("Tolov");
    tg.MainButton.show();
});


abtn5.addEventListener("click", function () {
    count5.innerText = n_count5 += 1;
    count5.style.display = "inline-block";
    item5 = "Lenovo/1300/" + count5.innerText;

    tg.MainButton.setText("Tolov");
    tg.MainButton.show();
});

// -------------------6-------------------

count6 = document.getElementById("count6");
rbtn6 = document.getElementById("rbtn6");
abtn6 = document.getElementById("abtn6");
let item6 = "";
let n_count6 = 0;
rbtn6.addEventListener("click", function () {
    if (n_count6 > 0) {
        count6.innerText = n_count6 -= 1;
    }


count6.style.display = "inline-block";
    item6 = "Victus-15/1200/" + count6.innerText;

    tg.MainButton.setText("Tolov");
    tg.MainButton.show();
});


abtn6.addEventListener("click", function () {
    count6.innerText = n_count6 += 1;
    count6.style.display = "inline-block";
    item6 = "Victus-15/1200/" + count6.innerText;

    tg.MainButton.setText("Tolov");
    tg.MainButton.show();
});



// -------------------7-------------------

count7 = document.getElementById("count7");
rbtn7 = document.getElementById("rbtn7");
abtn7 = document.getElementById("abtn7");
let item7 = "";
let n_count7 = 0;
rbtn7.addEventListener("click", function () {
    if (n_count7 > 0) {
        count7.innerText = n_count7 -= 1;
    }

    count6.style.display = "inline-block";
    item7 = "MacBook air-13/1400/" + count7.innerText;

    tg.MainButton.setText("Tolov");
    tg.MainButton.show();
});


abtn7.addEventListener("click", function () {
    count7.innerText = n_count7 += 1;
    count7.style.display = "inline-block";
    item7 = "MacBook air-13/1400/" + count7.innerText;

    tg.MainButton.setText("Tolov");
    tg.MainButton.show();
});


// -------------------8-------------------

count8 = document.getElementById("count8");
rbtn8 = document.getElementById("rbtn8");
abtn8 = document.getElementById("abtn8");
let item8 = "";
let n_count8 = 0;
rbtn8.addEventListener("click", function () {
    if (n_count8 > 0) {
        count8.innerText = n_count8 -= 1;
    }

    count8.style.display = "inline-block";
    item8 = "Hp-13/1700/" + count8.innerText;

    tg.MainButton.setText("Tolov");
    tg.MainButton.show();
});


abtn8.addEventListener("click", function () {
    count8.innerText = n_count8 += 1;
    count8.style.display = "inline-block";
    item8 = "Hp/1700/" + count8.innerText;

    tg.MainButton.setText("Tolov");
    tg.MainButton.show();
});

Telegram.WebApp.onEvent("mainButtonClicked", function () {
    data = item1 + "|" + item2 + "|" + item3 + "|" + item4 + "|" + item5 + "|" + item6 + "|" + item7 + "|" + item8 + "|"
    tg.sendData(data);
});