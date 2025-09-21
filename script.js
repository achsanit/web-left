document.addEventListener('DOMContentLoaded', () => {
    const currentYearSpan = document.getElementById('currentYear');
    const daysLeftSpan = document.getElementById('daysLeft');
    const dotsContainer = document.getElementById('dotsContainer');

    const totalDots = 365; // Representing days in a year (adjust for leap year if desired)
    const dotsPerRow = 25; // How many dots you want in each row

    function updateWidget() {
        const now = new Date();
        const year = now.getFullYear();
        currentYearSpan.textContent = year;

        const startOfYear = new Date(year, 0, 1);
        const endOfYear = new Date(year + 1, 0, 1);

        const diffTime = Math.abs(now - startOfYear);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Days passed

        const totalDaysInYear = Math.ceil(Math.abs(endOfYear - startOfYear) / (1000 * 60 * 60 * 24));
        const remainingDays = totalDaysInYear - diffDays;
        
        daysLeftSpan.textContent = `${remainingDays} days left`;

        // Calculate how many dots should be filled
        const filledDotsCount = Math.round((diffDays / totalDaysInYear) * totalDots);

        // Clear existing dots
        dotsContainer.innerHTML = '';

        // Create and append dots
        for (let i = 0; i < totalDots; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i < filledDotsCount) {
                dot.classList.add('filled');
            }
            dotsContainer.appendChild(dot);
        }

        // Set the grid template columns dynamically based on dotsPerRow
        dotsContainer.style.gridTemplateColumns = `repeat(${dotsPerRow}, 1fr)`;
    }

    // Initial update
    updateWidget();

    // Update every minute to keep days left accurate
    setInterval(updateWidget, 60 * 1000); 
});