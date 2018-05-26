/******
HOME:      https://github.com/crssi/Firefox
INFO:      Supplement for ghacks-user.js; 25.5.2017 (commit: 01bd2a4); https://github.com/ghacksuserjs/ghacks-user.js
IMPORTANT: Read https://github.com/ghacksuserjs/ghacks-user.js/wiki/1.3-Implementation
           Extensions under Essential section are... Essential !!!
SEE ALSO:  https://support.mozilla.org/en-US/kb/profiles-where-firefox-stores-user-data
NOTE:      To setup Firefox Sync, then temporarily set privacy.resistFingerprinting to false

1. Download user.js from https://raw.githubusercontent.com/ghacksuserjs/ghacks-user.js/master/user.js and place it into "profile folder"
   Note: To find location of the "profile folder" enter "about:support" into url bar, click "Open Folder" button under "Application Basics" section on "Profile Folder"
2. Append this file to user.js that was downloaded on step 1.
3. Go to "profile folder", remove file "SiteSecurityServiceState.txt" and create folder with the same name
4. Firefox -> Settings -> Search
		Default Search Engine = duckduckgo
		One-Click Search Engines = delete all except DuckDuckGo
5. Install essentials extensions (see Extensions section down bellow), review also extensions in other sections


EXTENSIONS:
	ESSENTIAL:
		CanvasBlocker; https://addons.mozilla.org/firefox/addon/canvasblocker/ (https://github.com/kkapsner/CanvasBlocker/)
		Cookie AutoDelete; https://addons.mozilla.org/firefox/addon/cookie-autodelete/ (https://github.com/Cookie-AutoDelete/Cookie-AutoDelete/)
			Cookie Settings
				Enable Automatic Cleaning? Delay Before Cleaning: Check, 10 Seconds
				Enable Cleanup on Domain Change: Check
				Enable Cleanup Log and Counter: Uncheck
				Show Number of Cookies for that Domain: Uncheck
				Show Notification After Cookie Cleanup: Uncheck
				Enable Support for Firefox's Container Tabs: Check
		CSS Exfil Protection; https://addons.mozilla.org/firefox/addon/css-exfil-protection/ (https://www.mike-gualtieri.com/css-exfil-vulnerability-tester)
		Decentraleyes; https://addons.mozilla.org/firefox/addon/decentraleyes/ (https://github.com/Synzvato/decentraleyes/); https://github.com/Synzvato/decentraleyes/wiki/Frequently-Asked-Questions
		disqus-undirect; https://addons.mozilla.org/firefox/addon/disqus-undirect/
		Don't touch my tabs!; (rel=noopener) https://addons.mozilla.org/firefox/addon/dont-touch-my-tabs/
		Header Editor; https://addons.mozilla.org/firefox/addon/header-editor/ (https://github.com/FirefoxBar/HeaderEditor); https://github.com/ghacksuserjs/ghacks-user.js/wiki/4.2.4-Header-Editor
			Export and Import
				Download rule: https://raw.githubusercontent.com/crssi/Firefox/master/HeaderEditor.json
				Import: Click [Save]
		Neat URL; https://addons.mozilla.org/firefox/addon/neat-url/ (https://github.com/Smile4ever/firefoxaddons/tree/master/Neat%20URL-webext/)
			Blocked parameters: _encoding, _hsenc, _hsmi, _openstat, $/ref@amazon.*, 77campaign, action_object_*, action_ref_*, action_type_*, ad_*, adset_*, aff_platform, aff_trace_key, algo_*, aqs, assetId, assetType, bav, bih, biw, btsid, bvm, callback@bilibili.com, CAMPAIGN, campaign_*, campaignId, cn, cp, csi, cvid, d@banggood.com, dni, dpr, dq, e@linkedin.com, ei@google.*, ek, elq*, elqTrack, elqTrackId, ems_l, F@digifot.com, fb_*, feature, feeditemid, form, forward, fromEmail, ga_*, gclid, goalType, gs_gbg, gs_l, gs_mss, gs_rn, gws_rd, hmb_*, iact, icid, ijn, Itemid, kw, li@linkedin.com, lipi, lkid@gearbest.com, loc_, mailid, mc_*, midToken, mkt_*, N@digifot.com, nb, ncid, ndsp, nid, nr_email_referer, oq, ORIGIN, p@banggood.com, pbx, pd_rd_*, pf_rd_*, pk_campaign, pk_kwd, position@sourceforge.net, pq, prmd, psc, pv, qp, qs@bing.com, recipientId, ref_, refsrc, rni, RSS*, sc, sc_*, sc@bing.com, sclient, scm@*.aliexpress.com, scroll, sei, siteId, sk, source@sourceforge.net, sp, spm@*.aliexpress.com, sr, sr_share, stick, subid, tag@amazon.*, tbnid, tctx, terminal_id, trackId, trk, trkEmail, tt_*, ut, utm_*, ved, vero_*, vet, wid@gearbest.com, wmode, ws_ab_*, yclid, yv
			URL request types: font, image, imageset, main_frame, media, object, object_subrequest, script, stylesheet, sub_frame, websocket, xbl, xml_dtd, xmlhttprequest, xslt, other
			Click [Save preferences]
		Redirect AMP to HTML; https://addons.mozilla.org/firefox/addon/amp2html/ (https://github.com/da2x/amp2html/)
		Skip Redirect; https://addons.mozilla.org/firefox/addon/skip-redirect/ (https://github.com/sblask/webextension-skip-redirect/)
			Blacklist (Append):
				action=login
				/adfs/ls/
				archive.org/
				chart.googleapis.com/chart
				cred_submit
				/_login
				logout=
				medium.com/
				microsofttranslator.com/
				/openid/
				paypal.com/
				rover.ebay.co
				securityheaders.com/
				/saml/
				/SAML2/
				_sso=
				/sso/
				t.umblr.com/redirect
				translate.google.com/
				virustotal.com/
				/websso/
				/wsfederation
				youtube.com/embed/
			Notifications
				Enable popup: Uncheck
				Show notifications for this many seconds: 10
		Smart HTTPS (revived); https://addons.mozilla.org/firefox/addon/smart-https-revived/ (https://mybrowseraddon.com/smart-https.html)
		Smart Referer; https://addons.mozilla.org/firefox/addon/smart-referer/ (https://github.com/meh/smart-referer/)
		uBlock Origin; https://addons.mozilla.org/firefox/addon/ublock-origin/ (https://github.com/Synzvato/decentraleyes/wiki/Frequently-Asked-Questions)
			Settings
				Click [Restore from file...]: Download and unzip from https://raw.githubusercontent.com/crssi/Firefox/master/my-ublock-backup.zip
		uMatrix; https://addons.mozilla.org/firefox/addon/umatrix/
			About
				Click [Restore from file...]: Download and unzip from https://raw.githubusercontent.com/crssi/Firefox/master/my-umatrix-backup.zip

  CONTAINERS:
  	Firefox Multi-Account Containers; https://addons.mozilla.org/firefox/addon/multi-account-containers/ (https://github.com/stoically/multi-account-containers/)
  	Switch Container Plus; https://addons.mozilla.org/firefox/addon/switch-container-plus/ (https://github.com/stoically/switch-container-plus/)
  	Temporary Containers; https://addons.mozilla.org/firefox/addon/temporary-containers/ (https://github.com/stoically/temporary-containers/)
  		General
  			Automatic Mode: Check
  			Container Name Prefix: %domain% #
  			Random Container Color: Check
  			Container Icon: fingerprint
  			Container Number: Reuse available numbers
  			Delete no longer needed Temporary Containers: 2 minutes after the last tab in it closes
  			Click [Save]
  		Isolation
  			Global
  				Navigating in Tabs should open new Temporary Containers: If the Navigation Target Domain does not match the active Tabs Domain (Subdomains won't get isolated)
  				Click [Save]
				Multi-Account Containers
  				Open new Temporary Containers if a Permanent Container Tab tries to load a Domain that isn't assigned to "Always open in" that container: Enabled
  				Click [Save]
  		Advanced
  			General
  				Instead of creating a new Tab replace the currently active Tab: Check

	PERSONAL CHOICE:
		Copy As Text (Copy As Plain Text); https://addons.mozilla.org/firefox/addon/copy-as-text/
		ScrollAnywhere; https://addons.mozilla.org/firefox/addon/scroll_anywhere/
		URLs List; https://addons.mozilla.org/firefox/addon/urls-list/ (https://github.com/moritz-h/urls-list/)
		VTzilla 2.0; https://addons.mozilla.org/firefox/addon/vtzilla/

	UNDER INVESTIGATION:
		Change Timezone (Time Shift); https://addons.mozilla.org/firefox/addon/change-timezone-time-shift/ (https://mybrowseraddon.com/change-timezone.html)
		Request Control; https://addons.mozilla.org/firefox/addon/requestcontrol/ (https://github.com/tumpio/requestcontrol)

******/

