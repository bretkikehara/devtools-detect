module.exports = function(config) {
  function isOSX() {
    return process.platform === 'darwin';
  }
  function filter(arr) {
    return arr.filter((item) => {
      return !!item;
    });
  }
  config.set({
    basePath: '.',
    frameworks: ['mocha', 'chai', 'karma-typescript'],
    browsers: filter(['Chrome', 'Firefox', isOSX() && 'Safari']),
    files: [
      'src/**/*.ts',

    ],
    preprocessors: {
      '**/*.ts': 'karma-typescript',
    },
    reporters: ['mocha', 'karma-typescript'],
    singleRun: true,
  });
};
