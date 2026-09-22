import Link from 'next/link';
import React from 'react';

const BooksCard = ({books}) => {
    const {id,title,description}=books
    return (
      <div className="card card-dash bg-base-100 w-96">
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
     <Link href={`/books/${id}`}>
      <button className="btn btn-primary">Vist Now</button>
     </Link>
    </div>
  </div>
</div>
    );
};

export default BooksCard;