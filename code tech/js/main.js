// Swiper Card
let swiper = new Swiper(".slider-wrapper", {
  loop: true,
  spaceBetween: 20,
  grabCursor: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    668: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const btn = dropdown.querySelector(".dropdown-btn");
  const menu = dropdown.querySelector(".dropdown-menu");
  const selected = dropdown.querySelector(".selected-option");
  const options = dropdown.querySelectorAll("li");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("block");
    menu.classList.remove("hidden");
    closeOthers(dropdown);
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.textContent = option.textContent;
      menu.classList.add("hidden");
      menu.classList.remove("block");
    });
  });

  document.addEventListener("click", () => {
    menu.classList.add("hidden");
    menu.classList.remove("block");
  });
});

function closeOthers(current) {
  document.querySelectorAll(".dropdown").forEach((drop) => {
    if (drop !== current) {
      drop.querySelector(".dropdown-menu").classList.add("hidden");
    }
  });
}

let lists = document.querySelectorAll(".list");
let closeList = document.querySelectorAll(".closeList");
let nav = document.querySelectorAll(".nav");
let formSearch = document.querySelectorAll(".formSearch");
let select3 = document.querySelectorAll(".select3");

lists.forEach(function (list, index) {
  list.addEventListener("click", function () {
    nav[index].style.display = "block";
    formSearch[index].style.display = "block";
    select3[index].style.display = "flex";
    document.body.style.overflow = "hidden";
    list.style.display = "none";
    closeList[index].style.display = "block";
  });
});
closeList.forEach(function (close, index) {
  close.addEventListener("click", function () {
    nav[index].style.display = "none";
    formSearch[index].style.display = "none";
    select3[index].style.display = "none";
    document.body.style.overflow = "auto";
    close.style.display = "none";
    lists[index].style.display = "flex";
    document.body.style.overflowX = "hidden";
  });
});

let alink = document.querySelectorAll('.nav a');

alink.forEach(a =>{
    a.addEventListener('click', function(e){
        a.style.color = '#e8a73f';
        alink.forEach(l => {
            l.style.color = '#252541';
            this.style.color = '#e8a73f';
        })
    })
})

const sections = document.querySelectorAll(".section");

function checkSections() {
  const windowHeight = window.innerHeight;
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= windowHeight * 0.8) {
      section.classList.add("show");
    }
  });
}

window.addEventListener("scroll", checkSections);
window.addEventListener("load", checkSections);
