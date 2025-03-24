function sum(num) {
  if (num <= 0) {
    alert("du lieu nhap vao khong hop le");
    return;
  }
  if (/^[a-zA-Z]$/.test(num)) {
    alert("du lieu nhap vao khong hop le");
    return;
  }
  for (var i = 1; i <= num; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
}
let num = prompt();
sum(num);
