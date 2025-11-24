const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(express.static('public'));

// Fake visa requirements for 30 countries
const visaData = {
    "France": "Tourist visa required for stays over 90 days. Schengen visa needed.",
    "Germany": "Schengen visa required. Passport must be valid for 6 months.",
    "United States": "ESTA required for visa waiver program or tourist visa B2.",
    "Canada": "Electronic Travel Authorization (eTA) required or tourist visa.",
    "Australia": "Visitor visa (subclass 600) required. eVisitor for some countries.",
    "Japan": "Visa required for stays over 90 days. Short-term visa may be exempt.",
    "China": "Tourist visa (L) required. Apply in advance at embassy.",
    "Brazil": "Tourist visa required for some countries, check local embassy.",
    "India": "E-Visa or tourist visa required. Passport must be valid 6 months.",
    "Russia": "Tourist visa required. Invitation letter needed for application.",
    "Italy": "Schengen visa required. Passport valid for 3+ months beyond stay.",
    "Spain": "Schengen visa required. No work allowed on tourist visa.",
    "Mexico": "Tourist visa may be required depending on nationality.",
    "South Africa": "Tourist visa required for stays over 90 days.",
    "Egypt": "Visa on arrival or e-Visa for most tourists.",
    "Turkey": "E-Visa required for most nationalities.",
    "Saudi Arabia": "Tourist visa required. Apply online for e-Visa.",
    "Argentina": "Tourist visa required for some countries.",
    "Sweden": "Schengen visa required. Passport valid 3+ months beyond stay.",
    "Norway": "Schengen visa required. Entry denied if conditions not met.",
    "Netherlands": "Schengen visa required. Passport must be valid for 3 months.",
    "Switzerland": "Schengen visa required. Proof of accommodation needed.",
    "Thailand": "Tourist visa required for stays over 30 days.",
    "Singapore": "Visa required for stays over 30 days. Short-term exemptions apply.",
    "South Korea": "Visa required for stays over 90 days. K-ETA may be needed.",
    "New Zealand": "Visitor visa required. Passport valid 3+ months beyond stay.",
    "Kenya": "E-Visa required. Passport must be valid 6 months.",
    "Morocco": "Visa not required for stays under 90 days for many countries.",
    "Greece": "Schengen visa required. Passport valid for 3+ months.",
    "Portugal": "Schengen visa required. Proof of funds needed."
};

// Endpoint to fetch visa info
app.get('/visa/:country', (req, res) => {
    const country = req.params.country;
    if (visaData[country]) {
        res.json({ requirements: visaData[country] });
    } else {
        res.json({ message: "We don't have this country in our database." });
    }
});

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log("Visa app running at http://0.0.0.0:" + PORT);
});
