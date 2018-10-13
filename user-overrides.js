/******
HOME:      https://github.com/crssi/Firefox
INFO:      Supplement for ghacks-user.js; 11.10.2018 (commit: 58931bc); https://raw.githubusercontent.com/ghacksuserjs/ghacks-user.js/master/user.js (https://github.com/ghacksuserjs/ghacks-user.js)
IMPORTANT: Read https://github.com/ghacksuserjs/ghacks-user.js/wiki/1.3-Implementation/
           Extensions under Essential section are... Essential !!!
SEE ALSO:  https://support.mozilla.org/kb/profiles-where-firefox-stores-user-data/
NOTE:      To setup Firefox Sync, then temporarily set privacy.resistFingerprinting to false

1. Download user.js from https://raw.githubusercontent.com/ghacksuserjs/ghacks-user.js/master/user.js and place it into "profile folder"
   Note: To find location of the "profile folder" enter "about:support" into url bar, click "Open Folder" button under "Application Basics" section on "Profile Folder"
2. Append this file to user.js that was downloaded in step 1.
3. Go to "profile folder", remove file "SiteSecurityServiceState.txt" and create folder with the same name; https://nakedsecurity.sophos.com/2015/02/02/anatomy-of-a-browser-dilemma-how-hsts-supercookies-make-you-choose-between-privacy-or-security/
4. Firefox -> Settings -> Search
		Default Search Engine: duckduckgo
		One-Click Search Engines: delete all except DuckDuckGo
5. Install essential extensions (see Extensions section) and setup by instructions
6. For enterprise use, insert domain list (comma separated) to enable SSO for network.negotiate-auth.trusted-uris and network.automatic-ntlm-auth.trusted-uris under enterprise specific section


EXTENSIONS:
	ESSENTIAL:
		CanvasBlocker; https://addons.mozilla.org/firefox/addon/canvasblocker/ (https://github.com/kkapsner/CanvasBlocker/)
			Options -> Expert mode -> Misc -> Block data URL pages: Uncheck
		CSS Exfil Protection; https://addons.mozilla.org/firefox/addon/css-exfil-protection/ (https://www.mike-gualtieri.com/css-exfil-vulnerability-tester)
		Decentraleyes; https://addons.mozilla.org/firefox/addon/decentraleyes/ (https://git.synz.io/Synzvato/decentraleyes/); https://github.com/Synzvato/decentraleyes/wiki/Frequently-Asked-Questions
    disqus-undirect; https://addons.mozilla.org/firefox/addon/disqus-undirect/
		Don't touch my tabs!; (rel=noopener) https://addons.mozilla.org/firefox/addon/dont-touch-my-tabs/
    Forget Me Not - Forget cookies & other data; https://addons.mozilla.org/firefox/addon/forget_me_not/ (https://github.com/Lusito/forget-me-not/)
      Settings
        Click [Restore from file...]: Download https://raw.githubusercontent.com/crssi/Firefox/master/forget-me-not-Settings.json
		Header Editor; https://addons.mozilla.org/firefox/addon/header-editor/ (https://github.com/FirefoxBar/HeaderEditor/); https://github.com/ghacksuserjs/ghacks-user.js/wiki/4.2.4-Header-Editor
			NOTE: Not needed when disk and memory caching is disabled: browser.cache.memory.enable, browser.cache.disk.enable
			Export and Import
				Download rule: https://raw.githubusercontent.com/crssi/Firefox/master/HeaderEditor.json
				Import: Click [Save]
		Neat URL; https://addons.mozilla.org/firefox/addon/neat-url/ (https://github.com/Smile4ever/Neat-URL/)
			Blocked parameters: _encoding, _hsenc, _hsmi, _openstat, $/ref@amazon.*, !cn@mail.google.com, !sc@*.googlevideo.com, !sp@*.startpage.com, 77campaign, action_object_*, action_ref_*, action_type_*, ad_*, adset_*, aff_platform, aff_trace_key, algo_*, aqs, assetId, assetType, bav, bih, biw, btsid, bvm, callback@bilibili.com, CAMPAIGN, campaign_*, campaignId, cn, cp, csi, cvid, d@banggood.com, dni, dpr, dq, e@linkedin.com, ei@google.*, ek, elq*, elqTrack, elqTrackId, ems_l, F@digifot.com, fb_*, feature, feeditemid, form, forward, fromEmail, ga_*, gclid, goalType, gs_gbg, gs_l, gs_mss, gs_rn, gws_rd, hmb_*, iact, icid, ijn, Itemid, kw, li@linkedin.com, lipi, lkid@gearbest.com, loc_, mailid, mc_*, midToken, mkt_*, N@digifot.com, nb, ncid, ndsp, nid, nr_email_referer, oq, ORIGIN, p@banggood.com, pbx, pd_rd_*, pf_rd_*, pk_campaign, pk_kwd, position@sourceforge.net, pq, prmd, psc, pv, qp, qs@bing.com, recipientId, ref_, refsrc, rni, RSS*, sc, sc_*, sclient, scm@*.aliexpress.com, scroll, sei, siteId, sk, source@sourceforge.net, sp, spm@*.aliexpress.com, sr, sr_share, stick, subid, tag@amazon.*, tbnid, tctx, terminal_id, trackId, trk, trkEmail, tt_*, ut, utm_*, ved, vero_*, vet, wid@gearbest.com, wmode, ws_ab_*, yclid, yv, key@maps.googleapis.com
			URL request types: font, image, imageset, main_frame, media, object, object_subrequest, script, stylesheet, sub_frame, websocket, xbl, xml_dtd, xmlhttprequest, xslt, other
			Click [Save preferences]
		Redirect AMP to HTML; https://addons.mozilla.org/firefox/addon/amp2html/ (https://github.com/da2x/amp2html/)
		Skip Redirect; https://addons.mozilla.org/firefox/addon/skip-redirect/ (https://github.com/sblask/webextension-skip-redirect/)
			Blacklist (Append, withozt indentation to simplify copy/paste):
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
archive.is/
chart.googleapis.com/chart
i-dont-care-about-cookies.eu/
logout=
medium.com/
microsofttranslator.com/
paypal.com/
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
		Smart HTTPS (revived); https://addons.mozilla.org/firefox/addon/smart-https-revived/ (https://mybrowseraddon.com/smart-https.html)
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
          Domain pattern: duckduckgo.com
            Always open in new Temporary Containers: enabled
  			Global
  				Navigating in Tabs should open new Temporary Containers: Never
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

	USEFUL/INTERESTING EXTENSIONS:
		Certainly Something (Certificate Viewer); https://addons.mozilla.org/firefox/addon/certainly-something/ (https://github.com/april/certainly-something/issues/)
    Context Plus; https://addons.mozilla.org/firefox/addon/context-plus/ (https://github.com/totallymike/contextPlus/)
    Cookie Quick Manager; https://addons.mozilla.org/firefox/addon/cookie-quick-manager/ (https://github.com/ysard/cookie-quick-manager/)
		Copy As Text (Copy As Plain Text); https://addons.mozilla.org/firefox/addon/copy-as-text/
		I don't care about cookies; https://addons.mozilla.org/firefox/addon/i-dont-care-about-cookies/ (https://www.i-dont-care-about-cookies.eu/)
		URLs List; https://addons.mozilla.org/firefox/addon/urls-list/ (https://github.com/moritz-h/urls-list/)

******/

