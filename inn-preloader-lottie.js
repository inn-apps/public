// Create the overlay and Lottie container with CSS styles
const overlay = document.createElement('div');
overlay.id = 'loader';
overlay.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 999;
`;

const lottieContainer = document.createElement('div');
lottieContainer.id = 'lottieContainer';
lottieContainer.style.cssText = `
    max-width: 100%;
    max-height: 100%;
    display: none; // Initially hidden
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

// Append the elements to the body
document.body.appendChild(overlay);
document.body.appendChild(lottieContainer);

// Function to hide the overlay and display the Lottie animation
function hideOverlay() {
    overlay.style.display = 'none';
    lottieContainer.style.display = 'block';
}

// Load the Lottie animation
const animationData = {
    container: lottieContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://raw.githubusercontent.com/inn-apps/public/main/inn-loader-lottie.json',
};

let anim;
try {
    anim = lottie.loadAnimation(animationData);
} catch (error) {
    console.error('Lottie animation failed to load:', error);
}

// Replace with your actual loading code
// For example, wait for window load event
window.addEventListener('load');
