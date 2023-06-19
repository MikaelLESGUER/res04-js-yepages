class Book {
  constructor(title, genre, author, resume, image) {
    this._title = title;
    this._genre = genre;
    this._author = author;
    this._resume = resume;
    this._image = image;
  }

  // Getter pour le titre
  get title() {
    return this._title;
  }

  // Setter pour le titre
  set title(newTitle) {
    this._title = newTitle;
  }

  // Getter pour le genre
  get genre() {
    return this._genre;
  }

  // Setter pour le genre
  set genre(newGenre) {
    this._genre = newGenre;
  }

  // Getter pour l'auteur
  get author() {
    return this._author;
  }

  // Setter pour l'auteur
  set author(newAuthor) {
    this._author = newAuthor;
  }
  
    // Getter pour le resume
  get resume() {
    return this._resume;
  }

  // Setter pour le resume
  set resume(newResume) {
    this._resume = newResume;
  }
  
    // Getter pour l'image
  get image() {
    return this._image;
  }

  // Setter pour l'image
  set image(newImage) {
    this._image = newImage;
  }
}

export { Book };