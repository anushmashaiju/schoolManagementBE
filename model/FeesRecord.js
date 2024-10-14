import mongoose from 'mongoose';

const feesHistorySchema = new mongoose.Schema({
   
    amount: Number,
    paymentDate: Date,
    status: String,
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' }
});

const FeesHistory = mongoose.model('FeesHistory', feesHistorySchema);
export default FeesHistory;
