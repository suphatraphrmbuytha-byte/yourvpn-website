function scrollToPricing() {
document.getElementById("pricing").scrollIntoView({
behavior: "smooth"
});
}

// โหลดเครดิตเดิม
let credit = localStorage.getItem("credit");

if (credit === null) {
credit = 0;
}

document.getElementById("credit").textContent = credit;
document.getElementById("credit2").textContent = credit;

// แสดงรูปสลิป
function previewSlip(event) {
const preview = document.getElementById("preview");

```
preview.src = URL.createObjectURL(event.target.files[0]);
```

}

// ส่งสลิป
function submitSlip() {

```
let amount = document.getElementById("amount").value;

if (amount === "") {
    alert("กรุณากรอกจำนวนเงิน");
    return;
}

credit = Number(credit) + Number(amount);

localStorage.setItem("credit", credit);

document.getElementById("credit").textContent = credit;
document.getElementById("credit2").textContent = credit;

alert("ส่งสลิปสำเร็จ เครดิตเพิ่มแล้ว");
```

}
