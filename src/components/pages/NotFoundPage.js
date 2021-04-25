import React, { useEffect, useContext } from "react";
import PageContext from "../../context/page/pageContext";
import constants from "../../shared/constants";

const myStyle = {
  display: "flex",
  flex: "1",
  alignItems: "center",
  justifyContent: "center",
};

const NotFoundPage = () => {
  const pageContext = useContext(PageContext);

  useEffect(() => {
    pageContext.setPage({
      title: constants.NOT_FOUND_PAGE.title,
      previousTab: constants.MY_QR_TAB.title,
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div style={myStyle}>
      <h2>Page not found</h2>
    </div>
  );
};

export default NotFoundPage;
