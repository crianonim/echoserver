var express = require("express");
var router = express.Router();
const contentRouter = require("./content").router;

// if ?delay=secs is specified then delay processing
router.use((req, res, next) => {
  if (req.query.delay) {
    setTimeout(next, req.query.delay * 1000);
  } else {
    next();
  }
});

// ?status=[code] returns status code
router.use((req, res, next) => {

  if (req.query.status) {
    res.sendStatus(req.query.status);
  } else {
    next();
  }
});

router.use("/content", contentRouter);

router.all("*",function(req, res, next) {
  let payload = {
    method: req.method,
    body: req.body,
    url: req.url,
    baseUrl: req.baseUrl,
    query: req.query,
    youSentHeaders: req.headers,
    rawHeaders: req.rawHeaders,
    processingTimestamp: Date.now(),
    yourLuckyNumber: (Math.random() * 100) >> 0
  };
  res.json(payload);
});

module.exports = router;
