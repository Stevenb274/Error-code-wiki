document$.subscribe(function () {
    const theme = document.querySelector('meta[name="special_theme"]');
    if (theme) {
        document.body.classList.add("special-theme");
    }
});