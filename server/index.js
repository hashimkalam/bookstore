import express from "express";

const app = express();
const PORT = 5555;

app.get("/", (req, res) => {
  console.log(req);

  return res.status(234).send("Hi i am hashim");
});

app.listen(PORT, () => {
  console.log(`App is listening to port: ${PORT}`);
});
