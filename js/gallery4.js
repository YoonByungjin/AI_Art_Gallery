
const nextBtn = document.getElementById('nextBtn');


setTimeout(() => {
    nextBtn.classList.add('active');
}, 10000);


nextBtn.addEventListener('click', () => {
    window.location.href = "art_themes1.html";
});
