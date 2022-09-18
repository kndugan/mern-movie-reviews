import express from 'express';
import MoviesController from './movies.controller.js';
import ReviewsController from './reviews.controller.js'

// get access to Express Router
const router = express.Router();

router.route('/').get(MoviesController.apiGetMovies)

router  
    .route("/review")
    .post(ReviewsController.apiPostReview)
    .put(ReviewsController.apiUpdateReview)
    .delete(ReviewsController.apiDeleteReview)

// router.route('/').get((req,res) => res.send('hello world'));

export default router;