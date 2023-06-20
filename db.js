const mongoose = require("mongoose");

// Connected to MongoDB

mongoose
  .connect(
    // "mongodb+srv://anithah2711:anitha@cluster0.cfkorlw.mongodb.net/guvi",
    "mongodb+srv://anitha:tz8GUYsi6asghVPF@cluster2.w3dnkse.mongodb.net/guvi?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
    // app.listen(3000, () => {
    //   console.log("Server started on Port 3000");
    // });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error);
  });

