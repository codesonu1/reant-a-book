const express = require("express");
const cors = require("cors");
const axios = require("axios");

/* 
app.post("/*", async (req, res) => {
  const { data } = await axios.post(
    "https://book-rental-system-production-0174.up.railway.app" + req.url,
    req.body
  );
  res.json(data);
});
*/

const app = express();
app.use(cors());
app.use(express.json());

app.get("/*", async (req, res) => {
  try {
    const { data } = await axios.get(
      "https://book-rental-system-production-0174.up.railway.app" + req.url,
      {
        headers: {
          Authorization: req.headers.authorization,
        },
      }
    );
    res.send(data);
  } catch (error) {
    res.status(400).json(error);
  }
});

app.post("/*", async (req, res) => {
  console.log(req.headers);
  console.log(req.body, "body");
  console.log(req.params._id, "id");

  try {
    const { data } = await axios.post(
      "https://book-rental-system-production-0174.up.railway.app" + req.url,
      req.body,

      {
        headers: {
          Authorization: req.headers.authorization,
        },
      }
    );
    res.status(200).json({
      data,
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

app.delete("/*", async (req, res) => {
  console.log(req.params._id, "id");
  try {
    const { data } = await axios.delete(
      "https://book-rental-system-production-0174.up.railway.app" + req.url,
      +req.params.id,

      {
        headers: {
          Authorization: req.headers.authorization,
        },
      }
    );
    res.status(200).json({
      data,
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

app.listen(8000, () => console.log("the server is running on port : 8000"));
