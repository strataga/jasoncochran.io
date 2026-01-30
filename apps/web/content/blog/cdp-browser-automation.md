---
title: "Automating Chrome with CDP instead of paid browser tools"
date: "2026-01-28"
summary: "How to control your own Chrome with the DevTools Protocol, avoid paid browser services, and keep full control of data and sessions."
tags: [automation, chrome, cdp, playwright, productivity]
---

When I need full browser control without paying for hosted automation, I attach directly to my own Chrome with the DevTools Protocol. It keeps me in control of cookies and extensions, works on Windows plus WSL, and costs nothing.

## Why this approach
- Free and local: no paid browser automation services.
- Uses your real Chrome: same cookies, extensions, profiles.
- Works from WSL to Windows Chrome with a small firewall rule.

## One-time setup
1) Close Chrome.
2) Launch Chrome with remote debugging and a dedicated profile:
```
Start-Process "C:\Program Files\Google\Chrome\Application\chrome.exe" -ArgumentList "--remote-debugging-port=9222 --remote-debugging-address=0.0.0.0 --user-data-dir=C:\temp\chrome-cdp --no-first-run --no-default-browser-check"
```
3) Allow the port on Windows so WSL can reach it:
```
netsh advfirewall firewall add rule name="Allow CDP 9223" dir=in action=allow protocol=TCP localport=9223
netsh interface portproxy add v4tov4 listenaddress=0.0.0.0 listenport=9223 connectaddress=127.0.0.1 connectport=9222
```
4) Verify JSON is reachable:
- In Chrome: http://localhost:9222/json/version
- From WSL: `curl http://<windows-ip>:9223/json/version`

## Connect from Node with Playwright
```js
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.connectOverCDP('http://<windows-ip>:9223');
  const context = browser.contexts()[0] || await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://example.com');
  // do work here
})();
```

## Practical automations
- Export bookmarks: read the Chrome Bookmarks file and emit Markdown.
- Scrape YouTube Watch Later: open the playlist via CDP, grab titles/links/durations.
- Capture product screenshots: drive your own logged-in session for store assets.
- Restore sessions: keep `--user-data-dir` dedicated so your tabs and cookies persist between runs.

## Security and hygiene
- Never share secrets. Keep env keys out of automation logs.
- Bind to your LAN IP and use the firewall rule so only your machine can reach CDP.
- Use a dedicated user data dir to avoid your personal profile leaking into scripts.
- Close CDP when idle by quitting that Chrome instance.

## When to use this vs headless
- Use CDP when you need your real session, extensions, or graphical flows.
- Use headless `chromium.launch()` when you want a clean sandbox and reproducible runs.

## Checklist to run it anytime
- Launch Chrome with the CDP shortcut (includes the flags above).
- Confirm JSON at `/json/version`.
- Run your Playwright script against `http://<windows-ip>:9223`.
- Keep secrets out of logs and repos.

## Reuse across channels
- Blog: publish this guide as-is.
- X/LinkedIn: share the key commands and why it beats paid browser services.
- Reddit: post in automation or self-hosted communities with the setup steps and security tips.
