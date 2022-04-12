const { Router } = require('express');
const Url = require('../models/url.js');

const router = Router();

// @route   GET /:code
// @desc    Redirect to original URL
router.get('/:code', async (req, res) => {
  try {
    const url = await Url.findOne({ urlCode: req.params.code });

    if (url) {
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json('No URL found!');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json('Server error');
  }
});

module.exports = router;
