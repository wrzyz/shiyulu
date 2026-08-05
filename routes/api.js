const express = require('express');
const router = express.Router();
const axios = require('axios');
const rateLimit = require('express-rate-limit');

// 限流中间件
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: '请求过多，请稍后再试' }
});

router.use(limiter);

// 代理转发
router.post('/forward', async (req, res) => {
  try {
    const { url, method = 'GET', headers = {}, body } = req.body;
    
    if (!url) {
      return res.status(400).json({ error: '请提供目标URL' });
    }

    const config = {
      method: method.toLowerCase(),
      url,
      headers: { 'User-Agent': 'API-Gateway/1.0', ...headers },
      timeout: 30000
    };

    if (body && ['post', 'put', 'patch'].includes(method.toLowerCase())) {
      config.data = body;
    }

    const response = await axios(config);
    res.json({
      status: response.status,
      data: response.data,
      headers: response.headers
    });
  } catch (error) {
    res.status(error.response?.status || 500).json({
      error: error.message,
      status: error.response?.status
    });
  }
});

module.exports = router;
