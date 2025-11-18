/* ../js/creation_process.js */
// 페이지 새로고침시 스크롤 초기화
if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
}

/* 애니메이션 실행 함수 */
/* DOMContaentLoaded = 페이지가 로딩되면 함수 실행 */
document.addEventListener("DOMContentLoaded", () => {
  // 1. 애니메이션을 적용할 모든 '.bubble-container' 요소를 선택합니다.
  //    (HTML에 작성하신 버블들이 모두 선택됩니다)
  const bubbles = document.querySelectorAll(".bubble-container");

  // 2. IntersectionObserver 콜백 함수 정의
  //    이 함수는 관찰 대상(bubble)이 화면에 나타나거나 사라질 때 호출됩니다.
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      // 3. 'entry.isIntersecting'은 요소가 지금 화면에 보이는지 여부(true/false)입니다.
      if (entry.isIntersecting) {
        // 4. 화면에 보이면, CSS에서 정의한 'visible' 클래스를 추가합니다.
        entry.target.classList.add("visible");

        // 5. (성능 최적화)
        //    한 번 애니메이션이 실행된 요소는 더 이상 관찰할 필요가 없으므로
        //    관찰 대상에서 제외(unobserve)합니다.
        observer.unobserve(entry.target);
      }
    });
  };

  // 6. Observer 옵션 설정
  const options = {
    root: null, // root가 null이면 브라우저 뷰포트(화면)를 기준으로 합니다.
    rootMargin: "0px",
    threshold: 0.1, // 요소가 10% 정도 화면에 보였을 때 콜백을 실행합니다.
  };

  // 7. 옵저버 인스턴스 생성
  const observer = new IntersectionObserver(callback, options);

  // 8. 선택한 모든 'bubble-container' 요소(bubbles)를
  //    하나씩 관찰(observe)하도록 등록합니다.
  bubbles.forEach((bubble) => {
    observer.observe(bubble);
  });
});
