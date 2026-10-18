import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const indexFile = fileURLToPath(new URL('./index.html', import.meta.url));
const port = Number(process.env.PORT || 5173);
http.createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    if (pathname !== '/' && pathname !== '/index.html') {
      response.writeHead(404).end('Not found');
      return;
    }
    const content = await readFile(indexFile);
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' });
    response.end(content);
  } catch {
    response.writeHead(404).end('Not found');
  }
}).listen(port, '0.0.0.0', () => console.log(`Local: http://localhost:${port}\n手机可通过同一 Wi-Fi 下的电脑局域网 IP:${port} 访问`));
