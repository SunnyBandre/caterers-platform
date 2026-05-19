const mongoose = require("mongoose");
require("dotenv").config();

const Caterer = require("./models/Caterer");

const data = [
  {
    name: "Royal Caterers",
    location: "Mumbai",
    pricePerPlate: 500,
    cuisines: ["Indian", "Chinese"],
    rating: 4.5,
  },
  {
    name: "Food Fiesta",
    location: "Pune",
    pricePerPlate: 350,
    cuisines: ["South Indian"],
    rating: 4.2,
  },
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    await Caterer.deleteMany();

    await Caterer.insertMany(data);

    console.log("Data Seeded");

    process.exit();
  })
  .catch((err) => console.log(err));
