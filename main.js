// const sectionOne = document.querySelector(".section-one");

// const options = {};

// const observer = new IntersectionObserver(function (entries, observer) {
//   entries.forEach((entry) => {
//     console.log(entry);
//     // if we don't want the observer to keep watching for the entry
//     // observer.unobserve(entry.target);
//   });
// }, options);

// observer.observe(sectionOne);

// --------- change navigation on scroll ---------- part 2

// change color of header when section one leaves the screen
const header = document.querySelector("header");

const sectionOne = document.querySelector(".section-one");

const options = {};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry);
    header.classList.toggle("inverse");
  });
}, options);

observer.observe(sectionOne);
