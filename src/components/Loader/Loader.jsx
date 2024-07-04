import React from "react";
import { ColorRing } from "react-loader-spinner";

const Loader = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  return (
    <div style={containerStyle}>
      <ColorRing
        visible={true}
        height="100"
        width="100"
        ariaLabel="color-ring-loading"
        colors={["#a4f2d4", "#7de1ba", "#54be96", "#3ead83", "#54be96"]}
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
