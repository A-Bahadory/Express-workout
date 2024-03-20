const express = require("express");
// then we create a router , router is a mini application which in inside the app
const router = express.Router();
router.get("/", (req, res) => {
  res.send("User list");
});

router.get("/new", (req, res) => {
  res.send("user new form");
});

//creating new users
router.post("/", (req, res) => {
  res.send("Create User");
});

//in order to create a dynamically we start it with : and the name or id we want to giv it
//router.get("/:id", (req, res) => {
// in order to access the dynamic parameter we use req.params.id or name
//req.params.id;
//res.send(`Get user with ID ${req.params.id}`);
//});
// Note: always make sure if we have a route that is static , it should go above of dynamic route

//bellow code we used 3 different method get , put and delete, which they all have similar id .
// in order to make it all in one route or simple express come with another method called (route).

//using route method
router
  .route("/:id")
  .get((req, res) => {
    res.send(`Get user with ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update user with ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete user with ID ${req.params.id}`);
  });

// router.get("/:id", (req, res) => {
//   res.send(`Get user with ID ${req.params.id}`);
// });

// router.put("/:id", (req, res) => {
//   res.send(`Update user with ID ${req.params.id}`);
// });

// router.delete("/:id", (req, res) => {
//   res.send(`Delete user with ID ${req.params.id}`);
// });

//param function : this function gong to run anytime find a param that match the name you pass in.
//example in this code below it going to look for id param
router.param("id", (req, res, next, id) => {
  //console.log(id);
});
//to export router
module.exports = router;
