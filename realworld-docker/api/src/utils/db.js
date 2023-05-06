const mongoose = require("mongoose");

module.exports.connect = (uri, onSuccess, onError) => {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on("error", onError);
  db.once("open", onSuccess);
};
