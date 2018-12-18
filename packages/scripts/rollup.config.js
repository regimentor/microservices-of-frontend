const babel = require('rollup-plugin-babel');
const path = require('path');
const cli = require('rollup-plugin-cli');

module.exports = {
  input: path.join('src', 'index.js'),
  output: {
    format: 'cjs',
    file: path.join('bin', 'build-scripts')
  },
  external: id => /^(@babel)/g.test(id),
  plugins: [
    babel({
      runtimeHelpers: true,
      babelrc: false,
      presets: [['@babel/preset-env', { modules: false, targets: { node: '10.14.0' } }]]
    }),
    cli()
  ]
};
