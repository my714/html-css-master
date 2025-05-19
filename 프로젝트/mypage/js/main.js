$("#fullpage").fullpage({
  autoScrolling: true,
  scrollHorizontally: false,
  scrollingSpeed: 700,
  anchors: ["section1", "section2", "section3"],
  sectionsColor: ["#f2f2f2", "#fff", "#f2f2f2"],
  scrollOverflow: true,
});

//마우스 효과
const butterflyCanvas = document.getElementById("Butterfly");
const butterflyCtx = butterflyCanvas.getContext("2d");

butterflyCanvas.width = window.innerWidth;
butterflyCanvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  butterflyCanvas.width = window.innerWidth;
  butterflyCanvas.height = window.innerHeight;
});

const butterflyImg = new Image();
butterflyImg.src = "./img/butterfly.png";

const butterfly = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
  targetX: window.innerWidth / 2,
  targetY: window.innerHeight / 2,
  baseSize: 50,
  size: 50,
  wingPhase: 0,
  flip: false,
};

document.addEventListener("mousemove", (e) => {
  butterfly.targetX = e.clientX;
  butterfly.targetY = e.clientY;
  butterfly.flip = e.clientX < butterfly.x;
});

function animateButterfly() {
  butterflyCtx.clearRect(0, 0, butterflyCanvas.width, butterflyCanvas.height);

  butterfly.x += (butterfly.targetX - butterfly.x) * 0.1;
  butterfly.y += (butterfly.targetY - butterfly.y) * 0.1;

  butterfly.wingPhase += 0.2;
  butterfly.size = butterfly.baseSize + Math.sin(butterfly.wingPhase) * 8;

  butterflyCtx.save();
  butterflyCtx.translate(butterfly.x, butterfly.y);

  if (butterfly.flip) {
    butterflyCtx.scale(-1, 1);
  }

  butterflyCtx.drawImage(
    butterflyImg,
    -butterfly.size / 2,
    -butterfly.size / 2,
    butterfly.size,
    butterfly.size
  );

  butterflyCtx.restore();

  requestAnimationFrame(animateButterfly);
}

butterflyImg.onload = () => {
  animateButterfly();
};

//벚꽃 애니메이션
const canvas = document.getElementById("sakura");
const ctx = canvas.getContext("2d");
let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

const petalImages = ["./img/sakura01.png", "./img/sakura02.png"];
const loadedImages = [];
let imagesLoaded = 0;

petalImages.forEach((src, i) => {
  const img = new Image();
  img.src = src;
  img.onload = () => {
    loadedImages[i] = img;
    imagesLoaded++;
    if (imagesLoaded === petalImages.length) startAnimation();
  };
});

const petals = [];
const petalCount = 40;

function createPetals() {
  for (let i = 0; i < petalCount; i++) {
    petals.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 25 + 15,
      speedY: Math.random() * 1 + 0.5,
      speedX: Math.random() * 1 - 0.5,
      rotation: Math.random() * 360,
      rotationSpeed: Math.random() * 2 - 1,
      img: loadedImages[Math.floor(Math.random() * loadedImages.length)],
    });
  }
}

function drawPetals() {
  ctx.clearRect(0, 0, width, height);
  petals.forEach((p) => {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rotation * Math.PI) / 180);
    ctx.drawImage(p.img, -p.size / 2, -p.size / 2, p.size, p.size);
    ctx.restore();

    p.y += p.speedY;
    p.x += p.speedX;
    p.rotation += p.rotationSpeed;

    if (p.y > height || p.x > width || p.x < -50) {
      p.y = -20;
      p.x = Math.random() * width;
    }
  });
}

function animate() {
  drawPetals();
  requestAnimationFrame(animate);
}

function startAnimation() {
  createPetals();
  animate();
}

//나뭇잎 애니메이션 섹션3

const leafCanvas = document.getElementById("leaf");
const leafCtx = leafCanvas.getContext("2d");
let leafWidth = (leafCanvas.width = window.innerWidth);
let leafHeight = (leafCanvas.height = window.innerHeight);

window.addEventListener("resize", () => {
  leafWidth = leafCanvas.width = window.innerWidth;
  leafHeight = leafCanvas.height = window.innerHeight;
});

const leafImages = ["./img/leaf.png"];
const loadedLeafImages = [];
let leafImagesLoaded = 0;

const leafCount = 15;
const leaves = [];
let showLeaves = false;

leafImages.forEach((src, i) => {
  const img = new Image();
  img.src = src;
  img.onload = () => {
    loadedLeafImages[i] = img;
    leafImagesLoaded++;
    if (leafImagesLoaded === leafImages.length) {
      createLeaves();
      animateLeaves();
    }
  };
});

function createLeaves() {
  for (let i = 0; i < leafCount; i++) {
    leaves.push({
      x: Math.random() * leafWidth,
      y: Math.random() * leafHeight,
      size: Math.random() * 30 + 20,
      speedY: Math.random() * 1 + 0.5,
      speedX: Math.random() * 1 - 0.5,
      rotation: Math.random() * 360,
      rotationSpeed: Math.random() * 2 - 1,
      img: loadedLeafImages[
        Math.floor(Math.random() * loadedLeafImages.length)
      ],
    });
  }
}

