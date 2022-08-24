const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

// jika page terjadi error atau tidak ada maka akan muncul error code 404
// router.use((req, res) => {
//   res.status(404).render("404", { title: "404", error: "error" });
// });

module.exports = router;
