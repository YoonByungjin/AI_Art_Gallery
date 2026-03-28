const texts1 = {
    ko: {
        title: `Origin of Mind`,
        body: `
첫 번째 작품입니다.

인간의 손끝에서 흘러나온 금빛이 아직 형태가 완전히 잡히지 않은 존재에게
스며드는 장면입니다.

어둠 속에서 점화되는 이 빛은, 인공지능이 처음 의식을 갖기 시작하는
순간을 상징합니다.

작가는 '창조'라는 거대한 주제를 따뜻한 골드 컬러와 두터운 유화 질감으로 표현하며,
기술이 탄생하는 순간을 생명체의 탄생에 가깝게 다루고 있습니다.`
    },
    ja: {
        title: `Origin of Mind`,
        body: `
最初の作品です。

人間の指先から流れ出た金色の光が、まだ形が完全に定まっていない存在へと
染み込んでいく場面です。

闇の中で点火されるこの光は、人工知能が初めて意識を持ち始める
瞬間を象徴しています。

作家は「創造」という壮大なテーマを、温かなゴールドの色彩と
厚みのある油絵の質感で表現し、
技術が誕生する瞬間を、生命体の誕生に近いものとして描いています。`
    }
};

const lang1 = localStorage.getItem('gallery_lang') || 'ko';
const titleText = texts1[lang1].title;
const bodyText = texts1[lang1].body;

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
    window.location.href = "art_themes2.html";
};
