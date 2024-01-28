const CursorDot = document.querySelector("[data-cursor-dot]");
const CursorOutline = document.querySelector("[data-cursor-outline]");
var timeout;

window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;
    CursorDot.style.left = `${posX}px`;
    CursorDot.style.top = `${posY}px`;
    CursorDot.style.display = "block";
    CursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, {
        duration: 600,
        fill: "forwards"
    });
    CursorOutline.style.display = "block";
    function MouseStoped(){
        CursorDot.style.display = "none";
        CursorOutline.style.display = "none";
    }
    clearTimeout(timeout);
    timeout = setTimeout(MouseStoped, 1000);
});
document.addEventListener("mouseout", function () {
    CursorDot.style.display = "none";
    CursorOutline.style.display = "none";
});
