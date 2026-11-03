YAGHYA & AZRAA — A CELEBRATION OF MARRIAGE
Digital invitation website
==========================================================

WHAT IS IN THIS FOLDER
----------------------
yaghya-azraa-invitation/
    index.html     The invitation (all the words and sections)
    style.css      The design (colours, fonts, layout, animation)
    script.js      The behaviour (envelope, countdown, RSVP to WhatsApp)
    hero-photo.jpg The photograph slot (currently a soft PLACEHOLDER)
    README.txt     This guide (you do not need to upload it, but it is harmless)

Keep all four website files together in the same folder. Do not rename them
and do not put them in sub-folders.


STEP 1 — ADD YOUR PHOTOGRAPH
----------------------------
1. Choose your one favourite photograph of Yaghya and Azraa.
2. Rename it exactly:  hero-photo.jpg   (all lowercase, .jpg)
3. Copy it into this folder and choose "Replace" when asked.
   That replaces the placeholder. Nothing else needs changing.

Tips for the best result:
 - Landscape photos (wider than tall) work best; at least 1800 pixels wide.
 - Keep the file under about 1 MB so the invitation loads quickly on phones.
   (Free tools like squoosh.app or tinypng.com can shrink a photo.)
 - On phones the photo is cropped to a tall shape from the centre, so avoid
   photos where the couple stand at the very edges.
 - Make sure the file is a JPG. If yours is .png or .jpeg, convert it to JPG
   first, or the photo will not appear.
 - If the faces are cut off, open style.css, find the line starting with
   ".hero-photo {" and change "center 30%" to "center 20%" (higher up) or
   "center 45%" (lower down).


STEP 2 — PUBLISH WITH NETLIFY DROP (FREE)
-----------------------------------------
1. Go to:  https://app.netlify.com/drop
2. Drag the whole "yaghya-azraa-invitation" FOLDER from your computer onto the
   page (drag the folder itself, not a ZIP file).
   On a phone this is awkward; use a laptop or desktop computer.
3. Wait a few seconds. Netlify gives you a public link that looks like:
       https://random-words-12345.netlify.app
4. IMPORTANT: Create a free Netlify account when it offers to (or sign in with
   Google/GitHub/email). Sites dropped without an account are only kept for a
   short time. With an account, the site stays online.
5. Optional but recommended — choose a nicer link:
   Open your site in Netlify, go to Site configuration, find "Change site name"
   and enter something like  yaghya-and-azraa  so your link becomes
       https://yaghya-and-azraa.netlify.app
   (If that name is taken, try another. Netlify sometimes moves its menus
   around, so look for "site name" or "domain settings" if you cannot see it.)


STEP 3 — TEST THE INVITATION (BEFORE SHARING)
---------------------------------------------
Open your link on your own phone, then work through this checklist:

[ ] The ivory envelope appears first, with the Y & A seal.
[ ] Tapping the envelope opens it smoothly and the photo page appears.
[ ] YOUR photograph shows (not the plain placeholder) and the names are
    easy to read over it.
[ ] Welcome message and poem read correctly.
[ ] Date shows Saturday, 14 November 2026; arrival 12:00 pm; ends 4:00 pm.
[ ] The countdown ticks every second.
[ ] "Get directions" opens Google Maps at the right place.
[ ] RSVP: pressing "Send RSVP" with nothing filled in shows friendly
    messages and does NOT open WhatsApp.
[ ] RSVP: choose "Joyfully accepts" — the children dropdown appears.
[ ] RSVP: choose "Regretfully declines" — the children dropdown disappears.
[ ] Fill in a test name, accept, choose a number of children, press send.
    WhatsApp opens with the message ready, addressed to Sumaya's number.
    CHECK the wording and number, then close WhatsApp WITHOUT pressing Send
    (or send it to Sumaya after warning her it is a test).
[ ] The phone number 068 167 4473 is tappable and offers to call.
[ ] The top menu links (Details, Venue, RSVP) jump to the right sections.
[ ] Try it on a second phone if you can (Android and iPhone look slightly
    different) and on a laptop.


