import React from "react";
import { Image } from "semantic-ui-react";
import notfound from "../assets/404-not-found.svg";

const NotFound = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Image src={notfound} size="big" alt="404-Not-Found-Illustration" />
      <h1>Error: Page Not Found</h1>
      <p>Check your URL and try again.</p>
    </div>
  );
};

export default NotFound;
