// import + export done together (ES6 feature)
const dateUtils = require( './date-utils' );
const timeUtils = require( './time-utils' );

const utils = Object.assign( {}, dateUtils, timeUtils );

module.exports = utils;