export function validateRequest(req, res, next) {
  if (req.query) {
    if (req.query.tgUserId && req.query.email && req.query.name) {
      next();
    }
    else {
      res.status(401).send("User ID, name, or email not set.");
    }
  }
  else {
    res.status(401).send("User ID, name, or email not set.");
  }
}
