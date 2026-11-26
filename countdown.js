// JavaScript Document
const eventDatum = new Date("2027-06-12T16:00:00+02:00").getTime();

const countdownIntervall = setInterval(() => {
    const jetzt = new Date().getTime();
    const abstand = eventDatum - jetzt;

    if (abstand <= 0) {
        clearInterval(countdownIntervall);

        document.getElementById("countdown").innerHTML =
            "<p>Die Premiere beginnt – viel Spaß!</p>";

        return;
    }

    const tage = Math.floor(abstand / (1000 * 60 * 60 * 24));
    const stunden = Math.floor((abstand / (1000 * 60 * 60)) % 24);
    const minuten = Math.floor((abstand / (1000 * 60)) % 60);
    const sekunden = Math.floor((abstand / 1000) % 60);

    document.getElementById("tage").textContent = tage;
    document.getElementById("stunden").textContent =
        String(stunden).padStart(2, "0");
    document.getElementById("minuten").textContent =
        String(minuten).padStart(2, "0");
    document.getElementById("sekunden").textContent =
        String(sekunden).padStart(2, "0");

}, 1000);
