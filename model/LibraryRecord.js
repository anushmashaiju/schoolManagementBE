import mongoose from 'mongoose';

const libraryHistorySchema = new mongoose.Schema({
    bookId: String,
    bookName: String,
    authorName: String,
    borrowDate: Date,
    returnDate: Date,
    status: String,
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' }
});

const LibraryHistory = mongoose.model('LibraryHistory', libraryHistorySchema);

export default LibraryHistory;
