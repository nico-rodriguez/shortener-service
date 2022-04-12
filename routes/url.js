const { Router } = require('express');
const shortid = require('shortid');
const { isUri } = require('valid-url');
const config = require('config');
const Url = require('../models/url.js');

const router = Router();

// @route   POST /api/url/shorten
// @desc    Create short URL
router.post('/shorten', async (req, res) => {
  const { longUrl } = req.body;
  const baseURL = config.get('baseURL');

  if (!isUri(baseURL)) {
    return res.status(401).json('Invalid base URL');
  }

  // Check long URL
  if (isUri(longUrl)) {
    try {
      let url = await Url.findOne({ longUrl });

      if (url) {
        res.json(url);
      } else {
        // Create URL code
        const urlCode = shortid.generate();
        const shortUrl = baseURL + '/' + urlCode;

        url = new Url({
          longUrl,
          shortUrl,
          urlCode,
          date: new Date(),
        });
        await url.save();

        res.json(url);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json('Server error');
    }
  } else {
    res.status(401).json('Invalid long URL');
  }
});

module.exports = router;
