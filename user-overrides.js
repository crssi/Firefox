/******
HOME:      https://github.com/crssi/Firefox
INFO:      Supplement for ghacks-user.js; 3.5.2019 (commit: 7394f2f); https://github.com/ghacksuserjs/ghacks-user.js
NOTE:      Before proceeding further, make a backup of your current profile

0. Download user.js from https://raw.githubusercontent.com/ghacksuserjs/ghacks-user.js/master/user.js and place it into "profile folder"
   NOTE: To find location of the "profile folder" enter "about:support" into url bar, click "Open Folder" button under "Application Basics" section on "Profile Folder"
1. Append this file to user.js that was downloaded in step 0.
2. Go to "profile folder", remove file "SiteSecurityServiceState.txt" and create folder with the same name; https://nakedsecurity.sophos.com/2015/02/02/anatomy-of-a-browser-dilemma-how-hsts-supercookies-make-you-choose-between-privacy-or-security/
3. In the "profile folder" create a folder "chrome" and copy userChrome.css from https://raw.githubusercontent.com/crssi/Firefox/master/userChrome.css
4. Firefox -> Options -> Search
     Default Search Engine: duckduckgo
     Show search suggestions ahead of browsing history in address bar results: Uncheck
     One-Click Search Engines: delete all except DuckDuckGo
   Firefox -> Options -> General -> General -> Tabs -> Settings...
     Remove all containers
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
  Context Plus; https://addons.mozilla.org/firefox/addon/context-plus/ (https://github.com/totallymike/contextPlus/)
  CSS Exfil Protection; https://addons.mozilla.org/firefox/addon/css-exfil-protection/ (https://www.mike-gualtieri.com/css-exfil-vulnerability-tester)
  Decentraleyes; https://addons.mozilla.org/firefox/addon/decentraleyes/ (https://git.synz.io/Synzvato/decentraleyes/); https://git.synz.io/Synzvato/decentraleyes/wikis/Frequently-Asked-Questions
  ETag Stoppa; https://addons.mozilla.org/firefox/addon/etag-stoppa/ (https://github.com/claustromaniac/ETag-Stoppa/)
  Neat URL; https://addons.mozilla.org/firefox/addon/neat-url/ (https://github.com/Smile4ever/Neat-URL/)
    Blocked parameters: _hsenc, _hsmi, _openstat, _trkparms, $/ref@amazon.*, 77campaign, action_object_*, action_ref_*, action_type_*, adid, AdID, adserverid, adserveroptimizerid, adset_*, adtype, adurl, aff_platform, aff_trace_key, affiliate, AffiliateGuid, algo_expid, algo_pvid, aqs, assetType, bav, btsid, bvm, callback@bilibili.com, CAMPAIGN, campaign_*, campaignId, CampaignID, clickid, clkulrenc, CNDID, csi, cvid, d@banggood.com, dni, dq, e@linkedin.com, ek, elq*, ems_l, fb_action_ids, fb_action_types, fb_ref, fb_source, fbclid, feeditemid, first_visit, forward, fromEmail, ga_*, gclid, goalType, gs_gbg, gs_l, gs_mss, gws_rd, hmb_*, iact, icid, ijn, ImpressionGuid, Itemid, kw, li@linkedin.com, lipi, lkid@gearbest.com, loc_, mailid, mbid, mc_*, midToken, mkt_*, ncid, ndsp, nid, nr_email_referer, ORIGIN, p@banggood.com, pbx, pd_rd_*, pf_rd_*, piggiebackcookie, pk_campaign, pk_kwd, position@sourceforge.net, pq, prmd, pubclick, pubid, qs@bing.com, recipientId, ref_@imdb.com, refsrc, rni, RSS*, sc@bing.com, sclient, scroll, sei, siteId, source@sourceforge.net, spJobID, spm, spMailingID, spReportId, spUserID, sr_share, stick, subid, tag@amazon.*, tbnid, tctx, terminal_id, trackId, tracking, transAbTest, trk, trkEmail, tt_*, ut, utm_*, ved, vero_*, wid@gearbest.com, ws_ab_test, yclid
    URL request types: font, image, imageset, main_frame, media, object, object_subrequest, script, stylesheet, sub_frame, websocket, xbl, xml_dtd, xmlhttprequest, xslt, other
    Click [Save preferences]
  Privacy-Oriented Origin Policy; https://addons.mozilla.org/firefox/addon/privacy-oriented-origin-policy/ (https://github.com/claustromaniac/poop/)
    Type filters
      script: Check
      xmlhttprequest (XHR): Check
    Exclusions
      Exclusions:
* *.braintreegateway.com
*.ali*.com *.ali*.com
*.azure.com *.microsoft.com
*.google*.* *
*.notabug.io oauth.reddit.com
*.paypal*.com *.paypal*.com
*.powerbi.com *.windows.net
*.youtube*.com *
github.com *.githubassets.com
    Click [Save]
  Redirect AMP to HTML; https://addons.mozilla.org/firefox/addon/amp2html/ (https://github.com/da2x/amp2html/)
  Skip Redirect; https://addons.mozilla.org/firefox/addon/skip-redirect/ (https://github.com/sblask/webextension-skip-redirect/)
    Blacklist:
_sso=
.alipay.com
/_login
//disq.us/
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
alipay.com/
archive.is/
chart.googleapis.com/chart
hosts-file.net/
i-dont-care-about-cookies.eu/
logout=
malc0de.com/
malwaredomainlist.com/
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
ubi.com/
virustotal.com/
web.archive.org/
webcache.googleusercontent.com/
wego.here.com/
youtube.com/embed/
    Notifications
      Enable popup: Uncheck
  Smart Referer; https://addons.mozilla.org/firefox/addon/smart-referer/ (https://gitlab.com/smart-referer/smart-referer/)
    Add to exceptions:
      *.google.* > *.google.com
      *.google.* > *.googleapis.com
?      *.google.* > *.google*.*
  Temporary Containers; https://addons.mozilla.org/firefox/addon/temporary-containers/ (https://github.com/stoically/temporary-containers/)
    General
      Automatic Mode: Check
      Container Name Prefix: %domain% #
      Random Container Color: Check
      Container Number: Reuse available numbers
      Delete no longer needed Temporary Containers: 2 minutes after the last tab in it closes
      Click [Save]
    Isolation
      Per Domain
        Domain pattern: duckduckgo.com
          Always open in new Temporary Containers: Enabled
          Mouse Clicks on Links should open new Temporary Containers [Left Mouse]: If the clicked Link Domain does not match the active Tabs Domain (Subdomains won't get isolated)
          Click [Add or Edit]
        Domain pattern: *
          Always open in new Temporary Containers: Enabled
          Mouse Clicks on Links should open new Temporary Containers [Left Mouse]: Use Global
          Click [Add or Edit]
      Global
        Mouse Clicks on Links should open new Temporary Containers
          Middle Mouse: If the clicked Link Domain does not match the active Tabs Domain (Subdomains won't get isolated)
        Click [Save]
    Advanced
      General
        Automatic Mode: Don't reopen New Tabs in Temporary Containers but instead on navigation.
      Click [Save]
  uBlock Origin; https://addons.mozilla.org/firefox/addon/ublock-origin/ (https://github.com/uBlockOrigin/uBlock-issues/); https://github.com/Synzvato/decentraleyes/wiki/Frequently-Asked-Questions
    Settings
      Click [Restore from file...]: Download and unzip from https://raw.githubusercontent.com/crssi/Firefox/master/my-ublock-backup.zip
  uMatrix; https://addons.mozilla.org/firefox/addon/umatrix/ (https://github.com/uBlockOrigin/uMatrix-issues/); https://github.com/Synzvato/decentraleyes/wiki/Frequently-Asked-Questions
    About
      Click [Restore from file...]: Download and unzip from https://raw.githubusercontent.com/crssi/Firefox/master/my-umatrix-backup.zip

USEFUL/INTERESTING EXTENSIONS:
  Certainly Something (Certificate Viewer); https://addons.mozilla.org/firefox/addon/certainly-something/ (https://github.com/april/certainly-something/)
  ClearURLs; https://addons.mozilla.org/firefox/addon/clearurls/ (https://gitlab.com/KevinRoebert/ClearUrls/)
  Containerise; https://addons.mozilla.orgfirefox/addon/containerise/ (https://github.com/kintesh/containerise/)
  Cookie Quick Manager; https://addons.mozilla.org/firefox/addon/cookie-quick-manager/ (https://github.com/ysard/cookie-quick-manager/)
  Copy As Text (Copy As Plain Text); https://addons.mozilla.org/firefox/addon/copy-as-text/
  Extension source viewer; https://addons.mozilla.org/firefox/addon/crxviewer/ (https://github.com/Rob--W/crxviewer/)
  HTTPZ; https://addons.mozilla.org/firefox/addon/httpz/ (https://github.com/claustromaniac/httpz/)
  I don't care about cookies; https://addons.mozilla.org/firefox/addon/i-dont-care-about-cookies/ (https://www.i-dont-care-about-cookies.eu/)
  Kimetrak; https://addons.mozilla.org/firefox/addon/kimetrak/ (https://github.com/davlgd/kimetrak/)
  Pasa password generator; https://addons.mozilla.org/firefox/addon/pasa-password-generator/ (https://github.com/alexhenrie/pasa/)
  SixIndicator; https://addons.mozilla.org/firefox/addon/sixindicator/ (https://github.com/HostedDinner/SixIndicator/)
  URLs List; https://addons.mozilla.org/firefox/addon/urls-list/ (https://github.com/moritz-h/urls-list/)

******/

