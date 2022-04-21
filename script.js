const body = document.querySelector('body');
const projectDivs = document.querySelectorAll('.project div');
const navLists = document.querySelectorAll('nav li a');
const cards = document.querySelectorAll('.card');

// Event listeners
window.addEventListener('scroll', () => {
  scrollAppear(projectDivs);
  scrollAppear(projectImages);
});

navLists.forEach(list => {
  list.addEventListener('click', (e) => {
    list.classList.remove('active');
    addActive(e)
  })
});

cards.forEach(card => {
  card.addEventListener('mouseenter', (e) => cardAnimation(e));
  card.addEventListener('mouseleave', (e) => removeAnimation(e));
})

// Functions 
function scrollAppear(contents){
  contents.forEach(content => {
    const contentPosition = content.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 2;
    if (contentPosition < screenPosition) {
      content.classList.add('appear');
    }
  });
}

function addActive (e) {
  e.target.classList.add('active');
}

function cardAnimation (e){
  let animate = e.target.children[2];
  animate.style.transition = '0.5s ease';
  animate.style.transform = 'translateY(-5px)';
}

function removeAnimation (e){
  let animate = e.target.children[2];
  animate.style.transform = 'translateY(0px)';
}



