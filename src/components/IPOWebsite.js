import React from "react";

const IPOWebsite = () => {
  const iframeStyle = {
    width: "100%",
    height: "40rem", // Adjust the height as needed
    border: "none", // To remove iframe border
  };

  return (
    <div>
      <iframe
        src="https://ipowatch.in/ipo-grey-market-premium-latest-ipo-gmp/"
        title="External Website"
        style={iframeStyle}
      />
    </div>
  );
};

export default IPOWebsite;
