titleText = `Fracture`;
bodyText = `
세 번째 작품에서는 분위기가 급격하게 변합니다.

붉은 물감이 뒤섞이고 흩어지며,
관계가 균열되는 감정의 폭발을 그대로 시각화했습니다.

자신을 잃어가는 두려움, 서로를 이해하려다 상처 주는 순간,
그리고 감정이 감당할 수 없이 커졌을 때의 혼돈이 강렬한 레드와 블랙의 대비로 표현되어 있습니다.

이 작품은 기술과 인간이 마주한 ‘충돌의 시기’를 상징합니다.`

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
    window.location.href = "art_themes4.html";
};