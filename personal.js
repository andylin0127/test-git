function innertitle() {
  document.querySelector(".myself").style.display = "block";
  document.querySelector(".content").style.display = "none";
  document.querySelector(".top-inner-title").innerHTML = "首頁";
}

function innersubtitle1() {
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
      content.innerHTML = data.story;
    })
    .catch((error) => {
      console.error("錯誤:", error);
      content.innerHTML = "資料載入失敗，請稍後再試。";
    });

  toptitle.innerHTML = "返回首頁";
}

function innersubtitle2() {
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
      content.innerHTML = data.experience;
    })
    .catch((error) => {
      console.error("錯誤:", error);
      content.innerHTML = "資料載入失敗，請稍後再試。";
    });

  toptitle.innerHTML = "返回首頁";
}

function innersubtitle3() {
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
      content.innerHTML = data.product;
    })
    .catch((error) => {
      console.error("錯誤:", error);
      content.innerHTML = "資料載入失敗，請稍後再試。";
    });
  toptitle.innerHTML = "返回首頁";
}
