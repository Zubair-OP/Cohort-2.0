const icon = document.getElementById("windowsIcon");
const menu = document.getElementById("menuBox");

// Toggle show/hide
icon.addEventListener("click", () => {
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
});

// Hide menu when clicking anywhere else
document.addEventListener("click", (e) => {
    if (!menu.contains(e.target)) {
        menu.style.display = "none";
    }
});

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    let clientX = e.clientX;
    let clientY = e.clientY;
    menu.style.top = clientY + "px";
    menu.style.left = clientX + "px";
    if (menu.style.display === "block") {
        menu.style.display == "none";
    } else {
        menu.style.display = "block";
    }
});