const sgMail = require("@sendgrid/mail");
const { SENDGRID_API_KEY } = process.env;

exports.handler = async (event, context, callback) => {
  const payload = JSON.parse(event.body);
  const { email, subject, accounts } = payload;

  sgMail.setApiKey(SENDGRID_API_KEY);

  const body = Object.keys(accounts)
    .map((k) => {
      return `${k}: ${payload[k]}`;
    })
    .join("<br><br>");

  const msg = {
    to: email,
    from: "hello@accountshare.netlify.com",
    subject: subject,
    html: body,
  };

  try {
    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: "Message sent",
    };
  } catch (e) {
    return {
      statusCode: e.code,
      body: e.message,
    };
  }
};
