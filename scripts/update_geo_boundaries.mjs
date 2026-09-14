// scripts/update_geo_boundaries.mjs
import fs from 'fs';
import readline from 'readline';

async function updateCaliforniaInGeoBoundaries() {
  const newCalifornia = JSON.parse(fs.readFileSync('public/data/boundaries/california.json', 'utf8'));
  console.log('Read new California GeoJSON with', newCalifornia.features.length, 'features.');

  const inputPath = 'src/data/geo_boundaries.js';
  const fileStream = fs.createReadStream(inputPath);
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

  let lineNum = 0;
  let calStart = -1;
  let calEnd = -1;
  let bracketDepth = 0;
  let inCalifornia = false;

  const lines = [];
  for await (const line of rl) {
    lineNum++;
    if (!inCalifornia && line.trim().startsWith('"california": {')) {
      inCalifornia = true;
      calStart = lineNum;
      bracketDepth = 1;
      continue;
    }

    if (inCalifornia) {
      // count brackets
      for (const ch of line) {
        if (ch === '{') bracketDepth++;
        else if (ch === '}') bracketDepth--;
      }
      if (bracketDepth === 0) {
        inCalifornia = false;
        calEnd = lineNum;
        console.log(`California found from line ${calStart} to ${calEnd}`);
      }
    }
  }

  if (calStart === -1 || calEnd === -1) {
    throw new Error('Could not delimit california in geo_boundaries.js');
  }

  // Now rewrite geo_boundaries.js streaming line by line
  const outputPath = 'src/data/geo_boundaries.js.tmp';
  const outStream = fs.createWriteStream(outputPath);
  const readStream2 = fs.createReadStream(inputPath);
  const rl2 = readline.createInterface({ input: readStream2, crlfDelay: Infinity });

  let curLine = 0;
  for await (const line of rl2) {
    curLine++;
    if (curLine === calStart) {
      // Write the new california object
      const formatted = '  "california": ' + JSON.stringify(newCalifornia, null, 2).split('\n').map((l, i) => i === 0 ? l : '  ' + l).join('\n') + ',';
      outStream.write(formatted + '\n');
    } else if (curLine > calStart && curLine <= calEnd) {
      // Skip old california lines
      continue;
    } else {
      outStream.write(line + '\n');
    }
  }

  outStream.end();
  await new Promise((resolve, reject) => {
    outStream.on('finish', resolve);
    outStream.on('error', reject);
  });

  fs.renameSync(outputPath, inputPath);
  console.log('Successfully updated src/data/geo_boundaries.js with new California AVAs!');
}

updateCaliforniaInGeoBoundaries().catch(err => {
  console.error(err);
  process.exit(1);
});
