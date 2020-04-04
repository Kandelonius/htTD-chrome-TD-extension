let changeColor = document.getElementById('changeColor'); // declared on popup.html

chrome.storage.sync.get('color', function(data){ // gets the color value stored.
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color); // sets the color to the button.
});

changeColor.onclick = function(element) { // allows the user to change the background of the page using the extension. requires active tab permission in the manifest.
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'}); // the code that will be executed.
    });
};