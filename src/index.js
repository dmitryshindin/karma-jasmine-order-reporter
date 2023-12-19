var createPattern = function (path) {
    return {pattern: path, included: true, served: true, watched: false};
};

var OrderReporter = function (config, baseReporterDecorator, emitter) {
    const files = config.files;

    baseReporterDecorator(this);

    const hasOtherReporters = config.reporters.length > 1;

    // Copied from "karma-jasmine-diff-reporter" source code:
    // In case, when multiple reporters are used in conjunction
    // with initSourcemapReporter, they both will show repetitive log
    // messages when displaying everything that supposed to write to terminal.
    // So just suppress any logs from initSourcemapReporter by doing nothing on
    // browser log, because it is an utility reporter,
    // unless it's alone in the "reporters" option and base reporter is used.
    if(hasOtherReporters) {
        this.writeCommonMsg = function () {
        };
    }

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
        reporter.write(`\n${data.type.toUpperCase()}: ${data.seedInfo}\n`);
    });
};

OrderReporter.$inject = ['config', 'baseReporterDecorator', 'emitter'];

module.exports = {
    "reporter:jasmine-order": ["type", OrderReporter]
};