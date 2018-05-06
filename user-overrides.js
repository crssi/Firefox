/******
INFO:      Supplement for ghacks-user.js; 6.5.2017 (commit: 772fa4e); https://github.com/ghacksuserjs/ghacks-user.js
IMPORTANT: Read https://github.com/ghacksuserjs/ghacks-user.js/wiki/1.3-Implementation
           Extensions under Essential section are... Essential !!!
SEE ALSO:  https://github.com/ghacksuserjs/ghacks-user.js/wiki/4.1.1-Setting-Extension-Permission-Exceptions
           https://support.mozilla.org/en-US/kb/profiles-where-firefox-stores-user-data
NOTE:      To setup Firefox Sync, then temporarily set privacy.resistFingerprinting to false

1. Download user.js from https://raw.githubusercontent.com/ghacksuserjs/ghacks-user.js/master/user.js and place it into "profile folder"
   Note: To find location of the "profile folder" enter "about:support" into url bar, click "Open Folder" button under "Application Basics" section on "Profile Folder"
2. Create folder "preferences" (if doesn't exist) in the "profile folder" and place this file into "preferences" folder
3. Install essentials extensions (see Extensions section down bellow), review also extensions in other sections
4. Go to "profile folder", remove file "SiteSecurityServiceState.txt" and create folder with the same name


EXTENSIONS:
	ESSENTIAL:
		CanvasBlocker; https://addons.mozilla.org/firefox/addon/canvasblocker/
			{"logLevel": 0,"urlSettings": [],"whiteList": "","blackList": "","blockMode": "fakeReadout","minFakeSize": 1,"maxFakeSize": 0,"rng": "nonPersistent","useCanvasCache": true,"ignoreFrequentColors": 0,"minColors": 0,"fakeAlphaChannel": false,"persistentRndStorage": "","storePersistentRnd": false,"persistentRndClearIntervalValue": 0,"persistentRndClearIntervalUnit": "days","lastPersistentRndClearing": 1516721313132,"askOnlyOnce": "individual","askDenyMode": "block","showNotifications": true,"storeImageForInspection": false,"notificationDisplayTime": 30,"ignoreList": "","showCallingFile": false,"showCompleteCallingStack": false,"enableStackList": false,"stackList": "","displayAdvancedSettings": true,"displayDescriptions": true,"isStillDefault": false,"storageVersion": 0.3}
		Cookie AutoDelete; https://addons.mozilla.org/firefox/addon/cookie-autodelete/
		CSS Exfil Protection; https://addons.mozilla.org/firefox/addon/css-exfil-protection/
		Decentraleyes; https://addons.mozilla.org/firefox/addon/decentraleyes/
			https://github.com/Synzvato/decentraleyes/wiki/Frequently-Asked-Questions
		disqus-undirect; https://addons.mozilla.org/firefox/addon/disqus-undirect/
		Don't touch my tabs!; (rel=noopener) https://addons.mozilla.org/firefox/addon/dont-touch-my-tabs/
		DuckDuckGo (HTTPS / SSL); https://addons.mozilla.org/firefox/addon/duckduckgo-ssl/
		Header Editor; https://addons.mozilla.org/firefox/addon/header-editor/
			Get rid of ETags supercookies: Rule type = Modify the response header; Match type = All; Execute type = normal; Header name = etag (now we can enable 1003)
		Neat URL; https://addons.mozilla.org/firefox/addon/neat-url/
			Blocked parameters:  $/ref@amazon.*, _encoding, _hsenc, _hsmi, _openstat, 77campaign, action_object_*, action_ref_*, action_type_*, ad_*, adset_*, aff_platform, aff_trace_key, algo_*, aqs, assetId, assetType, bav, bih, biw, btsid, bvm, callback@bilibili.com, CAMPAIGN, campaign_*, campaignId, cn, cp, csi, cvid, d@banggood.com, dni, dpr, dq, e@linkedin.com, ei@google.*, ek, elq*, elqTrack, elqTrackId, ems_l, F@digifot.com, fb_*, feature, feeditemid, form, forward, fromEmail, ga_*, gclid, goalType, gs_gbg, gs_l, gs_mss, gs_rn, gws_rd, hmb_*, iact, icid, ijn, Itemid, kw, li@linkedin.com, lipi, lkid@gearbest.com, loc_, mailid, mc_*, midToken, mkt_*, N@digifot.com, nb, ncid, ndsp, nid, nr_email_referer, oq, ORIGIN, p@banggood.com, pbx, pd_rd_*, pf_rd_*, pk_campaign, pk_kwd, position@sourceforge.net, pq, prmd, psc, pv, qp, recipientId, ref_, refsrc, rni, RSS*, sc, sc_*, sclient, scm@*.aliexpress.com, scroll, sei, siteId, sk, source@sourceforge.net, sp, spm@*.aliexpress.com, sr, sr_share, stick, subid, tag@amazon.*, tbnid, tctx, terminal_id, trackId, trk, trkEmail, tt_*, ut, utm_*, ved, vero_*, vet, wid@gearbest.com, wmode, ws_ab_*, yclid, yv
			URL request types: font, image, imageset, main_frame, media, object, object_subrequest, script, stylesheet, sub_frame, websocket, xbl, xml_dtd, xmlhttprequest, xslt, other
			Test blocked parameters: n/a
		Redirect AMP to HTML; https://addons.mozilla.org/firefox/addon/amp2html/
		Skip Redirect; https://addons.mozilla.org/firefox/addon/skip-redirect/
			Add to Blacklist: cred_submit, /_login, /adfs/ls/, /sso/, /saml/, rover.ebay.co, /openid/, microsofttranslator.com/, translate.google.com/, youtube.com/embed/, t.umblr.com/redirect, chart.googleapis.com/chart, /wsfederation, medium.com/, archive.org/, securityheaders.com/, _sso=, paypal.com/, action=login, logout=
		Smart HTTPS (revived); https://addons.mozilla.org/firefox/addon/smart-https-revived/
		Smart Referer; https://addons.mozilla.org/firefox/addon/smart-referer/
		uBlock Origin; https://addons.mozilla.org/firefox/addon/ublock-origin/ (https://github.com/Synzvato/decentraleyes/wiki/Frequently-Asked-Questions)
			Import configuration
		uMatrix; https://addons.mozilla.org/firefox/addon/umatrix/
			Import configuration

	PERSONAL CHOICE:
		Copy As Text (Copy As Plain Text); https://addons.mozilla.org/firefox/addon/copy-as-text/
		URLs List; https://addons.mozilla.org/firefox/addon/urls-list/

	UNDER INVESTIGATION:
		Temporary Containers; https://addons.mozilla.org/firefox/addon/temporary-containers/
		?+ Switch Container; https://addons.mozilla.org/firefox/addon/switch-container/
		?? Containerise; https://addons.mozilla.org/firefox/addon/containerise/
		?? Firefox Multi-Account Containers; https://addons.mozilla.org/firefox/addon/multi-account-containers/
		?- Context Plus; https://addons.mozilla.org/firefox/addon/context-plus/
		?- Facebook Container; https://addons.mozilla.org/firefox/addon/facebook-container/
		?- Switch Container Plus; https://addons.mozilla.org/firefox/addon/switch-container-plus/


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
	/* 2641  */ user_pref("browser.download.useDownloadDir", true); // force save downloads to download folder
	/* 2701  */ user_pref("network.cookie.cookieBehavior", 0); // 1 = accept 1st party cookies only; if you dont block outgoing cookies (at least 3rd party with uM) then set this to 1
	/* 5000- */ user_pref("findbar.highlightAll", true); // hihglight all hits on search
	/* 5002  */ user_pref("full-screen-api.warning.timeout", 0); // remove fullscreen message annoyance
	/* 5026  */ user_pref("reader.parse-on-load.enabled", false); // disable reader view
	/* 5028  */ user_pref("general.autoScroll", false); // disable mouse middle-click scroll annoyance

