document.addEventListener("DOMContentLoaded", function () {
  const pages = Array.from(document.querySelectorAll(".page")).filter(
    (page) => page.textContent.trim() !== ""
  );

  let currentPage = 0;
  let isScrolling = false;

  function scrollToPage(index) {
    if (index < 0 || index >= pages.length || isScrolling) return;

    isScrolling = true;

    pages.forEach((page, i) => {
      page.classList.toggle("active", i === index);
    });

    currentPage = index;

    setTimeout(() => {
      isScrolling = false;
    }, 1000); // 動畫時間 + 緩衝
  }

  window.addEventListener("wheel", (e) => {
    if (isScrolling) return;

    if (e.deltaY > 0) {
      scrollToPage(currentPage + 1);
    } else {
      scrollToPage(currentPage - 1);
    }
  });

  // 初始顯示第一頁
  scrollToPage(0);
});
