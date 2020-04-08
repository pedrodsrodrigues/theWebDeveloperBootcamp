// SELECTORS with JS only - It can return one or more elements
var id_highlight = document.getElementById('highlight');
console.log(id_highlight);

var class_bolded = document.getElementsByClassName('bolded');
console.log(class_bolded);                                          // Get all the elements that were selected
console.log(class_bolded[0]);                                       // Get only the first element that was selected

var tag_li = document.getElementsByTagName('li');
console.log(tag_li);                                                // Get all the elements that were selected
console.log(tag_li[0]);                                             // Get only the first element was selected



// SELECTORS through CSS - It ALWAYS returns one element (the first one) ONLY, even if it has more than one
var id_highlight = document.querySelector('#highlight');            // "#" for IDs
console.log(id_highlight);

var class_bolded = document.querySelector('.bolded');               // "." for classes
console.log(class_bolded);

var tag_li = document.querySelector('h1');
console.log(tag_li);

// We can be even more specific - In the case below we want an "a" (anchor) that is inside a li (list item)
var tag_li_a = document.querySelector('li a');
console.log(tag_li_a);



// SELECTORS through CSS - It works similar to the "JS only" method - It can return one or more elements
var class_bolded = document.querySelectorAll('.bolded');            // "." for classes
console.log(class_bolded);                                          // Get all the elements that were selected
console.log(class_bolded[0]);                                       // Get only the first element that was selected

var tag_li = document.querySelectorAll('h1');
console.log(tag_li);                                                // Get all the elements that were selected
console.log(tag_li[0]);                                             // Get only the first element was selected

var tag_a = document.querySelectorAll('a');
console.log(tag_a);                                                 // Get all the elements that were selected
console.log(tag_a[0]);                                              // Get only the first element was selected
