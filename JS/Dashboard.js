const play = document.querySelectorAll('.category');

play.forEach(cat => {
    cat.addEventListener('click', () => {
        cat.classList.toggle('active');
    })
})

window.addEventListener('DOMContentLoaded', function() {
    var rightDiv = document.querySelector('.right');
    var container = document.querySelector('.base');
    
    function adjustRightHeight() {
        var containerHeight = container.clientHeight;
        var navbarHeight = document.querySelector('.navbar').clientHeight;
        var maxHeight = window.innerHeight - navbarHeight;
        var contentHeight = rightDiv.scrollHeight;

        if (contentHeight <= maxHeight) {
            rightDiv.style.height = 'auto';
        } else {
            rightDiv.style.height = (maxHeight - containerHeight + contentHeight) + 'px';
        }
    }

    adjustRightHeight();
    window.addEventListener('resize', adjustRightHeight);
});

document.getElementById("button_new").addEventListener("click", function() {

    window.location.href = "Editor.html";
});