var like = 3;
var likeElement = document.querySelector(".like-counter");


function addLikes(likeElement) {
    like++;
    likeElement.innerText = like +" like(s)";  
}