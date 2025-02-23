const books = {
    book1:{name:"book1",describe:"第一本书",picture:"images/1.jpg",price:100},
    book2:{name:"book2",describe:"第二本书",picture:"images/2.jpg",price:200},
    book3:{name:"book3",describe:"第三本书",picture:"images/3.jpg",price:300},
}

const bookContainer = document.querySelector(".book-container");

for (const key in books){
    const book = books[key];
    const bookItem = document.createElement('div');
    bookItem.className = 'book-item';

    const link = document.createElement('a');
    link.href = book.picture;
    link.title = book.describe; // 鼠标悬停时显示的文本信息

    const img = document.createElement('img');
    img.src = book.picture;
    img.alt = book.name;

    const title = document.createElement('h3');
    title.textContent = book.name;
    link.appendChild(img);
    bookItem.appendChild(link);
    bookItem.appendChild(title);
    bookContainer.appendChild(bookItem);
}