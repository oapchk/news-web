import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const port = 3001;

// const corsOptions = {
//   origin: "http://localhost:5173",
// };

app.use(cors());
app.get("/trending", async (req, res) => {
  // res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173"); // Dodaj ten nagłówek
  // res.setHeader(
  //   "Access-Control-Allow-Methods",
  //   "GET, POST, PUT, DELETE, OPTIONS"
  // ); // Dodaj ten nagłówek
  try {
    const response = await axios.get("https://newsapi.org/v2/everything", {
      params: {
        q: "frontend OR javascript OR reactjs OR UX OR css OR accesibility OR webdevelopment OR webdesign OR UI OR design",
        language: "en",
        searchIn: "title",
        excludeDomains: "removed.com,abduzeedo.com,lannonbr.com,yuanchuan.dev",
        apiKey: "23bdd785bf37417593f01b78b4c57a10",
      },
    });
    console.log("Backend data:", response.data);
    res.json(response.data.articles);
  } catch (error) {
    console.error("Error fetching articles:", error);
    res.status(500).json({ error: "Error fetching articles" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
