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

/*document.addEventListener("DOMContentLoaded", () => {
  // Get elements
  let popupOverlay = document.getElementById("discountPopupOverlay");
  let discountPoster = document.getElementById("discountFrame");
  let closeButton = document.getElementById("closePopupBttn");
  let isPopupShown = false;
  let endOfferDate;
  let discountFrame;
  let discountTimer;
  let discountBttn;

 if (popupOverlay) {
      console.log("popup appeared!");
      popupOverlay.style.display = "block";
      discountPoster.style.display = "none";      
      isPopupShown = true;
 };
  if(isPopupShown){ 
    countingDownTimer("2025-03-04T23:23:23" ,"discountFramePopup", "discountTimerPopup" ,"discountBttnPopup" );
  };
    // Close button event listener
  if (closeButton) {
      closeButton.addEventListener("click", () => {
          console.log("Closing popup...");
          popupOverlay.style.display = "none";
          discountPoster.style.display = "flex";
          isPopupShown = false;
          console.log("Popup disappeared!")
          countingDownTimer("2025-03-04T23:23:23" , "discountFrame" , "discountTimer" , "discountBttn");
      });
    };

//launchOffer
function countingDownTimer(expirationTime, frameId, timerId, discountBttnId){
  endOfferDate = new Date(expirationTime).getTime();
  discountBttn = document.getElementById(discountBttnId);
  discountTimer = document.getElementById(timerId);
  discountFrame = document.getElementById(frameId);
  if(!discountFrame || !discountTimer || !discountBttn){
    console.error("Required elements are missing in the DOM");
    return;
  }else if(endOfferDate <= new Date().getTime()){
    console.log("OfferTimeAlreadyExpired!");
    document.getElementById(frameId).style.display="none";
    return;
  }else{
    let shadowIntensity = 5; // Initial shadow intensity
    let shadowSpread = 1; // Initial shadow spread
    
    const timerInterval = setInterval(()=>{
      const now = new Date().getTime();
      let timeLeft = endOfferDate - now;
  
      if(timeLeft <= 0){
        clearInterval(timerInterval);
        console.log("launchOfferExpired");
        document.getElementById(frameId).style.display="none";
        return;
      }
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      
      document.getElementById(timerId).textContent=
      `${days}D  |  ${hours}h  |  ${minutes}m  |  ${seconds}s`;

       // Animate shadow size
      shadowIntensity = shadowIntensity === 5 ? 20 : 5; // Toggle blur radius
      shadowSpread = shadowSpread === 1 ? 7 : 1; // Toggle spread radius
      discountBttn.style.boxShadow = `0px 0px ${shadowIntensity}px ${shadowSpread}px rgba(255, 0, 255, 0.8)`;
    }, 1000);}
  }
});
*/


document.addEventListener("DOMContentLoaded", () =>{ 
  
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
  

