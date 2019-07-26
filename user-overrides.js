/******
HOME: https://github.com/crssi/Firefox
INFO: Supplement for ghacks-user.js; 23.7.2019 (commit: 6618bf5); https://github.com/ghacksuserjs/ghacks-user.js
NOTE: Before proceeding further, make a backup of your current profile
PROFILE: https://github.com/crssi/Firefox/raw/master/Profile.zip

0. Download user.js from https://raw.githubusercontent.com/ghacksuserjs/ghacks-user.js/master/user.js and place it into "profile folder"
   NOTE: To find location of the "profile folder" enter "about:support" into url bar, click "Open Folder" button under "Application Basics" section on "Profile Folder"
1. Append this file to user.js that was downloaded in step 0.
2. Go to "profile folder", remove file "SiteSecurityServiceState.txt" and create folder with the same name; https://nakedsecurity.sophos.com/2015/02/02/anatomy-of-a-browser-dilemma-how-hsts-supercookies-make-you-choose-between-privacy-or-security/
3. In the "profile folder" create a folder "chrome" and copy userChrome.css from https://raw.githubusercontent.com/crssi/Firefox/master/userChrome.css
4. Firefox -> Options -> General -> General -> Tabs -> Settings...
     Remove all containers
   Firefox -> Options -> Search
     Default Search Engine: duckduckgo
     Show search suggestions ahead of browsing history in address bar results: Uncheck
     One-Click Search Engines: delete all except DuckDuckGo
   Firefox -> Options -> Privacy & Security -> Content Blocking -> Custom
     Criptominers: Check
     Fingerprinters: Check
5. Install extensions (see Extensions section) and setup by instructions
   NOTE: all changes are addition to default
6. For enterprise use, insert domain list (comma separated) to enable SSO (about:config) for network.negotiate-auth.trusted-uris and network.automatic-ntlm-auth.trusted-uris
7. Migrate your personal stuff from previous profile by copying appropriate files from backup (see https://support.mozilla.org/kb/profiles-where-firefox-stores-user-data/):
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
8. To overcome fixed size Firefox window annoyance at Firefox start, right-click on Firefox shortcut -> Properties -> "Shortcut" tab -> select "Maximized" under "Run" property
   NOTE: It is not wise to do that!

EXTENSIONS:
  CanvasBlocker; https://addons.mozilla.org/firefox/addon/canvasblocker/ (https://github.com/kkapsner/CanvasBlocker/)
    Expert mode -> Misc -> Block data URL pages: Uncheck
  CSS Exfil Protection; https://addons.mozilla.org/firefox/addon/css-exfil-protection/ (https://www.mike-gualtieri.com/css-exfil-vulnerability-tester)
  Decentraleyes; https://addons.mozilla.org/firefox/addon/decentraleyes/ (https://git.synz.io/Synzvato/decentraleyes/); https://git.synz.io/Synzvato/decentraleyes/wikis/Frequently-Asked-Questions
    Exclude domains from inspections: account.godaddy.com;racunalniske-novice.com
  ETag Stoppa; https://addons.mozilla.org/firefox/addon/etag-stoppa/ (https://github.com/claustromaniac/ETag-Stoppa/)
  Google search link fix; https://addons.mozilla.org/firefox/addon/google-search-link-fix/ (https://github.com/palant/searchlinkfix/)
  Neat URL; https://addons.mozilla.org/firefox/addon/neat-url/ (https://github.com/Smile4ever/Neat-URL/)
    Blocked parameters: Copy/Paste from https://raw.githubusercontent.com/crssi/Firefox/master/Neat_URL-Blocked_parameters.txt
    URL request types: font, image, imageset, main_frame, media, object, object_subrequest, script, stylesheet, sub_frame, websocket, xbl, xml_dtd, xmlhttprequest, xslt, other
    Click [Save preferences]
  Privacy-Oriented Origin Policy; https://addons.mozilla.org/firefox/addon/privacy-oriented-origin-policy/ (https://github.com/claustromaniac/poop/)
    Type filters
      script: Check
      xmlhttprequest (XHR): Check
    Exclusions
      Exclusions: Copy/Paste from https://raw.githubusercontent.com/crssi/Firefox/master/POOP-Exclusions.txt
    Click [Save]
  Redirect AMP to HTML; https://addons.mozilla.org/firefox/addon/amp2html/ (https://github.com/da2x/amp2html/)
  Skip Redirect; https://addons.mozilla.org/firefox/addon/skip-redirect/ (https://github.com/sblask/webextension-skip-redirect/)
    Blacklist: Copy/Paste from https://raw.githubusercontent.com/crssi/Firefox/master/Skip_Redirect-Blacklist.txt
    Notifications
      Enable popup: Uncheck
  Smart Referer; https://addons.mozilla.org/firefox/addon/smart-referer/ (https://gitlab.com/smart-referer/smart-referer/)
    Add to exceptions:
      *.google.* > *.google*.*
      *.icloud.com > *.apple.com
  Temporary Containers; https://addons.mozilla.org/firefox/addon/temporary-containers/ (https://github.com/stoically/temporary-containers/)
    Export/Import
      Import Preferences
        Click [Browse...]: Download from https://raw.githubusercontent.com/crssi/Firefox/master/temporary_containers_preferences.json
  uBlock Origin; https://addons.mozilla.org/firefox/addon/ublock-origin/ (https://github.com/uBlockOrigin/uBlock-issues/); https://git.synz.io/Synzvato/decentraleyes/wikis/Frequently-Asked-Questions
    Settings
      Click [Restore from file...]: Download and unzip from https://raw.githubusercontent.com/crssi/Firefox/master/my-ublock-backup.zip
  uMatrix; https://addons.mozilla.org/firefox/addon/umatrix/ (https://github.com/uBlockOrigin/uMatrix-issues/); https://git.synz.io/Synzvato/decentraleyes/wikis/Frequently-Asked-Questions
    About
      Click [Restore from file...]: Download and unzip from https://raw.githubusercontent.com/crssi/Firefox/master/my-umatrix-backup.zip

USEFUL/INTERESTING EXTENSIONS:
  Containerise; https://addons.mozilla.org/firefox/addon/containerise/ (https://github.com/kintesh/containerise/)
  Context Plus; https://addons.mozilla.org/firefox/addon/context-plus/ (https://github.com/totallymike/contextPlus/)
  I don't care about cookies; https://addons.mozilla.org/firefox/addon/i-dont-care-about-cookies/ (https://www.i-dont-care-about-cookies.eu/)
  Pasa password generator; https://addons.mozilla.org/firefox/addon/pasa-password-generator/ (https://github.com/alexhenrie/pasa/)
  URLs List; https://addons.mozilla.org/firefox/addon/urls-list/ (https://github.com/moritz-h/urls-list/)

  Certainly Something (Certificate Viewer); https://addons.mozilla.org/firefox/addon/certainly-something/ (https://github.com/april/certainly-something/)
  ?* Close Unused Blank Tabs; https://addons.mozilla.org/firefox/addon/close-unused-blank-tabs/
  Cookie Quick Manager; https://addons.mozilla.org/firefox/addon/cookie-quick-manager/ (https://github.com/ysard/cookie-quick-manager/)
  Copy As Text (Copy As Plain Text); https://addons.mozilla.org/firefox/addon/copy-as-text/
  Extension source viewer; https://addons.mozilla.org/firefox/addon/crxviewer/ (https://github.com/Rob--W/crxviewer/)
  ?* FF Password Exporter; https://github.com/kspearrin/ff-password-exporter/ (not WE, stand alone application)
  HTTPZ; https://addons.mozilla.org/firefox/addon/httpz/ (https://github.com/claustromaniac/httpz/)
  ?* PasswordFox; http://www.nirsoft.net/utils/passwordfox.html (not WE, stand alone application)
  SixIndicator; https://addons.mozilla.org/firefox/addon/sixindicator/ (https://github.com/HostedDinner/SixIndicator/)
  SmartProxy; https://addons.mozilla.org/firefox/addon/smartproxy/ (https://github.com/salarcode/SmartProxy/)

******/

