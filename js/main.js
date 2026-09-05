/* =========================================================
    General page behavior: footer year + hero terminal typing
   ========================================================= */
document.getElementById('year').textContent = new Date().getFullYear();

const terminalLines = [
  "$ connect --target maoudo-4",
  "handshake établi ✓",
  "proprio: Maoudo DIAW",
  "statut : étudiant réseaux → futur analyste SOC",
  "innovation: fondateur de la plateforme Intelligux"
];

const terminalEl = document.getElementById('terminal-text');
let lineIndex = 0;
let charIndex = 0;

function typeNextChar() {
  const current = terminalLines[lineIndex];

  if (charIndex <= current.length) {
    terminalEl.textContent = current.slice(0, charIndex);
    charIndex++;
    setTimeout(typeNextChar, 26);
  } else {
    setTimeout(() => {
      lineIndex++;
      charIndex = 0;
      
      // Si on a fini toutes les lignes, on remet à zéro pour boucler 🚀
      if (lineIndex >= terminalLines.length) {
        lineIndex = 0;
        terminalEl.textContent = ""; // Nettoie l'écran entre les boucles si tu veux
      }
      
      typeNextChar();
    }, lineIndex === 0 ? 2000 : 650); // Petite pause plus longue à la fin de la boucle complète
  }
}

typeNextChar();