import { connect as connectToMailjet } from 'node-mailjet';

const Mailjet = connectToMailjet(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE
);

export function send(req, res, next) {
  const name = req.query.name || "A customer";
  const aid = req.query.aid || "None provided";
  const email = req.query.email;

  Mailjet.post('send').request({
    'FromEmail': 'richard@tradegecko.com',
    'FromName': 'Engineering team',
    'Subject': "Customer request for trial extension",
    'Text-part': `
      ${name} has requested a trial extension.

      Email: ${email}
      Account ID: ${aid}
    `,
    'Recipients': [{ 'Email': 'richard@tradegecko.com' }]
  }).then((response) => {
    console.log(response);
    next();
  }).catch((data) => {
    console.log("Error sending email:", data);

    res.status(500).send("Error");
  });
}

export default {
  send
}
