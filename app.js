//? EyeDropper nedir?

document.querySelector(".btn").addEventListener("click", async () => {
  const eyeDropper = new EyeDropper();
  const { sRGBHex } = await eyeDropper.open();
  document.querySelector(".color-display").innerHTML = sRGBHex;
  document.body.style.background = sRGBHex;
});

document.addEventListener("DOMContentLoaded", () => {
  const changeButton = document.getElementById("changeButton");
  const myImage = document.getElementById("myImage");

  const imageSources = ["img/echo.jpg", "img/me.jpg"];

  let currentIndex = 0;

  changeButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % imageSources.length;
    myImage.src = imageSources[currentIndex];
  });
});
