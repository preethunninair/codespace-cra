import React from "react";
import { useSelector } from "react-redux";

function Themer(props) {
  const themeObj = useSelector((state) => state.templateConfig.config);

  const {
    sidenavActiveLinkBgColor,
    sidenavLinkTextColor,
    sidenavActiveLinkTextColor,
    sidenavActiveLinkIconColor,

    topnavActiveLinkBgColor,
    topnavLinkTextColor,
    topnavActiveLinkTextColor,
    topnavActiveLinkIconColor,
  } = themeObj;

  let sidenavActiveLinkStyling = "";
  let topnavActiveLinkStyling = "";
  let topnavLinkColorStyling = "";
  let sidenavLinkTextColorStyling = "";
  if (topnavLinkTextColor !== undefined) {
    topnavLinkColorStyling += `.navbar .navbar-nav.page-nav li a:not(.dropdown-item) > span,
 .navbar .navbar-nav.page-nav li a:not(.dropdown-item) > i {
   color: ${topnavLinkTextColor} !important;
 }`;
  }

  if (topnavActiveLinkBgColor !== undefined) {
    topnavActiveLinkStyling += `
      .navbar .navbar-collapse .navbar-nav.page-nav .nav-link.active,.navbar .navbar-collapse .navbar-nav.page-nav .nav-link:hover{
        background:${topnavActiveLinkBgColor} !important;
      
      }`;
  }
  if (topnavActiveLinkTextColor !== undefined) {
    topnavActiveLinkStyling += `
     
    .navbar .navbar-nav.page-nav li a:not(.dropdown-item):hover > span,
     .navbar .navbar-nav.page-nav li a:not(.dropdown-item):hover > i,
     .navbar .navbar-nav.page-nav li a:not(.dropdown-item):focus > span,
     .navbar .navbar-nav.page-nav li a:not(.dropdown-item):focus > i,
     .navbar .navbar-nav.page-nav li a:not(.dropdown-item).active > span,
     .navbar .navbar-nav.page-nav li a:not(.dropdown-item).active > i{
        color:${topnavActiveLinkTextColor} !important;
      }
      `;
  }

  if (topnavActiveLinkIconColor !== undefined) {
    topnavActiveLinkStyling += `
    .navbar .navbar-nav.page-nav li a:not(.dropdown-item):hover > i,
    .navbar .navbar-nav.page-nav li a:not(.dropdown-item).active > i{
        color:${topnavActiveLinkIconColor} !important;
      }
      `;
  } else if (topnavActiveLinkTextColor !== undefined) {
    topnavActiveLinkStyling += `
    .navbar .navbar-nav.page-nav li a:not(.dropdown-item):hover > i,
    .navbar .navbar-nav.page-nav li a:not(.dropdown-item).active > i{
        color:${topnavActiveLinkTextColor} !important;
      }
      `;
  }
  if (sidenavLinkTextColor !== undefined) {
    sidenavLinkTextColorStyling += `.sidebar .nav li > a p,
.sidebar .nav li > a i,
.sidebar .nav li > a{
  color: ${sidenavLinkTextColor} !important;
}`;
  }
  if (sidenavActiveLinkBgColor !== undefined) {
    sidenavActiveLinkStyling += `.sidebar .nav li > a.active,.sidebar .nav li > a:hover{
        background:${sidenavActiveLinkBgColor} !important;
      
      }`;
  }
  if (sidenavActiveLinkTextColor !== undefined) {
    sidenavActiveLinkStyling += `.sidebar .nav li > a.active p,.sidebar .nav li > a:hover p{
        color:${sidenavActiveLinkTextColor} !important;
      }
      `;
  }

  if (sidenavActiveLinkIconColor !== undefined) {
    sidenavActiveLinkStyling += `.sidebar .nav li > a.active i,.sidebar .nav li > a:hover i{
        color:${sidenavActiveLinkIconColor} !important;
      }`;
  } else if (sidenavActiveLinkTextColor !== undefined) {
    sidenavActiveLinkStyling += `.sidebar .nav li > a.active i,.sidebar .nav li > a:hover i{
        color:${sidenavActiveLinkTextColor} !important;
      }`;
  }

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        ${sidenavActiveLinkStyling}
        ${topnavActiveLinkStyling}
        ${topnavLinkColorStyling}
        ${sidenavLinkTextColorStyling}`,
          //sidehighlightBgColor
        }}
      />
      {props.children}
    </>
  );
}

export default Themer;
