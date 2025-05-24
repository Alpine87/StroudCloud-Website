// Create animated background particles
const particlesContainer = document.getElementById('particles');
const particleCount = 35;

for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random size between 10px and 40px
    const size = Math.random() * 80 + 10;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Random position
    const posX = Math.random() * window.innerWidth;
    const posY = Math.random() * window.innerHeight;
    particle.style.left = `${posX}px`;
    particle.style.top = `${posY}px`;
    
    // Random animation delay
    particle.style.animationDelay = `${Math.random() * 2}s`;
    
    // Random opacity
    particle.style.opacity = Math.random() * 0.3 + 0.1;
    
    particlesContainer.appendChild(particle);
}

// Function to update layout based on screen height
function updateLayout() {
    // Mobile-specific adjustments
    if (window.innerWidth <= 768) {
        // Adjust elements as needed for mobile with URL bar
        document.querySelector('.hero h1').style.marginBottom = '0.75rem';
        document.querySelector('.hero p').style.marginBottom = '0.75rem';
    }
}

// Run on load and resize
window.addEventListener('load', updateLayout);
window.addEventListener('resize', updateLayout);
window.addEventListener('orientationchange', updateLayout);