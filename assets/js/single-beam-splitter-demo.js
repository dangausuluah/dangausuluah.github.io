function initSingleBeamSplitterDemos() {
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
    const pathT = demo.querySelectorAll("[data-path-t]");
    const pathR = demo.querySelectorAll("[data-path-r]");

    const animateBtn = demo.querySelector("[data-animate-one]");
    const manyBtn = demo.querySelector("[data-run-many]");
    const resetBtn = demo.querySelector("[data-reset]");

    let countT = 0;
    let countR = 0;
    let isAnimating = false;

    function getT() {
      return Number(slider.value) / 100;
    }

    function getR() {
      return 1 - getT();
    }

    function setPhoton(x, y, visible = true) {
      photon.setAttribute("cx", x);
      photon.setAttribute("cy", y);
      photon.style.opacity = visible ? "1" : "0";
    }

    function updateBeamVisuals() {
      const T = getT();
      const R = getR();

      tValue.textContent = Math.round(T * 100);
      pT.textContent = `${Math.round(T * 100)}%`;
      pR.textContent = `${Math.round(R * 100)}%`;

      const tOpacity = 0.08 + 0.92 * T;
      const rOpacity = 0.08 + 0.92 * R;

      const tWidth = 2 + 5 * T;
      const rWidth = 2 + 5 * R;

      pathT.forEach((el) => {
        el.style.opacity = tOpacity;
        el.style.strokeWidth = `${tWidth}px`;
      });

      pathR.forEach((el) => {
        el.style.opacity = rOpacity;
        el.style.strokeWidth = `${rWidth}px`;
      });
    }

    function sampleDetector() {
      return Math.random() < getT() ? "T" : "R";
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

      setTimeout(() => {
        el.classList.remove("active");
      }, 650);
    }

    function interpolate(p0, p1, u) {
      return {
        x: p0.x + (p1.x - p0.x) * u,
        y: p0.y + (p1.y - p0.y) * u,
      };
    }

    function animatePhotonAlong(points, duration, done) {
      const start = performance.now();

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

      const detector = sampleDetector();

      resultEl.textContent = "Foton bergerak menuju beam splitter...";
      setPhoton(65, 220, true);

      const pathToBS = [
        { x: 65, y: 220 },
        { x: 180, y: 220 },
        { x: 280, y: 220 },
        { x: 330, y: 220 },
      ];

      animatePhotonAlong(pathToBS, 700, () => {
        resultEl.textContent = "Di beam splitter, peluang dibagi menurut T dan R...";

        setTimeout(() => {
          let finalPath;
          if (detector === "T") {
            finalPath = [
              { x: 330, y: 220 },
              { x: 380, y: 220 },
              { x: 520, y: 220 },
              { x: 700, y: 220 },
            ];
          } else {
            finalPath = [
              { x: 330, y: 220 },
              { x: 330, y: 170 },
              { x: 330, y: 70 },
              { x: 550, y: 70 },
            ];
          }

          animatePhotonAlong(finalPath, 900, () => {
            addCount(detector);
            flashDetector(detector);

            const T = Math.round(getT() * 100);
            const R = 100 - T;

            resultEl.textContent =
              detector === "T"
                ? `Klik di detektor T. Peluang teoritis: T = ${T}%, R = ${R}%.`
                : `Klik di detektor R. Peluang teoritis: T = ${T}%, R = ${R}%.`;

            setTimeout(() => {
              setPhoton(65, 220, true);
              isAnimating = false;
              animateBtn.disabled = false;
              manyBtn.disabled = false;
            }, 450);
          });
        }, 250);
      });
    }

    function runMany(n) {
      if (isAnimating) return;

      for (let i = 0; i < n; i += 1) {
        const detector = sampleDetector();
        addCount(detector);
      }

      const total = countT + countR;
      const percentT = total > 0 ? Math.round((countT / total) * 100) : 0;
      const percentR = total > 0 ? Math.round((countR / total) * 100) : 0;

      resultEl.textContent =
        `Setelah ${total} percobaan: T ≈ ${percentT}%, R ≈ ${percentR}%. ` +
        `Jika percobaan diperbanyak, hasil akan mendekati Born rule.`;
    }

    function reset() {
      countT = 0;
      countR = 0;
      countTEl.textContent = "0";
      countREl.textContent = "0";
      resultEl.textContent =
        "Satu foton akan terdeteksi pada salah satu detektor. Setelah banyak percobaan, jumlah klik akan mendekati peluang T dan R.";
      detectorT.classList.remove("active");
      detectorR.classList.remove("active");
      setPhoton(65, 220, true);
      updateBeamVisuals();
    }

    slider.addEventListener("input", updateBeamVisuals);
    animateBtn.addEventListener("click", animateOnePhoton);
    manyBtn.addEventListener("click", () => runMany(100));
    resetBtn.addEventListener("click", reset);

    updateBeamVisuals();
    reset();
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSingleBeamSplitterDemos);
} else {
  initSingleBeamSplitterDemos();
}
