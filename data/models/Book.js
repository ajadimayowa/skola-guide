class Book {
    constructor(book_id, book_category,
        book_name, book_author, book_imageUrl, book_description) {
        this.book_id = book_id,
            this.book_category = book_category,
            this.book_name = book_name,
            this.book_author = book_author,
            this.book_imageUrl = book_imageUrl,
            this.book_description = book_description
    }
}

export default Book;