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
  
  
  //launchOffer
  const endOfferDate = new Date("2025-02-27T11:11:11").getTime();
  const discountFrame = document.getElementById("discountFrame");
  const discountTimer = document.getElementById("discountTimer");
  const discountBttn = document.getElementById("discountBttn");
  
  if(!discountFrame || !discountTimer || !discountBttn){
    console.error("Required elements are missing in the DOM");
    return;
  }else if(endOfferDate <= new Date().getTime()){
    console.log("OfferTimeAlreadyExpired!");
    document.getElementById("discountFrame").style.display="none";
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
        document.getElementById("discountFrame").style.display="none";
        return;
      }
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      
      document.getElementById("discountTimer").textContent=
      `${days}D  |  ${hours}h  |  ${minutes}m  |  ${seconds}s`;

       // Animate shadow size
      shadowIntensity = shadowIntensity === 5 ? 20 : 5; // Toggle blur radius
      shadowSpread = shadowSpread === 1 ? 7 : 1; // Toggle spread radius
      discountBttn.style.boxShadow = `0px 0px ${shadowIntensity}px ${shadowSpread}px rgba(255, 0, 255, 0.8)`;
    }, 1000);}

  

    function setBr(){
      let demoUEName = document.getElementById("UEProjectName");
      let demoAppName = document.getElementById("demoAppName");
      let isMobVewLes428= window.matchMedia("(max-width:428px)").matches;
      let isMobVewLes340 = window.matchMedia("(max-width:340px)").matches;
      console.log("isMobileViewLessThan340px:", isMobVewLes340); // Check if the media query
      console.log("isMobileViewLessThan428px:", isMobVewLes428); // Check if the media query
      if(isMobVewLes428 && isMobVewLes340){
        demoUEName.innerHTML = "ANFP_Demo_UE<br>_ModereatorFiles",
        demoAppName.innerHTML = "ANFP_Demo_APK<br>_v1.0";
      }else if(isMobVewLes428){
        demoUEName.innerHTML = "ANFP_Demo_UE<br>_ModereatorFiles",
        demoAppName.innerHTML = "ANFP_Demo_APK_v1.0";
      }else 
        demoUEName.innerHTML = "ANFP_Demo_UE_ModereatorFiles",
        demoAppName.innerHTML = "ANFP_Demo_APK_v1.0";
    }
    
    setBr();
    window.addEventListener("resize" , setBr);

    console.log("Script loaded and DOMContentLoaded event attached.");
  });
  