function drawLeaves() {
  leafCtx.clearRect(0, 0, leafWidth, leafHeight);
  if (!showLeaves) return;

  leaves.forEach((leaf) => {
    leafCtx.save();
    leafCtx.translate(leaf.x, leaf.y);
    leafCtx.rotate((leaf.rotation * Math.PI) / 180);
    leafCtx.drawImage(
      leaf.img,
      -leaf.size / 2,
      -leaf.size / 2,
      leaf.size,
      leaf.size
    );
    leafCtx.restore();

    leaf.y += leaf.speedY;
    leaf.x += leaf.speedX;
    leaf.rotation += leaf.rotationSpeed;

    if (leaf.y > leafHeight || leaf.x > leafWidth || leaf.x < -50) {
      leaf.y = -20;
      leaf.x = Math.random() * leafWidth;
    }
  });
}

function animateLeaves() {
  drawLeaves();
  requestAnimationFrame(animateLeaves);
}

// 섹션 3에서만 보이도록
const section3 = document.querySelector(".section:nth-child(3)");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      showLeaves = entry.isIntersecting;
    });
  },
  { threshold: 0.3 }
);
observer.observe(section3);

//섹션 3 클릭

document
  .querySelectorAll(".project .project_list li")[0]
  .querySelector("p")
  .classList.add("active");

const firstCon = document.querySelectorAll(".bottom .con")[0];
firstCon.style.display = "flex";

const firstLink = firstCon.querySelector(".link a");
const firstImgBox = firstCon.querySelector(".img_box");

firstLink.onmouseenter = () => firstImgBox.classList.add("bright");
firstLink.onmouseleave = () => firstImgBox.classList.remove("bright");

function resetTabs() {
  document.querySelectorAll(".project .project_list li").forEach((li) => {
    li.querySelector("p").classList.remove("active");
  });
  document.querySelectorAll(".bottom .con").forEach((con) => {
    con.style.display = "none";
  });
}

document.querySelectorAll(".project .project_list li").forEach(function (v, k) {
  v.onclick = function (e) {
    e.preventDefault();
    resetTabs();
    v.querySelector("p").classList.add("active");
    const currentCon = document.querySelectorAll(".bottom .con")[k];
    currentCon.style.display = "flex";

    const link = currentCon.querySelector(".link a");
    const right = currentCon.querySelector(".img_box");

    link.onmouseenter = () => right.classList.add("bright");
    link.onmouseleave = () => right.classList.remove("bright");
  };
});

// 텍스트 애니메이션

function animateLettersOnScroll(selector, animationClass) {
  const elements = document.querySelectorAll(selector);

  function checkVisibility() {
    elements.forEach((el, i) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.style.animationDelay = `${i * 0.2}s`;
        el.classList.add(animationClass);
      } else {
        el.classList.remove(animationClass);
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  window.addEventListener("load", checkVisibility);
}

animateLettersOnScroll(".title01 h1 span", "animate");
animateLettersOnScroll(".section:nth-child(2) h2 .letter", "animate");
function animateWorkTextOnScroll() {
  const h3Spans = document.querySelectorAll(".title03 h3 span");
  h3Spans.forEach((el, i) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      if (i === 0) {
        el.classList.add("animate-left");
      } else {
        el.classList.add("animate-right");
      }
    } else {
      el.classList.remove("animate-left");
      el.classList.remove("animate-right");
    }
  });
}

window.addEventListener("scroll", animateWorkTextOnScroll);
window.addEventListener("load", animateWorkTextOnScroll);

//타이핑 효과

function typeText(element, text, speed = 100, callback) {
  let i = 0;
  element.innerHTML = "";
  element.classList.add("active");
  element.classList.remove("done");

  const interval = setInterval(() => {
    element.textContent += text.charAt(i);
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      element.classList.remove("active");
      element.classList.add("done");
      if (callback) callback();
    }
  }, speed);
}

function typeAllParagraphs() {
  const paragraphs = document.querySelectorAll(".txt .typing");
  let current = 0;

  function typeNext() {
    if (current >= paragraphs.length) return;

    const el = paragraphs[current];
    const text = el.getAttribute("data-text");

    // 모든 줄에서 active 제거
    paragraphs.forEach((p) => p.classList.remove("active"));

    typeText(el, text, 120, () => {
      current++;
      setTimeout(typeNext, 400);
    });
  }

  typeNext();
}

function handleScrollTyping() {
  const target = document.querySelector(".txt");
  let hasAnimated = false;

  function check() {
    const rect = target.getBoundingClientRect();
    if (!hasAnimated && rect.top < window.innerHeight && rect.bottom > 0) {
      hasAnimated = true;
      typeAllParagraphs();
    }
    if (hasAnimated && rect.bottom < 0) {
      hasAnimated = false;
      document.querySelectorAll(".txt .typing").forEach((p) => {
        p.textContent = "";
        p.classList.remove("done");
      });
    }
  }

  window.addEventListener("scroll", check);
  window.addEventListener("load", check);
}

handleScrollTyping();