/*** PERSONAL TWEAKS ***/
	/* 0102  */ user_pref("browser.startup.page", 0); // set blank page at start up
	/* 0862  */ user_pref("places.history.enabled", false); // disable history, but can also be cleared when exiting FF, see 2803
	/* 1003  */ user_pref("browser.cache.memory.enable", true); // false = Get rid of ETAG cookieless tracking/fingerprinting; demo: https://lucb1e.com/rp/cookielesscookies/; when true, then use header editor with etag rule
	/* 1020  */ user_pref("browser.sessionstore.max_tabs_undo", 10); // remember last 10 closed tabs for undo
	/* 1401  */ user_pref("browser.display.use_document_fonts", 1); // can't help myself, but I like fonts
	/* 1405  */ user_pref("gfx.downloadable_fonts.woff2.enabled", true); // can't help myself, but I like glyphs
	/* 1603  */ user_pref("network.http.referer.XOriginPolicy", 0); // should be 1, except when spoofing by 3rd party extension, like uM or Smart Referer
	/* 2205  */ user_pref("browser.link.open_newwindow.restriction", 2); // don't like that a new window to be forcibly opened fullsize
	/* 2651  */ user_pref("browser.download.useDownloadDir", true); // force save downloads to download folder
	/* 2701  */ user_pref("network.cookie.cookieBehavior", 0); // 1 = accept 1st party cookies only; if you dont block outgoing cookies (at least 3rd party with uM) then set this to 1
	/* 5000- */ user_pref("findbar.highlightAll", true); // hihglight all hits on search
	/* 5002  */ user_pref("full-screen-api.warning.timeout", 0); // remove fullscreen message annoyance
	/* 5026  */ user_pref("reader.parse-on-load.enabled", false); // disable reader view
	/* 5028  */ user_pref("general.autoScroll", false); // disable mouse middle-click scroll annoyance

