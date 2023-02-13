const hamburger = document.getElementById('hamburger_btn');
const navNarrow = document.getElementById('nav_narrow');

hamburger.addEventListener('click', () => {
   hamburger.classList.toggle('active');
   navNarrow.classList.toggle('active');
});

document.querySelectorAll('.nav_narrow_link').forEach((n) =>
   n.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navNarrow.classList.remove('active');
   })
);
