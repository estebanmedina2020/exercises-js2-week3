// Write your code here
let Image = new Array(
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Arc_de_Triomf_Barcelona_2013.jpg/800px-Arc_de_Triomf_Barcelona_2013.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Church_of_Santa_Maria_del_Mar.jpg/800px-Church_of_Santa_Maria_del_Mar.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/14-08-05-barcelona-RalfR-001.jpg/800px-14-08-05-barcelona-RalfR-001.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Barcelona_-_Font_M%C3%A0gica_-_2016.jpg/800px-Barcelona_-_Font_M%C3%A0gica_-_2016.jpg"
);

let Image_Number = 0;
let Image_Lenght = Image.length - 1;

function change_image(num) {
  Image_Number = Image_Number + num;

  if (Image_Number > Image_Lenght) {
    Image_Number = 0;
  }
  if (Image_Number < 0) {
    Image_Number = Image_Lenght;
  }
  document.slideshow.src = Image[Image_Number];
}

function auto_previous() {
  setInterval("change_image(-1)", 1000);
}

function auto_forward() {
  setInterval("change_image(1)", 1000);
}
