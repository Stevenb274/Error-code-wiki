alert("Theme switch loaded!");
document$.subscribe(function () {
    const theme = document.querySelector('meta[name="special_theme"]');
    if (theme) {
        alert("Custom theme detected!");
        document.body.classList.add("special-theme");
    }
});