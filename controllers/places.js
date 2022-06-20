const router = require('express').Router()
const places = require('../models/places.js')

//INDEX
router.get('/', (req, res) => {
  db.Place.find()
  .then((places) => {
    res.render('places/index', {places})
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

//create
router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
    res.redirect('/places')
  })
  .catch(err => {
    if (err && err.name == 'ValidationError'){
      let message = 'Validation Error:'
      for (var field in err.errors){
        message += `${field} was ${err.errors[field].value}.`
        message += `${err.errors[field].message}`
      }
      res.render('places/new', {message})
    }
    else {
      res.render('error404')
    }
  })
})


//New
router.get('/new', (req, res) => {
    res.render('places/new')
  })
//show
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
    console.log(place.comments)
    res.render('places/show', {place})
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

//update
router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id,req.body)
  .then(() => {
    res.redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

//delete
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
  .then(place => {
    res.redirect('/places')
  })
  .catch(err => {
    res.render('error404')
  })
})
  router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })
  
  
router.get('/', (req, res) => {
    res.render('places/index', {places})
})

module.exports = router
