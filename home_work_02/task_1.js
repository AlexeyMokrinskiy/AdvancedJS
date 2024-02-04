// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class Library {
  //приватное свойство для хранения списка книг
  #books = [];

  // геттер для получения текущего списка книг
  get allBooks() {
    return this.#books.join(", ");
  }

  // Метод добавления книги в библиотеку
  addBook(title) {
    try {
      if (this.#books.includes(title)) {
        throw new Error("Ошибка: Такая книга уже есть");
      }
      this.#books.push(title);
      return this.#books.join(", ");
    } catch (error) {
      return error.message;
    }
  }

  // Метод удаления книги из библиотеки
  removeBook(title) {
    try {
      if (!this.#books.includes(title)) {
        throw new Error("Ошибка: Такой книги нет в списке");
      }
      const titleId = this.#books.indexOf(title);
      this.#books.splice(titleId, 1);
      return this.#books.join(", ");
    } catch (error) {
      return error.message;
    }
  }

  // Метод проверки наличия книги в библиотеке
  hasBook(title) {
    return this.#books.includes(title);
  }

  constructor(initialBookList) {
    const uniqueList = [...new Set(initialBookList)];
    if (uniqueList.length !== initialBookList.length) {
      throw new Error("Список содержит дубликаты");
    }
    this.#books = initialBookList;
  }
}

const bookList = ["Biology", "Chemistry", "English", "History"];

// Создаем библиотеку
let library = new Library(bookList);
console.log(library.allBooks); // Выводит: Biology, Chemistry, English, History

// Добавление новой книги
console.log(library.addBook("Geography")); // Выводит: Biology, Chemistry, English, History, Geography

console.log(library.addBook("Biology")); // Ошибка: Такая книга уже есть

// Удаление книги из списка
console.log(library.removeBook("Biology")); // Выводит: Chemistry, English, History, Geography
console.log(library.removeBook("Fairytales")); // Ошибка: Такой книги нет в списке

//Проверка наличия книги в библиотеке
console.log(library.hasBook("Chemistry")); // Выводит true, т.к. книга есть в библиотеке
console.log(library.hasBook("Biology")); // Выводит false, т.к. мы ранее удалили книгу 'Biology'
