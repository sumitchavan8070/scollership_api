const express = require("express");
const axios = require("axios");
const puppeteer = require("puppeteer"); // Import Puppeteer
const router = express.Router();
router.use(express.json());

router.get("/", async (req, res) => {
  try {
    const accessToken = await getAccessToken();
    res.status(200).json({ accessToken });
  } catch (error) {
    console.error("Failed to retrieve access token:", error);
    res.status(500).json({ error: "Failed to retrieve access token" });
  }
});

async function getAccessToken() {
  let browser;
  try {
    browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    await page.goto("https://www.buddy4study.com/");
  
    const accessToken = await page.evaluate(() => {
      return localStorage.getItem("accessToken");
    });
  
    return accessToken;
  } catch (error) {
    console.error("Error while getting access token:", error);
    throw new Error("Failed to retrieve access token");
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

module.exports = router;
