const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/calculate-percentage', (req, res) => {
    const { value, total } = req.body;

    if (value === undefined || total === undefined) {
        return res.status(400).json({ error: "Please provide both 'value' and 'total'." });
    }

    const valueNumber = parseFloat(value);
    const totalNumber = parseFloat(total);

    // Validate that both are valid numbers and total is not zero
    if (isNaN(valueNumber) || isNaN(totalNumber) || totalNumber === 0) {
        return res.status(400).json({ error: "Please provide valid numbers for value and total. Total must not be zero." });
    }

    // Calculate percentage
    const percentage = (valueNumber / totalNumber) * 100;

    res.json({ percentage });
});

app.listen(port, () => {
    console.log(`Percentage Calculator API running on http://localhost:${port}`);
});