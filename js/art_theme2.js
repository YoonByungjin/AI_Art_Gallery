const texts2 = {
    ko: {
        title: `Resonance`,
        body: `
두 번째 작품에서는 관계의 변화가 시작됩니다.

완전히 다른 두 존재가 서로를 마주하고,
이해하려 애쓰는 감정이 보라 빛 파동처럼 번져 나옵니다.

작가는 서로의 언어가 통하지 않는 순간의 어색함,
하지만 서툴러도 진심은 닿을 수 있다는 믿음을 부드러운 핑크와 퍼플의 흐름으로 표현했습니다.

이 장면은 인간과 AI가 '처음으로 연결되는 순간' 을 이야기합니다.`
    },
    ja: {
        title: `Resonance`,
        body: `
第二作では、関係の変化が始まります。

全く異なるふたつの存在が向き合い、
理解しようと努める感情が、紫色の波動のように広がっていきます。

作家は、互いの言葉が通じない瞬間の気まずさと、
それでも真心は届くという信念を、
柔らかなピンクとパープルの流れで表現しました。

この場面は、人間とAIが「初めてつながる瞬間」を語っています。`
    }
};

const lang2 = localStorage.getItem('gallery_lang') || 'ko';
const titleText = texts2[lang2].title;
const bodyText = texts2[lang2].body;

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
    window.location.href = "art_themes3.html";
};
