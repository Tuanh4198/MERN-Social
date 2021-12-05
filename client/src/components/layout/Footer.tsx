import React, { PropsWithChildren } from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="bottombar">
        <div className="container">
          <span className="copyright w-100 text-center d-block">
            ©MAN-Social - {year}. All rights reserved.
          </span>
        </div>
      </div>
    </>
  );
}

export default React.memo(Footer);
