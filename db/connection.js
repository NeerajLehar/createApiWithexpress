const mongoose = require("mongoose");

// make connection to database
mongoose
  .connect(
    `mongodb+srv://rino:9815153200@hukka1.vp7uhky.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log(`connected`);
  })
  .catch((err) => {
    console.log(err.message);
  });
