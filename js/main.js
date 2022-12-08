var elopenModalBtn = document.querySelectorAll(".meeting__item-btn");

elopenModalBtn.forEach(function(link){

    link.addEventListener("click" , function(evt){
        evt.preventDefault();
        link.classList.toggle("meeting__item-btn--active")
    })
})