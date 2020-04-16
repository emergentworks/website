var express = require("express")
var router = express.Router()

router.get("/", function(req, res, next) {
  res.render("index", { title: "the code cooperative", url: req.path })
})

router.get("/program", function(req, res, next) {
  res.render("program", {
    title: "our program - the code cooperative",
    url: req.path,
  })
})

router.get("/support", function(req, res, next) {
  res.render("get-involved", {
    title: "get involved - the code cooperative",
    url: req.path,
  })
})

router.get("/team", function(req, res, next) {
  res.render("team", { title: "team - the code cooperative", url: req.path })
})

router.get("/agency", function(req, res, next) {
  res.render("agency", {
    title: "agency - the code cooperative",
    url: req.path,
  })
})

module.exports = router
