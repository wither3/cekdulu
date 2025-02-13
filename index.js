const express = require("express");
const axios = require("axios");
const cors = require("cors"); // Import CORS

const app = express();

// Aktifkan CORS untuk semua permintaan
app.use(cors());

const FIREBASE_URL = "https://tempatrahasia-201bd-default-rtdb.asia-southeast1.firebasedatabase.app/data.json";

// Route untuk mengambil data dari Firebase
app.get("/cek/dataku", async (req, res) => {
  try {
    const response = await axios.get(FIREBASE_URL);
    
    res.setHeader("Cache-Control", "no-store, max-age=0");
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Gagal mengambil data JSON" });
  }
});

// ❌ Jangan gunakan `app.listen()` di Vercel!
module.exports = app;
