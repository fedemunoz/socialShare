const sgMail = require("@sendgrid/mail");
const { SENDGRID_API_KEY, SENDGRID_FROM_EMAIL } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

exports.handler = async (event, context, callback) => {
  const payload = JSON.parse(event.body);
  const { emailTo, accounts } = payload;

  const msg = {
    from: SENDGRID_FROM_EMAIL,
    to: emailTo,
    subject: "AccountShare - Here are my accounts!",
    html: accounts
      .map((account) => `<b>${account.title}:</b> ${account.url}`)
      .join("<br><br>"),
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
