function roundChange() {
    fetch(`https://hack-box.vercel.app/degenGambling/setRound/${document.getElementById("roundInput").value}`);
}

async function roundStart() {
    await fetch(`https://hack-box.vercel.app/degenGambling/startRound`).then(data => {
        data.json().then(response => {
            console.log(response);
        });
    });
}

function submitBets() {
    c1 = (document.getElementById("cb1").checked ? 1 : 0);
    c2 = (document.getElementById("cb2").checked ? 1 : 0);
    c3 = (document.getElementById("cb3").checked ? 1 : 0);
    c4 = (document.getElementById("cb4").checked ? 1 : 0);
    c5 = (document.getElementById("cb5").checked ? 1 : 0);
    c6 = (document.getElementById("cb6").checked ? 1 : 0);
    // console.log(`https://hack-box.vercel.app/degenGambling/betResults/${c1},${c2},${c3},${c4},${c5},${c6}`);
    fetch(`https://hack-box.vercel.app/degenGambling/betResults/${c1},${c2},${c3},${c4},${c5},${c6}`);
}

function giveMoney() {
    user = document.getElementById("whoTo").value;
    cash = document.getElementById("howMuch").value;
    console.log(`https://hack-box.vercel.app/degenGambling/giveMoney/${user},${cash}`);
    fetch(`https://hack-box.vercel.app/degenGambling/giveMoney/${user},${cash}`);
}