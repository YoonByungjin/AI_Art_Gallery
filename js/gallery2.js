
const nextBtn = document.getElementById('nextBtn');


setTimeout(() => {
    nextBtn.classList.add('active');
}, 60000);


nextBtn.addEventListener('click', () => {
    window.location.href = "gallery3.html";
});
