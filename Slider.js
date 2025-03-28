// document.addEventListener("DOMContentLoaded", () => {
//   let popupOverlay = document.getElementById("discountPopupOverlay");
//   let discountPoster = document.getElementById("discountFrame");
//   let closeButton = document.getElementById("closePopupBttn");
  
//   console.log("Popup Overlay:", popupOverlay);
//   console.log("Discount Poster:", discountPoster);
//   console.log("Close Button:", closeButton);

//   if (!discountPoster) {
//     console.error("discountPoster (discountFrame) is not found in the DOM!");
//     return; // Stop script execution if it's not found
//   }

//   if(popupOverlay){
//   popupOverlay.style.display = "block"; // Show popup on page load
//   };

//   setTimeout(() =>{
//   if(discountPoster) {
//     discountPoster.classList.remove("discountPosterDesktop");
//     discountPoster.classList.add("popupActive");
//     console.log("Poster moved!")
//   }else{console.error("discount Poster's not been initialized!")}
//   }, 2000);


// if(closeButton){
//   closeButton.addEventListener("click", () => {
//     discountPoster.classList.remove("popupActive");
//     discountPoster.classList.add("popupDeactive");
//     setTimeout(() => {
//       popupOverlay.style.display = "none";
//       discountPoster.classList.remove("popupDeactive")
//     }, 700)}
//   )
// }
// });




document.addEventListener("DOMContentLoaded", () =>{ 
  
        //Documentation category
        const ecoRadio = document.getElementById('ecoRadio');
        const proRadio = document.getElementById('proRadio');
        
        const ecoMenu = document.querySelector('.EcoMenuDiv');
        const proMenu = document.querySelector('.ProMenuDiv');
        
        function toggleMenu() {
          if (proRadio.checked) {
            ecoMenu.style.display = 'none';
            proMenu.style.display = 'flex';
          } else {
            ecoMenu.style.display = 'flex';
            proMenu.style.display = 'none';
          }
        }
        
        // Initial state
        toggleMenu();
        
        // Add event listeners to switch between menus
        ecoRadio.addEventListener('change', toggleMenu);
        proRadio.addEventListener('change', toggleMenu); 

  let slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
  
  
  // SlideShowAnimation
  
   slideIndex = 0;
  showSlides();
  
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 6000); // Change image every 2 seconds
  }
  
  
  function closeMenuEvent(){
    let slideMenu = document.getElementsByClassName("menuPaneDiv")[0];
    slideMenu.style.transform='translateX(0vw)';
  }
  
  let linkButtons = document.getElementsByClassName("DDMItemA");
  for(let i=0; i<linkButtons.length; i++){
  linkButtons[i].addEventListener("click",closeMenuEvent);
  }

  });
  

