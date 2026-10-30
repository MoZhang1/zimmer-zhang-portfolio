# Zimmer Zhang · 张子墨

Bilingual personal portfolio: product operations across game platforms, music content systems and AI-assisted operational workflows.

## Run and validate

Static HTML/CSS/JavaScript, with no dependencies or build step.

```sh
python3 -m http.server 4191 --directory dist --bind 127.0.0.1
node --check dist/app.js
node --check dist/interactions.js
node scripts/verify.mjs
node --test scripts/test-interactions.cjs
```

## Reading and interaction

Chinese is the default, with an English switch. Selected projects can be explored through their challenge, approach and connection to the wider work. Project tabs support arrow keys and Home/End; a quick résumé offers a direct route to complete experience. Native details preserve a straightforward reading path. Optional motion can be disabled, and system reduced-motion preferences always take priority.

## Content and privacy

Career details and education follow the owner’s résumé and confirmed updates. The existing portrait remains in its original colour. Project diagrams describe working methods, not business metrics. No invented quantified achievements, contact details, private résumé documents, analytics logs or user-level business data are included.

## Hosting

The existing GitHub Pages workflow validates and publishes only `dist/`. Source, verification scripts and tests are kept in this repository; local QA screenshots and logs are not published. No external fonts, tracking scripts or runtime dependencies are used.