/*** PERSONAL AND ANNOYANCES TWEAKS ***/
  /* 0862  */ user_pref("places.history.enabled", false); // disable history
  /* 1401  */ user_pref("browser.display.use_document_fonts", 1); // I just <3 fonts
  /* 2031  */ user_pref("media.autoplay.enabled.user-gestures-needed", true); // Enable autoplay of HTML5 media if interacted with the site
  /* 2203  */ user_pref("browser.link.open_newwindow.restriction", 2); // don't like that a new window is forcibly opened fullsize
  /* 2650  */ user_pref("browser.download.folderList", 1); // default download location (0=desktop 1=downloads 2=last used)
  /* 2651  */ user_pref("browser.download.useDownloadDir", true); // force save downloads to download folder
  /* 2654  */ user_pref("browser.download.forbid_open_with", true); // disable "open with" in download dialog
  /* 4502  */ user_pref("privacy.window.maxInnerWidth", 1600); // set 1600px width at start
  /* 4502  */ user_pref("privacy.window.maxInnerHeight", 900); // set 900px height at start
  /* 5000  */ user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false); // disable CFR
  /* 5000  */ user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false); // disable CFR
  /* 5000  */ user_pref("browser.tabs.closeWindowWithLastTab", false); // do not close FF with the last tab
  /* 5000  */ user_pref("browser.tabs.loadBookmarksInTabs", true); // open bookmarks in a new tab
  /* 5000  */ user_pref("browser.urlbar.decodeURLsOnCopy", true); // see  Bugzilla 1320061
  /* 5000  */ user_pref("full-screen-api.warning.timeout", 0); // remove fullscreen message annoyance
  /* 5000  */ user_pref("general.autoScroll", false); // disable mouse middle-click scroll annoyance
  /* 5000  */ user_pref("ui.key.menuAccessKey", 0); // disable alt key toggling the menu bar
  /* 5000x */ user_pref("extensions.htmlaboutaddons.enabled", false); // I don't like the new abbout:addons
  /* 5000x */ user_pref("findbar.highlightAll", true); // hihglight all hits on search

