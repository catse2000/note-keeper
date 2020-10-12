const router = require('express').Router(); //import router so as to make express functions useable through other parts of the application
const noteRoutes = require('../apiRoutes/noteRoutes'); //import routes in apiRoutes

router.use(noteRoutes); //connect express to apiRoutes

module.exports = router; //export router so these routes can be used in other parts of the application