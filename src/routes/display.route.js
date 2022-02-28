const express = require('express');
const {displayHandler} = require('../handlers/display.handler');

const router = express.Router();

router.get('/', displayHandler);

module.exports = {
    displayRouter : router;
}