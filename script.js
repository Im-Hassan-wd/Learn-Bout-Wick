const body = document.querySelector('body');
const projectDiv = document.querySelectorAll('.project div');

// Event listeners
body.addEventlistener('contextmenu', (e) => e.preventDefault() );
window.addEventListener('scroll', scrollAppear)

// Functions 
function scrollAppear(){
  const projectDivPosition = projectDiv.getBoundingClientRect().top;
  const screenPosition = window.imnerHeight / 1.3;
  if (projectDiv < screenPosition) {
    projectDiv.classList.add('active');
  }
}



