console.log( 'date-utils executed' );

console.log( 'inside date-utils | global.appName = ' + global.appName );

module.exports.getFormattedDate = function( date ) {
    var formattedDate = date.toDateString() + ' | ' + date.toTimeString();
    return formattedDate;
};

module.exports.getFormattedLocaleDate = function( date ) {
    var formattedDate = date.toLocaleDateString() + ' | ' + date.toLocaleTimeString();
    return formattedDate;
};

// you can export any kind of value
// usually we export an object/function
// module.exports = {
//     getFormattedDate,
//     getFormattedLocaleDate
// };