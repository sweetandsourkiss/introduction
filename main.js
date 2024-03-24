const body = document.body;

const github = document.querySelector(".contact_github span");
const instagram = document.querySelector(".contact_instagram span");
const naver = document.querySelector(".contact_naver span");
const google = document.querySelector(".contact_google span");

const thought_collab = document.querySelector(".thought_content-collab");
const thought_customer = document.querySelector(".thought_content-customer");

const background = document.querySelector(".background");
const collab = document.querySelector(".collaboration");
const customer = document.querySelector(".customer-centered");
const close_button = document.querySelectorAll(".close_button");

const moseley = document.querySelector(".collaboration .reference");

const setBackground = () => {
  body.style.overflow = "hidden";
  background.style.display = "flex";
};

const openWindowNewTab = (url) => {
  window.open(url, "_blank");
};

const setTitle = () => {
  github.setAttribute("title", "Github 보러가기");
  instagram.setAttribute("title", "Instagram 보러가기");
  naver.setAttribute("title", "네이버 이메일 쓰러가기");
  google.setAttribute("title", "구글 이메일 쓰러가기");
};

const setPlatformEvent = () => {
  github.addEventListener("click", () =>
    openWindowNewTab("https://github.com/sweetandsourkiss")
  );

  instagram.addEventListener("click", (__) =>
    openWindowNewTab("https://www.instagram.com/h0___0z/")
  );

  naver.addEventListener("click", (__) =>
    openWindowNewTab(
      "https://mail.google.com/mail/?view=cm&fs=1&to=mooul0529@naver.com"
    )
  );

  google.addEventListener("click", () =>
    openWindowNewTab(
      "https://mail.google.com/mail/?view=cm&fs=1&to=mooul0529@gmail.com"
    )
  );
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

  thought_collab.addEventListener("click", () => {
    setBackground();
    collab.style.display = "block";
  });

  thought_customer.addEventListener("click", () => {
    setBackground();
    customer.style.display = "block";
  });

  moseley.addEventListener("click", () =>
    openWindowNewTab("https://blog.jostle.me/blog/collaboration-vs-cooperation")
  );
};

const init = () => {
  initialSetting();
  setPlatformEvent();
  setThoughtEvent();
  setTitle();
};

init();
