document.addEventListener("DOMContentLoaded", () =>{
    const mapBttn = document.getElementById('roadmap');
    const closeBttn =document.getElementById('close');
    const roadmapPanel = document.getElementById('mapDiv');


// EventPoster
    const closeSalePoster = document.getElementById('closePopupBttn');
    const salePoster = document.getElementById('SalePstrContainer');


    if(closeSalePoster){
        closeSalePoster.addEventListener('click', () =>{
            salePoster.style.display = 'none';
        })
    }

    

    const displayValue = window.getComputedStyle(roadmapPanel).display;
    roadmapPanel.style.display = 'none';

    function roadmapDisplayToggle(){
        if(roadmapPanel.style.display == 'none'){
            roadmapPanel.style.display = 'flex';
        }else{
            roadmapPanel.style.display ='none';
        }
    }

    function disapearRoadmap(){
        roadmapPanel.style.display = 'none';
    }

    mapBttn.addEventListener('click' , roadmapDisplayToggle);

    closeBttn.addEventListener('click', disapearRoadmap);
})