/*** BREAKAGE TWEAKS ***/
	/* 0001  */ user_pref("browser.privatebrowsing.autostart", false); // disable PB
	/* 1202  */ user_pref("security.tls.version.min", 1); // some SSL pages still uses TLS 1.0 and breaks with the value higher than 1
	/* 1212  */ user_pref("security.OCSP.require", false); // OCSP soft fail
	/* 1240  */ user_pref("security.mixed_content.block_active_content", false); // allow secure and non-secure content
	/* 1241  */ user_pref("security.mixed_content.block_display_content", false); // allow secure and non-secure content
	/* 2030  */ user_pref("media.autoplay.enabled", true); // false introduces funny things
	/* 2206  */ user_pref("full-screen-api.enabled", true); // false breaks fullscreen
	/* 2301  */ user_pref("dom.workers.enabled", true); // false breaks some sites, see: https://docs.microsoft.com/en-us/advanced-threat-analytics/modifying-ata-config-centercert
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
	user_pref("network.negotiate-auth.trusted-uris", "comtrade.com, comtradecloud.com"); // enable SSO, replace sample domains with yours
	user_pref("network.automatic-ntlm-auth.trusted-uris", "comtrade.com, comtradecloud.com"); // enable SSO, replace sample domains with yours
	user_pref("security.enterprise_roots.enabled", true); // use OS certificates store
	user_pref("plugins.load_appdir_plugins", true); // enable Skype meeting open URL

user_pref("_user.js.parrot", "Success!");
