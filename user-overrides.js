/******
HOME: https://github.com/crssi/Firefox
INFO: Supplement for arkenfox user.js; 8.5.2021 (commit: ba9b3c2); https://github.com/arkenfox/user.js
NOTE: Before proceeding further, make a backup of your current profile

1. Download user.js from https://raw.githubusercontent.com/arkenfox/user.js/master/user.js, append this file and place it into "profile folder"
   NOTE: To find "profile folder" location, enter "about:support" into urlbar and on "Profile Folder" row click "Open Folder" button
2. In the "profile folder" create a folder "chrome" and copy-in userChrome.css and userContent.css from https://raw.githubusercontent.com/crssi/Firefox/master/userChrome.css and https://raw.githubusercontent.com/crssi/Firefox/master/userContent.css
3. Firefox -> Options -> General -> General -> Tabs -> Settings...
     Remove all containers
   Firefox -> Options -> Search
     Default Search Engine: duckduckgo
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
  ClearURLs; https://addons.mozilla.org/firefox/addon/clearurls/ (https://gitlab.com/KevinRoebert/ClearUrls/)
    Settings
      Allow domain blocking: Uncheck
      Filters ETag headers from requests: Uncheck
      Click [Save & reload addon]
  Containerise; https://addons.mozilla.org/firefox/addon/containerise/ (https://github.com/kintesh/containerise/)
    Click [Containerise] icon, click [Pencil], copy/paste from https://raw.githubusercontent.com/crssi/Firefox/master/Containerise.txt, click [Save]
  ETag Stoppa; https://addons.mozilla.org/firefox/addon/etag-stoppa/ (https://github.com/claustromaniac/etag-stoppa/)
  I don't care about cookies; https://addons.mozilla.org/firefox/addon/i-dont-care-about-cookies/ (https://www.i-dont-care-about-cookies.eu/)
  Privacy-Oriented Origin Policy; https://addons.mozilla.org/firefox/addon/privacy-oriented-origin-policy/ (https://github.com/claustromaniac/poop/)
    Type filters
      script: Check
      xmlhttprequest (XHR): Check
    Exclusions
      Exclusions: Copy/Paste from https://raw.githubusercontent.com/crssi/Firefox/master/POOP-Exclusions.txt
    Click [Save]
  Skip Redirect; https://addons.mozilla.org/firefox/addon/skip-redirect/ (https://github.com/sblask/webextension-skip-redirect/)
    Blacklist: Copy/Paste from https://raw.githubusercontent.com/crssi/Firefox/master/Skip_Redirect-Blacklist.txt
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

ADDITIONAL EXTENSIONS THAT I AM USING:
  Close unused blank tabs Plus; https://addons.mozilla.org/firefox/addon/close-unused-blank-tabs-plus/ (https://github.com/crssi/Close-unused-blank-tabs-Plus/)
  Maximize All Windows (Minimalist Version); https://addons.mozilla.org/firefox/addon/maximize-all-windows-minimal/ (https://github.com/ericchase/maximize-all-windows/tree/master-minimal/)
  Redirect AMP to HTML; https://addons.mozilla.org/firefox/addon/amp2html/ (https://github.com/da2x/amp2html/)
  URLs List; https://addons.mozilla.org/firefox/addon/urls-list/ (https://github.com/moritz-h/urls-list/)

USEFUL/INTERESTING EXTENSIONS:
  Bitwarden - Free Password Manager; https://addons.mozilla.org/firefox/addon/bitwarden-password-manager/ (https://github.com/bitwarden/, https://bitwarden.com/)
  Certainly Something (Certificate Viewer); https://addons.mozilla.org/firefox/addon/certainly-something/ (https://github.com/april/certainly-something/)
  Cookie Quick Manager; https://addons.mozilla.org/firefox/addon/cookie-quick-manager/ (https://github.com/ysard/cookie-quick-manager/)
  Ephemeral or Confined Container, EoCC; https://addons.mozilla.org/firefox/addon/confiner/ (https://github.com/zncoder/confiner)
  Extension source viewer; https://addons.mozilla.org/firefox/addon/crxviewer/ (https://github.com/Rob--W/crxviewer/)
  http tracker; https://addons.mozilla.org/firefox/addon/http-tracker/
  IMDb Search (Internet Movie Database); https://addons.mozilla.org/firefox/addon/imdb-search-all/ (https://github.com/docmalkovich/firefox-imdb-search)
  IndicateTLS; https://addons.mozilla.org/firefox/addon/indicatetls/ (https://github.com/jannispinter/indicatetls/)
  NX Enhanced; https://addons.mozilla.org/firefox/addon/nx-enhanced/ (https://github.com/hjk789/NXEnhanced)
  Request Control; https://addons.mozilla.org/firefox/addon/requestcontrol/ (https://github.com/tumpio/requestcontrol/)
  SixIndicator; https://addons.mozilla.org/firefox/addon/sixindicator/ (https://github.com/HostedDinner/SixIndicator/)
  xBrowserSync; https://www.xbrowsersync.org/ (https://github.com/xbrowsersync/)

******/

