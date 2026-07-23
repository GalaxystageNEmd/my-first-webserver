const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <form method="POST">
      <input name="url" placeholder="https://www.youtube.com/watch?v=..." style="width:400px">
      <button>แสดงวิดีโอ</button>
    </form>
  `);
});

app.post("/", (req, res) => {
  const url = req.body.url;
  const match = url.match(/(?:v=|youtu\\.be\\/)([a-zA-Z0-9_-]{11})/);

  if (!match) {
    return res.send("ลิงก์ไม่ถูกต้อง");
  }

  const id = match[1];

  res.send(`
    <h2>วิดีโอ</h2>
    <iframe
      width="800"
      height="450"
      src="https://www.youtube.com/embed/${id}"
      frameborder="0"
      allowfullscreen>
    </iframe>
  `);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
