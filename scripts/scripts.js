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

// Confetti effect function
function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff'];
    const confettiCount = 100;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.opacity = Math.random() * 0.8 + 0.2;
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.style.zIndex = '9999';
        confetti.style.pointerEvents = 'none';
        
        // Random animation duration and delay
        const duration = Math.random() * 2 + 2; // 2-4 seconds
        const delay = Math.random() * 2; // 0-2 seconds delay
        
        confetti.style.animation = `fall ${duration}s ${delay}s ease-in forwards`;
        
        document.body.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, (duration + delay) * 1000 + 100);
    }
}

// CSS animation for confetti
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        0% {
            transform: translateY(-100vh) rotate(0deg);
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// Toggle Lamp from QR Code Page

document.addEventListener("DOMContentLoaded", function () {
    const lampButton = document.getElementById("lamp-button");
    const lampStatus = document.getElementById("lamp-status");
    const feedbackSuccess = document.getElementById("feedback-success");
    const feedbackError = document.getElementById("feedback-error");

    if (lampButton) {
        lampButton.addEventListener("click", function () {
            toggleLamp();
        });
    }

    function toggleLamp() {
        // Add visual feedback during request
        lampButton.classList.add("pulse");
        lampStatus.textContent = "Sending request...";

        // Send POST request to webhook
        fetch("https://webhook.stroud.cloud/api/webhook/lamp", {
            method: "POST"
        })
        .then(response => {
            if (response.ok) {
                lampButton.classList.remove("pulse");
                lampStatus.textContent = "Disco mode engaged successfully!";
                showFeedback(feedbackSuccess);
                createConfetti();
            } else {
                throw new Error("Request failed");
            }
        })
        .catch(() => {
            lampButton.classList.remove("pulse");
            lampStatus.textContent = "Request failed.";
            showFeedback(feedbackError);
        });
    }

    function showFeedback(element) {
        element.style.display = "block";
        element.style.opacity = "1";

        setTimeout(() => {
            element.style.opacity = "0";
            setTimeout(() => {
                element.style.display = "none";
            }, 500);
        }, 2000);
    }
});

// Disco Mode from QR Code Page 2

document.addEventListener("DOMContentLoaded", function () {
    const discoButton = document.getElementById("disco-button");
    const discoStatus = document.getElementById("disco-status");
    const feedbackSuccess = document.getElementById("feedback-success");
    const feedbackError = document.getElementById("feedback-error");

    if (discoButton) {
        discoButton.addEventListener("click", function () {
            toggleDisco();
        });
    }

    function toggleDisco() {
        // Add visual feedback during request
        discoButton.classList.add("pulse");
        discoStatus.textContent = "Sending request...";

        // Send POST request to webhook
        fetch("https://webhook.stroud.cloud/api/webhook/disco", {
            method: "POST"
        })
        .then(response => {
            if (response.ok) {
                discoButton.classList.remove("pulse");
                discoStatus.textContent = "Disco Mode engaged!";
                showFeedback(feedbackSuccess);
                createConfetti();
            } else {
                throw new Error("Request failed");
            }
        })
        .catch(() => {
            discoButton.classList.remove("pulse");
            discoStatus.textContent = "Failed to engage Disco Mode.";
            showFeedback(feedbackError);
        });
    }

    function showFeedback(element) {
        element.style.display = "block";
        element.style.opacity = "1";

        setTimeout(() => {
            element.style.opacity = "0";
            setTimeout(() => {
                element.style.display = "none";
            }, 500);
        }, 2000);
    }
});