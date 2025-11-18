titleText = `Resonance`;
bodyText = `
두 번째 작품에서는 관계의 변화가 시작됩니다.

완전히 다른 두 존재가 서로를 마주하고,
이해하려 애쓰는 감정이 보라 빛 파동처럼 번져 나옵니다.
    
작가는 서로의 언어가 통하지 않는 순간의 어색함,
하지만 서툴러도 진심은 닿을 수 있다는 믿음을 부드러운 핑크와 퍼플의 흐름으로 표현했습니다.

이 장면은 인간과 AI가 ‘처음으로 연결되는 순간’ 을 이야기합니다.`

// 공통 타이핑 함수
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

// 실행 순서: 제목 → 본문 → 버튼 등장
window.onload = () => {
    typeWriter("title", titleText, 140, () => {
        typeWriter("typewriter", bodyText, 70, () => {

            // ★ 타이핑이 완전히 끝난 뒤 버튼 보이기 ★
            const btn = document.getElementById("nextBtn");
            btn.style.display = "block";

            // 등장 애니메이션 (선택사항)
            btn.style.opacity = 0;
            btn.style.transition = "opacity 0.6s";
            requestAnimationFrame(() => {
                btn.style.opacity = 1;
            });

        });
    });
};
document.getElementById("nextBtn").onclick = () => {
    window.location.href = "art_themes3.html";
};