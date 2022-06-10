function validateForm() {
  let email = document.querySelector('input[type="text"]').value.trim();
  let message = document.getElementsByTagName("div")[0];
  let firstChar = email.charAt(0);
  let atPos = email.indexOf("@");
  let atLastPos = email.lastIndexOf("@");
  let dotLastPos = email.lastIndexOf(".");

  message.innerHTML = "";

  if (email.length < 8) {
    message.innerHTML = "Invalid Email Length";
    return false;
  }

  if (
    !isNaN(firstChar) ||
    firstChar == "." ||
    firstChar == "@" ||
    firstChar == "_"
  ) {
    message.innerHTML = `First Character cannot be: ${firstChar}`;
    return false;
  }

  if (atPos < 2 || atLastPos - atPos != 0) {
    message.innerHTML = `Error for @ sign`;
    return false;
  }

  if (dotLastPos - atLastPos < 3) {
    message.innerHTML = `Error in domain name`;
    return false;
  }

  if (email.length - dotLastPos < 3) {
    message.innerHTML = `Error in .com`;
    return false;
  }

  let arrEmail = email.split("");

  for (var x of arrEmail) {
    let y = x.charCodeAt(0);

    if (x == "_" || x == "." || x == "@") {
      continue;
    } else if (y >= 97 && y <= 122) {
      continue;
    } else if (y >= 65 && y <= 90) {
      continue;
    } else if (y >= 48 && y <= 57) {
      continue;
    } else {
      message.innerHTML = `Invalid Charter in email ${x}`;
      return false;
    }
  }
  message.innerHTML = `${email} is valid`;
}
