const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
app.use(express.json());
 
const contestRouter = require("./routes/schedule");

router.use("/schedule", contestRouter);


app.use(cors({ origin: true, credentials: true }));
app.use("/", router);

const PORT = 7000;
app.listen(PORT, () => {
  console.log(`Server is http://localhost:${PORT}`);
});
