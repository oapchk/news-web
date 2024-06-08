import axios from "axios";

exports.handler = async (event, context) => {
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
    return {
      statusCode: 200,
      body: JSON.stringify(response.data.articles),
    };
  } catch (error) {
    console.error("Error fetching articles:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error fetching articles" }),
    };
  }
};
