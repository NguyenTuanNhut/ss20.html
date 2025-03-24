function isPalindrome(number) {
  // Kiểm tra nếu chuỗi chứa bất kỳ chữ cái nào
  if (/[a-zA-Z]/.test(number)) {
    alert("Dữ liệu nhập vào không hợp lệ");
    return;
  }

  const str = number.toString();
  const reversedStr = str.split("").reverse().join("");

  if (str === reversedStr) {
    alert(number + " là số đối xứng");
  } else {
    alert(number + " không phải là số đối xứng");
  }
}

const input = prompt("Nhập một số nguyên:");
isPalindrome(input);
