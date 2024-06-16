import { defineMiddleware } from 'astro:middleware';

import http from 'http';

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware((context, next) => {
  console.log('running custom middleware!');
  console.log(http.STATUS_CODES);
  return next();
});
