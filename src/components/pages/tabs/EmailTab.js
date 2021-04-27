import React from "react";
import Fade from "@material-ui/core/Fade";

import ContentDivider from "../../layout/ContentDivider";
import SendToEmail from "../../accounts/SendToEmail";
import AccountSelector from "../../accounts/AccountSelector";

const EmailTab = () => (
  <Fade in>
    <div>
      <h3>Select accounts</h3>
      <SendToEmail />
      <ContentDivider />
      <AccountSelector />
    </div>
  </Fade>
);

export default EmailTab;
