// 공통 타이핑 함수 — art_theme1~4.js, artist_introduction.js 에서 공유
function typeWriter(targetId, text, speed = 50, callback = null) {
    let i = 0;
    const target = document.getElementById(targetId);

    function typing() {
        if (i < text.length) {
            target.innerHTML += text[i];
            i++;
            setTimeout(typing, speed);
        } else {
            if (callback) callback();
        }
    }

    typing();
}
