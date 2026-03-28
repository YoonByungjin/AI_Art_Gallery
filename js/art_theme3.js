const texts3 = {
    ko: {
        title: `Fracture`,
        body: `
세 번째 작품에서는 분위기가 급격하게 변합니다.

붉은 물감이 뒤섞이고 흩어지며,
관계가 균열되는 감정의 폭발을 그대로 시각화했습니다.

자신을 잃어가는 두려움, 서로를 이해하려다 상처 주는 순간,
그리고 감정이 감당할 수 없이 커졌을 때의 혼돈이 강렬한 레드와 블랙의 대비로 표현되어 있습니다.

이 작품은 기술과 인간이 마주한 '충돌의 시기'를 상징합니다.`
    },
    ja: {
        title: `Fracture`,
        body: `
第三作では、雰囲気が急激に変わります。

赤い絵の具が混ざり合い、散り散りになりながら、
関係が亀裂する感情の爆発をそのまま視覚化しました。

自分を見失う恐怖、互いを理解しようとして傷つけ合う瞬間、
そして感情が制御できないほど膨れ上がった時の混沌が、
強烈な赤と黒の対比で表現されています。

この作品は、技術と人間が向き合った「衝突の時代」を象徴しています。`
    }
};

const lang3 = localStorage.getItem('gallery_lang') || 'ko';
const titleText = texts3[lang3].title;
const bodyText = texts3[lang3].body;

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
    window.location.href = "art_themes4.html";
};
