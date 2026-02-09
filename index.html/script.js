document.addEventListener("DOMContentLoaded", function () {
  const container = document.body;
  const numFlowers = 50; // Jumlah bunga yang jatuh

  for (let i = 0; i < numFlowers; i++) {
    createFlower();
  }

  function createFlower() {
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.style.left = Math.random() * 100 + "vw"; // Posisi horizontal acak
    flower.style.animationDuration = Math.random() * 5 + 5 + "s"; // Durasi jatuh acak
    flower.style.animationDelay = Math.random() * 5 + "s"; // Delay acak
    container.appendChild(flower);

    // Hapus bunga setelah animasi selesai untuk performa
    setTimeout(() => {
      flower.remove();
      createFlower(); // Buat bunga baru
    }, 10000);
  }
});