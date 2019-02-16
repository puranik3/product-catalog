function getFormattedTime( date ) {
    var formattedTime = date.getHours() + ':' + date.getMinutes();
    return formattedTime;
}

module.exports = {
    getFormattedTime
};