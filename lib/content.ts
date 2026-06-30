export const site = {
  name: "Dadi Monitoring Guide",
  shortName: "Dadi Monitoring Guide",
  description:
    "Internal staff guide website for Dadi employee monitoring tools, checking standards, schedules, templates, and monitoring procedures."
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Monitoring Tools", href: "/monitoring-tools" },
  { label: "Templates", href: "/templates" },
  { label: "Schedule", href: "/checking-schedule" },
  { label: "FAQ", href: "/faq" }
];

export const monitoringSections = [
  {
    slug: "jr",
    title: "Job Responsibility / JR Checking Guide",
    summary: "Check whether each department JR is complete, updated monthly, and aligned with the current employee list and division of labor.",
    owner: "Department OIC prepares; monitoring staff checks; HR provides employee and labor-division references.",
    frequency: "Monthly; update/upload by the 31st, then check from the 1st onward.",
    standards: [
      "One department should maintain one department-level JR.",
      "Check the JR date to confirm it is updated for the current month.",
      "Compare the employee count with the latest HR employee list.",
      "Check the division of labor using the HR-provided reference.",
      "Do not remove resigned employees; highlight them in grey.",
      "Special changes such as new hires or resignations should be updated promptly."
    ],
    checklist: [
      "JR file is available in the correct drive/location.",
      "JR date reflects the latest monthly update.",
      "Employee names and count match HR data.",
      "Division of labor is clear and updated.",
      "Resigned employees are grey-highlighted, not deleted.",
      "OIC ownership and department coverage are clear."
    ],
    commonMistakes: [
      "Using an outdated JR date.",
      "Removing resigned employees instead of highlighting them.",
      "Employee count does not match HR data.",
      "Responsibilities are vague or duplicated.",
      "No clear division of labor among staff."
    ],
    example: "Correct example: The June JR includes the latest employee list, clear assigned responsibilities, and grey-highlighted resigned staff."
  },
  {
    slug: "weekly-to-do-list",
    title: "Weekly To-Do List Monitoring Guide",
    summary: "Check if weekly tasks are assigned, updated daily, and reviewed by members and OICs every Friday.",
    owner: "OIC assigns and checks; members update progress and completion details.",
    frequency: "Daily progress updates; member check every Friday morning; OIC review every Friday afternoon.",
    standards: [
      "OICs list assigned weekly tasks for members every Friday.",
      "OICs send the Weekly To-Do List to the group chat every Monday.",
      "Members update progress and remarks daily.",
      "When a task is completed, include the accomplishment date.",
      "Every Friday morning, members review and update their own lists.",
      "Every Friday afternoon, OICs check whether members updated properly."
    ],
    checklist: [
      "Assigned tasks are listed for the week.",
      "Progress column is updated, not blank.",
      "Remarks are specific and useful.",
      "Completed tasks include accomplishment dates.",
      "Unfinished tasks have current status or next action.",
      "OIC follow-up is recorded for members who did not update."
    ],
    commonMistakes: [
      "Tasks remain blank or unchanged for several days.",
      "Completed tasks have no accomplishment date.",
      "Remarks only say done, ongoing, or okay without details.",
      "OICs check too late or do not notify members.",
      "Tasks are not aligned with actual weekly priorities."
    ],
    example: "Correct example: Task status says '80% complete; waiting for OIC comments; target completion June 28' instead of only 'ongoing'."
  },
  {
    slug: "calendar",
    title: "Calendar Random Checking Guide",
    summary: "Check whether staff calendars are updated daily and whether OICs review member calendars weekly.",
    owner: "Employees update daily; OICs check weekly; monitoring staff performs random checking.",
    frequency: "Daily employee updates; Friday OIC checking; monthly random checking by monitoring staff.",
    standards: [
      "Employees must fill out their calendars daily.",
      "OICs review member calendars every Friday.",
      "Monitoring staff randomly checks 1 to 2 employees per department.",
      "Calendar entries should reflect actual work, meetings, task progress, and important activities.",
      "Entries should be clear enough for supervisors to understand the staff's work activity."
    ],
    checklist: [
      "Calendar has entries for working days.",
      "Entries include meaningful work details.",
      "OIC review/comment is visible when required.",
      "Calendar reflects task activity and meetings.",
      "Randomly checked employees are recorded.",
      "Missing or unclear updates are reported to the OIC."
    ],
    commonMistakes: [
      "Calendar is blank for several days.",
      "Entries are too generic, such as 'work' or 'office'.",
      "Updates are added late only before checking.",
      "OICs do not leave review remarks.",
      "Random checks are not documented."
    ],
    example: "Correct example: '9:00-10:30 Updated AI usage monitoring report; 10:30-11:00 checked BDO weekly task updates.'"
  },
  {
    slug: "work-plan",
    title: "Work Plan / OGSA Checking Guide",
    summary: "Check if work plans follow OGSA format and are specific, feasible, measurable, and limited to 1 to 2 pages.",
    owner: "Employee drafts; OIC reviews and comments; monitoring staff checks updated upload.",
    frequency: "Prepared for new tasks/projects; reviewed monthly by the 1st; checked by the 5th.",
    standards: [
      "Always follow OGSA format: Objective, Goal, Strategies, Action Plan.",
      "Objective should be qualitative and descriptive.",
      "Goal should be quantitative and include target, number, income, output, or measurable result.",
      "Strategies must connect directly to the objective and goals.",
      "Strategies are better when organized by stages, phases, or steps.",
      "Action plan must be feasible, realistic, and arranged with a timetable.",
      "The final work plan should be 1 to 2 pages only."
    ],
    checklist: [
      "Objective explains the direction clearly.",
      "Goals include measurable targets.",
      "Strategies are connected to both objective and goals.",
      "Action plan includes task, owner, timeline, and expected output.",
      "Plan is realistic based on manpower and resources.",
      "Document is not too long and avoids unnecessary explanation."
    ],
    commonMistakes: [
      "Objective is written as a number instead of a descriptive direction.",
      "Goal is vague and has no measurable target.",
      "Strategies are disconnected from the goal.",
      "Action plan is too broad or impossible to execute.",
      "Work plan exceeds two pages without adding value."
    ],
    example: "Correct goal example: 'Reach 95% weekly AI usage log compliance by the end of July 2026.'"
  },
  {
    slug: "monthly-kpi",
    title: "Monthly KPI Checking Guide",
    summary: "Check if KPI data follows the correct format, especially cumulative totals and new monthly additions.",
    owner: "Employee prepares; OIC reviews and consolidates; Mary Joyce forwards consolidated KPI to COO and GM.",
    frequency: "Employees submit by the 5th of each month; OIC consolidates after review.",
    standards: [
      "Each employee completes one KPI form monthly.",
      "OIC reviews and consolidates KPIs into one department document.",
      "Number formats must show total and monthly increase when applicable.",
      "If there is no data, use N/A or / instead of leaving the field blank.",
      "KPI items should match actual measurable outputs and not unsupported estimates."
    ],
    checklist: [
      "KPI form is submitted by the deadline.",
      "Numbers are cumulative where required.",
      "Monthly increase is shown in parentheses.",
      "No-data fields use N/A or /.",
      "OIC consolidation is complete and consistent.",
      "Final document is ready for email submission."
    ],
    commonMistakes: [
      "Writing only the new monthly number instead of the cumulative total.",
      "Leaving blank cells when no data is available.",
      "Using inconsistent number format across months.",
      "Combining employees without checking individual entries.",
      "Submitting without OIC review."
    ],
    example: "KPI format example: January = 20; February has new 10; February should be written as 30 (+10)."
  },
  {
    slug: "monthly-work-reflection",
    title: "Monthly Work Reflection Checking Guide",
    summary: "Check if reflections are specific, one page long, and reviewed by the department OIC before forwarding.",
    owner: "Employee writes; OIC reviews and suggests improvements; Mary Joyce forwards to COO and GM.",
    frequency: "Submit by the 5th of each month.",
    standards: [
      "Each employee completes a monthly work reflection.",
      "The reflection should be one page long.",
      "The content must be specific and clear.",
      "OIC reviews and provides improvement suggestions.",
      "The reviewed reflection is forwarded for final submission."
    ],
    checklist: [
      "Submitted by the 5th.",
      "One page only.",
      "Includes specific accomplishments and challenges.",
      "Includes areas for improvement or next actions.",
      "OIC review is completed.",
      "Final version is ready for forwarding."
    ],
    commonMistakes: [
      "Reflection is too general.",
      "Only lists tasks without explaining results.",
      "Exceeds one page.",
      "No improvement plan is included.",
      "OIC forwards without reviewing."
    ],
    example: "Good reflection includes what was completed, what problem occurred, what was learned, and what will be improved next month."
  },
  {
    slug: "performance-evaluation",
    title: "Performance Evaluation Monitoring Guide",
    summary: "Track quarterly performance evaluation deadlines and ensure required forms and meetings are completed on time.",
    owner: "OICs and responsible staff prepare; monitoring staff reminds and tracks submission.",
    frequency: "Quarterly: April 10, July 10, October 10, and January 10 based on evaluation period.",
    standards: [
      "First evaluation covers January to March and should be completed by April 10.",
      "Second evaluation covers April to June and should be completed by July 10.",
      "Third evaluation covers July to September and should be completed by October 10.",
      "Fourth evaluation covers October to December and should be completed by January 10.",
      "If the company changes the deadline, use the latest announced deadline."
    ],
    checklist: [
      "Correct evaluation period is identified.",
      "Required forms are prepared.",
      "Responsible OIC/staff are reminded before deadline.",
      "Submissions are tracked.",
      "Late or missing items are followed up.",
      "Final completion status is recorded."
    ],
    commonMistakes: [
      "Using the wrong quarter period.",
      "Confusing form deadline with meeting date.",
      "No early reminder before the deadline.",
      "Incomplete forms are counted as submitted.",
      "No tracking of late submissions."
    ],
    example: "Second evaluation covers April, May, and June; if updated company instruction says July 5, follow the updated internal announcement."
  },
  {
    slug: "goal-link",
    title: "Goal Link Checking Guide",
    summary: "Check project goal links and progress updates from relevant personnel and project leaders.",
    owner: "Relevant personnel and project leaders update; Mary Joyce checks every Monday.",
    frequency: "Relevant personnel update anytime based on business needs; project leaders update every Friday; Monday checking.",
    standards: [
      "Relevant personnel update goal links based on business needs.",
      "Project leaders update progress every Friday.",
      "Related personnel update their progress every Friday.",
      "Mary Joyce checks updates every Monday.",
      "Progress should be specific and linked to current business/project status."
    ],
    checklist: [
      "Goal link is accessible.",
      "Latest progress is updated.",
      "Project leader update is present.",
      "Related personnel updates are present.",
      "Monday checking status is recorded.",
      "Missing updates are reported for follow-up."
    ],
    commonMistakes: [
      "Progress is outdated.",
      "Friday updates are missing.",
      "Related personnel do not update their part.",
      "Updates are too vague to track progress.",
      "No Monday checking record."
    ],
    example: "Good progress update: 'Completed school list validation for Pampanga; 25 schools checked; next step is contact filtering by June 28.'"
  }
];

