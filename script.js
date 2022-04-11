const body = document.querySelector('body');
const projectDivs = document.querySelectorAll('.project div');
const projectImages = document.querySelectorAll('.project img');
const allImages = document.querySelectorAll('img');
const navLists = document.querySelectorAll('nav li a');

// Event listeners
window.addEventListener('scroll', () => {
  scrollAppear(projectDivs);
  scrollAppear(projectImages);
});

allImages.forEach((image) => {
  image.addEventListener('contextmenu', e => {
    e.preventDefault();
  })
});

navLists.forEach(list => {
  list.addEventListener('click', (e) => {
    list.classList.remove('active');
    addActive(e)
  })
});

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



