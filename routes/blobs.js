var express = require('express');
var router = express.Router();
var blobs = []
/* GET blobs listing. */
router.get('/', function(req, res, next) {
  res.json(blobs);
});
router.post('/', function(req, res, next) {
  var data = '';
  req.on("data", chunk => { data += chunk })
  req.on("end", () => {
    res.send("Notice saved");
    blobs.push(data.toString());
  });
});
router.delete('/', function(req, res, next) {
  var data = '';
  req.on("data", chunk => { data += chunk })
  req.on("end", () => {
    blobs.splice(Number(data), 1)
    res.send("Notice deleted");
  });
});
module.exports = router;
