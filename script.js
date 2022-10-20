const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    console.log(e);
    if (e.isIntersecting) {
      e.target.classList.add('show');
      console.log('isIntersecting');
    } else {
      e.target.classList.remove('show');
      console.log('isIntersecting');
    }
  });
});

const hiddenToRight = document.querySelectorAll('.hiddenTR');
const hiddenToDown = document.querySelectorAll('.hiddenTD');
hiddenToRight.forEach((el) => observer.observe(el));
hiddenToDown.forEach((el) => observer.observe(el));
