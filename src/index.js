var createPattern = function (path) {
    return { pattern: path, included: true, served: true, watched: false };
};

var OrderReporter = function (config, baseReporterDecorator) {
    const files = config.files;

    baseReporterDecorator(this);

    files.splice(
        files.length - 1,
        0,
        createPattern(__dirname + '/lib/jasmine-order.reporter.js'),
        createPattern(__dirname + '/lib/jasmine-order.adapter.js')
    );
};

OrderReporter.$inject = ['config', 'baseReporterDecorator'];

module.exports = {
    "reporter:jasmine-order": ["type", OrderReporter]
};