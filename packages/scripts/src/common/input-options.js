import babel from 'rollup-plugin-babel';

export default function({ inputFile, outputDir }) {
  return {
    input: inputFile,
    external: id => /^(@babel|@regimentor)/g.test(id),
    plugins: [
      babel({
        runtimeHelpers: true,
        babelrc: false,
        presets: ['@babel/preset-react', ['@babel/preset-env', { modules: false }]],
        plugins: [
          '@babel/plugin-external-helpers',
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-proposal-object-rest-spread',
          ['@babel/plugin-transform-runtime', { helpers: true, regenerator: true }]
        ]
      })
    ]
  };
}
