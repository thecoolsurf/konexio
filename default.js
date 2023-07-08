displayNavigation();
switchCssMedias();

window.addEventListener("resize", switchCssMedias);
window.addEventListener("resize", displayNavigation);

let lastKnownScrollPosition = 0;
let ticking = false;

document.addEventListener("scroll", (event) => {
    lastKnownScrollPosition = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(() => {
            displayNavigation();
            ticking = false;
        });
        ticking = true;
    }
});

document.getElementById("discover").onclick = function () {
    location.href = "https://www.konexio.eu/a-propos.html";
    target = "_blank";
};

document.getElementById("subscribe").onclick = function () {
    location.href = "https://www.konexio.eu/";
    target = "_blank";
};
