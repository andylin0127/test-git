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
    .then((err) => {
      if (!err.ok) {
        throw new Error("資料讀取失敗");
      } else return err.json();
    })
    .then((data) => {
      content.innerHTML = data.story;
    });
  toptitle.innerHTML = "返回首頁";
}

function innersubtitle2() {
  const content = document.querySelector(".content");
  const toptitle = document.querySelector(".top-inner-title");
  document.querySelector(".myself").style.display = "none";
  content.style.display = "block";
  fetch("data.json")
    .then((err) => {
      if (!err.ok) {
        throw new Error("資料讀取失敗");
      } else return err.json();
    })
    .then((data) => {
      content.innerHTML = data.experience;
    });
  toptitle.innerHTML = "返回首頁";
}

function innersubtitle3() {
  const content = document.querySelector(".content");
  const toptitle = document.querySelector(".top-inner-title");
  document.querySelector(".myself").style.display = "none";
  content.style.display = "block";
  fetch("data.json")
    .then((err) => {
      if (!err.ok) {
        throw new Error("資料讀取失敗");
      } else return err.json();
    })
    .then((data) => {
      content.innerHTML = data.product;
    });
  toptitle.innerHTML = "返回首頁";
}
