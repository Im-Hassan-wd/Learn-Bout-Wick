const body = document.querySelector('body');
const projectDivs = document.querySelectorAll('.project div');

// Event listeners
body.addEventlistener('contextmenu', (e) => e.preventDefault() );
window.addEventListener('scroll', scrollAppear)

// Functions 
function scrollAppear(){
  projectDivs.foreach(div => {
    const projectDivPosition = div.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    if (projectDivPosition < screenPosition) {
      div.classList.add('appear');
    }
  });
}



