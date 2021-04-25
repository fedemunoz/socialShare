import React, { Fragment } from "react";
import ContentDivider from "../../layout/ContentDivider";
import SendToEmail from "../../accounts/SendToEmail";
import AccountSelector from "../../accounts/AccountSelector";

const EmailTab = () => (
  <Fragment>
    <h3>Select accounts</h3>
    <SendToEmail />
    <ContentDivider />
    <AccountSelector />
  </Fragment>
);

export default EmailTab;
