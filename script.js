var androidButton = document.getElementById("android");
var appleButton = document.getElementById("apple");

// Android Button
androidButton.addEventListener("click", androidBtn);

function androidBtn() {
  document.getElementById("apple-vs-android").src = "images/Android-Logo.jpg";
  document.getElementById("explore-debate").innerHTML = `Android Home`;
  document.getElementById("explore-debate").style.backgroundColor = `#a4c93b`;
  document.getElementById("explore-debate").href = `https://android.com/`;
  document.getElementById("HTML").style.backgroundColor = `#a4c93b`;
  document.getElementById("HTML").style.fontFamily = `'Roboto', sans-serif`;
  document.getElementById("android").classList.remove("active");
}

// Apple Button
appleButton.addEventListener("click", appleBtn);

function appleBtn() {
  document.getElementById("apple-vs-android").src = "images/Apple-Logo.jpg";
  document.getElementById("explore-debate").innerHTML = `Apple Home`;
  document.getElementById("explore-debate").style.backgroundColor = `#b6bcca`;
  document.getElementById("explore-debate").href = `https://apple.com/`;
  document.getElementById("HTML").style.backgroundColor = `#b6bcca`;
  document.getElementById("HTML").style.fontFamily = `'Brygada 1918', serif`;
  document.getElementById("apple").classList.remove("active");
}
