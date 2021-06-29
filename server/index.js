const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const PORT = 8080;
const { db } = require("./db");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "public")));
app.use("/api", require("./routes"));

db.authenticate().then(() => console.log("Connected to the database"));

app.get("/", async (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

// Handle 404s
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Error handling endware
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message || "Internal server error");
});

const init = async () => {
  await db.sync();

  app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
};

init();
