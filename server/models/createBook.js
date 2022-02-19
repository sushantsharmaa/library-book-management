import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    title: String,
    chapters: Number,
    thumbnailUrl: String,
    authors: [String]
})

const Book = mongoose.model('Book', bookSchema);

export default Book;