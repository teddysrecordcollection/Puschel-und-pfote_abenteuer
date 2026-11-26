// JavaScript Document
const heroBild = document.querySelector(".hero-bild img");

if (heroBild && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    let letzterFrame = false;

    function parallaxAktualisieren() {
        const bereich = heroBild.getBoundingClientRect();
        const fensterHoehe = window.innerHeight;

        const fortschritt =
            (fensterHoehe - bereich.top) /
            (fensterHoehe + bereich.height);

        const bewegung = (fortschritt - 0.5) * 50;

        heroBild.style.transform =
            `translateY(${bewegung}px) scale(1.08)`;

        letzterFrame = false;
    }

    function scrollHandler() {
        if (!letzterFrame) {
            requestAnimationFrame(parallaxAktualisieren);
            letzterFrame = true;
        }
    }

    window.addEventListener("scroll", scrollHandler, { passive: true });
    window.addEventListener("resize", scrollHandler);

    parallaxAktualisieren();
}