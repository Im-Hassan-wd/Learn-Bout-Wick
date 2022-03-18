const reviewOverview = document.querySelector('.review-overview');
const path = [
  './asset/8.jpg', './asset/10.jpg', './asset/6.jpg'
]

// functions
function createOverview (){
  let index = Math.floor(Math.random() * path.length);
  // oveview image div
  const imageDiv = document.createElement('div');
  reviewOverview.append(imageDiv);

  // overiew image
  const image = document.createElement('img');
  image.src = path[index];
  image.alt = 'avatar';
  imageDiv.append(image);
  setInterval(() => {
    reviewOverview.style.transform = 'translateX(-400px)';  
  }, 1000)

  setTimeout(() => {
    clearInterval(timer)
  }, 10000)
}

const timer = setInterval(() => {
 createOverview();
}, 2000)