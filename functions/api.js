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
  const API_NEWS = process.env.API_NEWS;

  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const startIndex = (page - 1) * limit;

  const url = `https://newsapi.org/v2/everything?q=frontend OR javascript OR reactjs OR UX OR css OR accesibility OR webdevelopment OR webdesign OR UI&language=en&searchIn=title&excludeDomains=bbc.com,removed.com,abduzeedo.com,lannonbr.com,yuanchuan.dev&apiKey=${API_NEWS}`;
  try {
    const response = await axios.get(url);
    const articles = response.data.articles;
    const paginatedArticles = articles.slice(startIndex, startIndex + limit);

    res.json(paginatedArticles);

    // res.json(response.data.articles);
  } catch (error) {
    console.error("Error fetching articles:", error);
    res.status(500).json({ error: "Error fetching articles" });
  }
});

app.use("/.netlify/functions/api", router);

export const handler = serverless(app);
