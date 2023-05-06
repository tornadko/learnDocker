const configuration = require("./src/configuration");
const db = require("./src/utils/db");
const { User } = require("./src/models/user");
const express = require("express");

const app = express();

app.get("/test", (req, res) => {
  res.send("Service is working correctly v2");
});

app.get("/users", async (req, res) => {
  try {
    const user = new User({ firstName: "John", lastName: "Doe" });
    await user.save();
    const users = await User.find();
    res.json({ users });
  } catch (error) {
    res.send({ error });
  }
});

const runWebService = () => {
  app.listen(configuration.PORT, () => {
    console.log(`API-service is working on port ${configuration.PORT}`);
    console.log(`Host is ${configuration.HOST}`);
  });
};

db.connect(
  configuration.MONGO_URL,
  () => {
    console.log(`Connected to Mongo ${configuration.MONGO_URL}`);
    runWebService();
  },
  (error) => {
    console.error(
      `Error connecting to Mongo ${configuration.MONGO_URL}`,
      error
    );
  }
);
