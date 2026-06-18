// data-theme is set pre-paint by an inline snippet in each page's <head>.
// This handles the toggle button and keeps icons in sync.
(function () {
    var root = document.documentElement;

    document.addEventListener('click', function (e) {
        var btn = e.target.closest && e.target.closest('.theme-toggle');
        if (!btn) return;
        var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        apply(next);
        try { localStorage.setItem('theme', next); } catch (e) {}
    });

    function apply(t) {
        root.setAttribute('data-theme', t);
        var btns = document.querySelectorAll('.theme-toggle');
        for (var i = 0; i < btns.length; i++) btns[i].textContent = t === 'light' ? '☀' : '🌙';
    }

    document.addEventListener('DOMContentLoaded', function () {
        apply(root.getAttribute('data-theme') || 'dark');
        var y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();
    });
})();