/*** PERSONAL AND ANNOYANCES TWEAKS ***/
  /* 0800x */ user_pref("browser.urlbar.matchBuckets", "general:15,suggestion:Infinity"); // resets 0801 and must be applied before
  /* 0801  */ user_pref("keyword.enabled", true); // enable location bar using search
  /* 0807  */ user_pref("browser.search.suggest.enabled", true); // enable live search suggestions
  /* 0808  */ user_pref("browser.urlbar.suggest.searches", true); // show search suggestions in address bar results
  /* 0850a */ user_pref("browser.urlbar.suggest.topsites", false); // hide drop-down search suggestions in urlbar
  /* 0850c */ user_pref("browser.urlbar.maxRichResults", 16); // number of urlbar search results
  /* 0850d */ user_pref("browser.urlbar.autoFill", false); // disable location bar autofill
  /* 0862  */ user_pref("places.history.enabled", false); // disable history
  /* 2031  */ user_pref("media.autoplay.blocking_policy", 0); // Reset autoplay of HTML5 media to default
  /* 2203  */ user_pref("browser.link.open_newwindow.restriction", 2); // don't like that a new window is forcibly opened fullsize
  /* 2651  */ user_pref("browser.download.useDownloadDir", true); // force save downloads to download folder
  /* 4502  */ user_pref("ui.prefersReducedMotion", 0); // remove ugly UX
  /* 5000  */ user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false); // disable CFR
  /* 5000  */ user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false); // disable CFR
  /* 5000  */ user_pref("browser.tabs.closeWindowWithLastTab", false); // do not close FF with the last tab
  /* 5000  */ user_pref("browser.tabs.loadBookmarksInTabs", true); // open bookmark in a new tab
  /* 5000  */ user_pref("browser.urlbar.decodeURLsOnCopy", true); // see Bugzilla 1320061
  /* 5000  */ user_pref("full-screen-api.warning.timeout", 0); // remove fullscreen message annoyance
  /* 5000  */ user_pref("general.autoScroll", false); // disable mouse middle-click scroll annoyance
  /* 5000  */ user_pref("ui.key.menuAccessKey", 0); // disable alt key toggling the menu bar
  /* 5000x */ user_pref("browser.tabs.selectOwnerOnClose", false); // set tab first to the left of closed tab as active
  /* 5000x */ user_pref("findbar.highlightAll", true); // hihglight all hits on search
  /* 5000x */ user_pref("signon.management.page.fileImport.enabled", true); // enable logins import from file (Bitwarden, KeePass)

/*** BREAKAGE AND SECURITY TWEAKS ***/
  /* 0001  */ user_pref("browser.privatebrowsing.autostart", false); // disable PB
  /* 0302a */ user_pref("app.update.auto", true); // enable auto-installing Firefox updates
  /* 1201  */ user_pref("security.ssl.require_safe_negotiation", false); // do not force require_safe_negotiation
  /* 1212  */ user_pref("security.OCSP.require", false); // allow connection if OCSP not reacheable; when OCSP is enabled
  /* 1223  */ user_pref("security.cert_pinning.enforcement_level", 1); // set to default to avoid AV breakage
  /* 1241  */ user_pref("security.mixed_content.block_display_content", false); // enable insecure passive content; when HTTPS-Only mode is disabled
  /* 1603  */ user_pref("network.http.referer.XOriginPolicy", 0); // should be 1, except when spoofing by 3rd-party WE, like Smart Referer
  /* 1830  */ user_pref("media.eme.enabled", true); // enable DRM content (EME: Encryption Media Extension); Netflix, Amazon Prime, Hulu...
  /* 2001  */ user_pref("media.peerconnection.enabled", true); // enable WebRTC, but do not leak local IP
  /* 2010  */ user_pref("webgl.disabled", false); // enable WebGL, high entropy FP vector; should be true, except if using WE CanvasBlocker
  /* 2010  */ user_pref("webgl.enable-webgl2", true); // enable WebGL
  /* 2022  */ user_pref("media.getusermedia.screensharing.enabled", true); // enable screensharing
  /* 2306  */ user_pref("permissions.default.desktop-notification", 2); // block Notifications
  /* 2403  */ user_pref("dom.allow_cut_copy", true); // allow cut/copy by JS
  // /* 2422  */ user_pref("javascript.options.wasm", true); // enable WebAssembly
  /* 2510  */ user_pref("dom.webaudio.enabled", true); // should be false, except if using WE CanvasBlocker
  /* 2621  */ user_pref("network.protocol-handler.external.ms-windows-store", true); // enable MS Windows Store
  /* 2701  */ user_pref("browser.contentblocking.category", "standard"); // do we need 3rd party cookies blocked when TC Automode?
  /* 4001  */ user_pref("privacy.firstparty.isolate", false); // true breaks cross-domain logins and site functionality, TC covers FPI just fine
  /* 4503  */ user_pref("privacy.resistFingerprinting.block_mozAddonManager", false); // enable AMO to work as intended, 2662 must be default
  /* 5000  */ user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); // support for userChrome.css (FF 68+)
  /* 5000e */ user_pref("network.automatic-ntlm-auth.allow-non-fqdn", true); // enable SSO for hostnames
  /* 5000e */ user_pref("security.enterprise_roots.enabled", true); // use OS certificates store, Firefox 68+
  /* 5000x */ user_pref("security.osclientcerts.autoload", true); // use OS user certificates store

user_pref("_user.js.parrot", "Eagle has landed!");
