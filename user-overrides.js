/******
HOME:      https://github.com/crssi/Firefox
INFO:      Supplement for ghacks-user.js; 16.12.2018 (commit: da80e39); https://github.com/ghacksuserjs/ghacks-user.js
NOTE:      Before proceeding further, make a backup of your current profile

1. Download user.js from https://raw.githubusercontent.com/ghacksuserjs/ghacks-user.js/master/user.js and place it into "profile folder"
   Note: To find location of the "profile folder" enter "about:support" into url bar, click "Open Folder" button under "Application Basics" section on "Profile Folder"
2. Append this file to user.js that was downloaded in step 1.
3. Go to "profile folder", remove file "SiteSecurityServiceState.txt" and create folder with the same name; https://nakedsecurity.sophos.com/2015/02/02/anatomy-of-a-browser-dilemma-how-hsts-supercookies-make-you-choose-between-privacy-or-security/
4. Firefox -> Settings -> Search
    Default Search Engine: duckduckgo
    One-Click Search Engines: delete all except DuckDuckGo
5. Install essential extensions (see Extensions section) and setup by instructions
6. For enterprise use, insert domain list (comma separated) to enable SSO for network.negotiate-auth.trusted-uris and network.automatic-ntlm-auth.trusted-uris under enterprise specific section
7. Migrate your personal stuff from previous profile by copying appropriate files from backup (see https://support.mozilla.org/kb/profiles-where-firefox-stores-user-data/):
   places.sqlite - Bookmarks
   favicons.sqlite - Bookmarks icons
   cert9.db - Certificates
   handlers.json - Download actions
   key4.db - Passwords
   logins.json - Passwords
   persdict.dat - Personal dictionary
   pkcs11.txt - Security device settings
   content-prefs.sqlite - Site-specific preferences
   permissions.sqlite - Site-specific preferences

ESSENTIAL EXTENSIONS:
  CanvasBlocker; https://addons.mozilla.org/firefox/addon/canvasblocker/ (https://github.com/kkapsner/CanvasBlocker/)
    Expert mode -> Misc -> Block data URL pages: Uncheck
  Cookie AutoDelete; https://addons.mozilla.org/firefox/addon/cookie-autodelete/ (https://github.com/Cookie-AutoDelete/Cookie-AutoDelete/)
    Cookie Settings
      Enable Automatic Cleaning? Delay Before Cleaning: 120 seconds
      Enable Cleanup on Domain Change: Check
      Enable Cleanup Log and Counter: Uncheck
      Show Number of Cookies for that Domain: Check
      Show Notification After Cookie Cleanup: Uncheck
      Enable Support for Firefox's Container Tabs: Check
      Localstorage Cleanup (Firefox 58+): Check
  Context Plus; https://addons.mozilla.org/firefox/addon/context-plus/ (https://github.com/totallymike/contextPlus/)
  CSS Exfil Protection; https://addons.mozilla.org/firefox/addon/css-exfil-protection/ (https://www.mike-gualtieri.com/css-exfil-vulnerability-tester)
  Decentraleyes; https://addons.mozilla.org/firefox/addon/decentraleyes/ (https://git.synz.io/Synzvato/decentraleyes/); https://git.synz.io/Synzvato/decentraleyes/wikis/Frequently-Asked-Questions
  Don't touch my tabs!; (rel=noopener) https://addons.mozilla.org/firefox/addon/dont-touch-my-tabs/
  ETag Stoppa; https://addons.mozilla.org/firefox/addon/etag-stoppa/ (https://github.com/claustromaniac/ETag-Stoppa)
  Header Editor; https://addons.mozilla.org/firefox/addon/header-editor/ (https://github.com/FirefoxBar/HeaderEditor/)
    Export and Import
      Download rule: https://raw.githubusercontent.com/crssi/Firefox/master/HeaderEditor.json
      Import: Click [Save]
  Neat URL; https://addons.mozilla.org/firefox/addon/neat-url/ (https://github.com/Smile4ever/Neat-URL/)
    Blocked parameters: _encoding, _hsenc, _hsmi, _openstat, $:, $/ref@amazon.*, !cn@mail.google.com, !sc@*.googlevideo.com, !sp@*.startpage.com, 77campaign, action_object_*, action_ref_*, action_type_*, ad_*, adset_*, aff_platform, aff_trace_key, algo_*, aqs, assetId, assetType, bav, bih, biw, btsid, bvm, callback@bilibili.com, CAMPAIGN, campaign_*, campaignId, cn, cp, csi, cvid, d@banggood.com, dni, dpr, dq, e@linkedin.com, ei@google.*, ek, elq*, elqTrack, elqTrackId, ems_l, F@digifot.com, fb_*, feature, feeditemid, form, forward, fromEmail, ga_*, gclid, goalType, gs_gbg, gs_l, gs_mss, gs_rn, gws_rd, hmb_*, iact, icid, ijn, Itemid, kw, li@linkedin.com, lipi, lkid@gearbest.com, loc_, mailid, mc_*, midToken, mkt_*, N@digifot.com, nb, ncid, ndsp, nid, nr_email_referer, ORIGIN, p@banggood.com, pbx, pd_rd_*, pf_rd_*, pk_campaign, pk_kwd, position@sourceforge.net, pq, prmd, psc, pv, qp, qs@bing.com, recipientId, ref_, refsrc, rni, RSS*, sc, sc_*, sclient, scm@*.aliexpress.com, scroll, sei, siteId, sk, source@sourceforge.net, sp, spm@*.aliexpress.com, sr, sr_share, stick, subid, tag@amazon.*, tbnid, tctx, terminal_id, trackId, trk, trkEmail, tt_*, ut, utm_*, ved, vero_*, vet, wid@gearbest.com, wmode, ws_ab_*, yclid, yv, fbclid
    URL request types: font, image, imageset, main_frame, media, object, object_subrequest, script, stylesheet, sub_frame, websocket, xbl, xml_dtd, xmlhttprequest, xslt, other
    Click [Save preferences]
  Privacy-Oriented Origin Policy; https://addons.mozilla.org/firefox/addon/privacy-oriented-origin-policy/ (https://github.com/claustromaniac/poop/)
  Redirect AMP to HTML; https://addons.mozilla.org/firefox/addon/amp2html/ (https://github.com/da2x/amp2html/)
  Skip Redirect; https://addons.mozilla.org/firefox/addon/skip-redirect/ (https://github.com/sblask/webextension-skip-redirect/)
    Blacklist (Append, without indentation to simplify copy/paste):
_sso=
/_login
/abp
/account
/adfs/ls/
/auth
/cookie
/cred_submit
/download
/login
/logoff
/logon
/logout
/oauth
/openid/
/preferences
/profile
/register
/saml/
/SAML2/
/signin
/signoff
/signon
/signout
/signup
/sso/
/subscribe
/verification
/websso/
/wsfederation
action=login
alipay.com
archive.is/
chart.googleapis.com/chart
i-dont-care-about-cookies.eu/
logout=
medium.com/
microsofttranslator.com/
paypal.com/
phish-report.mozilla.com/
reddit.com/
rover.ebay.co
securityheaders.com/
ssllabs.com/
t.umblr.com/redirect
translate.google.com/
virustotal.com/
web.archive.org/
webcache.googleusercontent.com/
youtube.com/embed/
    Notifications
      Enable popup: Uncheck
  Smart Referer; https://addons.mozilla.org/firefox/addon/smart-referer/ (https://gitlab.com/smart-referer/smart-referer/)
  Temporary Containers; https://addons.mozilla.org/firefox/addon/temporary-containers/ (https://github.com/stoically/temporary-containers/)
    General
      Automatic Mode: Check
      [PERSONAL CHOICE] Container Name Prefix: %domain% #
      [PERSONAL CHOICE] Random Container Color: Check
      [PERSONAL CHOICE] Container Icon: fingerprint
      Container Number: Reuse available numbers
      Delete no longer needed Temporary Containers: 2 minutes after the last tab in it closes
      Click [Save]
    Isolation
      Per Domain
        Domain pattern: *
          Always open in new Temporary Containers: enabled
          Click [Add or Edit]
        Domain pattern: duckduckgo.com
          Always open in new Temporary Containers: enabled
          Click [Add or Edit]
      Global
        Mouse Clicks on Links should open new Temporary Containers
          Middle Mouse: If the clicked Link Domain does not match the active Tabs Domain (Subdomains won't get isolated)
        Click [Save]
    NOTE: CTRL+SHIFT+T = Undo closed tab(s)
  uBlock Origin; https://addons.mozilla.org/firefox/addon/ublock-origin/ (https://github.com/uBlockOrigin/uBlock-issues/); https://github.com/Synzvato/decentraleyes/wiki/Frequently-Asked-Questions
    Settings
      Click [Restore from file...]: Download and unzip from https://raw.githubusercontent.com/crssi/Firefox/master/my-ublock-backup.zip
      [Insane mode] Tick the unchecked filters under Filter lists -> Custom (click + to expand)
  uMatrix; https://addons.mozilla.org/firefox/addon/umatrix/ (https://github.com/uBlockOrigin/uMatrix-issues/); https://github.com/Synzvato/decentraleyes/wiki/Frequently-Asked-Questions
    About
      Click [Restore from file...]: Download and unzip from https://raw.githubusercontent.com/crssi/Firefox/master/my-umatrix-backup.zip

USEFUL EXTENSIONS:
  Certainly Something (Certificate Viewer); https://addons.mozilla.org/firefox/addon/certainly-something/ (https://github.com/april/certainly-something/issues/)
  Cookie Quick Manager; https://addons.mozilla.org/firefox/addon/cookie-quick-manager/ (https://github.com/ysard/cookie-quick-manager/)
  Copy As Text (Copy As Plain Text); https://addons.mozilla.org/firefox/addon/copy-as-text/
  Extension source viewer; https://addons.mozilla.org/firefox/addon/crxviewer/ (https://github.com/Rob--W/crxviewer/)
  I don't care about cookies; https://addons.mozilla.org/firefox/addon/i-dont-care-about-cookies/ (https://www.i-dont-care-about-cookies.eu/)
  Project Insight; https://addons.mozilla.org/firefox/addon/project-insight/
  URLs List; https://addons.mozilla.org/firefox/addon/urls-list/ (https://github.com/moritz-h/urls-list/)

EXPERIMENTAL/INVESTIGATION:
  See: https://12bytes.org/articles/tech/firefox/firefox-extensions-my-picks
  /* 1404  / user_pref("gfx.font_rendering.opentype_svg.enabled", true); // but, I like fonts
  /* 1406  / user_pref("layout.css.font-loading-api.enabled", true); // but, I like fonts
  /* 1408  / user_pref("gfx.font_rendering.graphite.enabled", true); // but, I like fonts

******/

