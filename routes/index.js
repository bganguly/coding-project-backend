var express = require('express');
var router = express.Router();
const app = express();

// enable static assets to be served out from <root>/public
app.use(express.static("public"));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.render('index', { title: 'Express' });
});

module.exports = router;
