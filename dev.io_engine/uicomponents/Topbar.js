import React, { useState } from "react";
import { useSelector } from "react-redux";
import tinycolor from "tinycolor2";
import { NavLink } from "react-router-dom";
import Icon from "../Icon";

function Topbar(props) {
  const appConfig = useSelector((state) => state.appConfig);
  const [collapseOpen, setCollapseOpen] = useState(false);

  function generateMenuItems() {
    if (appConfig.routes == null || appConfig.routes.length <= 0) {
      return null;
    }
    let menus = [];
    let showSubmenu = [];
    if (appConfig.layout === "TOP_NAVIGATION") {
      menus = appConfig.routes.map((menuItem, i) => {
        showSubmenu[i] =
          appConfig.submenuConfig === "TNS" && menuItem.submenu.length > 0;
        return (
          <li
            className={`nav-item ${showSubmenu[i] ? "dropdown" : null}`}
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

              <span>{menuItem.title}</span>
            </NavLink>

            {showSubmenu[i] ? (
              <>
                <span className="caret"></span>
                <div className="dropdown-menu dropdown-navbar">
                  <div className="d-flex">
                    <ul>
                      {menuItem.submenu.map((subItem, i) => (
                        <NavLink
                          to={`/editproject${subItem.path}`}
                          className="nav-item dropdown-item"
                          activeClassName="active"
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
              </>
            ) : null}
          </li>
        );
      });
    } else {
      if (appConfig.submenuConfig !== "SNS") {
        let pageOptn = appConfig.routes.filter(
          (item, i) => `/editproject${item.path}` == props.selectedPage
        )[0];
        menus =
          pageOptn == undefined
            ? []
            : pageOptn.submenu.map((menuItem, i) => {
                return (
                  <NavLink
                    to={`/editproject${menuItem.path}`}
                    className="nav-link"
                    activeClassName="active"
                    key={i}
                  >
                    <Icon iconObj={menuItem.icon} />

                    <span>{menuItem.title}</span>
                  </NavLink>
                );
              });
      }
    }
    return menus;
  }

  if (appConfig.layout != "SIDEONLYNAVIGATION") {
    return (
      <div className="app-header">
        <nav
          className="navbar-absolute  navbar navbar-expand-lg px-0"
          data-theme={
            tinycolor(appConfig.navbarBgColor).isDark() ? "dark" : "light"
          }
          data-template={appConfig.template}
          data-rounded={appConfig.rounded}
          data-linktemplate={appConfig.linktemplate}
          style={{ background: appConfig.navbarBgColor }}
        >
          <div className="container-fluid px-0">
            <div className="navbar-wrapper">
              <div className={"navbar-toggle d-inline"}>
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={appConfig.toggleSidebar}
                >
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
              </div>
              <a className="navbar-brand" onClick={(e) => e.preventDefault()}>
                <div className="brand-img d-flex align-items-center h-100">
                  {props.brandContent}
                </div>
              </a>
            </div>
            <button
              aria-expanded={false}
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-target="#navigation"
              data-toggle="collapse"
              id="navigation"
              type="button"
              onClick={() => setCollapseOpen(!collapseOpen)}
            >
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
            </button>
            <div
              className={`collapse navbar-collapse ${
                collapseOpen ? "show" : null
              }`}
            >
              <ul className="navbar-nav page-nav">
                {generateMenuItems()}
                {props.pageNav}
              </ul>
              <ul className="ml-auto form-inline navbar-nav">
                {props.navItems}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  return null;
}
export default Topbar;
