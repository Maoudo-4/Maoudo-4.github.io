/* =========================================================
   Network topology background animation (hero section)
   Nodes cluster toward the center and drift slowly, connected
   by lines when close enough — a nod to network topology.
   ========================================================= */
(function () {
  const canvas = document.getElementById('netcanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const CONNECT_DISTANCE = 230;   // how close nodes must be to draw a line
  const NODE_DENSITY = 4200;      // lower = more nodes
  const NODE_RADIUS = 2.1;

  let w, h, nodes;

  // Triangular distribution helper: biases values toward the center of [0,1]
  function centerBiased() {
    return (Math.random() + Math.random() + Math.random()) / 3;
  }

function resize() {
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
    const count = Math.max(24, Math.min(60, Math.floor((w * h) / NODE_DENSITY)));
    nodes = Array.from({ length: count }, () => ({
      x: centerBiased() * w,
      y: centerBiased() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3
    }));
  }

  function step() {
    ctx.clearRect(0, 0, w, h);

    for (const n of nodes) {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;
    }

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECT_DISTANCE) {
          ctx.strokeStyle = `rgba(124,92,252,${(1 - dist / CONNECT_DISTANCE) * 0.32})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    for (const n of nodes) {
      ctx.beginPath();
      ctx.fillStyle = 'rgba(51,225,178,0.75)';
      ctx.shadowColor = 'rgba(51,225,178,0.9)';
      ctx.shadowBlur = 6;
      ctx.arc(n.x, n.y, NODE_RADIUS, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    requestAnimationFrame(step);
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.addEventListener('resize', resize);
  resize();
  if (!reduceMotion) requestAnimationFrame(step);
})();
