class Book {
    constructor(book_own_id, book_subject_id,
        book_name, book_author, book_imageUrl, book_description, book_price, available_status) {
        this.book_own_id = book_own_id,
            this.book_subject_id = book_subject_id,
            this.book_name = book_name,
            this.book_author = book_author,
            this.book_imageUrl = book_imageUrl,
            this.book_description = book_description,
            this.book_price = book_price,
            this.available_status = available_status
    }
}

export default Book;