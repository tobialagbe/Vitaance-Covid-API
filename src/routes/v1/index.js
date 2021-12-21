const express = require('express');
const covidRoute = require('./covid.route');

const router = express.Router();

const routes = [
  {
    path: '/covid',
    route: covidRoute,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
