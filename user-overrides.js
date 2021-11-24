/******
HOME: https://github.com/crssi/Firefox
INFO: Supplement for arkenfox user.js; https://github.com/arkenfox/user.js; inline with commit 4b393b9 on 24.11.2021
NOTE: Before proceeding further, make a backup of your current profile

1. Download user.js from https://raw.githubusercontent.com/arkenfox/user.js/master/user.js, append this file and place it into "profile folder"
   NOTE: To find "profile folder" location, enter "about:support" into urlbar and on "Profile Folder" row click "Open Folder" button
2. In the "profile folder" create a folder "chrome" and copy-in userChrome.css and userContent.css from https://raw.githubusercontent.com/crssi/Firefox/master/userChrome.css and https://raw.githubusercontent.com/crssi/Firefox/master/userContent.css
3. Firefox -> Options -> General -> General -> Tabs -> Settings...
     Remove all containers
   Firefox -> Options -> Search
     Default Search Engine: duckduckgo
     Show search suggestions ahead of browsing history in address bar results: Uncheck
4. Install extensions (see Extensions section) and setup by instructions
   NOTE: all changes are addition to default
5. Migrate your personal stuff from previous profile by copying appropriate files from backup (see https://support.mozilla.org/kb/profiles-where-firefox-stores-user-data/):
   cert9.db - Certificates
   content-prefs.sqlite - Site-specific preferences
   favicons.sqlite - Bookmarks icons
   handlers.json - Download actions
   key4.db - Passwords
   logins.json - Passwords
   permissions.sqlite - Site-specific preferences
   persdict.dat - Personal dictionary
   pkcs11.txt - Security device settings
   places.sqlite - Bookmarks
6. To enable SSO for enterprise specific realm/domain enter domain list (comma separated without spaces) into preferences (about:config) network.negotiate-auth.trusted-uris and network.automatic-ntlm-auth.trusted-uris

ESSENTIAL EXTENSIONS:
  CanvasBlocker; https://addons.mozilla.org/firefox/addon/canvasblocker/ (https://github.com/kkapsner/CanvasBlocker/)
    Enter "Load" in the search box, click [Load] button and open https://raw.githubusercontent.com/crssi/Firefox/master/CanvasBlocker-settings.json
    Note: When WebGL is disabled, then CB is not essential
  Containerise; https://addons.mozilla.org/firefox/addon/containerise/ (https://github.com/kintesh/containerise/)
    Click [Containerise] icon, click [Pencil], copy/paste from https://raw.githubusercontent.com/crssi/Firefox/master/Containerise.txt, click [Save]
  ETag Stoppa; https://addons.mozilla.org/firefox/addon/etag-stoppa/ (https://github.com/claustromaniac/etag-stoppa/)
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
  Smart Referer; https://addons.mozilla.org/firefox/addon/smart-referer/ (https://gitlab.com/smart-referer/smart-referer/)
    Whitelist Sources: Add https://raw.githubusercontent.com/crssi/Firefox/master/Smart_Referer-Whitelist.txt
    Rewrite Mode: Send nothing as referer, looking like a direct hit
  Temporary Containers; https://addons.mozilla.org/firefox/addon/temporary-containers/ (https://github.com/stoically/temporary-containers/)
    Export/Import
      Import Preferences
        Click [Import from local file]: Download from https://raw.githubusercontent.com/crssi/Firefox/master/temporary_containers_preferences.json
  uBlock Origin; https://addons.mozilla.org/firefox/addon/ublock-origin/ (https://github.com/uBlockOrigin/uBlock-issues/)
    Settings
      Click [Restore from file...]: https://raw.githubusercontent.com/crssi/Firefox/master/my-ublock-backup.txt

EXTENSIONS THAT I AM ALSO USING:
  I don't care about cookies; https://addons.mozilla.org/firefox/addon/i-dont-care-about-cookies/ (https://www.i-dont-care-about-cookies.eu/)
  IMDb Search (Internet Movie Database); https://addons.mozilla.org/firefox/addon/imdb-search-all/ (https://github.com/docmalkovich/firefox-imdb-search)
  Maximize All Windows (Minimalist Version); https://addons.mozilla.org/firefox/addon/maximize-all-windows-minimal/ (https://github.com/ericchase/maximize-all-windows/tree/master-minimal/)
  URLs List; https://addons.mozilla.org/firefox/addon/urls-list/ (https://github.com/moritz-h/urls-list/)

USEFUL/INTERESTING EXTENSIONS:
  Bitwarden - Free Password Manager; https://addons.mozilla.org/firefox/addon/bitwarden-password-manager/ (https://github.com/bitwarden/, https://bitwarden.com/)
  Certainly Something (Certificate Viewer); https://addons.mozilla.org/firefox/addon/certainly-something/ (https://github.com/april/certainly-something/)
  Cookie Quick Manager; https://addons.mozilla.org/firefox/addon/cookie-quick-manager/ (https://github.com/ysard/cookie-quick-manager/)
  Extension source viewer; https://addons.mozilla.org/firefox/addon/crxviewer/ (https://github.com/Rob--W/crxviewer/)
  http tracker; https://addons.mozilla.org/firefox/addon/http-tracker/
  IndicateTLS; https://addons.mozilla.org/firefox/addon/indicatetls/ (https://github.com/jannispinter/indicatetls/)
  NX Enhanced; https://addons.mozilla.org/firefox/addon/nx-enhanced/ (https://github.com/hjk789/NXEnhanced)
  SixIndicator; https://addons.mozilla.org/firefox/addon/sixindicator/ (https://github.com/HostedDinner/SixIndicator/)
  xBrowserSync; https://www.xbrowsersync.org/ (https://github.com/xbrowsersync/)

******/