/*** ANNOYANCES TWEAKS ***/
	/* 0862  */ user_pref("places.history.enabled", false); // disable history, but can also be cleared when exiting FF, see 2803
	/* 0515  */ user_pref("extensions.screenshots.disabled", true); // disable screenshots
	/* 1020  */ user_pref("browser.sessionstore.max_tabs_undo", 10); // remember last 10 closed tabs for undo
	/* 1401  */ user_pref("browser.display.use_document_fonts", 1); // can't help myself, but I like fonts
	/* 1405  */ user_pref("gfx.downloadable_fonts.woff2.enabled", true); // can't help myself, but I like glyphs
	/* 1701  */ user_pref("privacy.userContext.ui.enabled", true); // enable Container Tabs setting in preferences
	/* 1702  */ user_pref("privacy.userContext.enabled", true); // Enable Container Tabs
	/* 1704  */ user_pref("privacy.userContext.longPressBehavior", 2); // long press on + tab
	/* 2205  */ user_pref("browser.link.open_newwindow.restriction", 2); // don't like that a new window to be forcibly opened fullsize
	/* 2650  */ user_pref("browser.download.folderList", 1); // default download location (0=desktop 1=downloads 2=last used)
	/* 2651  */ user_pref("browser.download.useDownloadDir", true); // force save downloads to download folder
	/* 4502  */ user_pref("privacy.window.maxInnerWidth", 1600); // width at start
	/* 4502  */ user_pref("privacy.window.maxInnerHeight", 900); // height at start
	/* 5000  */ user_pref("accessibility.typeaheadfind", true); // enable "Find As You Type"
	/* 5000  */ user_pref("findbar.highlightAll", true); // hihglight all hits on search
	/* 5000  */ user_pref("browser.tabs.closeWindowWithLastTab", false); // do not close FF with the last tab
	/* 5000  */ user_pref("ui.key.menuAccessKey", 0); // disable alt key toggling the menu bar
	/* 5002  */ user_pref("full-screen-api.warning.timeout", 0); // remove fullscreen message annoyance
	/* 5026  */ user_pref("reader.parse-on-load.enabled", false); // disable reader view
	/* 5028  */ user_pref("general.autoScroll", false); // disable mouse middle-click scroll annoyance

