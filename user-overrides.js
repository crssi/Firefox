/******
HOME: https://github.com/crssi/Firefox
INFO: Supplement for arkenfox user.js; https://github.com/arkenfox/user.js; inline with commit 3d76c74 on 6.3.2025
NOTE: Before proceeding further, make a backup of your current profile

1. Download user.js from https://raw.githubusercontent.com/arkenfox/user.js/master/user.js, append this file and place it into "profile folder"
   NOTE: To find "profile folder" location, enter "about:support" into urlbar and on "Profile Folder" row click "Open Folder" button
2. Firefox -> Hamburger menu -> Settings -> General -> General -> Tabs -> Settings...
     Remove all containers
   Firefox -> Options -> Search
     Default Search Engine: duckduckgo
     Show search suggestions ahead of browsing history in address bar results: Uncheck
3. Install extensions (see Extensions section) and setup by instructions
   NOTE: all changes are addition to default settings, so you can use them as a reference for your own settings
4. To enable SSO for enterprise specific realm/domain enter domain list (comma separated without spaces) into preferences (about:config) network.negotiate-auth.trusted-uris and network.automatic-ntlm-auth.trusted-uris

ESSENTIAL EXTENSIONS:
  Privacy-Oriented Origin Policy; https://addons.mozilla.org/firefox/addon/privacy-oriented-origin-policy/ (https://github.com/claustromaniac/poop/)
    Type filters
      script: Check
      xmlhttprequest (XHR): Check
    Exclusions
      Exclusions: Copy/Paste from https://raw.githubusercontent.com/crssi/Firefox/master/POOP-Exclusions.txt
    Click [Save]
  Skip Redirect; https://addons.mozilla.org/firefox/addon/skip-redirect/ (https://github.com/sblask/webextension-skip-redirect/)
    No-skip-urls-list: Copy/Paste from https://raw.githubusercontent.com/crssi/Firefox/master/Skip_Redirect-Blacklist.txt
    Notifications
      Enable popup: Uncheck
  Temporary Containers Plus; https://addons.mozilla.org/firefox/addon/temporary-containers-plus/ (https://github.com/GodKratos/temporary-containers/)
    Export/Import
      Import Preferences
        Click [Import from local file]: Download from https://raw.githubusercontent.com/crssi/Firefox/master/temporary_containers_preferences.json
  uBlock Origin; https://addons.mozilla.org/firefox/addon/ublock-origin/ (https://github.com/uBlockOrigin/uBlock-issues/)
    Settings
      Click [Restore from file...]: https://raw.githubusercontent.com/crssi/Firefox/master/my-ublock-backup.txt

USEFUL/INTERESTING EXTENSIONS:
  IMDb Search (Internet Movie Database); https://addons.mozilla.org/firefox/addon/imdb-search-all/ (https://github.com/docmalkovich/firefox-imdb-search)
  Keepa.com - Amazon Price Tracker; https://addons.mozilla.org/firefox/addon/keepa/
  Maximize All Windows (Minimalist Version); https://addons.mozilla.org/firefox/addon/maximize-all-windows-minimal/ (https://github.com/ericchase/maximize-all-windows/tree/master-minimal/)
  URLs List; https://addons.mozilla.org/firefox/addon/urls-list/ (https://github.com/moritz-h/urls-list/)
  Simple Translate (https://addons.mozilla.org/firefox/addon/simple-translate/)
  Switch Container Plus (https://addons.mozilla.org/firefox/addon/switch-container-plus/)

ARCHIVED/INTERESTING EXTENSIONS:
  Bitwarden - Free Password Manager; https://addons.mozilla.org/firefox/addon/bitwarden-password-manager/ (https://github.com/bitwarden/, https://bitwarden.com/)
  Certainly Something (Certificate Viewer); https://addons.mozilla.org/firefox/addon/certainly-something/ (https://github.com/april/certainly-something/)
  Cookie Quick Manager; https://addons.mozilla.org/firefox/addon/cookie-quick-manager/ (https://github.com/ysard/cookie-quick-manager/)
  I still don't care about cookies; https://addons.mozilla.org/firefox/addon/istilldontcareaboutcookies/ (https://github.com/OhMyGuus/I-Dont-Care-About-Cookies/)
  IndicateTLS; https://addons.mozilla.org/firefox/addon/indicatetls/ (https://github.com/jannispinter/indicatetls/)
  SixIndicator; https://addons.mozilla.org/firefox/addon/sixindicator/ (https://github.com/HostedDinner/SixIndicator/)
  Smart Referer; https://addons.mozilla.org/firefox/addon/smart-referer/ (https://gitlab.com/smart-referer/smart-referer/)
    Whitelist Sources: Add https://raw.githubusercontent.com/crssi/Firefox/master/Smart_Referer-Whitelist.txt


******/

