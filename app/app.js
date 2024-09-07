let point = 0;
const btn = document.getElementById("btn");
const label = document.getElementById("label");
const pointLabel = document.getElementById("point")

btn.addEventListener("click", () => {
    if (point == 0) {
        label.innerText = "อยากรู้อะป่าว";
    }
    if (point > 34) {
        label.innerText = "เอ้าๆกดเกินรีหน้าใหม่เลย 5555555"
    }
    switch (point) {
        case 1: 
            label.innerText = "เอ๊ะๆๆๆ งอนอะไรน้า";
            break;
        case 2:
            label.innerText = "กดช้าๆ";
            break;
        case 3: 
            label.innerText = "เอ๊ะๆ ลองกดอีกรอบๆ";
            break;
        case 4:
            label.innerText = "อาจจะต้องกดสัก 30 รอบมั้งนับครั้งนี้ครั้งแรกนะ";
            break;
        case 19:
            label.innerText = "ครึ่งทางแล้วเนี่ยยย";
            break;
        case 34:
            label.innerText = "ไมเธอไม่อยากคุยด้วยเค้านอยนะ"
            break;
    }
    point += 1;
});