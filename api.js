// // app.js
// const express = require('express');

const express = require("express");
const puppeteer = require("puppeteer");

const getScollerShip = require("./scollership_api/get_scollership"); 
const getAccessToken = require("./scollership_api/getAccesssToken"); 


const app = express();
const port = 4000; // Choose your desired port



app.use('/api/getScollership', getScollerShip);
app.use('/api/getAccessToken', getAccessToken);
// app.use('/api/getGistData', getGistData);
// app.use('/api/checkApp', checkApp);



// Route to retrieve access token
app.get("/", async (req, res) => {
 console.log("server started"); 
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


















// app.get("/", async (req, res) => {
//   try {
//     const accessToken = await getAccessToken();
//     const response = await axios.get(
//       "https://api.buddy4study.com/api/v1.0/ssms/scholarship-detail/idfc-first-bank-mba-scholarship",
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       }
//     );

//     res.status(200).json(response.data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     res.status(500).json({ error: "Failed to retrieve data" });
//   }
// });

// async function getAccessToken() {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   await page.goto("https://www.buddy4study.com/");

//   const accessToken = await page.evaluate(() => {
//     return localStorage.getItem("accessToken");
//   });

//   await browser.close();

//   return accessToken;
// }



// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