/*** BREAKAGE TWEAKS ***/
	/* 0001  */ user_pref("browser.privatebrowsing.autostart", false); // disable PB
	/* 1240  */ user_pref("security.mixed_content.block_active_content", false); // allow secure and non-secure content
	/* 1241  */ user_pref("security.mixed_content.block_display_content", false); // allow secure and non-secure content
	/* 1603  */ user_pref("network.http.referer.XOriginPolicy", 0); // should be 1, except when spoofing by 3rd party Smart Referer WE
	/* 2030  */ user_pref("media.autoplay.enabled", true); // false introduces funny things
	/* 2206  */ user_pref("full-screen-api.enabled", true); // false breaks fullscreen
	/* 2402  */ user_pref("dom.event.clipboardevents.enabled", true); // enable access to clipboard events/content
	/* 2403  */ user_pref("dom.allow_cut_copy", true); // allow cut/copy by JS
	/* 2510  */ user_pref("dom.webaudio.enabled", true); // should be false except if using WE CanvasBlocker
	/* 2662  */ user_pref("extensions.webextensions.restrictedDomains", ""); // allow extensions on mozilla domains

/*** UPDATE ***/
	/* 0300  */ user_pref("app.update.checkInstallTime.days", 0); // FF update check every day
	/* 0301b */ user_pref("extensions.update.enabled", true); // enable extensions update auto check
	/* 0302b */ user_pref("extensions.update.autoUpdateDefault", true); // enable extensions auto update
	/* 0303  */ user_pref("app.update.service.enabled", true); // enable update service

/*** LOCATION BAR / SEARCH BAR / SUGGESTIONS ***/
	/* 0000  */ user_pref("browser.search.widget.inNavBar", false); // use navigation bar for search
	/* 0801  */ user_pref("keyword.enabled", true); // enable location bar using search
	/* 0807  */ user_pref("browser.search.suggest.enabled", true); // enable live search suggestions
	/* 0808  */ user_pref("browser.urlbar.suggest.searches", true); // show search suggestions in address bar results
	/* 0850a */ user_pref("browser.urlbar.autocomplete.enabled", true); // enable autocomplete in search
	/* 0850b */ user_pref("browser.urlbar.suggest.bookmark", true); // suggest bookmarks in search results
  /* 0850b */ user_pref("browser.urlbar.suggest.openpage", true); // suggest open pages/tabs in search results
  /* 5000  */ user_pref("browser.urlbar.placeholderName", "DuckDuckGo"); // Set DuckDuckGo as a search provider

/*** ENTERPRISE USE SPECIFIC ***/
  /* 5000  */ user_pref("security.enterprise_roots.enabled", true); // use OS certificates store
	/* 5000  */ user_pref("network.automatic-ntlm-auth.allow-non-fqdn", true); // enable SSO for hostnames
  // /* 5000  */ user_pref("network.negotiate-auth.trusted-uris", ""); // enable SSO for comma separated domain list
  // /* 5000  */ user_pref("network.automatic-ntlm-auth.trusted-uris", ""); // enable SSO for comma separated domain list

/*** EXPERIMENTAL ***/
  // /* 1201  */ user_pref("security.ssl.require_safe_negotiation", true);
  // /* 5000  */ user_pref("security.mixed_content.upgrade_display_content", true); // 1240,1241; https://www.bennish.net/mixed-content.html
  // MixedContentHunter; https://addons.mozilla.org/firefox/addon/mixedcontenthunter/

/*** RECONSIDER ***/
  // Request Control; https://addons.mozilla.org/firefox/addon/requestcontrol/ (https://github.com/tumpio/requestcontrol/)
  // ScrollAnywhere; https://addons.mozilla.org/firefox/addon/scroll_anywhere/ (https://fastaddons.com/)
  // Switch Container; https://addons.mozilla.org/firefox/addon/switch-container/ (https://gitlab.com/mjanetmars/switch-container/)
  // Container Tabs Sidebar; https://addons.mozilla.org/firefox/addon/container-tabs-sidebar/ (https://github.com/maciekmm/container-tabs-sidebar/)
  // Containerise; https://addons.mozilla.org/firefox/addon/containerise/ (https://github.com/kintesh/containerise/)
  // Download Cleaner Lite; https://addons.mozilla.org/firefox/addon/download-cleaner-lite/ (https://github.com/fuzzykiller/download-cleaner-lite/)

user_pref("_user.js.parrot", "Success!");
