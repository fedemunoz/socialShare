import React, { useContext } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import NotificationsContext from "../../context/notifications/notificationsContext";
import "./alert.scss";

const Alert = () => {
  const notificationsContext = useContext(NotificationsContext);
  const { alert, hideAlert } = notificationsContext;

  const handleClose = () => hideAlert();

  return (
    alert && (
      <Snackbar
        anchorOrigin={{ vertical: alert.position, horizontal: "center" }}
        open={Boolean(alert)}
        autoHideDuration={alert.time || 3000}
        onClose={handleClose}
        message={alert.msg}
        key={`${alert.position} center`}
        className={`snackbar-alert alert-${alert.type}`}
      />
    )
  );
};

export default Alert;
