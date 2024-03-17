const body = document.body;

const github = document.querySelector(".contact_github span");
const instagram = document.querySelector(".contact_instagram span");
const naver = document.querySelector(".contact_naver span");
const google = document.querySelector(".contact_google span");

const collab_link = document.querySelector(".thought_content-collab");
const customer_link = document.querySelector(".thought_content-customer");

const background = document.querySelector(".background");
const collab = document.querySelector(".collaboration");
const customer = document.querySelector(".customer-centered");
const close_button = document.querySelectorAll(".close_button");

const setTitle = () => {
  github.setAttribute("title", "Github 보러가기");
  instagram.setAttribute("title", "Instagram 보러가기");
  naver.setAttribute("title", "네이버 이메일 쓰러가기");
  google.setAttribute("title", "구글 이메일 쓰러가기");
};

const setPlatformEvent = () => {
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

  google.addEventListener("click", () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=mooul0529@gmail.com",
      "_blank"
    );
  });
};

const initialSetting = () => {
  body.style.overflow = "auto";
  background.style.display = "none";
  collab.style.display = "none";
  customer.style.display = "none";
};

const setThoughtEvent = () => {
  close_button.forEach((button) => {
    button.addEventListener("click", () => {
      initialSetting();
    });
  });

  collab_link.addEventListener("click", () => {
    body.style.overflow = "hidden";
    background.style.display = "flex";
    collab.style.display = "block";
  });

  customer_link.addEventListener("click", () => {
    body.style.overflow = "hidden";
    background.style.display = "flex";
    customer.style.display = "block";
  });
};

const init = () => {
  console.log(body);
  initialSetting();
  setPlatformEvent();
  setThoughtEvent();
  setTitle();
};

init();
