let openedSidenav = false;
function openSidenav() {
    const display = openedSidenav ? "none" : "inline";
    const transforValue = openedSidenav ? "translateX(100vw)" : "translateX(0px)";
    document.getElementById("responsive").getElementsByClassName("sidenav")[0].style.transform = transforValue;
    document.getElementById("responsive").getElementsByClassName("overlay")[0].style.display = display;
    openedSidenav = !openedSidenav;
}

//# sourceMappingURL=index.816e7b21.js.map
