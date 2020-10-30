/*chrome.browserAction.onClicked.addListener(function(tab) {
    console.log("Calling Content");
    chrome.tabs.executeScript({
      file: 'index.js'
    });
  });
  */
 document.getElementById(".svg").addEventListener("click")
  {      // Execute some script when the page is fully (DOM) ready
      chrome.tabs.executeScript(script.js,{code: "f();"});
    }
