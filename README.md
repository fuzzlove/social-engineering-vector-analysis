<p align="center">
<img/src="https://raw.githubusercontent.com/fuzzlove/social-engineering-vector-analysis/refs/heads/main/ascii-fisk-brikker.jpg" width="200" height="200">
</p>

These files are for educational purposes and references while studying various techniques used in the wild.

None of this code is to be used illegally to target anyone or anything.

1. Some of the code comes from google scripting where I tested a method found in the wild for malvertising where a user hosts code thats not allowed on google sites and then uses google scripting to embed it.

It was reported that this technique is being used to host malicious landing pages that would otherwise not be allowed on google ads.

2. Some basic Windows ClickFix PoCs have been included utilizing the well known methods and nothing special.

3. The newer FileFix variant has been included as a reference and a resource (Thanks to mr. d0x)

4. A page that targets Windows browsers with a zip download and a different message and outcome for each browser has been included.

5. It felt like Windows was getting all the atttention for ClickFix so I put together some MacOSX payloads one for safari, the other using a fake cloudflare captcha.

I am not done yet with my research into these techniques most recently it has been reported that threat actors are using DNS based payloads to hide the powershell payload and use nslookup.

6. When using a weaponized version of one of these pages I found out pretty quickly with no obfuscation it got added to a blocklist real quick by automated scanners. I found out that a way around this at least at the time was simply implement a turnstyle that blocks bots and the page stayed up for the rest of the engagement.

Cheers! - Joseph McPeters (liquidsky)

Each of these pages is meant to be very basic they could use work and obfuscation and its definitely not evilginx2 just basic implementations of whats being reported out in the wild.
