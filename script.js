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

// Professional Popup Modal System for Upcoming Lectures
const modalHTML = `
<div id="lectureModal" class="modal-overlay" style="display: none;">
    <div class="modal-box">
        <div class="modal-icon">⏳</div>
        <h3>Lecture Coming Soon!</h3>
        <p id="modalText">Yeh lecture abhi under process hai aur jald hi upload kar diya jayega. Stay tuned!</p>
        <button id="modalCloseBtn" class="modal-btn">Theek hai (Got it)</button>
    </div>
</div>

<style>
.modal-overlay {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    display: flex; justify-content: center; align-items: center;
    z-index: 1000;
}
.modal-box {
    background-color: var(--card-bg, #161b22);
    border: 1px solid var(--border-color, #30363d);
    color: var(--text-color, #c9d1d9);
    padding: 30px; border-radius: 12px;
    max-width: 400px; width: 90%; text-align: center;
    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
    animation: fadeIn 0.3s ease;
}
.modal-icon { font-size: 40px; margin-bottom: 10px; }
.modal-box h3 { margin: 0 0 10px 0; color: var(--accent-color, #58a6ff); font-size: 22px; }
.modal-box p { font-size: 14px; color: var(--text-muted, #8b949e); margin-bottom: 20px; line-height: 1.5; }
.modal-btn {
    background-color: var(--accent-color, #58a6ff);
    color: white; border: none; padding: 10px 20px;
    border-radius: 6px; font-weight: bold; cursor: pointer;
    transition: opacity 0.2s;
}
.modal-btn:hover { opacity: 0.85; }
@keyframes fadeIn {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
}
</style>
`;

document.body.insertAdjacentHTML('beforeend', modalHTML);

const modal = document.getElementById('lectureModal');
const closeBtn = document.getElementById('modalCloseBtn');
const modalText = document.getElementById('modalText');

document.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (card && card.classList.contains('upcoming-card')) {
        e.preventDefault();
        const lectureTitle = card.getAttribute('data-lecture-name');
        modalText.innerHTML = `<strong>${lectureTitle}</strong> ke notes taiyar kiye ja rahe hain. Waqt ke sath sath yeh lecture yahan upload kar diya jayega!`;
        modal.style.display = 'flex';
    }
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
