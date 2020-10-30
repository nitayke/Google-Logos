document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("click-this").addEventListener("click", handler);
});

// The handler also must go in a .js file
function handler() {
  chrome.tabs.executeScript();
}