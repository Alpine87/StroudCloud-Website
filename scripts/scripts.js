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
                lampStatus.textContent = "Lamp toggled successfully!";
                showFeedback(feedbackSuccess);
            } else {
                throw new Error("Request failed");
            }
        })
        .catch(() => {
            lampButton.classList.remove("pulse");
            lampStatus.textContent = "Failed to toggle lamp.";
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



