
const sitzplaetze = document.querySelectorAll(".sitzplatz");
const statusText = document.getElementById("sitzplan-status");
const sitzplatzFeld = document.getElementById("sitzplaetze");

const ausgewaehltePlaetze = new Set();

function auswahlAktualisieren() {
    const plaetze = Array.from(ausgewaehltePlaetze).sort();

    if (plaetze.length === 0) {
        statusText.textContent = "Noch keine Plätze ausgewählt.";
        sitzplatzFeld.value = "Noch keine Plätze ausgewählt";
        return;
    }

    statusText.textContent =
        plaetze.length === 1
            ? `Du hast 1 Platz ausgewählt: ${plaetze.join(", ")}`
            : `Du hast ${plaetze.length} Plätze ausgewählt: ${plaetze.join(", ")}`;

    sitzplatzFeld.value = plaetze.join(", ");
}

sitzplaetze.forEach((platz) => {
    platz.addEventListener("click", () => {
        const platzName = platz.dataset.seat;

        if (ausgewaehltePlaetze.has(platzName)) {
            ausgewaehltePlaetze.delete(platzName);
            platz.setAttribute("aria-pressed", "false");
        } else {
            ausgewaehltePlaetze.add(platzName);
            platz.setAttribute("aria-pressed", "true");
        }

        auswahlAktualisieren();
    });
});
// JavaScript Document