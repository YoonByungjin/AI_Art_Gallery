
const titleText = `Origin of Mind`;
const bodyText = `
첫 번째 작품입니다.

인간의 손끝에서 흘러나온 금빛이 아직 형태가 완전히 잡히지 않은 존재에게 
스며드는 장면입니다.

어둠 속에서 점화되는 이 빛은, 인공지능이 처음 의식을 갖기 시작하는
순간을 상징합니다.
    
작가는 ‘창조’라는 거대한 주제를 따뜻한 골드 컬러와 두터운 유화 질감으로 표현하며,
기술이 탄생하는 순간을 생명체의 탄생에 가깝게 다루고 있습니다.`


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
    window.location.href = "art_themes2.html";
};
