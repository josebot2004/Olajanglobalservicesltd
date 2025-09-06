import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Health Check Route
app.get("/", (req, res) => {
  res.status(200).send("🚀 Olajan Global Services AI Server is running!");
});

// ✅ Chatbot Endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({ status: "error", reply: "⚠️ Please provide a message." });
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini", // Options: "gpt-4o-mini", "gpt-4o", "gpt-3.5-turbo"
        messages: [
          {
            role: "system",
            content:
              "You are a helpful AI assistant for the Olajan Global Services website. Respond politely, clearly, and professionally.",
          },
          { role: "user", content: message },
        ],
        max_tokens: 300,
        temperature: 0.7,
      }),
    });

    // Handle non-OK OpenAI responses
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("❌ OpenAI API error:", errorData);
      return res.status(response.status).json({
        status: "error",
        reply: errorData.error?.message || "⚠️ Error from OpenAI API.",
      });
    }

    const data = await response.json();

    res.json({
      status: "success",
      reply: data.choices?.[0]?.message?.content?.trim() || "⚠️ No response generated.",
    });
  } catch (err) {
    console.error("❌ Server error:", err);
    res.status(500).json({ status: "error", reply: "⚠️ Something went wrong. Try again later." });
  }
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