/*** PERSONAL AND ANNOYANCES TWEAKS ***/
  /* 0800x */ user_pref("browser.urlbar.matchBuckets", "general:15,suggestion:Infinity"); // resets 0801 and must be applied before
  /* 0801  */ user_pref("keyword.enabled", true); // enable location bar using search
  /* 0804  */ user_pref("browser.search.suggest.enabled", true); // enable live search suggestions
  /* 0804  */ user_pref("browser.urlbar.suggest.searches", true); // show search suggestions in address bar results
  /* 2031  */ user_pref("media.autoplay.blocking_policy", 0); // Reset autoplay of HTML5 media to default
  /* 2651  */ user_pref("browser.download.useDownloadDir", true); // force save downloads to download folder
  /* 4512  */ user_pref("browser.link.open_newwindow.restriction", 2); // don't like that a new window is forcibly opened fullsize
  /* 5010  */ user_pref("browser.urlbar.suggest.topsites", false); // hide drop-down search suggestions in urlbar
  /* 5011  */ user_pref("browser.urlbar.maxRichResults", 16); // number of urlbar search results
  /* 5012  */ user_pref("browser.urlbar.autoFill", false); // disable location bar autofill
  /* 5013  */ user_pref("places.history.enabled", false); // disable history
  /* 9000  */ user_pref("browser.tabs.closeWindowWithLastTab", false); // do not close FF with the last tab
  /* 9000  */ user_pref("browser.tabs.loadBookmarksInTabs", true); // open bookmark in a new tab
  /* 9000  */ user_pref("browser.urlbar.decodeURLsOnCopy", true); // see Bugzilla 1320061
  /* 9000  */ user_pref("full-screen-api.warning.timeout", 0); // remove fullscreen message annoyance
  /* 9000  */ user_pref("general.autoScroll", false); // disable mouse middle-click scroll annoyance
  /* 9000  */ user_pref("ui.key.menuAccessKey", 0); // disable alt key toggling the menu bar
  /* 9000  */ user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); // support for userChrome.css (FF 68+)
  /* 9000x */ user_pref("browser.tabs.selectOwnerOnClose", false); // set tab first to the left of closed tab as active
  /* 9000x */ user_pref("browser.urlbar.showSearchSuggestionsFirst", false) // Show search suggestions ahead of browsing history in address bar results
  /* 9000x */ user_pref("findbar.highlightAll", true); // highlight all hits on search
  /* 9000x */ user_pref("signon.management.page.fileImport.enabled", true); // enable logins import from file (Bitwarden, KeePass)

/*** BREAKAGE AND SECURITY TWEAKS ***/
  /* 0301  */ user_pref("app.update.auto", true); // enable auto-installing Firefox updates
  /* 0302  */ user_pref("app.update.background.scheduling.enabled", true); // enable auto-INSTALLING Firefox updates via a background service
  // /* 0906  */ user_pref("network.http.windows-sso.enabled", true); // enable automatic authentication on Microsoft sites
  /* 1201  */ user_pref("security.ssl.require_safe_negotiation", false); // do not force require_safe_negotiation
  /* 1212  */ user_pref("security.OCSP.require", false); // allow connection if OCSP not reacheable; when OCSP is enabled
  /* 1223  */ user_pref("security.cert_pinning.enforcement_level", 1); // set to default to avoid AV breakage
  /* 1241 ?*/ user_pref("security.mixed_content.block_display_content", false); // enable insecure passive content; when HTTPS-Only mode is disabled
  /* 1601  */ user_pref("network.http.referer.XOriginPolicy", 0); // should be 1, except when spoofing by 3rd-party WE, like Smart Referer
  /* 2001  */ user_pref("media.peerconnection.enabled", true); // enable WebRTC, but do not leak local IP
  /* 2022  */ user_pref("media.eme.enabled", true); // enable DRM content (EME: Encryption Media Extension); Netflix, Amazon Prime, Hulu...
  /* 2621  */ user_pref("network.protocol-handler.external.ms-windows-store", true); // enable MS Windows Store
  /* 2701  */ user_pref("browser.contentblocking.category", "standard"); // we don't need 3rd party cookies blocked when TC Automode
  /* 2701  */ user_pref("network.cookie.cookieBehavior", 5); // enable dynamic FPI (dFPI)
  /* 2803  */ user_pref("privacy.clearOnShutdown.cookies", false); // complements with 2703 set to 2
  /* 4001  */ user_pref("privacy.firstparty.isolate", false); // true breaks cross-domain logins and site functionality, TC covers FPI just fine
  /* 4503  */ user_pref("privacy.resistFingerprinting.block_mozAddonManager", false); // enable AMO to work as intended, 2662 must be default
  /* 4504  */ user_pref("privacy.resistFingerprinting.letterboxing", false); // disable RFP letterboxing
  /* 4513  */ user_pref("webgl.disabled", false); // enable WebGL; high entropy FP vector; should be true, except if using WE CanvasBlocker
  /* 5001  */ user_pref("browser.privatebrowsing.autostart", false); // disable PB
  /* 5506  */ user_pref("javascript.options.wasm", true); // enable WebAssembly, Synology DSM 7.0
  /* 9000e */ user_pref("network.automatic-ntlm-auth.allow-non-fqdn", true); // enable SSO for hostnames
  /* 9000e */ user_pref("security.enterprise_roots.enabled", true); // use OS certificates store, Firefox 68+
  /* 9000x */ user_pref("security.osclientcerts.autoload", true); // use OS user certificates store

user_pref("_user.js.parrot", "Eagle has landed!");
