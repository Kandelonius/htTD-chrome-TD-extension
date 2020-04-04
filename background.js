chrome.runtime.onInstalled.addListener(function(){ // a listener that fires when the extension is installed or updated and when chrome is updated.
    chrome.storage.sync.set({color: '#3aa757'}, function(){ // stores user data. storage.sync will sync settings across devices with the user account and storage.local will set only on the specific device. Permission must be set in the manifest.
      console.log('The color is green.');
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){ // requires declarativeContent permission on manifest.
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'developer.chrome.com'}, // if in one of these webpages the extension is usable.
        })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });
