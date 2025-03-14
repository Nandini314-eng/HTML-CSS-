// When the page is loaded, start the Holi color effect
window.onload = function() {
    // Animate colors spreading from the "Happy Holi" text
    startHoliEffect();
};

// Holi color effect: colorful dots spreading
function startHoliEffect() {
    let holiEffectContainer = document.getElementById("holiEffect");
    const colors = ["#FF6347", "#FFD700", "#32CD32", "#4B0082", "#FF1493", "#00BFFF"];
    const happyHoliText = document.getElementById("happyHoli");

    happyHoliText.addEventListener("mouseover", function() {
        // Generate random dots when the user hovers over the text
        for (let i = 0; i < 50; i++) {
            const dot = document.createElement("div");
            const size = Math.random() * 20 + 10; // Random size between 10px and 30px
            const color = colors[Math.floor(Math.random() * colors.length)];

            // Set position and style
            dot.style.width = `${size}px`;
            dot.style.height = `${size}px`;
            dot.style.backgroundColor = color;
            dot.style.top = `${Math.random() * 100}%`;
            dot.style.left = `${Math.random() * 100}%`;
            dot.style.setProperty('--x', `${Math.random() * 100 - 50}px`);
            dot.style.setProperty('--y', `${Math.random() * 100 - 50}px`);

            dot.classList.add("dot");
            holiEffectContainer.appendChild(dot);

            // Remove dot after animation to keep it clean
            setTimeout(() => {
                dot.remove();
            }, 3000); // Remove dot after 3 seconds
        }
    });
}
