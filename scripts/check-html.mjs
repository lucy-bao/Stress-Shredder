import { readFileSync } from 'node:fs';
import { Script } from 'node:vm';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const inlineScript = html.match(/<script>([\s\S]*?)<\/script>/i)?.[1];
if (!inlineScript) throw new Error('Missing inline script in index.html');
new Script(inlineScript, { filename: 'index.html' });
console.log('Inline JavaScript syntax OK');
