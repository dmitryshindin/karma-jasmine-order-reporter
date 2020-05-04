var createPattern = function (path) {
    return { pattern: path, included: true, served: true, watched: false };
};

var OrderReporter = function (config) {
    const files = config.files;

    files.splice(
        files.length - 1,
        0,
        createPattern(__dirname + '/lib/jasmine-order.reporter.js'),
        createPattern(__dirname + '/lib/jasmine-order.adapter.js')
    );
};

module.exports = {
    "reporter:jasmine-order": ["type", OrderReporter]
};