# UserScripts for Tampermonkey

This repository contains a collection of Tampermonkey scripts designed to enhance the user experience on popular websites like GitHub and Hacker News.

## Included Scripts

### GitHub Auto Redirect to User Repositories
**File**: `userscripts/github-auto-redirect-to-user-repositories-1.0.user.js`

This script automatically redirects logged-in GitHub users to their repositories page as soon as they visit the GitHub homepage. It is intended for those who want to quickly access their projects without having to navigate through the user menu.

### Hacker News Enhancements
**File**: `userscripts/hacker-news-enhancer-1.0.user.js`

This script improves the reading of comments on Hacker News by highlighting links based on their domain, highlighting the post author's name, and ensuring that all links open in a new tab. It's ideal for users who want more intuitive navigation and greater readability of content, allowing for easy identification of external or relevant links.

After installation, navigate to [Hacker News](https://news.ycombinator.com/) and open any comment thread. You'll notice that all links are now highlighted not only to stand out but also to indicate their source domain at a glance, and clicking on them will open the content in a new tab.

### Hacker News Add Links Upvoted
**File**: `userscripts/hacker-news-add-links-upvoted-1.0.user.js`
This script adds links for upvoted submissions and comments directly in the header, using the logged-in account's username.

After installation, navigate to [Hacker News](https://news.ycombinator.com/) and quick links to your upvoted submissions ("↑ subs") and comments ("↑ comms") will be added to the header, based on the logged-in username. This new feature allows for faster navigation to content you've interacted with.

### Hacker News Keyboard Navigation
**File**: `userscripts/hacker-news-keyboard-navigation-1.0.user.js`

This script adds Reddit-style keyboard navigation to Hacker News comment threads. It allows browsing comments without using the mouse, with dedicated keys to move through all comments or jump between threads at the same level.

Based on the original script by [yorickvP](https://gist.github.com/yorickvP/c5f38322867440ea1774594c59ece3a2), with the following improvements:

- Fixed same-level navigation (`n`/`p`) not working when no comment was selected yet: added fallback to select the first comment, consistent with `j`/`k` behavior
- Renamed same-level navigation from `J`/`K` to `n`/`p` (more intuitive: **n**ext / **p**revious)
- All keybindings now work regardless of Caps Lock or Shift: `j`/`J`, `k`/`K`, `n`/`N`, `p`/`P`, `v`/`V`

**Keybindings:**

| Key | Action |
|-----|--------|
| `j` / `k` | Next / previous comment (all levels) |
| `n` / `p` | Next / previous comment at the same level |
| `Enter` | Collapse / expand current comment |
| `v` | Open article URL in new tab |
| `Escape` | Deselect current comment |

## Compatibility and Installation

These scripts have been designed to be compatible with both **Tampermonkey** and **Greasemonkey**, thus providing a wide range of options for users of different browsers. However, given the greater versatility and availability on multiple platforms, we recommend using **Tampermonkey** for a better user experience as it is available for Chrome, Firefox, Safari, and other modern browsers. For iOS users, the **Userscripts** app is available
The functionality of the scripts remains the same regardless of the script manager used. Ensure you have the latest version of the script manager installed to guarantee compatibility and proper functioning of the scripts.

### Installation Steps:
1. Install Tampermonkey in your browser:
    - [Tampermonkey for Chrome](https://tampermonkey.net/?ext=dhdg&browser=chrome)
    - [Tampermonkey for Firefox](https://tampermonkey.net/?ext=dhdg&browser=firefox)
    - [Tampermonkey for Safari](https://tampermonkey.net/?ext=dhdg&browser=safari)
2. Navigate to the desired script in the `/scripts` directory.
3. Click on the script file to view it, then click the "Raw" button to open the raw script file.
4. Tampermonkey should automatically recognize the script and display an installation window. To ensure Tampermonkey recognizes the script from the "raw" file on GitHub, the file must have the .user.js extension and must begin with a UserScript metadata block. The URL should have a structure similar to this: `https://raw.githubusercontent.com/[username]/[repository]/[branch]/[filename].user.js`.
5. Click on "Install" to proceed with the script installation.

After installation, the script will be active and functioning in your browser. With Tampermonkey, you can easily manage, disable, or remove installed scripts by selecting the "Dashboard" option from the Tampermonkey icon in your browser toolbar.

### Installation with Greasemonkey (for Firefox users)
If you are a _Firefox_ user and prefer **Greasemonkey**, scripts should also work in this environment.
1. Install Greasemonkey on Firefox by visiting the Greasemonkey page on Mozilla Add-ons:
   - [Greasemonkey for Firefox](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/).
2. Navigate to the desired script in the `/scripts` directory.
3. Click on the script file to view it, then click the "Raw" button to open the raw script file.
4. With Greasemonkey active, visiting the "Raw" URL of the script should automatically open a Greasemonkey dialog asking if you want to install the script.
5. Click "Install" to proceed with the script installation.

After installation, the script should be active and functioning on Firefox. You can manage, disable, or remove the script through the Greasemonkey menu by selecting "Manage User Scripts".

### Installation with Userscripts (app for iOS)
If you are an _iOS_ user, you can use **Userscripts** to enable scripts on Safari.
1. Install the [Userscripts app from the App Store](https://apps.apple.com/us/app/userscripts/id1463298887).
2. Open the Userscripts app on your iOS device after installing it.
3. Navigate to the desired script in the GitHub `/scripts` directory using the integrated browser in the Userscripts app or a browser on your device, and download the script to your device locally or to iCloud Drive.
4. In the app, set the _Userscripts Directory_ where you have uploaded the scripts you previously downloaded.
5. Ensure that the Userscripts app is enabled as a browser extension on your iOS device to allow script execution. Go to _Settings > Safari > Extensions_ (or whichever browser you use) and make sure Userscripts is enabled.

Now you should be able to use the script on supported web pages when browsing with your iOS device.

## Feedback and Contributions
Your feedback is highly appreciated! If you have suggestions, bugs to report, or improvements, feel free to open an issue or a pull request in the GitHub repository. If you would like to contribute to the project, pull requests are welcome.

## License
This script is released under the MIT license. Feel free to use, modify, and distribute it as you wish.
