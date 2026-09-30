const { chromium } = require('/home/teja/Restaurent_website/node_modules/playwright');
(async () => { const b = await chromium.launch();
  for (const s of ['light','dark']) { const p = await b.newPage({ viewport: { width: 1440, height: 900 }, colorScheme: s });
    await p.goto('http://127.0.0.1:8765/', { waitUntil: 'networkidle' });
    await p.screenshot({ path: process.argv[2] + '/bg-' + s + '.png' });
    if (s === 'light') { await p.evaluate(() => { document.documentElement.style.scrollBehavior='auto'; document.querySelector('.arch').scrollIntoView({block:'center'}); }); await p.waitForTimeout(400); await p.screenshot({ path: process.argv[2] + '/arch.png' }); }
    await p.close(); }
  await b.close(); })();
