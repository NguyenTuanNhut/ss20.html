function power() {
  // Nhập vào số a và b
  let a = parseInt(prompt("Nhập vào số a:"));
  let b = parseInt(prompt("Nhập vào số b:"));
  let result = 1;

  // Tính a^b bằng vòng lặp for
  for (let i = 0; i < b; i++) {
    result *= a;
  }

  // In kết quả ra màn hình
  alert(a + " ^ " + b + " = " + result);
}

// Gọi hàm để thực thi
power();
