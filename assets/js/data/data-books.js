import { Book } from '../book.js';
import { Library } from '../library.js';

const library = new Library();

const books = [
  {
    title: "Harry Potter à l'école des sorciers",
    genre: "Fantasy jeunesse",
    author: "J.K. Rowling",
    resume: "blabla",
    image: "../../images/hp1.jpg"
  },
  {
    title: "Cartographie des nuages",
    genre: "Science fiction adulte",
    author: "David Mitchell",
    resume: "blabla",
    image: "../../images/Cloud_atlas.jpg"
  },
  {
    title: "La communauté de l'anneau",
    genre: "Fantasy adulte",
    author: "J.R.R Tolkien",
    resume: "blabla",
    image: "../../images/lotr.jpg"
  },
  {
    title: "Truth of the divine",
    genre: "Science fiction adulte",
    author: "Lindsay Ellis",
    resume: "blabla",
    image: "../../images/truth-of-the-divine.jpg"
  },
  {
    title: "La guerre des mondes",
    genre: "Science fiction adulte",
    author: "H.G. Wells",
    resume: "blabla",
    image: "../assets/images/war-of-the-worlds.jpg"
  }
];

library.load(books);

console.log(library.shelf);
// Affiche le tableau de livres dans la bibliothèque

const newBook = new Book("Nouveau livre", "Nouveau genre", "Nouvel auteur");
library.addBook(newBook);

console.log(library.shelf);
// Affiche le tableau de livres mis à jour avec le nouveau livre

library.removeBook(newBook);

console.log(library.shelf);
// Affiche le tableau de livres mis à jour après la suppression du nouveau livre

const bookByTitle = library.findBookByTitle("Harry Potter à l'école des sorciers");
console.log(bookByTitle);
// Affiche le livre correspondant au titre donné

const booksByAuthor = library.findBooksByAuthor("J.R.R Tolkien");
console.log(booksByAuthor);
// Affiche les livres correspondants à l'auteur donné

const booksByCategory = library.findBooksByCategory("Science fiction adulte");
console.log(booksByCategory);
// Affiche les livres correspondants à la catégorie donnée

// Exemple d'utilisation du tableau de données
console.log(books);
// Affiche le tableau de données contenant les informations des livres

console.log(books[0].title);
// Affiche le titre du premier livre dans le tableau

console.log(books.length);
// Affiche le nombre total de livres dans le tableau

console.log(books[0].image);
// Affiche le chemin de l'image