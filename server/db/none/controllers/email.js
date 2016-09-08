import { post } from 'axios';

const apiEndPoint = 'http://www.gametabs.net';

export function send(req, res, next) {
  post(apiEndPoint).then((response) => {
    next();
  }).catch((data) => {
    console.log("Error sending email", data);

    res.status(500).send("Error");
  });
}

export default {
  send
}
