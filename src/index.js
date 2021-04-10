var createPattern = function (path) {
    return { pattern: path, included: true, served: true, watched: false };
};

var OrderReporter = function (config, baseReporterDecorator, emitter) {
    const files = config.files;

    baseReporterDecorator(this);

    files.splice(
        files.length - 1,
        0,
        createPattern(__dirname + '/lib/jasmine-order.reporter.js'),
        createPattern(__dirname + '/lib/jasmine-order.adapter.js')
    );

    const reporter = this; // self reference to use in callback

    // see https://github.com/karma-runner/karma/issues/2192#issuecomment-290230042
    emitter.on('browser_info', (browser, data) => {
        if (!data || data.type !== 'Jasmine Order Reporter') {
            return
        }
        reporter.onBrowserLog(browser, data.seedInfo, data.type);
    });
};

OrderReporter.$inject = ['config', 'baseReporterDecorator', 'emitter'];

module.exports = {
    "reporter:jasmine-order": ["type", OrderReporter]
};