// Theme Toggle Logic
const themeToggleBtn = document.getElementById('themeToggleBtn');
const htmlElement = document.documentElement;

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        htmlElement.setAttribute('data-theme', 'light');
        themeToggleBtn.textContent = '🌙 Dark Mode';
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
        themeToggleBtn.textContent = '☀️ Light Mode';
    }
});

// Real-time Search Logic
const searchInput = document.getElementById('searchInput');
const lectureGrid = document.getElementById('lectureGrid');
const cards = lectureGrid.getElementsByClassName('card');

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    
    Array.from(cards).forEach(card => {
        const titleText = card.getAttribute('data-title');
        if (titleText.includes(query)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
});
