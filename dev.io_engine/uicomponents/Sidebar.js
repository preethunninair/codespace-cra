import React from "react";
import { useSelector } from "react-redux";
import tinycolor from "tinycolor2";
import { NavLink } from "react-router-dom";
import Icon from "../Icon";

function Sidebar(props) {
  const appConfig = useSelector((state) => state.appConfig);

  function generateMenuItems() {
    if (props.routes == undefined || props.routes.length <= 0) {
      return null;
    }
    let menus = [];
    let showSubmenu = [];
    if (appConfig.layout === "SIDE_NAVIGATION") {
      menus = props.routes.map((menuItem, i) => {
        showSubmenu[i] =
          appConfig.submenuConfig === "SNS" && menuItem.submenu.length > 0;
        return (
          <li
            className={`nav-item${showSubmenu[i] ? " dropdown" : ""}`}
            key={i}
          >
            <NavLink
              to={`/editproject${menuItem.path}`}
              className="dropdown-toggle nav-link"
              data-toggle="dropdown"
              activeClassName="active"
              onClick={(e) => {
                if (showSubmenu[i]) {
                  e.preventDefault();
                }
              }}
            >
              <Icon iconObj={menuItem.icon} />

              <p>{menuItem.title}</p>
            </NavLink>

            {showSubmenu[i] ? (
              <div className="dropdown-menu dropdown-navbar menu-right">
                <div className="d-flex">
                  <ul className="p-0">
                    {menuItem.submenu.map((subItem, i) => (
                      <NavLink
                        to={`/editproject${subItem.path}`}
                        className="nav-item dropdown-item"
                        activeClassName="active"
                        key={i}
                        onClick={() => {
                          var current = document.querySelectorAll("li.show");
                          if (current.length > 0) {
                            current[0].className = current[0].className.replace(
                              " show",
                              ""
                            );
                          }
                        }}
                      >
                        {subItem.title}
                      </NavLink>
                    ))}
                  </ul>
                </div>
              </div>
            ) : null}
          </li>
        );
      });
    }
    return menus;
  }

  if (
    appConfig.layout == "SIDE_NAVIGATION" ||
    appConfig.layout == "SIDEONLYNAVIGATION"
  ) {
    return (
      <div className="app-menu">
        <div
          className="sidebar"
          style={{ background: appConfig.sidebarBgColor }}
          data-theme={
            tinycolor(appConfig.sidebarBgColor).isDark() ? "dark" : "light"
          }
          data-submenuconfig={appConfig.submenuConfig}
          data-rounded={appConfig.rounded}
          data-linktemplate={appConfig.linktemplate}
          data-template={appConfig.template}
        >
          <div className="sidebar-wrapper">
            <ul className="nav">
              {generateMenuItems()}
              {props.menuItems}
            </ul>
          </div>
        </div>
      </div>
    );
  }
  return null;
}
export default Sidebar;
