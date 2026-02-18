document$.subscribe(function () {
    const theme = document.querySelector('meta[name="hemorrhage_theme"]');
    if (theme) {
        document.body.classList.add("hemorrhage-theme");
    }
});