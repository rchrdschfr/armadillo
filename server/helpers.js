export function validateRequest(request) {
  let validation = { pass: false };

  if (request.query) {
    if (request.query.tgUserId && request.query.email) {
      return { ...validation, pass: true }
    }
    else {
      return { ...validation, error: "No user ID and email not set." }
    }
  }
  else {
    return { ...validation, error: "No query params set." }
  }
}
