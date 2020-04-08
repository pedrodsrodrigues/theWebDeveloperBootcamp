var button = document.querySelector('button');
var paragraph = document.querySelector('p');

// Click listener
button.addEventListener('click', function () {
    changeButtonText();
});

function changeButtonText() {
    // Changes the text
    paragraph.textContent = 'I was clicked!';
    // Changes the color of the text
    paragraph.style.color = 'red';
}



var li = document.querySelectorAll('li');
var liQuantity = li.length;

for (i = 0; i < liQuantity; i++) {
    li[i].addEventListener('click', function () {
        // "this" vai ser o "li" atual/que está a ser clicado
        this.style.color = 'pink';
    });
}