/*** PERSONAL AND ANNOYANCES TWEAKS ***/
  /* 0862  */ user_pref("places.history.enabled", false); // disable history
  /* 2031  */ user_pref("media.autoplay.enabled.user-gestures-needed", true); // Enable autoplay of HTML5 media if interacted with the site
  /* 2203  */ user_pref("browser.link.open_newwindow.restriction", 2); // don't like that a new window is forcibly opened fullsize
  /* 2650  */ user_pref("browser.download.folderList", 1); // default download location (0=desktop 1=downloads 2=last used)
  /* 2651  */ user_pref("browser.download.useDownloadDir", true); // force save downloads to download folder
  /* 4502  */ user_pref("privacy.window.maxInnerWidth", 1600); // set 1600px width at start
  /* 4502  */ user_pref("privacy.window.maxInnerHeight", 900); // set 900px height at start
  /* 5000  */ user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr,addons", false); // disable CFR
  /* 5000  */ user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false); // disable CFR
  /* 5000  */ user_pref("browser.tabs.closeWindowWithLastTab", false); // do not close FF with the last tab
  /* 5000  */ user_pref("browser.tabs.loadBookmarksInTabs", true); // open bookmarks in a new tab
  /* 5000  */ user_pref("browser.urlbar.decodeURLsOnCopy", true); // see  Bugzilla 1320061
  /* 5000  */ user_pref("full-screen-api.warning.timeout", 0); // remove fullscreen message annoyance
  /* 5000  */ user_pref("general.autoScroll", false); // disable mouse middle-click scroll annoyance
  /* 5000  */ user_pref("ui.key.menuAccessKey", 0); // disable alt key toggling the menu bar
  /* 5000x */ user_pref("findbar.highlightAll", true); // hihglight all hits on search

