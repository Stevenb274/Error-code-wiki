document$.subscribe(function () {
    const locked = document.querySelector('meta[name="page_locked"]');
    if (locked) {
        const message = document.createElement('div');
        message.innerHTML = "<h1>Bro</h1><h2>It literally told you that this page is locked, stop trying :c</h2>";
        message.style.position = "fixed";
        message.style.top = "50%";
        message.style.left = "50%";
        message.style.transform = "translate(-50%, -50%)";
        message.style.fontFamily = "sans-serif";
        document.body.innerHTML = "";
        document.body.appendChild(message);

        setTimeout(() => window.location.href = "/Error-code-wiki/internal/page_locked/",10);
    }
});