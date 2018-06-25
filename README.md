# Firefox
HOME:      https://github.com/crssi/Firefox
INFO:      Supplement for ghacks-user.js; 20.6.2017 (commit: 05021ac); https://github.com/ghacksuserjs/ghacks-user.js
IMPORTANT: Read https://github.com/ghacksuserjs/ghacks-user.js/wiki/1.3-Implementation/
           Extensions under Essential section are... Essential !!!
SEE ALSO:  https://support.mozilla.org/en-US/kb/profiles-where-firefox-stores-user-data/
NOTE:      To setup Firefox Sync, then temporarily set privacy.resistFingerprinting to false

1. Download user.js from https://raw.githubusercontent.com/ghacksuserjs/ghacks-user.js/master/user.js and place it into "profile folder"
   Note: To find location of the "profile folder" enter "about:support" into url bar, click "Open Folder" button under "Application Basics" section on "Profile Folder"
2. Append this file to user.js that was downloaded in step 1.
3. Go to "profile folder", remove file "SiteSecurityServiceState.txt" and create folder with the same name; https://nakedsecurity.sophos.com/2015/02/02/anatomy-of-a-browser-dilemma-how-hsts-supercookies-make-you-choose-between-privacy-or-security/
4. Firefox -> Settings -> Search
		Default Search Engine: duckduckgo
		One-Click Search Engines: delete all except DuckDuckGo
5. Install essentials extensions (see Extensions section down bellow) and setup by instructions
6. In enterprise organizations add domain list to enable SSO for network.negotiate-auth.trusted-uris and network.automatic-ntlm-auth.trusted-uris under enterprise specific section


EXTENSIONS:
	ESSENTIAL:
		AudioContext Fingerprint Defender; https://addons.mozilla.org/firefox/addon/audioctx-fingerprint-defender/ (https://mybrowseraddon.com/audiocontext-defender.html); https://audiofingerprint.openwpm.com/
		CanvasBlocker; https://addons.mozilla.org/firefox/addon/canvasblocker/ (https://github.com/kkapsner/CanvasBlocker/)
		Cookie AutoDelete; https://addons.mozilla.org/firefox/addon/cookie-autodelete/ (https://github.com/Cookie-AutoDelete/Cookie-AutoDelete/)
			Cookie Settings
				Enable Automatic Cleaning? Delay Before Cleaning: Check, 120 Seconds
				Enable Cleanup on Domain Change: Check
				Enable Cleanup Log and Counter: Uncheck
				Show Number of Cookies for that Domain: Uncheck
				Show Notification After Cookie Cleanup: Uncheck
				Enable Support for Firefox's Container Tabs: Check
		CSS Exfil Protection; https://addons.mozilla.org/firefox/addon/css-exfil-protection/ (https://www.mike-gualtieri.com/css-exfil-vulnerability-tester)
		Decentraleyes; https://addons.mozilla.org/firefox/addon/decentraleyes/ (https://github.com/Synzvato/decentraleyes/); https://github.com/Synzvato/decentraleyes/wiki/Frequently-Asked-Questions
		disqus-undirect; https://addons.mozilla.org/firefox/addon/disqus-undirect/
		Don't touch my tabs!; (rel=noopener) https://addons.mozilla.org/firefox/addon/dont-touch-my-tabs/
		Header Editor; https://addons.mozilla.org/firefox/addon/header-editor/ (https://github.com/FirefoxBar/HeaderEditor/); https://github.com/ghacksuserjs/ghacks-user.js/wiki/4.2.4-Header-Editor
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
		uBlock Origin; https://addons.mozilla.org/firefox/addon/ublock-origin/ (https://github.com/uBlockOrigin/uBlock-issues/); https://github.com/Synzvato/decentraleyes/wiki/Frequently-Asked-Questions
			Settings
				Click [Restore from file...]: Download and unzip from https://raw.githubusercontent.com/crssi/Firefox/master/my-ublock-backup.zip
				Insane mode: Tick the unchecked filters under Filter lists -> Custom (click + to expand)
		uMatrix; https://addons.mozilla.org/firefox/addon/umatrix/ (https://github.com/uBlockOrigin/uMatrix-issues/); https://github.com/Synzvato/decentraleyes/wiki/Frequently-Asked-Questions
			About
				Click [Restore from file...]: Download and unzip from https://raw.githubusercontent.com/crssi/Firefox/master/my-umatrix-backup.zip

  [PERSONAL CHOICE] CONTAINERS:
		Containerise; https://addons.mozilla.org/en-US/firefox/addon/containerise/ (https://github.com/kintesh/containerise/)
		* Use "Containerise" instead: Firefox Multi-Account Containers; https://addons.mozilla.org/firefox/addon/multi-account-containers/ (https://github.com/mozilla/multi-account-containers/)
  	Switch Container Plus; https://addons.mozilla.org/firefox/addon/switch-container-plus/ (https://github.com/stoically/switch-container-plus/)
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
  			Global
  				Navigating in Tabs should open new Temporary Containers: If the Navigation Target Domain does not match the active Tabs Domain (Subdomains won't get isolated)
  				Click [Save]
				Multi-Account Containers
  				Open new Temporary Containers if a Permanent Container Tab tries to load a Domain that isn't assigned to "Always open in" that container: Enabled
  				Click [Save]
		NOTE: CTRL+SHIFT+T = Undo closed tab(s)

	INTERESTING EXTENSIONS:
		Copy As Text (Copy As Plain Text); https://addons.mozilla.org/firefox/addon/copy-as-text/
		Request Control; https://addons.mozilla.org/firefox/addon/requestcontrol/ (https://github.com/tumpio/requestcontrol/)
		ScrollAnywhere; https://addons.mozilla.org/firefox/addon/scroll_anywhere/
		URLs List; https://addons.mozilla.org/firefox/addon/urls-list/ (https://github.com/moritz-h/urls-list/)
