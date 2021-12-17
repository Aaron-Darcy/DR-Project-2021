let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()

//Waiting List Model
let waitingSchema = require('../models/Waiting')

//create applicant
router.route('/create-waiting').post((req, res, next) => {
  waitingSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})

//read applicant
router.route('/').get((req, res) => {
  waitingSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

//Get applicant
router.route('/edit-waiting/:id').get((req, res) => {
  waitingSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

//update applicant
router.route('/update-waiting/:id').put((req, res, next) => {
  waitingSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error)
        console.log(error)
      } else {
        res.json(data)
        console.log('Applicant updated successfully !')
      }
    },
  )
})

//Delete applicant
router.route('/delete-waiting/:id').delete((req, res, next) => {
  waitingSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})

module.exports = router
