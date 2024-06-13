import express, { Router } from "express";
import serverless from "serverless-http";
import axios from "axios";
import cors from "cors";

const app = express();
const router = Router();

const allowedDomains = [
  "http://localhost:5173",
  "https://news-frontend.netlify.app",
];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedDomains.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

router.get("/trending", async (req, res) => {
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
    res.json(response.data.articles);
  } catch (error) {
    console.error("Error fetching articles:", error);
    res.status(500).json({ error: "Error fetching articles" });
  }
});

app.use("/.netlify/functions/api", router);

export const handler = serverless(app);
