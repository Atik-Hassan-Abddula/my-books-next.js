import React from 'react';
import BooksCard from '../Components/BooksCard';

const getBooks = async ()=>{
    const res = await fetch('http://localhost:5000/books',{next:{revalidate:20}})
    if(!res.ok){
         throw new Error("no jason")
    }
    return res.json()
}

const Bookspage = async () => {
    const books = await getBooks()
    return (
        <div>
            <h1>books page {books.length} </h1>
            <div className='grid grid-cols-3 gap-4'>
                {
                    books.map(books=><BooksCard key={books.id} books={books}></BooksCard>)
                }
            </div>
        </div>
    );
};

export default Bookspage;