// initial writing or welcome
function onepagetulisa() {
  let isitext = "Hallo All Welcome To My Portofolio !!";
  let maju = 1;
  let mundur = 0;
  let fonts = document.getElementById("font");
  let buttondisplay = document.getElementById("button");
  setInterval(() => {
    if (maju == 1) {
      fonts.textContent += isitext[mundur];
      mundur++;
    }
    if (mundur == isitext.length) {
      maju = -1;
      buttondisplay.style.display = "block";
    }
    if (maju == -1) {
      fonts.textContent = fonts.textContent.slice(0, -1);
      mundur--;
    }
    if (mundur == 0) {
      maju = 1;
    }
  }, 200);
  buttondisplay.onclick = function () {
    window.location.href = "/onepage/index.html";
  };
}
onepagetulisa();

function updateTime() {
  let time = new Date();
  document.getElementById("hours").innerHTML = time
    .getHours()
    .toString()
    .padStart(2, "0");
  document.getElementById("minute").innerHTML = time
    .getMinutes()
    .toString()
    .padStart(2, "0");
  document.getElementById("wib").innerHTML = time.getFullYear();
  document.getElementById("second").innerHTML = time
    .getSeconds()
    .toString()
    .padStart(2, "0");
}

setInterval(updateTime, 1000);

updateTime();
// Fungsi untuk membuat background glitch
function createGlitchBackground() {
  const container = document.querySelector(".kontainer");

  // Membuat elemen glitch
  const glitchElement = document.createElement("div");
  glitchElement.classList.add("glitch-background");

  // Menambahkan elemen glitch ke container
  container.insertBefore(glitchElement, container.firstChild);

  // Membuat efek glitch
  setInterval(() => {
    glitchElement.style.backgroundPosition = `${Math.random() * 100}% ${
      Math.random() * 100
    }%`;
    glitchElement.style.filter = `hue-rotate(${Math.random() * 360}deg)`;

    setTimeout(() => {
      glitchElement.style.backgroundPosition = "0 0";
      glitchElement.style.filter = "none";
    }, 50);
  }, 2000);
}

createGlitchBackground();
function createDarkGlitchBackground() {
  const container = document.querySelector(".kontainer");

  const glitchElement = document.createElement("div");
  glitchElement.classList.add("dark-glitch-background");

  container.insertBefore(glitchElement, container.firstChild);

  setInterval(() => {
    glitchElement.style.transform = `translate(${Math.random() * 10 - 5}px, ${
      Math.random() * 10 - 5
    }px)`;

    glitchElement.style.filter = `hue-rotate(${
      Math.random() * 360
    }deg) brightness(${4 + Math.random() * 1})`;

    glitchElement.style.backgroundImage = `repeating-linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.1) 4px,
      transparent 1px,
      transparent 2px
    )`;

    setTimeout(() => {
      glitchElement.style.transform = "none";
      glitchElement.style.filter = "none";
      glitchElement.style.backgroundImage = "none";
    }, 100);
  }, 1000);
}

createDarkGlitchBackground();
