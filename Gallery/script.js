// changing videos when clicked
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const videos = document.getElementsByClassName('video');
const caption = document.getElementsByClassName("caption")
let counter = 0;

// change of video and caption under
rightArrow.addEventListener("click", (e) => {
    console.log(counter)
    if(counter >= 3){
        counter=0;
        
        videos[3].classList.toggle("hide");
        videos[counter].classList.toggle("hide");
        videos[counter].autoplay = true;

        caption[3].classList.toggle("hide");
        caption[counter].classList.toggle("hide");
    }
    else{
        videos[counter].classList.toggle("hide");
        videos[counter+1].classList.toggle("hide");
        videos[counter+1].autoplay;

        caption[counter].classList.toggle("hide");
        caption[counter+1].classList.toggle("hide");
        counter++;
    }

});

leftArrow.addEventListener("click", (e) => {
    console.log(counter)
    if(counter == 0){
        videos[counter].classList.toggle("hide");
        videos[3].classList.toggle("hide");
        videos[3].autoplay = true;

        caption[counter].classList.toggle("hide");
        caption[3].classList.toggle("hide");
       
        counter=3;
    }
    else{
        videos[counter].classList.toggle("hide");
        videos[counter-1].classList.toggle("hide");
        videos[counter-1].autoplay = true;

        caption[counter].classList.toggle("hide");
        caption[counter-1].classList.toggle("hide");
        
        counter--;
    }
    
});


