var paragraph = document.querySelector('p');
var unorderedList = document.querySelector('ul');

// It shows the content of the element
paragraph.textContent;                                                              // Here it's a paragraph!
// It shows the html of the element
paragraph.innerHTML;                                                                // Here it's a <strong>paragraph!</strong>
// Changes the content of the element
paragraph.textContent = 'Bla bla bla';                                              // Bla bla bla

// It shows the html of the element
unorderedList.innerHTML;                                                            // <li>1</li> <li>2</li> <li>3</li>
// Changes the html of the element
unorderedList.innerHTML = '<li>1º</li><li><strong>2º</strong></li><li>3º</li>';     // <li>1º</li> <li>2º</li> <li>3º</li>


// Adicionar estilos
// Adds the (style) class "paragraphClass" (from the CSS file) to the element
// paragraph.classList.add('paragraphClass');

// If the (style) class "paragraphClass" (from the CSS file) is already being used by "paragraph", disables it. Otherwise, adds it
paragraph.classList.toggle('paragraphClass');

// Outra forma de fazer:
paragraph.style.fontSize = "100px";
paragraph.style.border = "1px solid black";
