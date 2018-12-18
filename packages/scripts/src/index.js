import fs from 'fs';
import path from 'path';

import minimist from 'minimist';

import commands from './common/commands';
import debounce from './common/debounce';
import build from './common/build';

function run() {
  const argv = minimist(process.argv.slice(2));

  if (argv['help']) {
    console.table(commands);
  }

  const watchDirectory = argv['watch-dir']
    ? path.join(process.cwd(), argv['watch-dir'])
    : path.join(process.cwd(), 'src');

  const configFile = argv['config-file']
    ? path.join(process.cwd(), argv['config-file'])
    : path.join(process.cwd(), 'build-scripts.conf.js');

  let config = {
    inputFile: path.join(process.cwd(), 'src', 'index.js'),
    outputDir: path.join(process.cwd(), 'dist')
  };

  if (fs.existsSync(configFile)) {
    const c = require(configFile);
    config = { ...config, ...c };
  }

  if (argv['watch-dir']) {
    if (fs.existsSync(watchDirectory)) {
      fs.watch(watchDirectory, { encoding: 'utf8' }, (event, filename) => {
        console.clear();
        console.log(`Change file ${filename}, restart build`);
        debounce(build(config), 3000);
      });
    } else throw new Error('Watch directory not exists');
  } else {
    build(config);
  }
}

run();
