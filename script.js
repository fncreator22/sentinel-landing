// script.js — all animation logic, using GSAP + ScrollTrigger.
// Two signature moments:
//   1. Hero terminal: types a dangerous command, then stamps it BLOCKED.
//   2. Pipeline section: an action packet travels through the 3 stages on scroll.

gsap.registerPlugin(ScrollTrigger);

// ---------- 1. Hero terminal typing sequence ----------
function playHeroTerminal() {
  const commandText = "rm -rf ./build";
  const typedEl = document.getElementById("typed-command");
  const stampEl = document.getElementById("verdict-stamp");

  let i = 0;
  const typeInterval = setInterval(() => {
    typedEl.textContent = commandText.slice(0, i + 1);
    i++;
    if (i === commandText.length) {
      clearInterval(typeInterval);
      // brief pause after typing finishes, then stamp the verdict
      gsap.delayedCall(0.4, () => {
        stampEl.textContent = "🛑 BLOCKED — matched rule: \"rm -rf\"";
        stampEl.classList.add("block");
        gsap.to(stampEl, {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
        });
      });
    }
  }, 55);
}

// Animate the hero heading lines in on page load
gsap.from(".hero-title .line", {
  y: 40,
  opacity: 0,
  duration: 0.8,
  stagger: 0.15,
  ease: "power3.out",
  onComplete: playHeroTerminal,
});

gsap.from(".hero-sub, .terminal, .hero-cta", {
  y: 20,
  opacity: 0,
  duration: 0.8,
  delay: 0.5,
  stagger: 0.15,
  ease: "power2.out",
});

// ---------- 2. Generic scroll reveal for section content ----------
gsap.utils.toArray(".reveal").forEach((el) => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
    },
  });
});

// ---------- 3. Signature pipeline animation ----------
// The "packet" (a command) travels left to right across the 3 stage cards,
// pausing briefly at each one, then gets stamped with a final verdict.
const packet = document.getElementById("packet");
const stages = gsap.utils.toArray(".pipeline-stage");

if (packet && stages.length === 3) {
  const track = document.querySelector(".pipeline-track");

  // Position targets: roughly the horizontal center of each stage card
  function stageCenterX(stageEl) {
    const trackRect = track.getBoundingClientRect();
    const stageRect = stageEl.getBoundingClientRect();
    return stageRect.left - trackRect.left + stageRect.width / 2 - packet.offsetWidth / 2;
  }

  const pipelineTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".pipeline-track",
      start: "top 70%",
      once: true, // play once when scrolled into view — not tied to scroll position
    },
  });

  pipelineTimeline
    .set(packet, { x: () => stageCenterX(stages[0]), opacity: 1 })
    .to(stages[0], { borderColor: "#ff6b6b", duration: 0.3 })
    .to(packet, { x: () => stageCenterX(stages[1]), duration: 0.9, ease: "power1.inOut" }, "+=0.3")
    .to(stages[0], { borderColor: "#232838", duration: 0.3 }, "<")
    .to(stages[1], { borderColor: "#ffb454", duration: 0.3 })
    .to(packet, { x: () => stageCenterX(stages[2]), duration: 0.9, ease: "power1.inOut" }, "+=0.3")
    .to(stages[1], { borderColor: "#232838", duration: 0.3 }, "<")
    .to(stages[2], { borderColor: "#ff6b6b", duration: 0.3 })
    .to(packet, {
      backgroundColor: "rgba(255,107,107,0.15)",
      duration: 0.3,
      onComplete: () => { packet.textContent = "🛑 BLOCK"; },
    });
}


