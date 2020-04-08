var button = document.querySelector('button');
var body = document.querySelector('body');

// Without a CSS file
// var isWhite = true;

// button.addEventListener('click', function() {
//     if (isWhite) {
//         body.style.background = 'purple';
//     } else {
//         body.style.background = 'white';
//     }

//     isWhite = !isWhite;
// });



// With a CSS file
button.addEventListener('click', function () {
    body.classList.toggle('purple');                    // If the background is not purple, then make it purple. If it's purple already, then remove it
});
