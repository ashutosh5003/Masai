const library = {
    books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],
  
    addBook({ title, author, year }) {
      if (!title || !author || !year || typeof year !== "number") {
        throw new Error("Invalid book details. Ensure title, author, and year are provided correctly.");
      }
      this.books.push({ title, author, year });
    },
  
    findBookByTitle(title) {
      return this.books.find(book => book.title === title) || "Book not found.";
    },
  
    removeBook(title) {
      const index = this.books.findIndex(book => book.title === title);
      if (index !== -1) {
        this.books.splice(index, 1);
        return `"${title}" has been removed.`;
      } 
      return "Book not found.";
    }
  };