/*** PERSONAL AND ANNOYANCES TWEAKS ***/
  /* 0800x */ user_pref("browser.urlbar.matchBuckets", "general:15,suggestion:Infinity"); // resets 0801 and must be applied before
  /* 0804  */ user_pref("browser.search.suggest.enabled", true); // enable live search suggestions
  /* 0804  */ user_pref("browser.urlbar.suggest.searches", true); // show search suggestions in address bar results
  /* 4513  */ user_pref("browser.link.open_newwindow.restriction", 2); // don't like that a new window is forcibly opened fullsize
  /* 5011  */ user_pref("browser.urlbar.maxRichResults", 16); // number of urlbar search results
  /* 5012  */ user_pref("browser.urlbar.autoFill", false); // disable location bar autofill
  /* 9000x */ user_pref("browser.tabs.closeWindowWithLastTab", false); // do not close FF with the last tab
  /* 9000x */ user_pref("browser.tabs.loadBookmarksInTabs", true); // open bookmark in a new tab
  /* 9000x */ user_pref("browser.urlbar.decodeURLsOnCopy", true); // see Bugzilla 1320061
  /* 9000x */ user_pref("full-screen-api.warning.timeout", 0); // remove fullscreen message annoyance
  /* 9000x */ user_pref("general.autoScroll", false); // disable mouse middle-click scroll annoyance
  /* 9000x */ user_pref("ui.key.menuAccessKey", 0); // disable alt key toggling the menu bar
  /* 9000x */ user_pref("browser.tabs.selectOwnerOnClose", false); // set tab first to the left of closed tab as active
  /* 9000x */ user_pref("browser.translations.automaticallyPopup", false); // do not show translation popup
  /* 9000x */ user_pref("browser.urlbar.showSearchSuggestionsFirst", false) // Show search suggestions ahead of browsing history in address bar results
  /* 9000x */ user_pref("browser.urlbar.suggest.topsites", false); // don't show top sites suggestion in url bar
  /* 9000x */ user_pref("findbar.highlightAll", true); // highlight all hits on search

/*** BREAKAGE AND SECURITY TWEAKS ***/
  /* 0701  */ user_pref("network.dns.disableIPv6", true); //disable IPv6
  /* 1201  */ user_pref("security.ssl.require_safe_negotiation", false); // do not force require_safe_negotiation
  /* 1212 ?*/ user_pref("security.OCSP.require", false); // allow connection if OCSP not reacheable; when OCSP is enabled
  /* 1223  */ user_pref("security.cert_pinning.enforcement_level", 1); // set to default to avoid AntiVirus breakage
  /* 4503  */ user_pref("privacy.resistFingerprinting.block_mozAddonManager", false); // enable AMO to work as intended, 2662 must be default
  /* 5001  */ user_pref("browser.privatebrowsing.autostart", false); // disable PB
  /* 9000e */ user_pref("network.automatic-ntlm-auth.allow-non-fqdn", true); // enable SSO for hostnames

user_pref("_user.js.parrot", "Eagle has landed!");
