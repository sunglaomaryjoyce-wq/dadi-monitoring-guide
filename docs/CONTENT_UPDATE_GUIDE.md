# Content Update Guide

## Edit monitoring content

Open:

```text
lib/content.ts
```

Update the monitoring section title, summary, standards, checklist, common mistakes, or example.

## Add a new monitoring page

1. Add a new item to `monitoringSections` in `lib/content.ts`.
2. Create a matching folder inside `app/monitoring-tools/`.
3. Add a `page.tsx` file using the same pattern as the other monitoring pages.

## Change homepage title

Open:

```text
app/page.tsx
```

Edit the heading and description.