/*** ANNOYANCES TWEAKS ***/
  /* 0000  */ user_pref("findbar.highlightAll", true); // hihglight all hits on search
  /* 0000  */ user_pref("lightweightThemes.selectedThemeID", "firefox-compact-dark@mozilla.org"); // dark theme
  /* 0862  */ user_pref("places.history.enabled", false); // disable history
  /* 0515  */ user_pref("extensions.screenshots.disabled", true); // disable screenshots
  /* 1020  */ user_pref("browser.sessionstore.max_tabs_undo", 10); // remember last 10 closed tabs for undo
  /* 1401  */ user_pref("browser.display.use_document_fonts", 1); // but, I like fonts
  /* 1405  */ user_pref("gfx.downloadable_fonts.woff2.enabled", true); // but, I like fonts
  /* 2205  */ user_pref("browser.link.open_newwindow.restriction", 2); // don't like that a new window is forcibly opened fullsize
  /* 2650  */ user_pref("browser.download.folderList", 1); // default download location (0=desktop 1=downloads 2=last used)
  /* 2651  */ user_pref("browser.download.useDownloadDir", true); // force save downloads to download folder
  /* 4502  */ user_pref("privacy.window.maxInnerWidth", 1600); // width at start
  /* 4502  */ user_pref("privacy.window.maxInnerHeight", 900); // height at start
  /* 5000  */ user_pref("accessibility.typeaheadfind", true); // enable "Find As You Type"
  /* 5000  */ user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr", false); // disable CFR
  /* 5000  */ user_pref("browser.tabs.closeWindowWithLastTab", false); // do not close FF with the last tab
  /* 5000  */ user_pref("browser.tabs.loadBookmarksInTabs", true); // open bookmarks in a new tab
  /* 5000  */ user_pref("browser.urlbar.decodeURLsOnCopy", true); // see  Bugzilla 1320061
  /* 5000  */ user_pref("ui.key.menuAccessKey", 0); // disable alt key toggling the menu bar
  /* 5002  */ user_pref("full-screen-api.warning.timeout", 0); // remove fullscreen message annoyance
  /* 5026  */ user_pref("reader.parse-on-load.enabled", false); // disable reader view
  /* 5028  */ user_pref("general.autoScroll", false); // disable mouse middle-click scroll annoyance

