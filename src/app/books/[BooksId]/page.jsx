import React from 'react';

const page = async (params) => {
    const {BooksId}=await params

    const resolve = await fetch(`http://localhost:5000/books/${BooksId}`)
    const books = await resolve.json()
    return (
        <div>
            <h1>boos Id </h1>
            {books.id}
        </div>
    );
};

export default page;