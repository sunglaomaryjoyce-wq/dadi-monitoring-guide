# Dadi Monitoring Guide

Internal staff guide website for Dadi employee monitoring tools, checking standards, schedules, templates, and monitoring procedures.

## Website Scope

This website includes monitoring-only content:

- Job Responsibility / JR checking guide
- Weekly To-Do List monitoring guide
- Calendar random checking guide
- Work Plan / OGSA checking guide
- Monthly KPI checking guide
- Monthly Work Reflection checking guide
- Performance Evaluation monitoring guide
- Goal Link checking guide
- Staff checking schedule
- Templates and FAQ

## Deploy to Vercel

1. Upload all files and folders to a new GitHub repository.
2. In Vercel, click Add New Project.
3. Import the repository.
4. Use Framework Preset: Next.js.
5. Leave Root Directory as blank or `./`.
6. Deploy.

## Update Content

Most website content is in:

```text
lib/content.ts
```

Homepage content is in:

```text
app/page.tsx
```

Main styles are in:

```text
app/globals.css
```
