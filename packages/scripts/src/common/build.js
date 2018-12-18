import path from 'path';
import rollup from 'rollup';

import inputOptions from './input-options';

export default async function build({ inputFile, outputDir }) {
  console.log('Config load params:');
  console.table({ inputFile, outputDir });
  const inputOpt = inputOptions({ inputFile, outputDir });

  const bundle = await rollup.rollup(inputOpt);

  console.log('External imports:');
  console.table(bundle.imports);

  const options = {
    sourcemap: true,
    format: 'cjs',
    file: path.join(outputDir, 'bundle.js')
  };

  await bundle.generate(options);
  await bundle.write(options);
}
