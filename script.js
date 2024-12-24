const canvas = document.getElementById("flowerCanvas");
const ctx = canvas.getContext("2d");

// 🌻 Clase DecoratedFlower
class DecoratedFlower {
  constructor() {
    this.centerX = canvas.width / 2; // Posición horizontal centrada
    this.centerY = (canvas.height / 2) - 75; // Mover 75px hacia arriba (~2cm)
    this.lastFlowerIndex = null; // Para evitar repetición consecutiva
  }

  // Dibujar pétalos
  drawPetal(x, y, width, height, rotation, color) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.beginPath();
    ctx.ellipse(0, 0, width, height, 0, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();
  }

  // 🌻 Dibujar Girasol
  drawSunflower() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas

    // Tallo
    ctx.beginPath();
    ctx.rect(this.centerX - 8.45, this.centerY, 16.9, 253.5); // Aumentado otro 30%
    ctx.fillStyle = "#228B22";
    ctx.fill();

    // Hojas
    ctx.beginPath();
    ctx.ellipse(this.centerX - 50.7, this.centerY + 84.5, 33.8, 16.9, Math.PI / 4, 0, Math.PI * 2); 
    ctx.ellipse(this.centerX + 50.7, this.centerY + 135.2, 33.8, 16.9, -Math.PI / 4, 0, Math.PI * 2);
    ctx.fillStyle = "#32CD32";
    ctx.fill();

    // Pétalos
    const petalColors = ["#FFD700", "#FFC107"];
    for (let i = 0; i < 12; i++) {
      const angle = (Math.PI * 2 / 12) * i;
      this.drawPetal(this.centerX, this.centerY - 67.6, 67.6, 135.2, angle, petalColors[i % 2]);
    }

    // Centro
    ctx.beginPath();
    ctx.arc(this.centerX, this.centerY - 67.6, 50.7, 0, Math.PI * 2); 
    ctx.fillStyle = "#8B4513";
    ctx.fill();
  }

  // 🌼 Dibujar Margarita
  drawDaisy() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas

    // Tallo
    ctx.beginPath();
    ctx.rect(this.centerX - 8.45, this.centerY, 16.9, 253.5);
    ctx.fillStyle = "#228B22";
    ctx.fill();

    // Hojas
    ctx.beginPath();
    ctx.ellipse(this.centerX - 50.7, this.centerY + 84.5, 33.8, 16.9, Math.PI / 4, 0, Math.PI * 2); 
    ctx.ellipse(this.centerX + 50.7, this.centerY + 135.2, 33.8, 16.9, -Math.PI / 4, 0, Math.PI * 2);
    ctx.fillStyle = "#32CD32";
    ctx.fill();

    // Pétalos
    for (let i = 0; i < 12; i++) {
      const angle = (Math.PI * 2 / 12) * i;
      this.drawPetal(this.centerX, this.centerY - 67.6, 42.25, 101.4, angle, "#FFFFFF");
    }

    // Centro
    ctx.beginPath();
    ctx.arc(this.centerX, this.centerY - 67.6, 33.8, 0, Math.PI * 2); 
    ctx.fillStyle = "#FFD700";
    ctx.fill();
  }

  // 🎭 Alternar Flores Aleatoriamente (Sin Repetir)
  drawRandomFlower() {
    const flowers = [
      this.drawSunflower.bind(this),
      this.drawDaisy.bind(this)
    ];

    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * flowers.length);
    } while (randomIndex === this.lastFlowerIndex);

    this.lastFlowerIndex = randomIndex;
    flowers[randomIndex]();
  }
}

// Crear y alternar flores
const flower = new DecoratedFlower();
flower.drawRandomFlower();
setInterval(() => flower.drawRandomFlower(), 2000);

// 💖 Corazones al hacer clic
document.addEventListener('click', (e) => {
  const heart = document.createElement('div');
  heart.classList.add('click-heart');
  heart.style.left = `${e.clientX}px`;
  heart.style.top = `${e.clientY}px`;
  document.querySelector('.click-hearts').appendChild(heart);
  setTimeout(() => heart.remove(), 1500);
});

// 💬 Mensajes cambiantes
const messages = [
  "¡Feliz Navidad, mi amor! 🎄",
  "Eres una chica maravillosa ✨",
  "Cada momento contigo es mágico 💖",
  "Te quiero demasiadoooo ❤️",
  "¡Gracias por estar a mi lado! 🌟",
  "Eres mi persona favorita ❤️",
  "¡Feliz Navidad, preciosa! 🎁"
];

let messageIndex = 0;
const messageElement = document.getElementById("bottomMessages");

function changeMessage() {
  messageElement.classList.remove('visible');

  setTimeout(() => {
    messageElement.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    messageElement.classList.add('visible');
  }, 1000);
}

changeMessage();
setInterval(changeMessage, 3000);

// 💖 Corazones flotantes distribuidos equitativamente
const heartContainer = document.querySelector('.pixel-hearts');

function createHearts(rows, columns) {
  const rowSpacing = 100 / rows; 
  const colSpacing = 100 / columns; 

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      const heart = document.createElement('div');
      heart.classList.add('pixel-heart');
      const top = row * rowSpacing + Math.random() * (rowSpacing * 0.5); 
      const left = col * colSpacing + Math.random() * (colSpacing * 0.5);
      heart.style.top = `${top}%`;
      heart.style.left = `${left}%`;
      heart.style.animationDelay = `${Math.random() * 3}s`;
      heartContainer.appendChild(heart);
    }
  }
}

createHearts(5, 6);
