const mongoose = require('mongoose');

const excelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    usn: { type: String, required: true, unique: true }, 
    emailid: { type: String, required: true, unique: true },
    cgpa: { type: Number, required: true, min: 0, max: 10 }, 
    twelfthMarks: { type: Number, required: true, min: 0, max: 100 } 
}, { timestamps: true });

const ExcelData = mongoose.model('ExcelData', excelSchema);

module.exports = ExcelData;
