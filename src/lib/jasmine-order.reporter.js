jasmineRequire.OrderReporter = function (karma) {
    this.jasmineStarted = function ({ order }) {
        karma.info({ type: 'Jasmine Order Reporter', seedInfo: `Started with seed ${order.seed}` });
    };

    this.jasmineDone = function ({ order }) {
        karma.info({ type: 'Jasmine Order Reporter', seedInfo: `Done with seed ${order.seed}` });
    }
}