/*** BREAKAGE AND SECURITY TWEAKS ***/
  /* 0001  */ user_pref("browser.privatebrowsing.autostart", false); // disable PB
  /* 0302a */ user_pref("app.update.auto", true); // enable auto-installing Firefox updates
  /* 0302b */ user_pref("extensions.update.autoUpdateDefault", true); // enable auto-installing Firefox extensions
  /*?0390a */ user_pref("captivedetect.canonicalURL", "http://detectportal.firefox.com/success.txt"); // Captive Portal detection - WiFi login pages
  /*?0390b */ user_pref("network.captive-portal-service.enabled", true); // Captive Portal detection - WiFi login pages
  /* 1212  */ user_pref("security.OCSP.require", false); // allow connection when OCSP not reacheable
  /*?1241  */ user_pref("security.mixed_content.block_display_content", false); // allow non-secure passive content
  // /*?1242  */ user_pref("security.mixed_content.upgrade_display_content", true); // upgrade non-secure passive content
  /* 1603  */ user_pref("network.http.referer.XOriginPolicy", 0); // should be 1, except when spoofing by 3rd-party WE, like Smart Referer
  /* 2402  */ user_pref("dom.event.clipboardevents.enabled", true); // enable access to clipboard events/content
  /* 2403  */ user_pref("dom.allow_cut_copy", true); // allow cut/copy by JS
  /* 2510  */ user_pref("dom.webaudio.enabled", true); // should be false, except if using WE CanvasBlocker
  /* 4001  */ user_pref("privacy.firstparty.isolate", false); // true breaks cross-domain logins and site functionality, TC covers FPI just fine
  /* 4503  */ user_pref("privacy.resistFingerprinting.block_mozAddonManager", false); // enable AMO to work as intended, 2662 must be default
  // /*?4504  */ user_pref("privacy.resistFingerprinting.letterboxing", false); //do not dynamically resize the inner window
  /* 5000x */ user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); // support for userChrome.css (FF 68+)

/*** LOCATION BAR / SEARCH BAR / SUGGESTIONS ***/
  /* 0800x */ user_pref("browser.urlbar.matchBuckets", "general:16,suggestion:Infinity"); // browser.urlbar.matchBuckets resets 0801 and must be applied before
  /* 0801  */ user_pref("keyword.enabled", true); // enable location bar using search
  /* 0807  */ user_pref("browser.search.suggest.enabled", true); // enable live search suggestions
  /* 0808  */ user_pref("browser.urlbar.suggest.searches", true); // show search suggestions in address bar results
  /* 0850c */ user_pref("browser.urlbar.maxRichResults", 18); // number of urlbar search results
  /* 0850d */ user_pref("browser.urlbar.autoFill", false); // disable location bar autofill

/*** ENTERPRISE USE SPECIFIC ***/
  /*?0000  */ user_pref("security.enterprise_roots.enabled", true); // use OS certificates store, Firefox 68+
  /* 0000  */ user_pref("network.automatic-ntlm-auth.allow-non-fqdn", true); // enable SSO for hostnames
  // /* 0000  */ user_pref("network.negotiate-auth.trusted-uris", ""); // enable SSO for comma separated domain list
  // /* 0000  */ user_pref("network.automatic-ntlm-auth.trusted-uris", ""); // enable SSO for comma separated domain list

/*** RESET TO DEFAULT ***/
  /* 0864  */ user_pref("dom.forms.datetime", true);
  /* 2426  */ user_pref("dom.IntersectionObserver.enabled", true);

user_pref("_user.js.parrot", "Eagle has landed.");
