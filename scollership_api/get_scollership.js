const express = require("express");
const axios = require("axios");
const router = express.Router();
router.use(express.json());

router.post("/", async (req, res) => {
    try {
        const { accessToken } = req.body;

        // Log the access token for debugging
        console.log("Access Token:", accessToken);

        if (!accessToken) {
            return res.status(400).json({ 
                status: 0,
                response: 'Invalid request. Access token is missing in the POST body.'
            });
        }

        const response = await axios.get(
            "https://api.buddy4study.com/api/v1.0/ssms/scholarship/",
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }
        );
        


        res.status(200).json({ scholarships: response.data});



    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Failed to retrieve data" });
    }
});

module.exports = router;
