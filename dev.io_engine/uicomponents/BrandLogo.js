import React from "react";
import { useSelector } from "react-redux";

function BrandLogo(props) {
  const appConfig = useSelector((state) => state.appConfig);
  if (
    appConfig.layout == "SIDE_NAVIGATION" ||
    appConfig.layout == "SIDEONLYNAVIGATION"
  ) {
    return (
      <div
        className="app-brand d-none d-md-block"
        data-grid={appConfig.gridConfig}
      >
        <div
          className="brand-img h-100"
          style={{ background: appConfig.logoBgColor }}
          data-theme={appConfig.logoTheme}
        >
          {props.brandContent}
        </div>
      </div>
    );
  }
  return null;
}
export default BrandLogo;
