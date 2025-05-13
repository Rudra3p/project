function encrypt() {
  const message = document.getElementById("message").value;
  const key = parseInt(document.getElementById("key").value);
  if (isNaN(key)) {
    alert("Please enter a valid number as key.");
    return;
  }

  let encrypted = '';
  for (let i = 0; i < message.length; i++) {
    let code = message.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      encrypted += String.fromCharCode((code - 65 + key) % 26 + 65);
    } else if (code >= 97 && code <= 122) {
      encrypted += String.fromCharCode((code - 97 + key) % 26 + 97);
    } else {
      encrypted += message[i];
    }
  }

  document.getElementById("result").textContent = encrypted;
}

function decrypt() {
  const message = document.getElementById("message").value;
  const key = parseInt(document.getElementById("key").value);
  if (isNaN(key)) {
    alert("Please enter a valid number as key.");
    return;
  }

  let decrypted = '';
  for (let i = 0; i < message.length; i++) {
    let code = message.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      decrypted += String.fromCharCode((code - 65 - key + 26) % 26 + 65);
    } else if (code >= 97 && code <= 122) {
      decrypted += String.fromCharCode((code - 97 - key + 26) % 26 + 97);
    } else {
      decrypted += message[i];
    }
  }

  document.getElementById("result").textContent = decrypted;
}