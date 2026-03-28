const texts4 = {
    ko: {
        title: `Symbiosis`,
        body: `
마지막 작품은 앞선 혼돈을 지나 도달한 평온의 장면입니다.

차갑지만 투명한 아이스 블루와 실버의 색감은 정화된 감정과 새로운 단계의 존재를 의미합니다.

두 존재는 더 이상 분리된 개체가 아니라,
서로의 흔적을 품고 하나로 진화한 '새로운 생명체'처럼 보입니다.

작가는 기술과 인간이 대립을 넘어 공존을 선택했을 때,
비로소 탄생하는 조용한 숭고함을 이 작품에 담았습니다.`
    },
    ja: {
        title: `Symbiosis`,
        body: `
最後の作品は、前の混沌を経て辿り着いた、静けさの場面です。

冷たくも透明なアイスブルーとシルバーの色彩は、
浄化された感情と新たな段階の存在を意味しています。

ふたつの存在はもはや分離した個体ではなく、
互いの痕跡を宿してひとつに進化した「新たな生命体」のように見えます。

作家は、技術と人間が対立を越えて共存を選んだとき、
初めて生まれる静かな崇高さを、この作品に込めました。`
    }
};

const lang4 = localStorage.getItem('gallery_lang') || 'ko';
const titleText = texts4[lang4].title;
const bodyText = texts4[lang4].body;

// 실행 순서: 제목 → 본문 → 버튼 등장
window.onload = () => {
    typeWriter("title", titleText, 140, () => {
        typeWriter("typewriter", bodyText, 70, () => {

            const btn = document.getElementById("nextBtn");
            btn.style.display = "block";
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
