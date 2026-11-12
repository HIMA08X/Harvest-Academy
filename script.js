// Dynamic Custom Cursor Logic
const dot = document.getElementById('cursor-dot');
const follower = document.getElementById('cursor-follower');
const interactives = document.querySelectorAll('.interactive');

let posX = 0, posY = 0;
let mouseX = 0, mouseY = 0;

// Mouse Tracking
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
});

// Smooth Cursor Animation Frame
function animateFollower() {
    posX += (mouseX - posX) * 0.15;
    posY += (mouseY - posY) * 0.15;

    follower.style.left = `${posX}px`;
    follower.style.top = `${posY}px`;

    requestAnimationFrame(animateFollower);
}
animateFollower();

// Expand Cursor on Hovering Interactive Elements
interactives.forEach(el => {
    el.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-hover');
    });
});