let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  const names = ["Tran Trung Nhan\nNguyen Huu Anh Duc, Bui Nhat Hieu", "Nguyen Le Phuoc Duy", "Le Phuoc Minh Quan", "Tran Trung Nhan\nA13K55 friends", "Truong Ai Linh", "Tran Hoang Tien\nDavid Tien Tran", "Vo Duc Manh", "Van Thanh Huy 👅", "Nguyen Le Phuoc Duy 🤑"];
  let i;
  let slides = document.getElementsByClassName("image");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "grid";
  document.getElementById("title_name").innerHTML = names[slideIndex-1];
}