/*** BREAKAGE AND SECURITY TWEAKS ***/
  /* 0001  */ user_pref("browser.privatebrowsing.autostart", false); // disable PB
  /* 1201  */ user_pref("security.ssl.require_safe_negotiation", false); // allow weak cipher
  /* 1212  */ user_pref("security.OCSP.require", false); // allow connection when OCSP not reacheable
  /* 1241  */ user_pref("security.mixed_content.block_display_content", false); // allow secure and non-secure passive content
  /* 1603  */ user_pref("network.http.referer.XOriginPolicy", 0); // should be 1, except when spoofing by 3rd-party WE, like Smart Referer
  /* 2402  */ user_pref("dom.event.clipboardevents.enabled", true); // enable access to clipboard events/content
  /* 2403  */ user_pref("dom.allow_cut_copy", true); // allow cut/copy by JS
  /* 2510  */ user_pref("dom.webaudio.enabled", true); // should be false, except if using WE CanvasBlocker
  /* 4001  */ user_pref("privacy.firstparty.isolate", false); // true breaks cross-domain logins and site functionality, TC covers FPI just fine
  /* 4503  */ user_pref("privacy.resistFingerprinting.block_mozAddonManager", false); // enable AMO to work as intended, 2662 must be default
  /* 4504  */ user_pref("privacy.resistFingerprinting.letterboxing", false) //do not dynamically resize the inner window

/*** LOCATION BAR / SEARCH BAR / SUGGESTIONS ***/
  /* 0800x */ user_pref("browser.urlbar.matchBuckets", "general:16,suggestion:Infinity"); // browser.urlbar.matchBuckets resets 0801 and must be applied before
  /* 0801  */ user_pref("keyword.enabled", true); // enable location bar using search
  /* 0807  */ user_pref("browser.search.suggest.enabled", true); // enable live search suggestions
  /* 0808  */ user_pref("browser.urlbar.suggest.searches", true); // show search suggestions in address bar results
  /* 0850c */ user_pref("browser.urlbar.maxRichResults", 18); // number of urlbar search results
  /* 0850d */ user_pref("browser.urlbar.autoFill", false); // disable location bar autofill

/*** ENTERPRISE USE SPECIFIC ***/
  /* 0000  */ user_pref("security.enterprise_roots.enabled", true); // use OS certificates store
  /* 0000  */ user_pref("network.automatic-ntlm-auth.allow-non-fqdn", true); // enable SSO for hostnames
  // user_pref("network.negotiate-auth.trusted-uris", ""); // enable SSO for comma separated domain list
  // user_pref("network.automatic-ntlm-auth.trusted-uris", ""); // enable SSO for comma separated domain list

user_pref("_user.js.parrot", "Eagle has landed.");
