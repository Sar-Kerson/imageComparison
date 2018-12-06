'use strict';

const carlo = require('carlo');
const fs = require('fs');
const path = require('path');
const os = require('os');
const base = 'www/dist';

(async () => {
  const app = await carlo.launch(
      {
        bgcolor: '#e6e8ec',
        width: 800,
        height: 648 + 24,
        channel: ['canary'],
        localDataDir: path.join(os.homedir(), '.imgcomp'),
      });
  app.on('exit', () => process.exit());
  console.log('This example requires Chrome 72 (Chrome Canary) to function.');
  app.serveFolder(path.join(__dirname, base));
  await app.exposeFunction('getFileList', getFileList);
  await app.load('index.html');
})();

function getFileList(index) {
  const inDir1 = 'test1';
  const inDir2 = 'test2';
  
  var dir = index == 1 ? inDir1 : inDir2;
  // root path is curent path: imgCom/src
  var files = fs.readdirSync(path.join(base, dir));
  return files.map((file) => {
    // but root path for front-end app is where index.html is
    return (path.join(dir, file));
  });
}
