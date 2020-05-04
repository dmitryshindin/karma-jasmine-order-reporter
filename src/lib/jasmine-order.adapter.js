(function (_window) {
    /**
     * Create the Jasmine environment. This is used to run all specs in a project.
     */
    var jasmineEnv = jasmine.getEnv();

    /**
     * ## Reporters
     * The `OrderReporter` provides information about Jasmine random seed
     */
    var orderReporter = new jasmineRequire.OrderReporter(window.__karma__);

    jasmineEnv.addReporter(orderReporter);

})(window);