// function fetchBooks() {
//   // To pass the tests, don't forget to return your fetch!
// fetch('https://anapioficeandfire.com/api/books')
// .then((resp) => resp.json())
// .then((renderBooks) => console.log(json));

// }



function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json));
}
function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});



// https://anapioficeandfire.com/api/books
// this function should include a fetch request to the Game of Thrones API ('https://anapioficeandfire.com/api/books' (Links to an external site.)). The returned response should be converted to JSON. Then, it should call the second function, renderBooks(), passing in the JSON-ified data as the argument. 

