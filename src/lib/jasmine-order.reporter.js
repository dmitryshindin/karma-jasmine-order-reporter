jasmineRequire.OrderReporter = function (karma) {
    this.jasmineStarted = function ({ order }) {
        karma.info({ type: 'Jasmine Order Reporter', log: `Started with seed ${order.seed}` });
    };

    this.jasmineDone = function ({ order }) {
        karma.info({ type: 'Jasmine Order Reporter', log: `Done with seed ${order.seed}` });
    }
}
