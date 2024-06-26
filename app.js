var nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'),
    item = document.querySelectorAll('.item'),
    runningTime = document.querySelector('.timerunning')

 let timerunning = 3000
 
 nextBtn.onclick = function(){
    showSlider('next')
 }

 prevBtn.onclick = function(){
    showSlider('prev')
 }

 let runTimeout


function resetTimeAnimation() {
    runningTime.style.animation = 'none'
    runningTime.offsetHeight
    runningTime.style.animation = null
    runningTime.style.animation = 'runningTime 7s linear 1 forwards'
}

 function showSlider(type){
    let sliderItemsDom = list.querySelectorAll('.carousel .list .item')
    if(type === 'next'){
        list.appendChild(sliderItemsDom[0])
        carousel.classList.add('next')
    }else{
        list.prepend(sliderItemsDom[sliderItemsDom.length -1])
        carousel.classList.add('prev')
    }

    clearTimeout(runTimeout)

    runTimeout = setTimeout( () => {
        carousel.classList.remove('next')
        carousel.classList.remove('prev')
    }, timeAutoNext)

    resetTimeAnimation()
 }



 resetTimeAnimation()