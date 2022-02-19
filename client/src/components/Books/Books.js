import React from "react";
import { useSelector } from 'react-redux';
import Book from "./Book/Book";

import useStyles from './styles';
  
const Books = () => {
    const books = useSelector((state) => state.books)
    const classes = useStyles();

    return (
        <>
         
        </>
    );
}

export default Books;