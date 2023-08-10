const axios = require("axios");
require("dotenv").config();
const codeRunner = async (req, res) => {
  const { code, input } = req.body;
  console.log(code);
  console.log(input);
  var program = {
    script: code,
    language: "cpp17",
    versionIndex: "0",
    stdin: input,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  };
  try {
    const result = await axios.post(
      "https://api.jdoodle.com/v1/execute",
      program
    );
    res.send(result.data.output);
  } catch (error) {
    console.log("code editor mar gaya")
    res.send(error.output);
  }
};
module.exports = codeRunner;
