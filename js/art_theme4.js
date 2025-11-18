titleText = `Symbiosis`;
bodyText = `
마지막 작품은 앞선 혼돈을 지나 도달한 평온의 장면입니다.

차갑지만 투명한 아이스 블루와 실버의 색감은 정화된 감정과 새로운 단계의 존재를 의미합니다.

두 존재는 더 이상 분리된 개체가 아니라,
서로의 흔적을 품고 하나로 진화한 ‘새로운 생명체’처럼 보입니다.

작가는 기술과 인간이 대립을 넘어 공존을 선택했을 때,
비로소 탄생하는 조용한 숭고함을 이 작품에 담았습니다.`;

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
    window.location.href = "artist_introduction.html";
};