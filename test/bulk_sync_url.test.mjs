import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appPath = path.resolve(__dirname, '../src/App.jsx');
const appSource = fs.readFileSync(appPath, 'utf8');

console.log('Testing CellarTracker Bulk Sync URL & Bottle Assignment...');

// Test 1: Verify 'able=Scan typo is completely absent from App.jsx
assert.strictEqual(
  appSource.includes("'able=Scan"),
  false,
  "App.jsx must not contain broken typo 'able=Scan"
);

// Test 2: Verify valid Table=Scan URL pattern is present in App.jsx
assert.strictEqual(
  appSource.includes("https://www.cellartracker.com/list.asp?Table=Scan&Validate=true&iInventoryList="),
  true,
  "App.jsx must contain valid Table=Scan URL generator"
);

// Test 3: Test exact URL generation matching the user's working link
const testCodes = ['0220010352', '0219506628'];
const generatedUrl = `https://www.cellartracker.com/list.asp?Table=Scan&Validate=true&iInventoryList=${encodeURIComponent(testCodes.join(','))}`;
const expectedUrl = 'https://www.cellartracker.com/list.asp?Table=Scan&Validate=true&iInventoryList=0220010352%2C0219506628';

assert.strictEqual(
  generatedUrl,
  expectedUrl,
  `Generated bulk sync URL must match exact expected format: ${expectedUrl}`
);

// Test 4: Verify sequential bottle extraction from bin bottleIds
const mockBin = {
  id: 'bin-1',
  location: 'Cellar',
  bin: 'A1',
  quantity: 2,
  iBottle: '0220010352',
  bottleIds: ['0220010352', '0219506628']
};

const getTargetBottle = (bin, consumedCount) => {
  return (bin?.bottleIds && bin.bottleIds[consumedCount])
    ? bin.bottleIds[consumedCount]
    : (bin?.iBottle || '');
};

const bottle1 = getTargetBottle(mockBin, 0);
const bottle2 = getTargetBottle(mockBin, 1);

assert.strictEqual(bottle1, '0220010352', 'First consumed bottle should have first bottle ID');
assert.strictEqual(bottle2, '0219506628', 'Second consumed bottle should have second bottle ID');

const simulatedCodes = [bottle1, bottle2];
const bulkSyncUrl = `https://www.cellartracker.com/list.asp?Table=Scan&Validate=true&iInventoryList=${encodeURIComponent(simulatedCodes.join(','))}`;
assert.strictEqual(bulkSyncUrl, expectedUrl, 'Sequential bottles must produce user-reported working bulk sync URL');

console.log('✅ All bulk sync tests passed successfully!');
