import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
import assert from 'node:assert/strict';

const root = resolve('dist');
function inspect(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) { inspect(path); continue; }
    assert(!/\.(pdf|docx?|txt|zip)$/i.test(name), `Private document in public output: ${name}`);
    if (/\.(html|css|js|json|svg)$/i.test(name)) {
      const text = readFileSync(path, 'utf8');
      assert(!/(?:mailto:|tel:|[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}|\b1[3-9]\d{9}\b)/i.test(text), `Contact details found in ${name}`);
    }
  }
}
inspect(root);
const html = readFileSync(join(root, 'index.html'), 'utf8');
const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(x => x[1]));
for (const [, href] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
  if (href.startsWith('#')) assert(ids.has(href.slice(1)), `Missing anchor: ${href}`);
  else { const path = resolve(root, href.split(/[?#]/)[0]); assert(path.startsWith(root + '/')); assert(existsSync(path), `Missing asset: ${href}`); }
}
console.log('Public output verified: anchors, assets, document exclusion and contact privacy.');
