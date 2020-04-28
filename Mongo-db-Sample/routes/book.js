const express = require('express');
const router = express.Router();
const Book = require('../models/Book');


/* GET users listing. */
router.get('/new', function(req, res, next) {
  const book = new Book({
      title: "Ahmet's third book",
      published: false,
      comments: [{
          message:"This is a trial Book"}],
      meta: {votes:5,favs:7}
  });

  book.save((err,data)=>{
      if(err){
          console.log(err);
      };

      res.json(data);
  });
  res.send("Post job is done");
});

router.get('/search',(req,res)=>{
    Book.find({published: false}, (err,data)=>{
        res.json(data);
    });
});

module.exports = router;
