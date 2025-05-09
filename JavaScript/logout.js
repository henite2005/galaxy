// logout.js

// Prevent user from navigating back
window.history.pushState(null, "", window.location.href);
window.onpopstate = function () {
  window.history.pushState(null, "", window.location.href);
};

// Optionally clear any session storage
sessionStorage.clear();
localStorage.removeItem("authToken"); // replace with your token/session key

