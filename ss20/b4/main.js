function findCharacter() {
  // Nhập vào chuỗi và ký tự cần tìm
  let inputString = prompt("Nhập vào một chuỗi:");
  let searchChar = prompt("Nhập ký tự cần tìm:");

  // Biến kiểm tra xem có tìm thấy ký tự hay không
  let found = false;

  // Duyệt qua từng ký tự trong chuỗi
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === searchChar) {
      found = true;
      break;
    }
  }

  // Hiển thị kết quả
  if (found) {
    alert("Ký tự '" + searchChar + "' được tìm thấy trong chuỗi.");
  } else {
    alert("Ký tự '" + searchChar + "' không có trong chuỗi.");
  }
}

// Gọi hàm để thực thi
findCharacter();
