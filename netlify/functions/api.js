// Netlify Functions 入口：复用 server.js 导出的 Express app。
// 本地开发直接 `node server.js`；Netlify 上由 /api/* 与 /health 重写到此函数。
const serverless = require('serverless-http');
const app = require('../../server');

exports.handler = serverless(app, {
  request: (req, event) => {
    // serverless 环境没有真实 socket，express-rate-limit 依赖 req.ip，
    // 这里从事件头补齐，避免 ERR_ERL_UNDEFINED_IP_ADDRESS。
    if (!req.ip) {
      const fwd = event.headers && event.headers['x-forwarded-for'];
      req.ip = (fwd ? String(fwd).split(',')[0].trim() : '') || '0.0.0.0';
    }
  }
});
