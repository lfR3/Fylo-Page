

const toTop = document.querySelector('.link-top');

window.addEventListener('scroll', () =>{
    if(window.scrollY > 400){
        toTop.classList.add('act');
    }else{
        toTop.classList.remove('act');
    }

})

    // ------------------------------
        // Js Code For The Go To Top Button
function goTop(){
    window.scrollTo(top)
}