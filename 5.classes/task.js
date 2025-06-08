// Task1: Print Edition:
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount){
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
  }

  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
        this._state = 100;
    } else {
        this._state = newState;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount){
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount){
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount){
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount){
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount){
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

// Task2: Library:
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    const findBook = this.books.find(item => item[type] === value);
    return findBook ? findBook : null;
  }

  giveBookByName(bookName) {
    const index = this.books.findIndex(book => book.name === bookName);
    if (index !== -1) {
      return this.books.splice(index, 1)[0];
    }
    
    return null;
  }
}

// Test:
const library = new Library("Библиотека");

library.addBook(
  new NovelBook(
    "Эрнест Хемингуэй", 
    "Старик и море", 
    1952, 
    544)
);

library.addBook(
  new FantasticBook(
    "Герберт Уэллс", 
    "Война миров", 
    1897, 
    288
  )
);
library.addBook(
  new DetectiveBook(
    "Агата Кристи", 
    "Убийство в Восточном экспрессе", 
    1934, 
    320
  )
);

library.addBook(
  new FantasticBook(
    "Монтегю Джеймс", 
    "Дневник мистера Пойнтера", 
    1919, 
    14
  )
);

console.log(library);

console.log(library.findBookBy("releaseDate", 1919).name); //"Дневник мистера Пойнтера"

const book = library.giveBookByName("Война миров"); 
console.log(book); // "Война миров"
console.log(library);

book.state = 50;
console.log(book.state); //50

book.fix();
console.log(book.state); //75

library.addBook(book);
console.log(library);