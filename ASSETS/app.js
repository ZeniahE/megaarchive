function randomFlicker() {
  const bars = document.querySelectorAll(".light-bar");
  setInterval(() => {
    bars.forEach((bar) => {
      if (Math.random() > 0.7) {
        // Randomly trigger flicker
        bar.classList.add("flicker-effect");
        setTimeout(() => {
          bar.classList.remove("flicker-effect");
        }, 200);
      }
    });
  }, 500);
}

randomFlicker();
