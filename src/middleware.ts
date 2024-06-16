import { defineMiddleware } from 'astro:middleware';

import http from 'http';
import https from 'node:https';

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware((context, next) => {
  console.log('running custom middleware!');
  console.log(http.STATUS_CODES);
  console.log(https.Server);
  return next();
});
