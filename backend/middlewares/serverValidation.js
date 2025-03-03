const validateServerCreation = (req, res, next) => {
  const requiredFields = ['name', 'vcpus', 'memory'];
  const missingFields = requiredFields.filter((field) => !req.body[field]);

  if (missingFields.length > 0) {
    return res.status(400).json({
      error: `Missing required fields: ${missingFields.join(', ')}`,
    });
  }

  if (req.body.offlineMode && req.body.visibility?.public) {
    return res.status(400).json({
      error: 'Public visibility cannot be enabled with offline mode',
    });
  }

  next();
};

module.exports = { validateServerCreation };
