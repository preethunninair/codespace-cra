import React from "react";
import { useSelector } from "react-redux";

function Layout(props) {
  const appConfig = useSelector((state) => state.appConfig);
  return (
    <div className="wrapper" data-appmode={appConfig.appMode}>
      <div
        className="app-container"
        data-navbarsize={appConfig.navbarsize}
        data-sidebarsize={appConfig.sidebarsize}
        data-padded={appConfig.padded}
        data-boxed={appConfig.boxed}
        data-layout={appConfig.layout}
        data-rounded={appConfig.rounded}
        data-grid={appConfig.gridConfig}
      >
        {props.children}
      </div>
    </div>
  );
}
export default Layout;
