# AccountShare

PWA for sharing contact data (social media account, email accounts, phone numbers, links, etc.) through QR codes or by Email.

Demo: [accountshare.netlify.app](https://accountshare.netlify.app)

&nbsp;

## Email config

Emails are sent through Sendgrid and a Netlify serverless lambda function.

### Steps

**1) Set up Sendgrid**

- Create [Sengrid](https://sendgrid.com) account (works with free plan)
- Set up sender email account
  - Settings -> Sender Authentication
- Generate API KEY
  - Settings -> API Keys

**2) Set up Netlify**

- Create [Netlify](https://netlify.com) account (works with free plan)
- Create new site and [link](https://cli.netlify.com/commands/link) git repository
- Add Environment variables
  - Site settings -> Build & deploy -> Environment variables
  - `SENDGRID_API_KEY` : (API_KEY created on Sendgrid)
  - `SENDGRID_FROM_EMAIL` : (Sender email account validated on Sendgrid)

&nbsp;

## Installation

### `npm i`

### Deploy to Netlify

After linking the repository to Netlify deploy with `git push` or using [netlify CLI](https://cli.netlify.com/) with `netlify deploy`.

### Other commands

### `npm start`

Runs the app in the development mode.

### `npm run build`

Builds the app for production to the `build` folder.
