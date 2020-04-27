var express = require("express")
var router = express.Router()

router.get("/", function(req, res, next) {
  res.render("index", { title: "Code Cooperative", url: req.path })
})

router.get("/program", function(req, res, next) {
  res.render("program", {
    title: "Programs - Code Cooperative",
    url: req.path,
  })
})

router.get("/support", function(req, res, next) {
  res.render("get-involved", {
    title: "Get Involved - Code Cooperative",
    url: req.path,
  })
})

router.get("/team", function(req, res, next) {
  res.render("team", {
    title: "Team - Code Cooperative",
    url: req.path
  })
})

router.get("/agency", function(req, res, next) {
  res.render("agency", {
    title: "Agency - Code Cooperative",
    url: req.path,
  })
})

module.exports = router
