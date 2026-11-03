/* ==========================================================
   Yaghya & Azraa — A Celebration of Marriage
   Plain JavaScript. No libraries, no build step.
   ========================================================== */
(function () {
  'use strict';

  /* ---------- Settings you may need to change later ---------- */
  var WHATSAPP_NUMBER = '27812711656';                       // Sumaya, international format, no + or spaces
  var EVENT_START = new Date('2026-11-14T12:00:00+02:00');   // 12:00 pm SAST
  var EVENT_END   = new Date('2026-11-14T16:00:00+02:00');   // 4:00 pm SAST
  /* ----------------------------------------------------------- */

  var prefersReducedMotion = !!(window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  /* ================= ENVELOPE ================= */
  var screen = document.getElementById('envelope-screen');
  var envelope = document.getElementById('envelope');
  var nav = document.getElementById('site-nav');
  var heroHeading = document.getElementById('hero-heading');
  var isOpening = false;

  function revealInvitation() {
    document.body.classList.add('opened');
    document.body.classList.remove('locked');
  }

  function openInvitation() {
    if (isOpening || !screen) { return; }
    isOpening = true;
    screen.classList.add('is-open');

    var beforeLeave = prefersReducedMotion ? 50 : 1900;
    var fadeTime = prefersReducedMotion ? 0 : 1000;

    window.setTimeout(function () {
      screen.classList.add('is-leaving');
      revealInvitation();
      window.setTimeout(function () {
        screen.hidden = true;
        window.scrollTo(0, 0);
        if (heroHeading && heroHeading.focus) {
          try { heroHeading.focus({ preventScroll: true }); } catch (e) { heroHeading.focus(); }
        }
      }, fadeTime);
    }, beforeLeave);
  }

  if (screen && envelope) {
    screen.addEventListener('click', openInvitation);
  } else {
    // Safety net: if the envelope markup is ever missing, show the invitation.
    revealInvitation();
  }

  /* ================= NAV STYLE ON SCROLL ================= */
  function onScroll() {
    if (!nav) { return; }
    if (window.pageYOffset > 40) { nav.classList.add('scrolled'); }
    else { nav.classList.remove('scrolled'); }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ================= SCROLL REVEAL ================= */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    Array.prototype.forEach.call(revealEls, function (el) { io.observe(el); });
  } else {
    Array.prototype.forEach.call(revealEls, function (el) { el.classList.add('in-view'); });
  }

  /* ================= COUNTDOWN ================= */
  var cdDays = document.getElementById('cd-days');
  var cdHours = document.getElementById('cd-hours');
  var cdMinutes = document.getElementById('cd-minutes');
  var cdSeconds = document.getElementById('cd-seconds');
  var cdTimer = document.getElementById('countdown');
  var cdLabel = document.getElementById('cd-label');
  var cdNote = document.getElementById('cd-note');
  var cdInterval = null;

  function pad(n) { return n < 10 ? '0' + n : String(n); }

  function tick() {
    var now = Date.now();
    var diff = EVENT_START.getTime() - now;

    if (diff <= 0) {
      if (cdTimer) { cdTimer.hidden = true; }
      if (cdLabel) { cdLabel.hidden = true; }
      if (cdNote) {
        cdNote.hidden = false;
        cdNote.textContent = now >= EVENT_END.getTime()
          ? 'Thank you for celebrating with us.'
          : 'The celebration has begun.';
      }
      if (cdInterval && now >= EVENT_END.getTime()) { window.clearInterval(cdInterval); }
      return;
    }

    var total = Math.floor(diff / 1000);
    cdDays.textContent = pad(Math.floor(total / 86400));
    cdHours.textContent = pad(Math.floor((total % 86400) / 3600));
    cdMinutes.textContent = pad(Math.floor((total % 3600) / 60));
    cdSeconds.textContent = pad(total % 60);
  }

  if (cdDays && cdHours && cdMinutes && cdSeconds) {
    tick();
    cdInterval = window.setInterval(tick, 1000);
  }

  /* ================= RSVP → WHATSAPP ================= */
  var form = document.getElementById('rsvp-form');
  var nameInput = document.getElementById('guest-name');
  var nameError = document.getElementById('name-error');
  var attendanceError = document.getElementById('attendance-error');
  var childrenField = document.getElementById('children-field');
  var childrenSelect = document.getElementById('children');
  var statusBox = document.getElementById('rsvp-status');

  function getAttendance() {
    var checked = form.querySelector('input[name="attendance"]:checked');
    return checked ? checked.value : '';
  }

  function updateChildrenField() {
    var accepted = getAttendance() === 'accept';
    childrenField.hidden = !accepted;
    childrenSelect.disabled = !accepted;
    if (!accepted) { childrenSelect.value = '0'; }
  }

  function cleanName(value) {
    return value.replace(/\s+/g, ' ').trim().slice(0, 80);
  }

  function buildMessage(name, attendance, children) {
    var response = attendance === 'accept' ? 'Joyfully accepts' : 'Regretfully declines';
    var lines = [
      'Assalamu Alaikum Sumaya,',
      '',
      'My RSVP for Yaghya and Azraa’s A Celebration of Marriage:',
      '',
      'Name: ' + name,
      'Response: ' + response
    ];
    if (attendance === 'accept') {
      lines.push('Children attending: ' + children);
    }
    lines.push('', 'Date: Saturday, 14 November 2026', '', 'Jazakillahu khayran.');
    return lines.join('\n');
  }

  function showStatus(url) {
    statusBox.textContent = '';
    var p1 = document.createElement('p');
    p1.textContent = 'WhatsApp should now be opening with your RSVP ready to go. Please press Send there — your RSVP is only delivered once you do.';
    var p2 = document.createElement('p');
    var link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'WhatsApp didn’t open? Tap here.';
    p2.appendChild(link);
    statusBox.appendChild(p1);
    statusBox.appendChild(p2);
    statusBox.hidden = false;
  }

  function clearErrors() {
    nameError.textContent = '';
    attendanceError.textContent = '';
    nameInput.removeAttribute('aria-invalid');
  }

  if (form && nameInput && childrenField && childrenSelect && statusBox) {
    Array.prototype.forEach.call(form.querySelectorAll('input[name="attendance"]'), function (radio) {
      radio.addEventListener('change', function () {
        attendanceError.textContent = '';
        updateChildrenField();
      });
    });

    nameInput.addEventListener('input', function () {
      if (cleanName(nameInput.value).length >= 2) {
        nameError.textContent = '';
        nameInput.removeAttribute('aria-invalid');
      }
    });

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      clearErrors();
      statusBox.hidden = true;

      var name = cleanName(nameInput.value);
      var attendance = getAttendance();
      var firstInvalid = null;

      if (name.length < 2) {
        nameError.textContent = 'Please enter your full name.';
        nameInput.setAttribute('aria-invalid', 'true');
        firstInvalid = nameInput;
      }
      if (!attendance) {
        attendanceError.textContent = 'Please let us know if you will be attending.';
        if (!firstInvalid) { firstInvalid = form.querySelector('input[name="attendance"]'); }
      }
      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }

      var children = attendance === 'accept' ? childrenSelect.value : '0';
      var message = buildMessage(name, attendance, children);
      var url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);

      showStatus(url);

      var opened = window.open(url, '_blank');
      if (opened) {
        try { opened.opener = null; } catch (e) { /* ignore */ }
      } else {
        // Pop-up blocked: continue in this tab instead.
        window.location.href = url;
      }
    });
  }
})();
