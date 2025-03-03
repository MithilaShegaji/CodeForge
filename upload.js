const express = require('express');
const multer = require('multer');
const XLSX = require('xlsx');
const mongoose = require('mongoose');
const ExcelData = require('./Model/ExcelData'); // Import your model

const router = express.Router();

// Configure Multer for file uploads
const storage = multer.memoryStorage(); // Store file in memory
const upload = multer({ storage: storage });

router.post('/upload', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) return res.status(400).send("No file uploaded");

        // Read the uploaded file
        const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
        const sheetName = workbook.SheetNames[0];
        const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

        // Insert each row into MongoDB
        await ExcelData.insertMany(data);

        res.status(200).send({ message: "Excel data uploaded successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error processing the file");
    }
});

module.exports = router;
