const {Router} = require('express');
const {home, details, search} = require('../controllers/catalog');
const { about } = require('../controllers/about');
const { createGet } = require('../controllers/movie');
const { notFound } = require('../controllers/404');

const router = Router();

router.get('/', home);
router.get('/details/:id', details);
router.get('/about', about);
router.get('/create', createGet);
router.get('/search', search);

router.get('*', notFound);

module.exports = {
    router
}