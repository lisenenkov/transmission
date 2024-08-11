import * as esbuild from 'esbuild';
import * as process from 'node:process';
import {sassPlugin} from 'esbuild-sass-plugin';
import http from 'node:http';

const ctx = await esbuild.context({
  bundle: true,
  entryPoints: ['./src/main.js'],
  legalComments: 'external',
  loader: {
    '.png': 'dataurl',
    '.svg': 'dataurl' },
  //minify: true,
  minify: false,
  outfile: './public_html/transmission-app.js',
  plugins: [sassPlugin()],
  sourcemap: true,
});

if (process.env.DEV) {
  await ctx.watch();
  console.log('watching...');

  const { host, port } = await ctx.serve({
    port: 9001,
    servedir: './public_html/',
  });

  http.createServer((req, res) => {
    const options = {
      headers: req.headers,
      hostname: host,
      method: req.method,
      path: req.url,
      port,
    };

    // Forward each incoming request to esbuild
    const proxyReq = http.request(options, proxyRes => {
      // If esbuild returns "not found", send a custom 404 page
      if (proxyRes.statusCode === 404) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>A custom 404 page</h1>');
        return;
      }
  
      // Otherwise, forward the response from esbuild to the client
      res.writeHead(proxyRes.statusCode, proxyRes.headers);
      proxyRes.pipe(res, { end: true });
    });
  
    // Forward the body of the request to esbuild
    req.pipe(proxyReq, { end: true });
  }).listen(9000);

  console.log('serving...');
} else {
  await ctx.rebuild();
  ctx.dispose();
}
