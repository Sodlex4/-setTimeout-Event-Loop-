document.getElementById("startBtn").addEventListener("click", () => {
  const log = document.getElementById("log");
  log.innerHTML = ""; // Clear previous logs

  const logMessage = (msg) => {
    const p = document.createElement("p");
    p.textContent = msg;
    log.appendChild(p);
  };

  logMessage("🏁 Starting warm-up...");
  
  setTimeout(() => {
    logMessage("🔥 Warm-up complete! Time to lift heavy!");
  }, 3000);

  logMessage("⏳ Please wait while we get your warm-up ready...");
});

