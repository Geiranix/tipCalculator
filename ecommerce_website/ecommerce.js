const productList = document.getElementById("product-list");
const subscribeBtn = document.getElementById("subscribe-btn");
const sliderPrev = document.getElementById("slider-prev");
const sliderNext = document.getElementById("slider-next");
// const arryImages = new Array()



// arryImages[0] = new Image();
// arryImages[0].src = './images/food_image.jpeg';

// arryImages[1] = new Image();
// arryImages[1].src = './images/food_image.jpeg';

// arryImages[2] = new Image();
// arryImages[2].src = './images/food_image.jpeg';

// arryImages[3] = new Image();
// arryImages[3].src = './images/food_image.jpeg';

// arryImages[4] = new Image();
// arryImages[4].src = './images/food_image.jpeg';

// function nextImage() {
//   var img = document.getElementById('hero-image');
//   for (var i = 0; i < arryImages.length; i++) {
//     if (arryImages[i].src === img.src) {
//       if (i === arryImages.length - 1) {
//         img.src = arryImages[0].src;
//       } else {
//         img.src = arryImages[i + 1].src;
//       }
//       break;
//     }
//   }
// }

// function previousImage() {
//   var img = document.getElementById('hero-image');
//   console.log("i have started");
//   for (var i = arryImages.length - 1; i >= 0; i--) {
//     if (arryImages[i].src === img.src) {
//       if (i === 0) {
//         img.src = arryImages[arryImages.length - 1].src;
//       } else {
//         img.src = arryImages[i - 1].src;
//       }
//       break;
//     }
//   }
// }


//     sliderPrev.addEventListener("click",previousImage,false)
//     sliderNext.addEventListener("click",nextImage,false)
    


const arryImages = [
  './images/food_image.jpeg',
  './images/food_image3.jpg',
  './images/food_image3.jpg',
  './images/food_image.jpeg',
  './images/food_image3.jpg'
].map(src => {
  const img = new Image();
  img.src = src;
  return img;
});

const img = document.getElementById('hero-image');

function getFileName(path) {
  return path.substring(path.lastIndexOf('/') + 1);
}

// 🔍 Find index of the current image in the array
let currentImageIndex = arryImages.findIndex(image =>
  getFileName(image.src) === getFileName(img.src)
);

// Fallback in case not found
if (currentImageIndex === -1) currentImageIndex = 0;

function updateImage() {
  img.src = arryImages[currentImageIndex].src;
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % arryImages.length;
  updateImage();
}

function previousImage() {
  currentImageIndex = (currentImageIndex - 1 + arryImages.length) % arryImages.length;
  updateImage();
}

document.getElementById("slider-prev").addEventListener("click", previousImage);
document.getElementById("slider-next").addEventListener("click", nextImage);
