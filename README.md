<!-- const pEls = document.getElementsByTagName('p');
for (let i = 0; i < pEls.length; i++){
    console.log(pEls[i].textContent)}; -->
due to no comments in json files the comment information will be stored here.
"name": "tutorial app",
    "version": "1.0",
    "description": "Quick background color changer",
    "permissions": ["declarativeContent", "storage", "activeTab"],
    //extensions need permissions to access certain
    "background":{ // sets the background script that will allow the extension to listen to and respond to events.
        "scripts": ["background.js"],
        "persistent":false
    },
    "options_page": "options.html",
    "page_action":{
        "default_popup": "popup.html",
        "default_icon":{
            "16": "images/tiny-face.png",
            "128":"images/medium-face.png"
        }
    },
    "icons":{
        "16": "images/tiny-face.png",
        "128":"images/medium-face.png"
    },
    "manifest_version": 2