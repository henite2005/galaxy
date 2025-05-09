// Central Configuration Object
const config = {
  title: "MEMBER",
  adminLabel: "Super Admin",
  websiteName: "ITRAM",
  favicon: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEho_znTa4gTSPqoRVAXzu_v19qWeHgFCQusnzZaHJiAF_bAg1CNtZOsSAxW422xrEn_aVKdUv2r_4V116tkFJ1hsG50zFC7_YfMmX-X_u9Mr-xDLxbjmX6BFK7CtQfHABcEusXQwJSFcAY/s0-rw/Flag_of_Tanzania.gif",
  flag: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEho_znTa4gTSPqoRVAXzu_v19qWeHgFCQusnzZaHJiAF_bAg1CNtZOsSAxW422xrEn_aVKdUv2r_4V116tkFJ1hsG50zFC7_YfMmX-X_u9Mr-xDLxbjmX6BFK7CtQfHABcEusXQwJSFcAY/s0-rw/Flag_of_Tanzania.gif",
  copyright: "MEMBER360"
};

// Apply Configuration
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("site-title").innerText = config.title;
  document.getElementById("favicon-link").href = config.favicon;
  document.getElementById("admin-label").innerHTML += config.adminLabel;
  document.getElementById("website-name").innerText = config.websiteName;
  document.getElementById("flag-img").src = config.flag;
  document.getElementById("copyright-name").innerText = config.copyright;
  document.getElementById("year").innerText = new Date().getFullYear();
});

// USER CONFIGURATION
document.addEventListener("DOMContentLoaded", function () {
    const faviconUrl = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEho_znTa4gTSPqoRVAXzu_v19qWeHgFCQusnzZaHJiAF_bAg1CNtZOsSAxW422xrEn_aVKdUv2r_4V116tkFJ1hsG50zFC7_YfMmX-X_u9Mr-xDLxbjmX6BFK7CtQfHABcEusXQwJSFcAY/s0-rw/Flag_of_Tanzania.gif";
  
    // Set Page Title
    const pageTitle = document.getElementById("page-title");
    if (pageTitle) {
      document.title = "User Dashboard - Members";
      pageTitle.textContent = "User Dashboard - Members";
    }
  
    // Set Favicon
    const favicon = document.getElementById("favicon-link");
    if (favicon) favicon.href = faviconUrl;
  
    // Set Flag
    const flagImg = document.getElementById("flag-img");
    const flagLink = document.getElementById("flag-link");
    if (flagImg) {
      flagImg.src = faviconUrl;
      flagImg.alt = "Tanzania Flag";
    }
    if (flagLink) flagLink.href = faviconUrl;
  
    // Optional UI Text (if IDs are added)
    const sidebarTitle = document.getElementById("sidebar-title");
    if (sidebarTitle) sidebarTitle.textContent = "Members";
  
    const dashboardHeader = document.getElementById("dashboard-header");
    if (dashboardHeader) dashboardHeader.textContent = "Member Overview";
  });
  
  

// LOGOUT CONFIGURATION
document.addEventListener("DOMContentLoaded", function () {
    const faviconUrl = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEho_znTa4gTSPqoRVAXzu_v19qWeHgFCQusnzZaHJiAF_bAg1CNtZOsSAxW422xrEn_aVKdUv2r_4V116tkFJ1hsG50zFC7_YfMmX-X_u9Mr-xDLxbjmX6BFK7CtQfHABcEusXQwJSFcAY/s0-rw/Flag_of_Tanzania.gif";
  
    // Set page title
    const pageTitle = document.getElementById("page-title");
    if (pageTitle) {
      document.title = "MEMBER";
      pageTitle.textContent = "MEMBER";
    }
  
    // Set favicon
    const favicon = document.getElementById("favicon-link");
    if (favicon) favicon.href = faviconUrl;
  
    // Set flag icon
    const flagImg = document.getElementById("flag-img");
    const flagLink = document.getElementById("flag-link");
  
    if (flagImg) {
      flagImg.src = faviconUrl;
      flagImg.alt = "Tanzania Flag";
    }
  
    if (flagLink) {
      flagLink.href = faviconUrl;
    }
  
    // Optional: Dynamic heading
    const logoutTitle = document.getElementById("logout-title");
    if (logoutTitle) logoutTitle.textContent = "LOGGED OUT";
  });


//LOGIN CONFIGURATION
document.getElementById("site-title").textContent = "MEMBER LOGIN";
document.title = "MEMBER";
document.getElementById("favicon-link").href = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEho_znTa4gTSPqoRVAXzu_v19qWeHgFCQusnzZaHJiAF_bAg1CNtZOsSAxW422xrEn_aVKdUv2r_4V116tkFJ1hsG50zFC7_YfMmX-X_u9Mr-xDLxbjmX6BFK7CtQfHABcEusXQwJSFcAY/s0-rw/Flag_of_Tanzania.gif";
document.getElementById("flag-link").href = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEho_znTa4gTSPqoRVAXzu_v19qWeHgFCQusnzZaHJiAF_bAg1CNtZOsSAxW422xrEn_aVKdUv2r_4V116tkFJ1hsG50zFC7_YfMmX-X_u9Mr-xDLxbjmX6BFK7CtQfHABcEusXQwJSFcAY/s0-rw/Flag_of_Tanzania.gif";
document.getElementById("flag-img").src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEho_znTa4gTSPqoRVAXzu_v19qWeHgFCQusnzZaHJiAF_bAg1CNtZOsSAxW422xrEn_aVKdUv2r_4V116tkFJ1hsG50zFC7_YfMmX-X_u9Mr-xDLxbjmX6BFK7CtQfHABcEusXQwJSFcAY/s0-rw/Flag_of_Tanzania.gif";
document.getElementById("flag-img").alt = "Tanzania Flag";
document.getElementById("login-title").textContent = "MEMBER LOGIN";

// USER CONFIGURATION
document.title = "MEMBER";
document.getElementById("page-title").textContent = "MEMBER";
document.getElementById("sidebar-title").textContent = "Users";
document.getElementById("dashboard-header").textContent = "Dashboard Overview";
document.getElementById("favicon-link").href = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEho_znTa4gTSPqoRVAXzu_v19qWeHgFCQusnzZaHJiAF_bAg1CNtZOsSAxW422xrEn_aVKdUv2r_4V116tkFJ1hsG50zFC7_YfMmX-X_u9Mr-xDLxbjmX6BFK7CtQfHABcEusXQwJSFcAY/s0-rw/Flag_of_Tanzania.gif";
document.getElementById("flag-link").href = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEho_znTa4gTSPqoRVAXzu_v19qWeHgFCQusnzZaHJiAF_bAg1CNtZOsSAxW422xrEn_aVKdUv2r_4V116tkFJ1hsG50zFC7_YfMmX-X_u9Mr-xDLxbjmX6BFK7CtQfHABcEusXQwJSFcAY/s0-rw/Flag_of_Tanzania.gif";
document.getElementById("flag-img").src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEho_znTa4gTSPqoRVAXzu_v19qWeHgFCQusnzZaHJiAF_bAg1CNtZOsSAxW422xrEn_aVKdUv2r_4V116tkFJ1hsG50zFC7_YfMmX-X_u9Mr-xDLxbjmX6BFK7CtQfHABcEusXQwJSFcAY/s0-rw/Flag_of_Tanzania.gif";
document.getElementById("flag-img").alt = "Tanzania Flag";



  