class Library {
  constructor() {
    this.shelf = [];
  }

  load(bookList) {
    this.shelf = bookList;
  }

  addBook(book) {
    this.shelf.push(book);
  }

  removeBook(book) {
    const index = this.shelf.findIndex(b => b.title === book.title && b.author === book.author);
    if (index !== -1) {
      this.shelf.splice(index, 1);
    }
  }

  findBookByTitle(title) {
    return this.shelf.find(book => book.title === title);
  }

  findBooksByAuthor(author) {
    return this.shelf.filter(book => book.author === author);
  }

  findBooksByCategory(category) {
    return this.shelf.filter(book => book.genre === category);
  }
}

export { Library };