const github = document.querySelector(".contact_github span");
const instagram = document.querySelector(".contact_instagram span");
const naver = document.querySelector(".contact_naver");

const init = () => {
  github.addEventListener("click", (__) => {
    window.open("https://github.com/sweetandsourkiss", "_blank");
  });

  instagram.addEventListener("click", (__) => {
    window.open("https://www.instagram.com/h0___0z/", "_blank");
  });

  naver.addEventListener("click", (__) => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=mooul0529@naver.com",
      "_blank"
    );
  });

  github.setAttribute("title", "Github 보러가기");
  instagram.setAttribute("title", "Instagram 보러가기");
  naver.setAttribute("title", "이메일 쓰러가기");
};

init();
