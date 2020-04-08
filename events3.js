var li = document.querySelectorAll('li');

liAmount = li.length;

for (var i = 0; i < liAmount; i++) {
    // This occurs when the mouse is over the element
    li[i].addEventListener('mouseover', function () {
        // this.style.color = 'green';
        this.classList.add('selected');
    });

    // This occurs when the mouse, after being on top of the element, leaves it
    li[i].addEventListener('mouseout', function () {
        // this.style.color = 'black';
        this.classList.remove('selected');
    });

    li[i].addEventListener('click', function () {
        this.classList.toggle('done');
    });
}
