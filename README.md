The challenge is to be able to do the following actions in a given website:
 * Trigger form submit with a pair of credentials.
 * Find the form elements in the dom.
 * Obtain the values from the login elements in the dom.

# Load The Extension

1. Go to 'chrome://extensions' in your chrome browser.
2. In the upper right corner check 'Developer mode'
3. In the menu that appeared select 'Load unpacked extension...'
4. Select this folder.

In order to reload your changes:
1. Go to 'chrome://extensions' in your chrome browser.
2. Click 'Update extensions now', 'Ctrl+r', or 'Cmd+r'.


# The Challenge

In this folder there is a file called challenge.js with three functions that you will need to override.
Currently challenge.js has sample code that shows a proof of concept for https://facebook.com

You can test the functions by clicking the UnifyID icon in the top right corner of Google Chrome and select the function
to test from the menu.

Here is what is expected when selecting each option from the menu:
 * Detect Fields: This will call your function `detectFormFields` and put a border around the elements.
 * Login: This will call your function `loginWithCredentials` with fake credentials.
 * Get Form Values: This will alert the result from your function `obtainFieldsValues`

You can change the credentials for testing the Log In in the file ./dist/credentials.json

# Optional

In case that you need to preserve a global state across several pages you can use the background script (background.js)
that is in this folder.
More about background scripts: https://developer.chrome.com/extensions/background_pages
More about communication with the background script: https://developer.chrome.com/extensions/nativeMessaging
