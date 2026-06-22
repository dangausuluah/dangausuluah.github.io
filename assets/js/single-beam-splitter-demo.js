document.addEventListener("DOMContentLoaded", () => {
  const demos = document.querySelectorAll("[data-bs-demo]");

  demos.forEach((demo) => {
    const slider = demo.querySelector("[data-t-slider]");
    const tValue = demo.querySelector("[data-t-value]");
    const pT = demo.querySelector("[data-p-t]");
    const pR = demo.querySelector("[data-p-r]");
    const countTEl = demo.querySelector("[data-count-t]");
    const countREl = demo.querySelector("[data-count-r]");
    const resultEl = demo.querySelector("[data-result]");
    const photon = demo.querySelector("[data-photon]");
    const detectorT = demo.querySelector('[data-detector="T"]');
    const detectorR = demo.querySelector('[data-detector="R"]');

    const animateBtn = demo.querySelector("[data-animate-one]");
    const manyBtn = demo.querySelector("[data-run-many]");
    const resetBtn = demo.querySelector("[data-reset]");

    let countT = 0;
    let countR = 0;
    let isAnimating = false;

    function getT() {
      return Number(slider.value) / 100;
    }

    function updateDisplay() {
      const T = getT();
      const R = 1 - T;

      tValue.textContent = Math.round(T * 100);
      pT.textContent = `${Math.round(T * 100)}%`;
      pR.textContent = `${Math.round(R * 100)}%`;
    }

    function sampleDetector() {
      const T = getT();
      return Math.random() < T ? "T" : "R";
    }

    function addCount(detector) {
      if (detector === "T") {
        countT += 1;
      } else {
        countR += 1;
      }

      countTEl.textContent = countT;
      countREl.textContent = countR;
    }

    function flashDetector(detector) {
      const el = detector === "T" ? detectorT : detectorR;
      el.classList.add("active");

      window.setTimeout(() => {
        el.classList.remove("active");
      }, 650);
    }

    function setPhoton(x, y, visible = true) {
      photon.setAttribute("cx", x);
      photon.setAttribute("cy", y);
      photon.style.opacity = visible ? "1" : "0";
    }

    function animatePhotonAlong(points, done) {
      const duration = 900;
      const start = performance.now();

      function interpolate(p0, p1, u) {
        return {
          x: p0.x + (p1.x - p0.x) * u,
          y: p0.y + (p1.y - p0.y) * u,
        };
      }

      function positionAt(t) {
        const segments = points.length - 1;
        const scaled = t * segments;
        const index = Math.min(Math.floor(scaled), segments - 1);
        const localT = scaled - index;
        return interpolate(points[index], points[index + 1], localT);
      }

      function step(now) {
        const t = Math.min((now - start) / duration, 1);
        const pos = positionAt(t);

        setPhoton(pos.x, pos.y, true);

        if (t < 1) {
          requestAnimationFrame(step);
        } else {
          done();
        }
      }

      requestAnimationFrame(step);
    }

    function animateOnePhoton() {
      if (isAnimating) return;

      isAnimating = true;
      animateBtn.disabled = true;
      manyBtn.disabled = true;

      detectorT.classList.remove("active");
      detectorR.classList.remove("active");

      resultEl.textContent = "Foton dikirim menuju beam splitter...";
      setPhoton(90, 200, true);

      const detector = sampleDetector();

      const pathToBS = [
        { x: 90, y: 200 },
        { x: 310, y: 200 },
        { x: 360, y: 200 },
      ];

      animatePhotonAlong(pathToBS, () => {
        resultEl.textContent =
          "Di beam splitter, peluang hasil ditentukan oleh T dan R. Detektor akan klik sesuai Born rule.";

        window.setTimeout(() => {
          let finalPath;

          if (detector === "T") {
            finalPath = [
              { x: 360, y: 200 },
              { x: 520, y: 200 },
              { x: 750, y: 200 },
            ];
          } else {
            finalPath = [
              { x: 360, y: 200 },
              { x: 360, y: 55 },
              { x: 750, y: 55 },
            ];
          }

          animatePhotonAlong(finalPath, () => {
            addCount(detector);
            flashDetector(detector);

            const T = Math.round(getT() * 100);
            const R = 100 - T;

            resultEl.textContent =
              detector === "T"
                ? `Klik di detektor T. Pada rasio ini, peluang T = ${T}% dan peluang R = ${R}%.`
                : `Klik di detektor R. Pada rasio ini, peluang T = ${T}% dan peluang R = ${R}%.`;

            window.setTimeout(() => {
              setPhoton(90, 200, true);
              isAnimating = false;
              animateBtn.disabled = false;
              manyBtn.disabled = false;
            }, 500);
          });
        }, 450);
      });
    }

    function runMany(n) {
      for (let i = 0; i < n; i += 1) {
        const detector = sampleDetector();
        addCount(detector);
      }

      const total = countT + countR;
      const percentT = total > 0 ? Math.round((countT / total) * 100) : 0;
      const percentR = total > 0 ? Math.round((countR / total) * 100) : 0;

      resultEl.textContent =
        `Setelah ${total} percobaan: T muncul sekitar ${percentT}% dan R sekitar ${percentR}%. ` +
        `Jika percobaan diperbanyak, hasil statistik makin mendekati peluang teoritis.`;
    }

    function reset() {
      countT = 0;
      countR = 0;
      countTEl.textContent = "0";
      countREl.textContent = "0";
      resultEl.textContent =
        "Satu foton akan terdeteksi pada salah satu detektor. Setelah banyak percobaan, jumlah klik akan mendekati peluang T dan R.";
      setPhoton(90, 200, true);
      detectorT.classList.remove("active");
      detectorR.classList.remove("active");
    }

    slider.addEventListener("input", updateDisplay);
    animateBtn.addEventListener("click", animateOnePhoton);
    manyBtn.addEventListener("click", () => runMany(100));
    resetBtn.addEventListener("click", reset);

    updateDisplay();
    reset();
  });
});
