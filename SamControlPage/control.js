function roundChange() {
    fetch(`https://hack-box.vercel.app/degenGambling/setRound/${document.getElementById("roundInput").value}`);
}

function roundStart() {
    fetch(`https://hack-box.vercel.app/degenGambling/startRound`);
}