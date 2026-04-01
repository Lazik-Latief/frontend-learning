# Frontend Learning Journey 🚀

A personal repo to track my frontend development learning from zero to job-ready.

**Learner:** Lazik Latief
**Goal:** Frontend Developer Job
**Stack:** HTML5 → CSS3 → JavaScript → React → Next.js

---

## Progress Tracker

| Day | Topic | Status |
|-----|-------|--------|
| Day 1 | HTML Fundamentals | ✅ Done |
| Day 2 | HTML Tables & Forms | ✅ Done |
| Day 3 | Semantic Tags + Div/Span | 🔄 Up next |

---

## Folder Structure

```
frontend-learning/
├── html/
│   ├── day1-html-fundamentals.html
│   ├── day2-tables-forms.html
├── css/
├── js/
├── projects/
└── README.md
```

---

## HTML — Day 1 Topics

### 1. Page Skeleton
Every HTML file starts with this structure.
- `<!DOCTYPE html>` — tells browser it is HTML5
- `<head>` — invisible info about the page
- `<body>` — everything visible goes here
- `<meta charset="UTF-8">` — supports all characters
- `<meta name="viewport">` — makes page mobile friendly
- `<title>` — text shown on browser tab

---

### 2. Headings
- `h1` to `h6` — biggest to smallest
- `h1` — use only once per page
- Always go in order, never skip levels
- Headings are for structure, not for making text big

---

### 3. Text Tags
- `<p>` — paragraph
- `<br>` — line break
- `<hr>` — horizontal dividing line
- `<strong>` — bold + important
- `<em>` — italic + emphasis
- `<mark>` — highlighted text
- `<small>` — fine print or disclaimer
- `<del>` — strikethrough text
- `<sup>` — superscript like x²
- `<sub>` — subscript like H₂O

---

### 4. Links
- `<a href="">` — basic link
- `target="_blank"` — opens in new tab
- `href="page.html"` — link to another file
- `href="#id"` — jump to section on same page
- `href="mailto:"` — opens email app
- `href="tel:"` — dials number on mobile

---

### 5. Images
- `<img src="" alt="">` — self closing tag, no closing tag needed
- `src` — path or URL of the image
- `alt` — always write this, never skip it
- Wrap in `<a>` to make image a clickable link

---

### 6. Lists
- `<ul>` — unordered list, bullet points, order does not matter
- `<ol>` — ordered list, numbered, order matters
- `<li>` — list item, always goes inside ul or ol
- Nest a `<ul>` inside an `<li>` to create sub lists

---

## HTML — Day 2 Topics

### 1. Basic Table
- `<table>` — the wrapper
- `<thead>` — header section of table
- `<tbody>` — data section of table
- `<tr>` — one full row
- `<th>` — heading cell, bold by default
- `<td>` — data cell, normal text

---

### 2. Table Spanning
- `colspan="2"` — cell takes up 2 columns width (horizontal merge)
- `rowspan="2"` — cell takes up 2 rows height (vertical merge)
- When using rowspan, remove the td from the row below

---

### 3. Form Basics
- `<form action="" method="">` — wraps all inputs
- `method="GET"` — data goes in the URL, use for search
- `method="POST"` — data is hidden, use for login and signup
- `label for=""` must match `input id=""` — always connect them
- Clicking a label focuses its connected input

---

### 4. Input Types
- `type="text"` — single line, accepts anything
- `type="email"` — validates @ symbol automatically
- `type="password"` — shows dots, hides characters
- `type="number"` — only accepts numbers, supports min and max
- `type="date"` — shows a calendar picker
- `type="checkbox"` — user can pick multiple options
- `type="radio"` — user can pick only ONE from the group
- `type="file"` — lets user upload a file
- `type="hidden"` — invisible, sends data silently

---

### 5. Select, Textarea, Buttons
- `<select>` + `<option>` — dropdown menu
- `selected` attribute — pre-selects an option by default
- `<textarea rows="">` — multiline text box, needs closing tag
- `<button type="submit">` — sends the form
- `<button type="reset">` — clears all fields

---

### 6. Form Attributes
- `required` — field must be filled before submit
- `placeholder` — hint text inside field, disappears when typing
- `value` — pre-filled content, gets submitted with form
- `disabled` — visible but not editable, NOT sent with form
- `readonly` — visible and copyable but not editable, IS sent with form
- `maxlength` — limits number of characters user can type
- `min` / `max` — sets range for number or date inputs

---

## Key Rules to Always Remember

- `h1` only once per page
- Always write `alt` on every image, never skip it
- `label for` must always match `input id`
- `checkbox` = multiple selections allowed
- `radio` = only one selection, all must share same `name`
- `disabled` value is NOT sent, `readonly` value IS sent
- `method="POST"` for any sensitive data like passwords

---

## Projects Built

| Project | Topics Used | File |
|---------|------------|------|
| Personal Bio Page | Headings, text, links, lists | day1-html-fundamentals.html |
| Student Registration Form | Forms, inputs, tables | day2-tables-forms.html |

---

*Updated daily as I learn. Every file in this repo was written by hand — no copy paste.*
