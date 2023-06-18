function loader() {
  const loaderContainer = document.querySelector('.loader-container');
  if (loaderContainer) {
    loaderContainer.classList.add('fade-out');
  }
}

function fadeOut() {
  setInterval(loader, 2000);
}
window.onload = fadeOut;








const cartItems = [];











function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function addToCart(book, title, author, availableCopies) {
if (availableCopies === 0) {
alert('No copies available in the library!');
return;
}

cartItems.push({ book, title, author });
availableCopies--;

updateCartItems();
updateCartCount(); 
}

function removeFromCart(index) {
const removedItem = cartItems.splice(index, 1)[0];
updateCartItems();
updateCartCount(); 
}


function updateCartItems() {
    const cartItemsElement = document.getElementById('cartItems');
    cartItemsElement.innerHTML = '';

    cartItems.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <p><strong>Title:</strong> ${item.title}</p>
            <p><strong>Author:</strong> ${item.author}</p>
            <button class="remove-from-cart" onclick="removeFromCart(${index})">Remove from Cart</button>
        `;
        cartItemsElement.appendChild(cartItem);
    });
}

function updateCartCount() {
  const cartCount = document.getElementById('cartCount');
  console.log('Cart count updated:', cartItems.length);
  cartCount.textContent = cartItems.length;
}

function toggleCart() {
    const cartItemsElement = document.getElementById('cartItems');
    cartItemsElement.style.display = cartItemsElement.style.display === 'none' ? 'block' : 'none';
}













        // Fetch book data from Open Library API
        fetch('https://openlibrary.org/subjects/computer_science.json?limit=10')
            .then(response => response.json())
            .then(data => {
                displayCSBooks(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });

        // Display books on the page
        function displayCSBooks(data) {
            const bookList = document.getElementById('bookList');

            data.works.forEach(work => {
                const book = work.cover_edition_key;
                const title = work.title;
                const author = work.authors[0]?.name || 'Unknown';
                
                const year = work.first_publish_year ? work.first_publish_year : 'Unknown';
                const availableCopies = getRandomNumber(0, 10);

                const bookContainer = document.createElement('div');
                bookContainer.className = 'book-container';

                // Create book cover element
                const bookCover = document.createElement('img');
                bookCover.className = 'book-cover';
                bookCover.src = `https://covers.openlibrary.org/b/olid/${book}-M.jpg`;

                // Create book details element
                const bookDetails = document.createElement('div');
                bookDetails.className = 'book-details';
                bookDetails.innerHTML = `
                    <p><strong>Title:</strong> ${title}</p>
                    <p><strong>Author:</strong> ${author}</p>
                    <p><strong>Year:</strong> ${year}</p>
                    <p><strong>Available Copies:</strong> ${availableCopies}</p>
                    <button class="add-to-cart" onclick="addToCart('${book}', '${title}', '${author}', ${availableCopies})">Add to Cart</button>
                `;

                bookContainer.appendChild(bookCover);
                bookContainer.appendChild(bookDetails);
                bookList.appendChild(bookContainer);
            });
        }












        // Fetch book data from Open Library API
        fetch('https://openlibrary.org/subjects/fiction.json?limit=10')
            .then(response => response.json())
            .then(data => {
                displayTechBooks(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });

        // Display books on the page
        function displayTechBooks(data) {
            const bookList = document.getElementById('bookList2');

            data.works.forEach(work => {
                const book = work.cover_edition_key;
                const title = work.title;
                const author = work.authors[0]?.name || 'Unknown';
                
                const year = work.first_publish_year ? work.first_publish_year : 'Unknown';
                const availableCopies = getRandomNumber(0, 10);

                const bookContainer = document.createElement('div');
                bookContainer.className = 'book-container';

                // Create book cover element
                const bookCover = document.createElement('img');
                bookCover.className = 'book-cover';
                bookCover.src = `https://covers.openlibrary.org/b/olid/${book}-M.jpg`;

                // Create book details element
                const bookDetails = document.createElement('div');
                bookDetails.className = 'book-details';
                bookDetails.innerHTML = `
                    <p><strong>Title:</strong> ${title}</p>
                    <p><strong>Author:</strong> ${author}</p>
                    <p><strong>Year:</strong> ${year}</p>
                    <p><strong>Available Copies:</strong> ${availableCopies}</p>
                    <button class="add-to-cart" onclick="addToCart('${book}', '${title}', '${author}', ${availableCopies})">Add to Cart</button>
                `;

                bookContainer.appendChild(bookCover);
                bookContainer.appendChild(bookDetails);
                bookList.appendChild(bookContainer);
            });
        }




      



       





 // Fetch book data from Open Library API
        fetch('https://openlibrary.org/subjects/history.json?limit=10')
            .then(response => response.json())
            .then(data => {
                displayHBooks(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });

        // Display books on the page
        function displayHBooks(data) {
            const bookList = document.getElementById('bookList3');

            data.works.forEach(work => {
                const book = work.cover_edition_key;
                const title = work.title;
                const author = work.authors[0]?.name || 'Unknown';
                
                const year = work.first_publish_year ? work.first_publish_year : 'Unknown';
                const availableCopies = getRandomNumber(0, 10);

                const bookContainer = document.createElement('div');
                bookContainer.className = 'book-container';

                // Create book cover element
                const bookCover = document.createElement('img');
                bookCover.className = 'book-cover';
                bookCover.src = `https://covers.openlibrary.org/b/olid/${book}-M.jpg`;

                // Create book details element
                const bookDetails = document.createElement('div');
                bookDetails.className = 'book-details';
                bookDetails.innerHTML = `
                    <p><strong>Title:</strong> ${title}</p>
                    <p><strong>Author:</strong> ${author}</p>
                    <p><strong>Year:</strong> ${year}</p>
                    <p><strong>Available Copies:</strong> ${availableCopies}</p>
                    <button class="add-to-cart" onclick="addToCart('${book}', '${title}', '${author}', ${availableCopies})">Add to Cart</button>
                `;

                bookContainer.appendChild(bookCover);
                bookContainer.appendChild(bookDetails);
                bookList.appendChild(bookContainer);
            });
        }




        

  



        
 // Fetch book data from Open Library API
 fetch('https://openlibrary.org/subjects/biography.json?limit=10')
 .then(response => response.json())
 .then(data => {
     displayBioBooks(data);
 })
 .catch(error => {
     console.error('Error:', error);
 });

// Display books on the page
function displayBioBooks(data) {
 const bookList = document.getElementById('bookList4');

 data.works.forEach(work => {
     const book = work.cover_edition_key;
     const title = work.title;
     const author = work.authors[0]?.name || 'Unknown';
     
     const year = work.first_publish_year ? work.first_publish_year : 'Unknown';
     const availableCopies = getRandomNumber(0, 10);

     const bookContainer = document.createElement('div');
     bookContainer.className = 'book-container';

     // Create book cover element
     const bookCover = document.createElement('img');
     bookCover.className = 'book-cover';
     bookCover.src = `https://covers.openlibrary.org/b/olid/${book}-M.jpg`;

     // Create book details element
     const bookDetails = document.createElement('div');
     bookDetails.className = 'book-details';
     bookDetails.innerHTML = `
         <p><strong>Title:</strong> ${title}</p>
         <p><strong>Author:</strong> ${author}</p>
         <p><strong>Year:</strong> ${year}</p>
         <p><strong>Available Copies:</strong> ${availableCopies}</p>
         <button class="add-to-cart" onclick="addToCart('${book}', '${title}', '${author}', ${availableCopies})">Add to Cart</button>
     `;

     bookContainer.appendChild(bookCover);
     bookContainer.appendChild(bookDetails);
     bookList.appendChild(bookContainer);
 });
}











 // Fetch book data from Open Library API
 fetch('https://openlibrary.org/subjects/arts.json?limit=10')
 .then(response => response.json())
 .then(data => {
     displayArtBooks(data);
 })
 .catch(error => {
     console.error('Error:', error);
 });

// Display books on the page
function displayArtBooks(data) {
 const bookList = document.getElementById('bookList5');

 data.works.forEach(work => {
     const book = work.cover_edition_key;
     const title = work.title;
     const author = work.authors[0]?.name || 'Unknown';
     
     const year = work.first_publish_year ? work.first_publish_year : 'Unknown';
     const availableCopies = getRandomNumber(0, 10);

     const bookContainer = document.createElement('div');
     bookContainer.className = 'book-container';

     // Create book cover element
     const bookCover = document.createElement('img');
     bookCover.className = 'book-cover';
     bookCover.src = `https://covers.openlibrary.org/b/olid/${book}-M.jpg`;

     // Create book details element
     const bookDetails = document.createElement('div');
     bookDetails.className = 'book-details';
     bookDetails.innerHTML = `
         <p><strong>Title:</strong> ${title}</p>
         <p><strong>Author:</strong> ${author}</p>
         <p><strong>Year:</strong> ${year}</p>
         <p><strong>Available Copies:</strong> ${availableCopies}</p>
         <button class="add-to-cart" onclick="addToCart('${book}', '${title}', '${author}', ${availableCopies})">Add to Cart</button>
     `;

     bookContainer.appendChild(bookCover);
     bookContainer.appendChild(bookDetails);
     bookList.appendChild(bookContainer);
 });
}

