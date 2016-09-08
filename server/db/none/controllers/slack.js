import { post } from 'axios';

const webhookURL = 'http://www.gametabs.net';

export function send(req, res, next) {
  post(webhookURL).then((response) => {
    next();
  }).catch((data) => {
    console.log("Error sending message to Slack", data);

    res.status(500).send("Error");
  });
}

export default {
  send
}
