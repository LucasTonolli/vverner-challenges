function whoLikesIt(e) {
    e.preventDefault()
    let names = document.getElementById('likes');

    let likes = names.value.trim();
    likes = likes.split(',');
   
    likes = likes.filter((str) => str = str.trim());
    
    if (likes.length === 0) {
        alert("no one likes this");
        return;
    }
    if (likes.length === 1) {
        alert(likes[0] + " likes this")
        return
    }
    if (likes.length === 2) {
        alert(likes[0] + " and " + likes[1] + " like this")
        return
    }
    if (likes.length === 3) {
        alert(likes[0] + ", " + likes[1] + " and " + likes[2] + " like this");
        return;
    }

    alert(likes[0] + ", " + likes[1] + " and " + (likes.length - 2) + " others like this");
}

const btnLike = document.getElementById('btn-like');
btnLike.addEventListener('click', whoLikesIt);