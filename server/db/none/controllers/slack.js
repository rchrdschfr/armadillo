import { post } from 'axios';

const webhookURL = process.env.SLACK_WEBHOOK_URL;
const channel = '#koreanchicken';
const username = "trialextensionbot";

export function send(req, res, next) {
  post(webhookURL, {
    channel,
    username,
    text: `${req.query.name} has requested a trial extension.\n\nTG user ID: ${req.query.tgUserId}\nEmail: ${req.query.email}`
  }).then((response) => {
    next();
  }).catch((data) => {
    console.log("Error sending message to Slack:", data);

    res.status(500).send("Error");
  });
}

export default {
  send
}
