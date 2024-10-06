const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json([
    {
      id: "1",
      title: "Book Review: Jai balayaa..........",
    },
    {
      id: "2",
      title: "Book Review: Jai NTR",
    },
    {
      id: "2",
      title: "Book Review: Jai Prabas",
    },
  ]);
});

app.listen(4000, () => {
  console.log("Listening for requests on port 4000....... ");
});
