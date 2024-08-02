setInterval(() => {
  function time() {
    let jam = document.getElementById("hours");
    let minute = document.getElementById("minute");
    let detik = document.getElementById("second");
    let date = new Date();
    jam.innerHTML = date.getHours().toString().padStart(2, "0");
    minute.innerHTML = date.getMinutes().toString().padStart(2, "0");
    detik.innerHTML = date.getSeconds().toString().padStart(2, "0");
  }
  time();
}, 1000);

function createSpaceBackground() {
  // Membuat elemen canvas
  const canvas = document.createElement("canvas");
  document.body.appendChild(canvas);
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.zIndex = "-1";

  const ctx = canvas.getContext("2d");

  // Mengatur ukuran canvas
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // Membuat bintang-bintang
  const stars = [];
  for (let i = 0; i < 200; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      vx: Math.floor(Math.random() * 50) - 25,
      vy: Math.floor(Math.random() * 50) - 25,
    });
  }

  // Fungsi animasi
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Menggambar background gradien
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "#0c0e13");
    gradient.addColorStop(1, "#1c1e26");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Menggambar bintang-bintang kecil
    ctx.fillStyle = "#ffffff";
    stars.forEach((star) => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();

      // Menggerakkan bintang ke arah kanan dan kirku
      star.x += star.vx / 30;
      star.y += star.vy / 30;

      // Memastikan bintang tetap dalam canvas
      if (star.x < 0 || star.x > canvas.width)
        star.x = Math.random() * canvas.width;
      if (star.y < 0 || star.y > canvas.height)
        star.y = Math.random() * canvas.height;
    });

    requestAnimationFrame(animate);
  }

  animate();
}

createSpaceBackground();
// data image preiew
const image = [
  {
    image: "./resource/2.jpeg",
    name: "Project 1",
    link: "https://example.com/project1",
    deskripsi: "ini adalah deskripsi project kedua",
  },
  {
    image: "./resource/1.jpeg",
    name: "Project 2",
    link: "https://example.com/project2",
    deskripsi: "ini adalah deskirpsii project ketiga tod",
  },
  {
    image: "./resource/2.jpeg",
    name: "Project 3",
    link: "https://example.com/project3",
    deskripsi: "ini adalah deskripsi project keempat tod ",
  },
  {
    image: "./resource/1.jpeg",
    name: "Project 4",
    link: "https://example.com/project4",
    deskripsi: "ini adalah deskripsi project kelima tod",
  },
];
let index = 0;
function images_(index) {
  // display image onene
  let images1 = document.getElementById("image2");
  let judul1 = document.getElementById("image1");
  let deskrip1 = document.getElementById("deskripsi1");
  images1.style.backgroundImage = `url(${image[index].image})`;
  judul1.textContent = image[index].name;
  deskrip1.textContent = image[index].deskripsi;

  // display image twow brou 
  let images2 = document.getElementById("image5");
  let judul2 = document.getElementById("image4");
  let deskrip2 = document.getElementById("deskripsi2");
  let nextIndex = (index + 1) % image.length;
  images2.style.backgroundImage = `url(${image[nextIndex].image})`;
  judul2.textContent = image[nextIndex].name;
  deskrip2.textContent = image[nextIndex].deskripsi;
}

function loopimage() {
  index += 2;
  if (index >= image.length) {
    index = 0;
  }
  images_(index);
}

images_(0);
setInterval(loopimage, 5000);
