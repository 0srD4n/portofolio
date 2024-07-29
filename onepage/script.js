function timelife() {
  let hours = document.getElementById("hours");
  let minute = document.getElementById("minute");
  let second = document.getElementById("second");
  let dates = new Date();
  second.innerHTML = dates.getSeconds().toString().padStart(2, "0");
  hours.innerHTML = dates.getHours().toString().padStart(2, "0");
  minute.innerHTML = dates.getMinutes().toString().padStart(2, "0");
}
setInterval(timelife, 1000);
timelife();
// Fungsi untuk membuat background luar angkasa modern
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

// Memanggil fungsi untuk membuat background
createSpaceBackground();
