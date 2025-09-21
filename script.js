document.addEventListener('DOMContentLoaded', () => {
    const currentYearSpan = document.getElementById('currentYear');
    const daysLeftSpan = document.getElementById('daysLeft');
    const dotsContainer = document.getElementById('dotsContainer');

    // ✅ Set your custom start and end dates
    const startDate = new Date("2025-04-01"); // example: Jan 1, 2025
    const endDate = new Date("2026-03-31");   // example: Dec 31, 2025

    const dotsPerRow = 35; // How many dots you want in each row

    function updateWidget() {
        const now = new Date();

        // For info display
        currentYearSpan.textContent = "Work in PAC";

        // Total days in range
        const totalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;

        // Days passed since startDate
        const diffDays = Math.max(0, Math.ceil((now - startDate) / (1000 * 60 * 60 * 24)));

        // Remaining days (clamp to 0)
        const remainingDays = Math.max(0, totalDays - diffDays);
        daysLeftSpan.textContent = `${remainingDays} days left`;

        // Dots logic
        const filledDotsCount = Math.min(totalDays, diffDays);

        // Clear existing dots
        dotsContainer.innerHTML = '';

        // Create dots
        for (let i = 0; i < totalDays; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i < filledDotsCount) {
                dot.classList.add('filled');
            }
            dotsContainer.appendChild(dot);
        }

        // Grid layout
        dotsContainer.style.gridTemplateColumns = `repeat(${dotsPerRow}, 1fr)`;
    }

    // Initial update
    updateWidget();

    // Update every minute
    setInterval(updateWidget, 60 * 1000);
});
