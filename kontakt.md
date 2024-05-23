---
layout: layout.njk
title: Kontaktformular
tags: contact
eleventyNavigation:
  key: contact
  order: 5
---

# Kontaktformular

<form action="https://getform.io/f/pboxyjna" method="POST">
    <div>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
    </div>
    <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
    </div>
    <div>
        <label for="message">Nachricht:</label>
        <textarea id="message" name="message" required></textarea>
    </div>
    <!-- add hidden Honeypot input to prevent spams -->
    <input type="hidden" name="_gotcha" style="display:none !important">
    <!-- checkbox handle --
    <input type="checkbox" name="subscribe" value="yes" checked>
    <input type="hidden" name="subscribe" value="no">
    <!-- radio button handle --
    <input type="radio" name="gender" value="male" checked>
    <input type="radio" name="gender" value="female">
    <input type="radio" name="gender" value="other">
    <!-- select field handle --
    <select name="work-experience">
        <option value="one-year">0-1 years</option>
        <option value="one-five-years">1-5 years</option>
    </select> -->
    <div>
        <button type="submit">Absenden</button>
    </div>
</form>
