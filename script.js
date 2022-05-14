let btt = document.querySelectorAll("[id=back-to-top]"),
  body = document.body,
  docElen = document.documentElement,
  offset = 100,
  scrollPos,
  docHeight,
  isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;

// Calculate the documents height
docHeight = Math.max(
  body.scrollHeight,
  body.offsetHeight,
  docElen.clientHeight,
  docElen.scrollHeight,
  docElen.offsetHeight
);
if (docHeight != "undefined") {
  offset = docHeight / 4;
}

// Add scroll event listener
window.addEventListener("scroll", function (event) {
  scrollPos = body.scrollTop || docElen.scrollTop;

  btt.forEach(function (eachItemID) {
    eachItemID.className = scrollPos > offset ? "visible" : "";
  });

  //btt = scrollPos > offset ? "visible" : "";
});