export const quickStats = [
  { label: "Monitoring Tools", value: "8", note: "JR, To-Do List, Calendar, Work Plan, KPI, Reflection, Evaluation, Goal Link" },
  { label: "Checking Cycles", value: "4", note: "Daily, weekly, monthly, and quarterly checking standards" },
  { label: "Primary Users", value: "Staff", note: "For monitoring staff, OICs, and department coordinators" },
  { label: "Website Type", value: "Static", note: "No database required for the first version" }
];

export const checkingSchedule = [
  { period: "Daily", items: ["Employees update calendars", "Members update Weekly To-Do List progress and remarks", "Completed tasks include accomplishment date"] },
  { period: "Every Monday", items: ["OIC sends Weekly To-Do List to group chat", "Mary Joyce checks Goal Link updates when applicable"] },
  { period: "Every Friday Morning", items: ["All members check and update Weekly To-Do Lists", "Members ensure progress and remarks are current"] },
  { period: "Every Friday Afternoon", items: ["OICs check members' Weekly To-Do Lists", "OICs notify members who did not update", "OICs review member calendars"] },
  { period: "Monthly - 31st", items: ["Department OIC updates and uploads JR to WeDrive", "JR is updated promptly if there are resignations or new hires"] },
  { period: "Monthly - 1st", items: ["Check JR update in WeDrive", "Work plans are reviewed and updated by departments"] },
  { period: "Monthly - 5th", items: ["Employees submit KPI forms", "Employees submit Monthly Work Reflection", "Mary Joyce checks Work Plan updates"] },
  { period: "Quarterly", items: ["Performance evaluation deadlines: April 10, July 10, October 10, January 10", "Follow latest internal deadline if company instruction changes"] }
];

