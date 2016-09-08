/**
 * Routes for express app
 */
import unsupportedMessage from '../db/unsupportedMessage';
import { controllers } from '../db';

import { validateRequest } from '../helpers';

const emailController = controllers && controllers.email;
const slackController = controllers && controllers.slack;

export default (app) => {
  if (emailController && slackController) {
    app.get(
      '/extend-trial',
      (req, res, next) => {
        let validation = validateRequest(req);
        if (validation.pass) {
          next();
        }
        else {
          console.log("Error validating request", validation.error);

          res.status(401).send("Bad request");
        }
      },
      emailController.send,
      slackController.send,
      (req, res, next) => {
        res.redirect('/thank-you');
      }
    )
  }
};
