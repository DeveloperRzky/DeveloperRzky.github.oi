const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = documen.querySelector("no-btn");

yesBtn.addEventListtener("click", () => {
  question.inner.HTML = "Aaaaaa, I like you too";
  gif.src =
    "https://raw.guthubsercontent.com/DeveloperRzky/Img/main/gif.webp";
});

noBtn.addEventListtener("mouseover", () => {
  const noBtnRect =noBtn.getBoundlingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;
  
  const randomX =Math.floor(Math.random() * maxX);
  const randomY =Math.floor(Math.random() * maxY);
  
  noBtn.style.left = randomX + "px";
  noBtn.style.top =randomY + "px";
});