export const templateItems = [
  { name: "Job Responsibility / JR", description: "Department-level responsibility document prepared by the OIC and updated monthly." },
  { name: "Weekly To-Do List", description: "Weekly task tracking document with progress, remarks, and accomplishment dates." },
  { name: "Work Plan / OGSA", description: "One to two-page planning format with Objective, Goal, Strategies, and Action Plan." },
  { name: "KPI Form", description: "Monthly measurable output form using correct cumulative number formatting." },
  { name: "Monthly Work Reflection", description: "One-page monthly reflection with specific accomplishments, challenges, and improvement actions." },
  { name: "Performance Evaluation", description: "Quarterly evaluation form and checking record." },
  { name: "Goal Link", description: "Progress tracking link updated by project leaders and related personnel." }
];

export const faqItems = [
  {
    question: "Is this website for public visitors?",
    answer: "No. This website is intended as an internal staff reference for employee monitoring procedures and checking standards."
  },
  {
    question: "Does this website need a database?",
    answer: "No database is required for the first version because it is a static guide. A database can be added later if staff need to submit monitoring reports online."
  },
  {
    question: "Who should use this guide?",
    answer: "Monitoring staff, OICs, department coordinators, and staff responsible for checking JR, To-Do Lists, Calendar, Work Plans, KPI, Reflection, Evaluation, and Goal Links."
  },
  {
    question: "What is the correct KPI number format?",
    answer: "Use cumulative total plus monthly addition. Example: January is 20, February adds 10, so February should be 30 (+10). If there is no data, use N/A or /."
  },
  {
    question: "Should resigned employees be removed from the JR?",
    answer: "No. Resigned employees should remain in the JR but be highlighted in grey."
  },
  {
    question: "How often should calendars be checked?",
    answer: "Employees update daily, OICs check member calendars every Friday, and monitoring staff randomly checks 1 to 2 employees per department monthly."
  }
];

export function getMonitoringSection(slug: string) {
  return monitoringSections.find((section) => section.slug === slug);
}
