document.addEventListener('DOMContentLoaded', () => {
    const currentYearSpan = document.getElementById('currentYear');
    const daysLeftSpan = document.getElementById('daysLeft');
    const dotsContainer = document.getElementById('dotsContainer');

    const startDate = new Date(2025, 3, 1, 0, 0, 0);
    const endDate = new Date(2026, 2, 31, 0, 0, 0);

    const dotsPerRow = 35; // How many dots you want in each row

    function updateWidget() {
        const now = new Date();
        // console.log("current date: " + now);
        // console.log("startDate: " + startDate);

        // For info display
        currentYearSpan.textContent = "Work in PAC";

        // Total days in range
        const totalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
        // console.log("totalDays: " + totalDays);

        // Days passed since startDate
        const diffDays = Math.max(0, Math.ceil((now - startDate) / (1000 * 60 * 60 * 24)));
        // console.log("diffdays: " + diffDays);

        // Remaining days (clamp to 0)
        const remainingDays = Math.max(0, totalDays - diffDays);

        // console.log("remainingDays: " + remainingDays);
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
