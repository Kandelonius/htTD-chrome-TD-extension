<!-- const pEls = document.getElementsByTagName('p');
for (let i = 0; i < pEls.length; i++){
    console.log(pEls[i].textContent)}; -->
<!--
due to no comments in json files the comment information will be stored here.
"name": "tutorial app",

    "version": "1.0",

    "description": "Quick background color changer",

    "permissions": ["declarativeContent", "storage", "activeTab"],
    //extensions need permissions to have certain functionallity.
    //Storage is required to store user settings.
    //declarative content says when the extension will be valid to use without host permisssion or injecting a content script***.
    //activeTab allows the extension temporary access to the tabs api.

    "background":{ // sets the background script that will allow the extension to listen to and respond to events.
        "scripts": ["background.js"], // tells the extension which file to reference
        "persistent":false // tells the extension that the background is non-persistent
    },

    "options_page": "options.html", // allows for the options page

    "page_action":{ // puts icons on the toolbar.
        "default_popup": "popup.html", // popup type icon
        "default_icon":{ // sets the default icons to replace the generic default.
            "16": "images/tiny-face.png",
            "128":"images/medium-face.png"
        }
    },

    "icons":{ // extension management page icons.
        "16": "images/tiny-face.png",
        "128":"images/medium-face.png"
    },

    "manifest_version": 2
    -->

<!--***Content Scripts
Content scripts are files that run in the context of web pages. By using the standard Document Object Model (DOM), they are able to read details of the web pages the browser visits, make changes to them and pass information to their parent extension.-->
