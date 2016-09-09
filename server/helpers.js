export function validateRequest(req, res, next) {
  console.log(req.query);
  if (req.query) {
    if (req.query.email) {
      next();
    }
    else {
      res.status(401).send("An email must be provided.");
    }
  }
  else {
    res.status(401).send("No query params.");
  }
}