/*** BREAKAGE TWEAKS ***/
  /* 0001  */ user_pref("browser.privatebrowsing.autostart", false); // disable PB
  /* 1241  */ user_pref("security.mixed_content.block_display_content", false); // allow secure and non-secure content
  /* 1603  */ user_pref("network.http.referer.XOriginPolicy", 0); // should be 1, except when spoofing by 3rd-party like Smart Referer WE
  /* 2030  */ user_pref("media.autoplay.default", 0); // disable auto-play of HTML5 media (FF63+), 0=Allowed (default), 1=Blocked, 2=Prompt
  /* 2402  */ user_pref("dom.event.clipboardevents.enabled", true); // enable access to clipboard events/content
  /* 2403  */ user_pref("dom.allow_cut_copy", true); // allow cut/copy by JS
  /* 2510  */ user_pref("dom.webaudio.enabled", true); // should be false, except if using WE CanvasBlocker
  /* 4503  */ user_pref("privacy.resistFingerprinting.block_mozAddonManager", false); // allow addon web site to work as intended, also 2662 must be default

/*** UPDATE ***/
  /* 0300  */ user_pref("app.update.checkInstallTime.days", 0); // FF update check every day
  /* 0301b */ user_pref("extensions.update.enabled", true); // enable extensions update auto check
  /* 0302b */ user_pref("extensions.update.autoUpdateDefault", true); // enable extensions auto update
  /* 0303  */ user_pref("app.update.service.enabled", true); // enable update service

