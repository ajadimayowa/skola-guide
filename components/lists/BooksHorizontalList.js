import { ScrollView } from 'react-native'
import { useState } from 'react';
import BookDescriptionCard from '../cards/BookDescriptionCard';

function BooksHorizontalList({ data }) {
    const filteredBookList = data.map((book) => {

        const [favoriteIcon, setFavoriteIcon] = useState('heart-outline')

        return <BookDescriptionCard icon={favoriteIcon} bookOwnId={book.book_own_id} key={book.book_own_id} bookTitle={book.book_name} bookAuthor={book.book_author} />
    })





    return (
        <ScrollView horizontal={true}>

            {filteredBookList}
        </ScrollView>
    )
} export default BooksHorizontalList

