const contactHandler = require("../handlers/contactHandler");
const { Router } = require("express");
const mainRouter = Router();

mainRouter.post('/contact', contactHandler);

module.exports = mainRouter;