/*** LOCATION BAR / SEARCH BAR / SUGGESTIONS ***/
  /* 0000  */ user_pref("browser.search.widget.inNavBar", false); // use navigation bar for search
  /* 0000  */ user_pref("browser.urlbar.placeholderName", "DuckDuckGo"); // Set DuckDuckGo as a search provider
  /* 0801  */ user_pref("keyword.enabled", true); // enable location bar using search
  /* 0807  */ user_pref("browser.search.suggest.enabled", true); // enable live search suggestions
  /* 0808  */ user_pref("browser.urlbar.suggest.searches", true); // show search suggestions in address bar results
  /* 0850a */ user_pref("browser.urlbar.autocomplete.enabled", true); // enable autocomplete in search
  /* 0850b */ user_pref("browser.urlbar.suggest.bookmark", true); // suggest bookmarks in search results
  /* 0850b */ user_pref("browser.urlbar.suggest.openpage", true); // suggest open pages/tabs in search results

/*** ENTERPRISE USE SPECIFIC ***/
  /* 0000  */ user_pref("security.enterprise_roots.enabled", true); // use OS certificates store
  /* 0000  */ user_pref("network.automatic-ntlm-auth.allow-non-fqdn", true); // enable SSO for hostnames
  // /* 0000  */ user_pref("network.negotiate-auth.trusted-uris", ""); // enable SSO for comma separated domain list
  // /* 0000  */ user_pref("network.automatic-ntlm-auth.trusted-uris", ""); // enable SSO for comma separated domain list

user_pref("_user.js.parrot", "Birdie flies high!");
