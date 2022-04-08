const body = document.querySelector('body');
const projectDivs = document.querySelectorAll('.project div');
const allImages = document.querySelectorAll('img');

// Event listeners
window.addEventListener('scroll', scrollAppear);
allImages.forEach((image) => {
  image.addEventListener('contextmenu', e => {
    e.preventDefault();
  })
})

// Functions 
function scrollAppear(){
  projectDivs.forEach(div => {
    const projectDivPosition = div.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 2;
    if (projectDivPosition < screenPosition) {
      div.classList.add('appear');
    }
  });
}



