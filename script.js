const target_bg = document.querySelector(".target_bg");

const movieRadialBgColor = (e) => {
    const clientX = e.clientX;
    const clientY = e.clientY;

    target_bg.style.background = `radial-gradient(60px at ${clientX}px ${clientY}px, var(--glowcolor), transparent 90%)`;
}


document.addEventListener("mousemove", movieRadialBgColor, { passive : true });