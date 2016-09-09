import { post } from 'axios';

const webhookURL = process.env.SLACK_WEBHOOK_URL;
const channel = '#koreanchicken';
const username = "trialextensionbot";

export function send(req, res, next) {
  const name = req.query.name || "A customer";
  const aid = req.query.aid || "None provided";
  const email = req.query.email;
  
  post(webhookURL, {
    channel,
    username,
    text: `${name} has requested a trial extension.\n\nAccount ID: ${aid}\nEmail: ${email}`
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