STEP 4 — SHARE WITH GUESTS
--------------------------
Copy your Netlify link and send it by WhatsApp, SMS or email, for example:

    Assalamu Alaikum, you are warmly invited to Yaghya & Azraa's
    A Celebration of Marriage. Please open your invitation here:
    https://yaghya-and-azraa.netlify.app

No login or password is needed. Anyone with the link can open it.
The page asks search engines not to list it, so it stays fairly private,
but remember: anyone you send the link to can forward it.

Reminder: RSVPs are requested by Friday, 6 November 2026.


HOW THE WHATSAPP RSVP WORKS
---------------------------
 - The guest types their name and chooses accept or decline. If they accept,
   they also choose how many children are coming (0 to "5 or more").
 - They press "Send RSVP via WhatsApp". The website then opens WhatsApp with a
   message already written, addressed to Sumaya (081 271 1656).
 - The message looks like this:

       Assalamu Alaikum Sumaya,

       My RSVP for Yaghya and Azraa's A Celebration of Marriage:

       Name: Fatima Example
       Response: Joyfully accepts
       Children attending: 2

       Date: Saturday, 14 November 2026

       Jazakillahu khayran.

   (If a guest declines, the "Children attending" line is left out.)
 - THE GUEST MUST STILL PRESS SEND INSIDE WHATSAPP. The website cannot send
   the message by itself and it tells guests this clearly.
 - Sumaya receives each RSVP as a normal WhatsApp message, so she keeps the
   list in her chat. There is no database or hidden spreadsheet.
 - If a guest has no WhatsApp app, the link opens WhatsApp Web instead.
 - Guests who never press Send will not be counted — this is worth a gentle
   reminder in your invitation message.


UPDATING THE SITE LATER
-----------------------
CHANGING THE PHOTOGRAPH
 1. Replace hero-photo.jpg in your folder with the new photo (same name).
 2. In Netlify, open your site, go to the "Deploys" tab, and drag the whole
    folder onto the box that says to drag and drop your site folder.
 3. Wait a few seconds; the same link now shows the new version.
    (Guests may need to refresh the page once.)

CHANGING WORDING, DATES OR PHONE NUMBERS
 1. Right-click index.html and open it with Notepad (Windows) or TextEdit
    (Mac; choose Format > Make Plain Text first). Do NOT use Word.
 2. Use Find (Ctrl+F / Cmd+F) to locate the words you want to change and
    edit only the text, leaving the < > symbols alone.
 3. Save, then re-upload the folder as above.

Things that appear in more than one place:
 - Date/time of the event: index.html (details section) AND the countdown in
   script.js. At the top of script.js change EVENT_START and EVENT_END.
   Keep the format exactly:  2026-11-14T12:00:00+02:00
 - Sumaya's WhatsApp number: top of script.js (WHATSAPP_NUMBER, no + and
   no spaces). If you change the person, also change "Sumaya" inside
   buildMessage in script.js.
 - Contact number: index.html — search for 068 167 4473 and also the
   tel:+27681674473 part right next to it.


DEFAULTS I CHOSE WHERE THE BRIEF WAS SILENT
-------------------------------------------
 - A placeholder hero-photo.jpg: a soft, blurred ivory-and-sage wash with no
   people in it. Replace it with your real photograph.
 - A slim menu at the top (Details, Venue, RSVP) so guests can jump around.
 - A small note "All times are South African Standard Time (SAST)."
 - The heading "Join us for lunch" above the date details.
 - "Children are warmly welcome." under the RSVP heading.
 - If a guest declines, the children line is left out of the WhatsApp message.
 - The page tells search engines not to index it (noindex), keeping it
   unlisted. Remove the line  <meta name="robots" ...>  in index.html if you
   would prefer it to appear in Google.
 - After the event starts, the countdown is replaced by "The celebration has
   begun." and, after 4:00 pm, by "Thank you for celebrating with us."
 - The fonts (Cormorant Garamond and DM Sans) load from Google Fonts. If a
   guest is offline, elegant fallback fonts are used automatically.
 - If a guest has "reduce motion" turned on in their phone settings, the
   envelope opens instantly and animations are switched off; everything still
   works.
