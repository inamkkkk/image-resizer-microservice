const sharp = require('sharp');
const path = require('path');
const fs = require('fs').promises;

const resizeImage = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image provided' });
    }

    const width = parseInt(req.body.width);
    const height = parseInt(req.body.height);

    if (!width || !height || isNaN(width) || isNaN(height)) {
      return res.status(400).json({ error: 'Invalid width or height' });
    }

    const imagePath = req.file.path;
    const imageName = req.file.filename;
    const imageDir = path.dirname(imagePath);
    const imageNameWithoutExt = path.parse(imageName).name;
    const imageExt = path.parse(imageName).ext;
    const resizedImageName = `${imageNameWithoutExt}_resized${imageExt}`;
    const resizedImagePath = path.join(imageDir, resizedImageName);

    await sharp(imagePath)
      .resize(width, height)
      .toFile(resizedImagePath);

    // Optionally delete the original image after resizing
    // await fs.unlink(imagePath);

    res.status(200).json({ path: resizedImagePath });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  resizeImage,
};