/*** BREAKAGE TWEAKS ***/
	// /* ????  */ user_pref("security.sandbox.content.level", 4); // sandboxie.com doesn't work with FF 60 (default = 5)
	/* 0001  */ user_pref("browser.privatebrowsing.autostart", false); // disable PB
	/* 1202  */ user_pref("security.tls.version.min", 2); // some SSL pages still uses TLS 1.0 and breaks with the value higher than 1
	/* 1212  */ user_pref("security.OCSP.require", false); // OCSP soft fail
	/* 1240  */ user_pref("security.mixed_content.block_active_content", false); // allow secure and non-secure content
	/* 1241  */ user_pref("security.mixed_content.block_display_content", false); // allow secure and non-secure content
	/* 2030  */ user_pref("media.autoplay.enabled", true); // false introduces funny things
	/* 2206  */ user_pref("full-screen-api.enabled", true); // false breaks fullscreen
	/* 2402  */ user_pref("dom.event.clipboardevents.enabled", true); // enable copy/cut/paste
	/* 4001  */ user_pref("privacy.firstparty.isolate", false); // true breaks Cookie AutoDelete and some login pages
	/* 5000- */ user_pref("dom.disable_open_during_load", false); // enable popup

/*** UPDATE ***/
	/* 0300- */ user_pref("app.update.checkInstallTime.days", 0); // FF update check every day
	/* 0301b */ user_pref("extensions.update.enabled", true); // enable extensions update auto check
	/* 0302b */ user_pref("extensions.update.autoUpdateDefault", true); // enable extensions auto update
	/* 0303  */ user_pref("app.update.service.enabled", true); // enable update service

/*** LOCATION BAR / SEARCH BAR / SUGGESTIONS : Install extension "DuckDuckGo (HTTPS / SSL)" or any other privacy search provider ***/
	/* 0801  */ user_pref("keyword.enabled", true);
	/* 0807  */ user_pref("browser.search.suggest.enabled", true);
	/* 0808  */ user_pref("browser.urlbar.suggest.searches", true);
	/* 0850a */ user_pref("browser.urlbar.autocomplete.enabled", true);
	/* 0850b */ user_pref("browser.urlbar.suggest.bookmark", true);
	/* 0850b */ user_pref("browser.urlbar.suggest.openpage", true);

/*** ENTERPRISE SPECIFIC : Change comtrade.com to your domain(s) - comma separated ***/
	user_pref("network.automatic-ntlm-auth.allow-non-fqdn", true); // enable SSO for hostnames
	user_pref("network.negotiate-auth.trusted-uris", "comtrade.com, comtradecloud.com"); // enable SSO
	user_pref("network.automatic-ntlm-auth.trusted-uris", "comtrade.com, comtradecloud.com"); // enable SSO
	user_pref("security.enterprise_roots.enabled", true); // use OS certificates store
	user_pref("plugins.load_appdir_plugins", true); // enable Skype meeting open URL

user_pref("_user.js.parrot", "Success!");
