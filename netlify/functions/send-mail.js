const sgMail = require("@sendgrid/mail");
const { SENDGRID_API_KEY, SENDGRID_FROM_EMAIL } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

exports.handler = async (event, context, callback) => {
  const payload = JSON.parse(event.body);
  const { email, subject, accounts } = payload;

  const body = Object.keys(accounts)
    .map((k) => {
      return `${k}: ${payload[k]}`;
    })
    .join("<br><br>");

  const msg = {
    from: SENDGRID_FROM_EMAIL,
    to: "fedemz88@gmail.com",
    subject: subject,
    html: body,
  };

  try {
    console.log("sgMail 1");
    await sgMail.send(msg);
    console.log("sgMail 2");

    return {
      statusCode: 200,
      body: "Message sent",
    };
  } catch (e) {
    console.log("sgMail 3", e);
    return {
      statusCode: e.code,
      body: e.message,
    };
  }
};
