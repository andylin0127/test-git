function innertitle() {
  document.querySelector(".myself").style.display = "block";
  document.querySelector(".content").style.display = "none";
  document.querySelector(".top-inner-title").innerHTML = "首頁";
}

document.querySelectorAll(".top-inner-subtitle").forEach((item) => {
  item.addEventListener("click", () => innersubtitle(item));
});

function innersubtitle(clickedElement) {
  const content = document.querySelector(".content");
  const toptitle = document.querySelector(".top-inner-title");
  document.querySelector(".myself").style.display = "none";
  content.style.display = "block";
  fetch("data.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error("資料讀取失敗");
      } else return res.json();
    })
    .then((data) => {
      if (clickedElement.textContent.trim() === "我的自傳") {
        content.innerHTML = data.story;
      }
      if (clickedElement.textContent.trim() === "我的經歷") {
        content.innerHTML = data.experience;
      }
      if (clickedElement.textContent.trim() === "我的作品") {
        content.innerHTML = data.product;
      }
    })
    .catch((error) => {
      console.error("錯誤:", error);
      content.innerHTML = "資料載入失敗，請稍後再試。";
    });

  toptitle.innerHTML = "返回首頁";
}
