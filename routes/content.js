const express = require("express");
const router = express.Router();

const countries = [
  { country: "Poland", capital: "Warsaw" },
  { country: "United Kingdom", capital: "London" },
  { country: "France", capital: "Paris" },
  { country: "Bulgaria", capital: "Sofia" },
  { country: "Germany", capital: "Berlin" },
  { country: "Italy", capital: "Rome" }
];

router.get("/countries/:country", (req, res) => {
  const country = req.params.country;
  let data =
    countries.find(c => c.country.toLowerCase() == country.toLowerCase()) || {};
  if (country == "random") {
    data = countries[(Math.random() * countries.length) >> 0];
  }
  res.json(data);
});

router.get("/countries", (req, res) => {
  res.json(countries);
});

router.get("/", function(req, res, next) {
  res.render("index", { title: "Echo server" });
});

module.exports = router;
